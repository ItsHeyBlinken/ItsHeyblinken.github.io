# Athlete Recruiting Profile Demo (Fictional)

Static example recruiting profile for **Jordan Rivers**, a fictional volleyball student-athlete. Used as the public sample for BytesByBlinken Media Collegiate Bound Profiles.

> This demo contains **no real athlete PII**. Replace all copy, contact details, and media before publishing a client profile.

## Features

- Hero with key metrics and CTAs
- About, athletics, academics, highlight placeholders, statistics, and guardian-first contact
- On-screen PDF-style recruiting packet preview (no file download)
- Mobile-first responsive layout for coaches on phones and tablets, including a dedicated mobile nav panel

## Technology Stack

- HTML5
- Tailwind CSS v3 (prebuilt to `dist/style.css`)
- Vanilla JavaScript for navigation, stats tabs, and video placeholders

## Local preview

1. Serve the folder locally (recommended):
   ```bash
   python -m http.server 8123
   ```
2. Open `http://localhost:8123/`.

If you change Tailwind classes, rebuild CSS:

```bash
npm install
npm run build:css
```

## Customization

- Edit `index.html` for athlete content
- Update `js/video-player.js` when adding real hosted highlight URLs
- Replace SVGs in `assets/stills/placeholders/` with real photos

## License

Demo template for BytesByBlinken Media. All rights reserved.
