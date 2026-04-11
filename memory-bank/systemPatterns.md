# System patterns

## Architecture

- **Static site:** no build step required for HTML beyond optional Tailwind CSS compilation.
- **CSS layering:** Base styles in `style.css` / `style1.css` / `pricing.css`; utility layer from `tailwind-built.css` loaded after so utilities apply as intended.
- **JS:** Inline or page scripts for behavior (e.g. nav, filters); no bundler in `package.json` beyond Tailwind CLI.

## Tailwind

- **Do not** use `cdn.tailwindcss.com` in production; use the built file.
- Config extends theme colors and `fontFamily.sans` to match the former inline CDN config.
- Purge/content paths are explicit three files — expand when new pages use Tailwind classes.

## Accessibility and semantics

- Prefer real heading hierarchy and stable `id`s on main `h1` elements for landmark labeling.
- FAQ / interactive sections: use buttons or appropriate roles where accordion behavior exists (verify per page).

## Assets

- Images under `./images/`; logo used for favicon and OG images.

## Git

- `node_modules/` is ignored; lockfile and `package.json` should be committed for reproducible Tailwind builds.
