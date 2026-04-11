# Project brief

**Source of truth for scope and goals.** Other Memory Bank files should align with this document.

## Identity

- **Brand:** BytesByBlinken Media (also referenced as builtbyblinken.com).
- **Repo:** `ItsHeyblinken.github.io` — static marketing site for a small-business web design / template offering.

## Goals

- Present services (custom sites, templates, pricing) clearly to small businesses.
- **Email-first contact:** primary CTA is email; copy reflects reply-within-48-hours then call scheduling.
- Strong SEO and social previews (Open Graph, Twitter, structured data where present).
- Professional, consistent UI across main pages.

## Scope (in)

- Main site pages: `index.html`, `templates.html`, `pricing.html` with shared nav/footer patterns.
- Custom CSS (`style.css`, `style1.css`, `pricing.css`) plus **built** Tailwind utilities (`tailwind-built.css`).
- Optional `Site Templates/` demos — separate HTML showcases; not necessarily part of the same Tailwind build unless added to `tailwind.config.js` `content`.

## Scope (out)

- No server-side app in this repo; deployment is static hosting.
- Do not run DB migrations or assume a backend from this project.

## Hosting

- **GitHub:** version control and where Coolify reads the repo from.
- **Coolify (VPS):** configured to fetch project files from GitHub and serve them; **GitHub Pages is not used** for this site.

## Canonical domain

Marketing and meta tags use **https://builtbyblinken.com/** unless intentionally changed.
