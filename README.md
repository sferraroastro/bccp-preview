# BCCP Website

This is a small static website for the Berkeley Center for Cosmological Physics, built with [Astro](https://astro.build/) and designed for GitHub Pages.

## Editing Content

Most content lives in Markdown files under `src/pages/`.

- `src/pages/index.astro` controls the home page because it has a custom layout.
- `src/pages/research.md` controls Research.
- `src/pages/people.md` controls People.
- `src/pages/events.md` controls Events.
- `src/pages/jobs.md` controls Jobs.
- `src/pages/visiting.md` controls Visiting.
- `src/pages/donate.md` controls Donate.

When editing a Markdown page, leave the block at the top in place:

```md
---
layout: ../layouts/PageLayout.astro
title: "People"
description: "BCCP-affiliated directors, faculty, scientists, postdocs, students, alumni, and administrators."
---
```

Edit the content below that block.

Images live in `public/images/`. Anything in `public/` is copied directly into the finished site, so an image at `public/images/example.jpg` is referenced as `/images/example.jpg`.

## Running Locally

Install dependencies once:

```sh
npm install
```

Start a local preview:

```sh
npm run dev
```

Build the production site:

```sh
npm run build
```

## Temporary Preview With GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to the `main` branch.

For a temporary preview in a personal repository, create a normal GitHub repository, push this project, and enable GitHub Pages with `Source` set to `GitHub Actions`. The preview will be available at:

```text
https://USERNAME.github.io/REPOSITORY-NAME/
```

For the current temporary preview plan:

```text
https://sferraroastro.github.io/bccp-preview/
```

## Final Publishing With bccp.berkeley.edu

For the final BCCP deployment, move the repository to the BCCP GitHub organization or create a fresh BCCP repository. Then update `.github/workflows/deploy.yml`:

```yaml
env:
  SITE_URL: https://bccp.berkeley.edu
  SITE_BASE: /
```

Also add this file back:

```text
public/CNAME
```

with this content:

```text
bccp.berkeley.edu
```

In the GitHub repository settings:

1. Go to `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.
3. If using `bccp.berkeley.edu`, configure that as the custom domain and make sure Berkeley DNS points to GitHub Pages.
