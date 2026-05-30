#!/usr/bin/env bash
#
# youtube-to-article: scaffold a Hugo article bundle from a YouTube URL.
#
# Pulls:  title (+ author)  -> oEmbed, no API key
#         cover image       -> i.ytimg.com maxres -> hqdefault fallback, converted to webp
#         transcript        -> yt-dlp captions (manual preferred, auto fallback) -> clean text
#
# Usage:  extract.sh <youtube-url> [slug]
#
# Output (paths relative to repo root):
#         content/articles/<slug>/index.md     stub frontmatter + youtube shortcode
#         content/articles/<slug>/cover.webp   cover image (or cover.jpg if webp conv fails)
#         drafts/<slug>/transcript.txt         cleaned transcript for drafting (NOT published)
#
# Emits a JSON summary on stdout so the calling agent knows what was produced.
set -euo pipefail

URL="${1:-}"
SLUG_OVERRIDE="${2:-}"
if [ -z "$URL" ]; then
  echo "usage: extract.sh <youtube-url> [slug]" >&2
  exit 2
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"

# --- parse 11-char video id from any common YouTube URL shape ---
VID="$(printf '%s' "$URL" \
  | grep -oE '(v=|youtu\.be/|/embed/|/shorts/|/live/)[A-Za-z0-9_-]{11}' \
  | grep -oE '[A-Za-z0-9_-]{11}$' | head -1 || true)"
if [ -z "$VID" ]; then
  echo "ERROR: could not parse a video id from: $URL" >&2
  exit 1
fi

# --- title + author via oEmbed (keyless) ---
OEMBED="$(curl -s --max-time 20 \
  "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${VID}&format=json" || true)"
TITLE="$(printf '%s' "$OEMBED" | jq -r '.title // empty' 2>/dev/null || true)"
AUTHOR="$(printf '%s' "$OEMBED" | jq -r '.author_name // empty' 2>/dev/null || true)"
if [ -z "$TITLE" ]; then
  echo "ERROR: oEmbed returned no title — video may be private, removed, or region-locked ($VID)" >&2
  exit 1
fi

# --- slug: override, else derive from title ---
if [ -n "$SLUG_OVERRIDE" ]; then
  SLUG="$SLUG_OVERRIDE"
else
  SLUG="$(printf '%s' "$TITLE" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//' \
    | cut -c1-60 | sed -E 's/-+$//')"
fi
[ -n "$SLUG" ] || SLUG="$VID"

BUNDLE="$REPO/content/articles/$SLUG"
WORK="$REPO/drafts/$SLUG"
mkdir -p "$BUNDLE" "$WORK"

# --- thumbnail: maxres, fall back to hqdefault ---
THUMB="$WORK/thumb.jpg"
if ! curl -sfL --max-time 30 -o "$THUMB" "https://i.ytimg.com/vi/$VID/maxresdefault.jpg"; then
  curl -sfL --max-time 30 -o "$THUMB" "https://i.ytimg.com/vi/$VID/hqdefault.jpg" \
    || { echo "ERROR: could not download a thumbnail for $VID" >&2; exit 1; }
fi

# --- cover image into the bundle: convert to webp, fall back to jpg copy ---
COVER_NAME="cover.webp"
if command -v ffmpeg >/dev/null 2>&1 \
   && ffmpeg -y -loglevel error -i "$THUMB" -c:v libwebp -quality 82 "$BUNDLE/cover.webp" 2>/dev/null \
   && [ -s "$BUNDLE/cover.webp" ]; then
  COVER_NAME="cover.webp"
else
  cp "$THUMB" "$BUNDLE/cover.jpg"
  COVER_NAME="cover.jpg"
fi

# --- transcript via yt-dlp (manual subs preferred, auto-generated as fallback) ---
YTDLP=""
if command -v yt-dlp >/dev/null 2>&1; then
  YTDLP="yt-dlp"
elif [ -x /tmp/yt-dlp ]; then
  YTDLP="/tmp/yt-dlp"   # transient fallback if a standalone copy was fetched
fi

TRANSCRIPT="$WORK/transcript.txt"
TRANSCRIPT_SOURCE="none"
WATCH="https://www.youtube.com/watch?v=$VID"

