# Notes for Claude

PLC Lab is a set of single-file practice tools for a PLC class (SLC 500,
CompactLogix, Siemens S7, CLICK, DirectLOGIC DL06), published with GitHub Pages from `main`.
The README is for students and visitors; maintenance rules live here.

## Rules for every change

- Each tool lives in its own folder as a single `index.html`, linked from the home page (`index.html`) and the README Tools table.
- Every change bumps the version of what changed (the tool, or the home page) and adds an entry to `CHANGELOG.md`. A tool's version appears in its header, on its home-page card, and in `CHANGELOG.md`; keep all three in sync. Home page changes bump the home page's version (in its header and `CHANGELOG.md`).
- Keep the shared look: dark header bar, Barlow font, light/dark color tokens, mobile-first.
- Don't put changelogs in HTML comments.
- Track unconfirmed facts in `TO-VERIFY.md`. When a tool states something that came from memory rather than the instructor or a manual (ranges, menu names, part numbers, behaviors), add an unticked item under that tool with where it appears. When the instructor confirms an item, move it to **Confirmed**; when they correct it, fix the tool (with a version bump) and then move it.

## Adding a new tool

1. Make a new folder named for the tool, e.g. `counters/`, and put the tool in
   `counters/index.html`. Keep it a single self-contained file.
2. Match the look: copy the `:root` color tokens (light and dark), the Barlow /
   JetBrains Mono fonts and the dark `header.top` bar from an existing tool.
   Show the tool's version (`v1.0`) in the header, and make the "PLC Lab" title
   a link back to the home page (`<h1><a href="../">PLC Lab</a></h1>`, styled
   like `timers/index.html`).
   Copy the theme button too: the early `pl-theme` script right after the
   viewport meta, the `.themebtn` CSS (and its narrow-screen rules), the
   `<button class="themebtn" id="themeBtn">` after the version, and the theme
   script before `</body>`. The choice is shared by every page through
   `localStorage` key `pl-theme`. Copy the icon and link-preview tags too (see
   "Icons and link previews" below).
3. Add a card for it in the `<ul class="tools">` list on the home page
   (`index.html`), with the same version number, and bump the home page version.
4. Add a row to the Tools table in `README.md`.
5. Add a section for the tool to `CHANGELOG.md`, plus a home page entry for the new card.

## Icons and link previews

- `assets/` holds the site icon (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`) and `social-preview.png` (1280 × 640), used as the link preview for every page and uploaded by hand as the repo's Social preview (Settings → General).
- Every page has the icon `<link>`s and the `og:` / `twitter:` meta tags right after `<title>`; tool pages point to `../assets/`. A new tool copies them from an existing tool and sets its own `og:title` (same as `<title>`) and `og:description` (same text as its home-page card).
- The social image is drawn in `assets/src/social-preview.html` (shared with Electronics Lab; `#el` or `#plc` picks the version) and rendered with `node render.js` run from `assets/src/`. It writes `social-el.png` and `social-plc.png` there: copy this site's one to `assets/social-preview.png` and don't commit the copies left in `assets/src/`. `assets/src` is excluded from the published site.
