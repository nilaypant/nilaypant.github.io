# Nilay Pant Portfolio

Personal portfolio built with Vite and React.

## Local Development

```bash
npm install
npm run dev
```

The dev server opens `app.html`, which is the Vite source HTML file.

## Production Build

```bash
npm run build
```

The build writes production files to both `dist/` and the repository root so the site works with GitHub Pages branch-root hosting at `https://nilaypant.github.io/`.

## Structure

- `app.html`: Vite source HTML used for local development and builds.
- `index.html`: generated production HTML committed for GitHub Pages branch-root hosting.
- `src/data/portfolio.js`: central content source for profile, skills, experience, projects, education, and creative placeholders.
- `src/views/`: top-level sections for Overview, Work, Study, and Play.
- `src/components/`: reusable UI primitives such as section wrappers, cards, tags, and header navigation.
- `src/styles.css`: global visual system and responsive layout.
- `scripts/sync-pages-root.mjs`: copies the built app into the repository root for GitHub Pages.
