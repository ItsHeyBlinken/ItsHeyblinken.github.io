# Active context

**Highest-priority Memory Bank file for “what matters now.”** If other files disagree, prefer **activeContext** → **progress** → the rest.

## Current stack (frontend)

- Static HTML + hand-authored CSS.
- **Tailwind CSS v3** compiled to `tailwind-built.css` (not the CDN in production).
- Build: `npm run build:css` from repo root; input `src/tailwind-input.css`, output `tailwind-built.css`.
- `tailwind.config.js` scans `./index.html`, `./templates.html`, `./pricing.html` for class names.

## Deployment

- **GitHub:** repository is the **source of truth** for files (push commits here).
- **Coolify (VPS):** pulls from the GitHub repo and serves the site — **not GitHub Pages.** Flow: push to GitHub → Coolify fetches/builds or deploys as configured.
- Deploys verified with **no Tailwind CDN console warnings** in the browser.

## Conventions worth preserving

- Semantic headings: e.g. `h1` with ids (`home-heading`, `templates-heading`, `pricing-heading`) for `aria-labelledby` where used.
- Custom theme colors and fonts live in `tailwind.config.js` (`primary`, `secondary`, `accent`, `highlight`, `muted`, `light`, Inter for `sans`).
- Link order: page-specific CSS first, then `tailwind-built.css`, then Font Awesome CDN.

## Open / watch

- After HTML edits that add or change Tailwind classes, run **`npm run build:css`** and commit `tailwind-built.css` if not using a CI build step.
- Adding new top-level HTML pages that use Tailwind requires adding them to `content` in `tailwind.config.js` and rebuilding.
