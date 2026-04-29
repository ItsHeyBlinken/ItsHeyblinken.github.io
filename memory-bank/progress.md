# Progress

**Append-only log of completed work and milestones.** Newest entries at the bottom.

## Session log

- **2026-04-29 — Pricing page positioning:** Reworked `pricing.html` for agency-style positioning: Launch / Growth / Signature website tiers with higher project investments, Site Care (monthly/yearly/on demand) copy that separates infrastructure from value, Complete packages aligned to tiers + yearly care, ecommerce as starting-at investments with discovery framing, consistent “Request a quote” CTAs, updated meta/JSON-LD, FAQ refresh. `pricing.css`: added `.pricing-subtitle`, removed pulsing popular-card animation.
- **2026-04-29 — Pricing feature list flex fix:** Wrapped all `.pricing-features` list copy in `<span class="pricing-feature-text">` so inline `<strong>` is not laid out as a separate flex item (fixes broken “Up to 5/10 pages” lines). Updated `pricing.css`: `align-items: flex-start`, `gap`, `.pricing-feature-text` with `flex:1; min-width:0`, icon `flex-shrink:0` + slight top offset.
- **2026-04-29 — Pricing SaaS-style copy pass:** Reframed visible `pricing.html` body copy (head meta/JSON-LD unchanged): plans/tiers/subscription vocabulary, growth-stage subtitles on website tiers, stronger middle-column bias (Growth + commerce ops), shorter scannable bullets, activation bundles naming, Site Care as retention/performance layer, FAQ + CTA aligned to risk reduction; CTAs to “Request this plan/bundle” / “Email to confirm your plan.” Pricing amounts and section IDs preserved.
- **2026-04-11 — Tailwind production setup:** Replaced Tailwind CDN with local CLI build (`tailwind-built.css`), `tailwind.config.js`, `src/tailwind-input.css`, npm scripts, `.gitignore` for `node_modules/`. Updated `index.html`, `templates.html`, `pricing.html` to link built CSS and remove CDN + inline `tailwind.config`.
- **2026-04-11 — Coolify verification:** User confirmed deployment succeeds with **no console errors** (Tailwind production warning resolved).
- **2026-04-11 — Memory Bank:** Initialized `memory-bank/` with `projectbrief.md`, `productContext.md`, `activeContext.md`, `systemPatterns.md`, `techContext.md`, `progress.md`.
- **2026-04-11 — Hosting clarified:** Production is **Coolify** pulling from **GitHub**; **GitHub Pages is not used.** Updated Memory Bank (`projectbrief`, `activeContext`, `techContext`).

## Earlier work (from project history, summarized)

- Email-first CTAs and copy; hero/layout iterations; semantic `h1` ids; removed placeholder footer social icons; FAQ accordions; scoped `main h1` CSS to cooperate with Tailwind utility classes.
