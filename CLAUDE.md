# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aestus Guides is a Hugo static site featuring CRPG (Computer Role-Playing Game) guides, tier lists, and strategic analysis. The site uses the Hugo Stack Theme (v3.30.0) imported as a Go module (`github.com/CaiJimmy/hugo-theme-stack/v3`) and requires Hugo Extended.

## Common Commands

```bash
# Development server with drafts
hugo server -D

# Production build (minified)
hugo --minify

# Local Docker build and test
docker build -t aestus-guides . && docker run -p 8080:80 aestus-guides
```

## Architecture

### Configuration

Hugo uses a modular config structure in `config/_default/`:
- `config.toml` - Base settings (baseurl, title, pagination, language)
- `params.toml` - Theme parameters (sidebar, widgets, article features, SEO/OpenGraph, comments)
- `menu.toml` - Social links (YouTube, Patreon); main nav is currently commented out
- `markup.toml` - Goldmark renderer (unsafe HTML enabled, ToC levels 2-4, syntax highlighting, LaTeX math passthrough)
- `permalinks.toml` - URL structure (`/articles/:slug/`)
- `module.toml` - Theme Go module import

### Content Structure

Articles live in `content/articles/<slug>/index.md` as Hugo page bundles (article + its images in the same directory). Special pages (archives, links, search) are in `content/page/`.

Article frontmatter fields: `title`, `description`, `slug`, `date`, `lastmod`, `image` (filename of cover image in same directory), `categories`, `tags`, `weight`, `draft`.

### Theme Customizations (Layout Overrides)

- `layouts/partials/head/custom.html` - Self-hosted Plausible analytics (`plausible.angmar.dev`) + SEO schema partial include
- `layouts/partials/head/seo-schema.html` - JSON-LD structured data (Organization, WebSite with SearchAction, Article schema on article pages, BreadcrumbList)
- `assets/scss/custom.scss` - Custom styles (currently placeholder)

## Content Conventions

- YouTube embeds use Hugo shortcode: `{{< youtube "VIDEO_ID" >}}`
- License: CC BY-NC-SA 4.0 on all content
- Categories: Gaming, Baldur's Gate 3, Guides, Tier Lists
- Cover images are placed alongside `index.md` in the article directory and referenced by filename in frontmatter `image` field

## Deployment

### Production (Docker + GitHub Actions)

Push to `master` triggers `.github/workflows/deploy.yml`:
1. Builds Docker image via multi-stage Dockerfile (Hugo Extended → nginx:alpine)
2. Pushes to Docker Hub as `aestus-guides:latest` and `aestus-guides:<sha>`
3. SSHs to VPS and runs `docker compose pull && docker compose up -d` at `/opt/aestus-guides/`

Required GitHub Secrets: `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`

### Legacy (`deploy.sh`)

The `deploy.sh` script archives the `public/` directory to `archives/`, rebuilds, and rsyncs to the server directly. This predates the Docker-based CI/CD pipeline.
