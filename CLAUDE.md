# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aestus Guides is a Hugo static site featuring CRPG (Computer Role-Playing Game) guides, tier lists, and strategic analysis. The site uses the Hugo Stack Theme (v3.30.0) and requires Hugo Extended version.

## Common Commands

```bash
# Development server with drafts
hugo server -D

# Production build (minified)
hugo --minify

# Deployment (archives old build, builds, rsyncs to server)
./deploy.sh

# GitHub Codespaces development
hugo server -D -b="https://<codespace-url>.github.dev" --appendPort=false
```

## Architecture

### Configuration
Hugo uses a modular config structure in `config/_default/`:
- `config.toml` - Base settings (baseurl, title, pagination)
- `params.toml` - Theme parameters (sidebar, widgets, article features)
- `menu.toml` - Navigation and social links
- `markup.toml` - Markdown rendering (unsafe HTML enabled, ToC levels 2-4)
- `permalinks.toml` - URL structure (`/articles/:slug/`)

### Content Structure
- `content/articles/` - Main articles, each in its own directory with `index.md`
- `content/page/` - Special pages (archives, links, search)
- Article frontmatter: title, description, slug, date, lastmod, image, categories, tags

### Theme Customizations
- `layouts/partials/head/custom.html` - Plausible analytics injection
- `assets/scss/custom.scss` - Custom styles (placeholder)
- Theme imported as Go module: `github.com/CaiJimmy/hugo-theme-stack/v3`

### Static Assets
- `assets/img/` - Site images (avatar, logos)
- `static/` - Favicon and other static files

## Content Conventions

- Articles use YouTube embeds: `{{< youtube "VIDEO_ID" >}}`
- License: CC BY-NC-SA 4.0 on all content
- Categories include: Gaming, Baldur's Gate 3, Guides, Tier Lists

## Deployment

The `deploy.sh` script:
1. Archives existing `/public` to `/archives` with timestamp
2. Runs `hugo --minify`
3. Rsyncs to production server at `mirandashift.com`
