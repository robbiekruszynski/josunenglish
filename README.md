<p align="center">
  <img src="public/assets/graphics/Josun_logo.png" alt="Josun English" width="280" />
</p>

<p align="center">
  Phonics and language learning for young readers and writers in Hong Kong.
</p>

---

## Overview

This is the marketing site for Josun English, a single vertical-scrolling
page covering About, Classes, Team, Gallery, Testimonials, Shop, Work
With Us, and Contact. Built with React, TypeScript, Vite, and Tailwind
CSS.

The site follows Josun's brand sheet: the sun mascot and wordmark, the
warm color palette (coral, orange, yellow, green, teal, sky, blue,
indigo), and playful rounded typography. See `src/index.css` for the
font and color setup, and a note on the licensed fonts ("Blue Winter,"
Futura, Avenir) this build stands in for until they're available.

## Getting Started

```bash
npm install
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`) that
reloads automatically as you edit files.

```bash
npm run build    # production build, output in dist/
npm run lint     # check code style
```

## Project Structure

```
src/
  components/   one file per section (Hero, About, Classes, Team, ...)
  data/         siteContent.ts — all site copy lives here, not in components
  types/        shared TypeScript types
  utils/        colors.ts — Tailwind class lookup for the brand palette
public/
  assets/
    graphics/       logo and brand assets
    students/       photo library (curated selection used in the Gallery)
    environmental-shots/   reserved for future site photography
    students-work/         reserved for future student work photography
```

## Editing Content

Almost everything on the site (class descriptions, team members, ticker
messages, testimonials, contact info, the Gallery photo selection) lives
in `src/data/siteContent.ts`. Edit values there rather than in the
component files, the components just render whatever's in that file.

## Deploying

The project builds to a static `dist/` folder, so it works with any
static host (Netlify, Vercel, etc.). Build command: `npm run build`.
Publish directory: `dist`.