clean_vtt() {
  # strip headers, cue timestamps, inline tags; trim; drop blanks; global-dedupe lines
  grep -vE '^(WEBVTT|Kind:|Language:|NOTE)' "$1" \
    | sed -E '/-->/d; s/<[^>]*>//g; s/&nbsp;/ /g; s/&amp;/\&/g; s/&#39;/'"'"'/g' \
    | sed -E 's/^[[:space:]]+//; s/[[:space:]]+$//' \
    | awk 'NF' | awk '!seen[$0]++'
}

pick_vtt() {
  for cand in "$WORK"/cap.en.vtt "$WORK"/cap.en-US.vtt "$WORK"/cap.en-GB.vtt; do
    [ -f "$cand" ] && { echo "$cand"; return 0; }
  done
  # glob may match nothing (auto-only videos) — never let that abort the script
  ls "$WORK"/cap*.vtt 2>/dev/null | head -1 || true
}

if [ -n "$YTDLP" ]; then
  rm -f "$WORK"/cap*.vtt 2>/dev/null || true
  # 1) manual/uploaded subtitles (cleaner)
  "$YTDLP" --skip-download --write-subs --sub-langs "en.*" --sub-format vtt \
           -o "$WORK/cap.%(ext)s" "$WATCH" >/dev/null 2>&1 || true
  VTT="$(pick_vtt)"
  if [ -n "$VTT" ]; then TRANSCRIPT_SOURCE="manual"; fi
  # 2) auto-generated fallback
  if [ -z "$VTT" ]; then
    "$YTDLP" --skip-download --write-auto-subs --sub-langs "en.*" --sub-format vtt \
             -o "$WORK/cap.%(ext)s" "$WATCH" >/dev/null 2>&1 || true
    VTT="$(pick_vtt)"
    [ -n "$VTT" ] && TRANSCRIPT_SOURCE="auto"
  fi
  if [ -n "$VTT" ]; then
    clean_vtt "$VTT" > "$TRANSCRIPT"
    rm -f "$WORK"/cap*.vtt 2>/dev/null || true
  fi
fi

if [ ! -s "$TRANSCRIPT" ]; then
  if [ -z "$YTDLP" ]; then
    cat > "$TRANSCRIPT" <<EOF
(transcript unavailable — yt-dlp is not installed)
Install it once with:  sudo pacman -S yt-dlp
Then re-run the skill for: $WATCH
EOF
    TRANSCRIPT_SOURCE="ytdlp-missing"
  else
    echo "(no captions available for this video — manual transcription or STT required)" > "$TRANSCRIPT"
    TRANSCRIPT_SOURCE="no-captions"
  fi
fi

# --- frontmatter stub (never clobber an existing draft) ---
TODAY="$(date +%Y-%m-%d)"
INDEX="$BUNDLE/index.md"
INDEX_CREATED="true"
if [ -f "$INDEX" ]; then
  INDEX_CREATED="false"
else
  cat > "$INDEX" <<EOF
---
title: "${TITLE//\"/\\\"}"
description: ""
slug: $SLUG
date: ${TODAY} 00:00:00+0000
lastmod: ${TODAY}
image: ${COVER_NAME}
categories:
   - # TODO: game/series, e.g. Draw Steel
tags:
   - # TODO: content type, e.g. Analysis
weight: 1
draft: true
---

{{< youtube "$VID" >}}

<!-- DRAFT SCAFFOLD — written by the youtube-to-article skill.
     Source video: $WATCH
     Channel: $AUTHOR
     Transcript for drafting (not published): drafts/$SLUG/transcript.txt
     TODO: write the article body, fill description/categories/tags, then set draft: false. -->
EOF
fi

TRANSCRIPT_CHARS="$(wc -c < "$TRANSCRIPT" | tr -d ' ')"

# --- machine-readable summary for the calling agent ---
cat <<EOF
{
  "video_id": "$VID",
  "title": $(printf '%s' "$TITLE" | jq -R .),
  "author": $(printf '%s' "${AUTHOR:-}" | jq -R .),
  "slug": "$SLUG",
  "bundle_dir": "content/articles/$SLUG/",
  "index": "content/articles/$SLUG/index.md",
  "index_created": $INDEX_CREATED,
  "cover": "content/articles/$SLUG/$COVER_NAME",
  "transcript": "drafts/$SLUG/transcript.txt",
  "transcript_source": "$TRANSCRIPT_SOURCE",
  "transcript_chars": $TRANSCRIPT_CHARS
}
EOF
