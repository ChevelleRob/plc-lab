# Notes for Claude

PLC Lab is a set of single-file practice tools for a PLC class (SLC 500,
CompactLogix, Siemens S7, CLICK, DirectLOGIC DL06), published with GitHub Pages from `main`.
The README is for students and visitors; maintenance rules live here.

## Rules for every change

- Each tool lives in its own folder as a single `index.html`, linked from the home page (`index.html`) and the README Tools table.
- Every change bumps the version of what changed (the tool, or the home page) and adds an entry to `CHANGELOG.md`. A tool's version appears in its header, on its home-page card, and in `CHANGELOG.md`; keep all three in sync. Home page changes bump the home page's version (in its header and `CHANGELOG.md`).
- Keep the shared look: dark header bar, Barlow font, light/dark color tokens, mobile-first.
- Don't put changelogs in HTML comments.

## Adding a new tool

1. Make a new folder named for the tool, e.g. `counters/`, and put the tool in
   `counters/index.html`. Keep it a single self-contained file.
2. Match the look: copy the `:root` color tokens (light and dark), the Barlow /
   JetBrains Mono fonts and the dark `header.top` bar from an existing tool.
   Show the tool's version (`v1.0`) in the header, and make the "PLC Lab" title
   a link back to the home page (`<h1><a href="../">PLC Lab</a></h1>`, styled
   like `timers/index.html`).
3. Add a card for it in the `<ul class="tools">` list on the home page
   (`index.html`), with the same version number, and bump the home page version.
4. Add a row to the Tools table in `README.md`.
5. Add a section for the tool to `CHANGELOG.md`, plus a home page entry for the new card.
