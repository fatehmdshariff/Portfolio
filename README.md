# Simple Static Portfolio (GitHub Pages-ready)

A clean, single-page portfolio built with **HTML + CSS + vanilla JS**. Mobile-friendly, dark/light theme, and a simple projects loader via `projects.json`.

## Quick start

1. Create a new repo (or `yourusername.github.io` for a user site).
2. Add these files at the repo root.
3. In **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or `master`) / folder: **/** (root)
4. Open the Pages URL provided by GitHub.

## Customize

- **index.html** — edit hero text, About, Contact details. Update résumé links (`assets/Fateh_Resume.pdf`).
- **projects.json** — add/edit your projects: `title`, `description`, `highlights[]`, `live`, `github`.
- **styles.css** — tweak color variables in `:root` (dark) and `.light`.
- **script.js** — plain JS for theme toggle + project rendering.

## Résumé

Place your PDF at `assets/Fateh_Resume.pdf` (create the `assets/` folder).

## Optional

- Real form submissions: Formspree / Netlify Forms
- Analytics: Plausible / GA
- Add favicon + OpenGraph tags
