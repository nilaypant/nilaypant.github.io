# Nilay Pant Portfolio

Personal portfolio and creative lab by Nilay Pant, built with Vite and React.

The site is structured as a living portfolio with four main areas:

- `Overview`: landing page, signal orb hero, selected impact metrics, featured projects, and creative coda.
- `Work`: professional experience, analytics systems, reusable work practices, and delivery notes.
- `Study`: education, academic projects, and planned ML/technical demos.
- `Play`: films, photography placeholders, and creative experiments.

## Local Development

From this project folder:

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`. Open that in a browser to test changes with hot reload.

## Production Build

```bash
npm run build
```

The build writes production files to `dist/`.

For a production-like local preview:

```bash
npm run build
npm run preview
```

## Deployment

GitHub Pages is configured to deploy through GitHub Actions using `.github/workflows/deploy.yml`.

The deployment flow is:

1. Push changes to `main`.
2. GitHub Actions installs dependencies with `npm ci`.
3. The workflow runs `npm run build`.
4. The generated `dist/` artifact is deployed to GitHub Pages.

Do not commit `dist/` or generated build assets. The workflow handles that.

## Structure

- `index.html`: Vite source HTML.
- `public/favicon.svg`: browser tab icon.
- `src/main.jsx`: React entry point.
- `src/App.jsx`: app shell, active tab state, hash routing, header, footer, and view switching.
- `src/data/portfolio.js`: central content source for profile, skills, experience, projects, education, film links, and creative placeholders.
- `src/views/`: top-level sections for Overview, Work, Study, and Play.
- `src/components/`: reusable UI primitives such as section wrappers, project cards, tags, header navigation, and the interactive signal orb.
- `src/styles.css`: global visual system, layout, color tokens, responsive behavior, and the current clipped-panel design language.

## Editing Guide

Most content changes should start in `src/data/portfolio.js`.

Useful places to edit:

- Profile summary, contact links, positioning line: `profile`
- Top stats on Overview: `impactStats`
- Skill map: `skills`
- Work history: `experiences`
- Featured and planned projects: `projects`
- Work page templates/placeholders: `workSystems`
- Education block: `education`
- Featured Overview film and Play films: `featuredCreativeWork`, `playFilmWorks`
- Play placeholders: `playItems`

If you want to change layout or section composition, edit the matching view in `src/views/`.

If you want to change reusable UI behavior, edit `src/components/`.

If you want to change colors, spacing, sharp clipped panels, responsive layout, or orb styling, edit `src/styles.css`.

## Design Notes

The current visual direction intentionally avoids a generic rounded-card portfolio look. It uses:

- clipped angular panels instead of rounded boxes
- a subdued black, grey, steel-blue, off-white, and wine-red palette
- a left rail navigation
- a lightweight CSS 3D interactive signal orb
- cinematic treatment for embedded film work

The orb is implemented in `src/components/SignalOrb.jsx` with CSS-driven depth and pointer interaction in `src/styles.css`. It is intentionally lightweight and does not require a 3D rendering dependency.

## Working Safely

Before pushing:

```bash
npm run build
git status --short --branch
```

If the local build passes, push to `main` to trigger the GitHub Pages workflow.
