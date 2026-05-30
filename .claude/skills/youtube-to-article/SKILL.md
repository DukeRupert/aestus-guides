---
name: youtube-to-article
description: "Given a YouTube URL, scaffold a Hugo article bundle for Aestus Guides: pull the video title, download the cover image (converted to webp), and extract the transcript. Creates content/articles/<slug>/index.md with pre-filled frontmatter and saves the cleaned transcript to drafts/<slug>/ for drafting. Use whenever adding a new Aestus video to the site's content."
allowed-tools: Bash Read Write Edit Glob
---

# YouTube → Article Skill

Turn an Aestus YouTube video into a ready-to-draft Hugo article bundle. You
fetch three things from a URL — **title**, **cover image**, **transcript** —
and lay them out in the site's page-bundle structure so the article can be
written from the transcript.

## When to use

The user gives you one or more YouTube URLs and wants them added to the site's
content (e.g. "Aestus has two new videos, add them"). Run this once per video.

## How it works

A helper script does the deterministic extraction. Run it from the repo:

```bash
bash .claude/skills/youtube-to-article/extract.sh "<youtube-url>" [optional-slug]
```

It prints a JSON summary describing what it created. The pieces:

| Source | Method | Notes |
|---|---|---|
| Title (+ channel) | YouTube oEmbed | Keyless, reliable |
| Cover image | `i.ytimg.com` maxres → hqdefault fallback | Converted to `cover.webp` via ffmpeg |
| Transcript | `yt-dlp` captions: manual preferred, auto fallback | Cleaned VTT → plain text |

### Output layout

```
content/articles/<slug>/
  index.md       # frontmatter stub + {{< youtube "ID" >}}, draft: true
  cover.webp     # referenced by the `image:` frontmatter field
drafts/<slug>/
  transcript.txt # cleaned transcript — NOT published (drafts/ is gitignored)
```

The slug is derived from the title unless you pass one explicitly. The script
**will not overwrite** an existing `index.md` (re-running is safe — it refreshes
the cover and transcript only).

## Dependency: yt-dlp

The transcript needs `yt-dlp`. If it's missing the script still produces the
title, cover, and frontmatter stub, and writes an install note into the
transcript file. Install once:

```bash
sudo pacman -S yt-dlp
```

(For best reliability `yt-dlp` can use `curl_cffi` for browser impersonation;
`sudo pacman -S yt-dlp` pulls a working build. A `429 Too Many Requests` can
appear if you pull many videos in quick succession — space them out.)

## Procedure

1. **Run the script** for each URL the user provides. Capture the JSON summary.
2. **Check `transcript_source`** in the summary:
   - `manual` / `auto` → transcript is good, proceed.
   - `no-captions` → the video has no captions; tell the user a transcript
     can't be auto-extracted (would need manual transcription / speech-to-text).
   - `ytdlp-missing` → tell the user to run `sudo pacman -S yt-dlp`, then re-run.
3. **Report** to the user what was created per video: title, slug, cover path,
   transcript length, and any caveats. Do not silently skip a failed transcript.
4. **Draft the article.** Hand the transcript to the `aestus-copywriter` agent
   (or draft inline in that voice) to write `content/articles/<slug>/index.md`.
   Read `drafts/<slug>/transcript.txt` for the source material.
5. **Fill the TODOs** in frontmatter before publish: `description`, `categories`
   (game/series), `tags` (content type). Follow the conventions in CLAUDE.md and
   `brand-guide.md`.
6. **Flip `draft: false`** only when the article is written and reviewed.
7. **Verify the build**: `hugo --minify` should exit 0 and the new page should
   render with its cover image and embedded video.

## Conventions (from CLAUDE.md)

- Articles are Hugo page bundles: `content/articles/<slug>/index.md` + images.
- Frontmatter: `title`, `description`, `slug`, `date`, `lastmod`, `image`,
  `categories` (game/series), `tags` (content type), `weight`, `draft`.
- Permalinks are `/articles/<slug>/` and **must not change** once published —
  choose the slug deliberately (pass it as the 2nd arg if the auto-slug from the
  video title isn't ideal).
- Cover images live beside `index.md`, referenced by filename in `image:`.
- Embed the video with the shortcode `{{< youtube "VIDEO_ID" >}}` (already
  added to the stub).

## Caveats to surface honestly

- Not every video has captions. Auto-generated usually exist, but if none do,
  there is no transcript without speech-to-text.
- Auto-generated transcripts have no punctuation/speaker labels and may contain
  recognition errors — treat as source material, not verbatim quotes.
- `ref`/token-based caption fetching without yt-dlp is unreliable (YouTube
  anti-bot); that's why yt-dlp is the engine.
