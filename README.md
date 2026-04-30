# Nilay Pant Portfolio

Personal portfolio built with Vite and React.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build writes production files to `dist/`. GitHub Pages is configured to deploy that artifact through GitHub Actions.

## Structure

- `index.html`: Vite source HTML.
- `src/data/portfolio.js`: central content source for profile, skills, experience, projects, education, and creative placeholders.
- `src/views/`: top-level sections for Overview, Work, Study, and Play.
- `src/components/`: reusable UI primitives such as section wrappers, cards, tags, and header navigation.
- `src/styles.css`: global visual system and responsive layout.
