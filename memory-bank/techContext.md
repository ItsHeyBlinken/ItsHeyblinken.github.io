# Tech context

## Runtime

- None (static files only).

## Tooling

| Tool | Version / note |
|------|----------------|
| Node | Used locally (and optionally on CI/Coolify) for Tailwind CLI |
| `tailwindcss` | `^3.4.x` (devDependency) |
| npm scripts | `build:css`, `watch:css` |

## File map (core)

| Path | Purpose |
|------|---------|
| `index.html`, `templates.html`, `pricing.html`, `athlete-recruiting.html` | Main marketing pages |
| `style.css` | Home + shared patterns; `style1.css` templates; `pricing.css` pricing |
| `src/tailwind-input.css` | `@tailwind` directives for CLI |
| `tailwind-built.css` | Generated; commit for static hosts without build |
| `tailwind.config.js` | Theme extension + `content` globs |

## Standalone athlete scaffold

- Sibling path: `../Athlete-Recruiting-Profile-Template/` (outside this repository).
- Source stack: Vite 8 conventions, React, TypeScript, Tailwind CSS v4 via `@tailwindcss/vite`.
- Vite 8 Node requirement documented as Node 20.19+ or 22.12+.
- Source-only as of 2026-07-14: no dependency install, lockfile resolution, test execution, production build, Git initialization, Coolify configuration, or deployment was performed.

## External services

- Font Awesome 6.x (cdnjs).
- Google Analytics (gtag).

## Deployment notes

- **Pipeline:** GitHub repo → **Coolify** on the VPS fetches and serves static files. GitHub Pages is **not** part of the stack.
- **Tailwind:** either commit `tailwind-built.css` or configure Coolify to run `npm ci && npm run build:css` before publishing the static root (same as any static host without a build step).
