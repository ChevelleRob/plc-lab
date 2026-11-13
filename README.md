# PLC Lab

Browser-based practice tools for a PLC class covering Allen-Bradley SLC 500,
CompactLogix and Siemens S7. Each tool is a single HTML file with no build step
and no install, made for students to use on their phones or laptops.

**Live site:** https://chevellerob.github.io/plc-lab/

## Tools

| Tool | Folder | What it covers |
|------|--------|----------------|
| Timers & Addressing | [`timers/`](timers/) | TON / TOF / RTO (TONR) on a live rung, timing diagram, and I/O addressing for all three platforms |

## Who it's for

Students in an introductory or intermediate PLC course who want to see how
instructions behave and drill addressing outside the lab, and instructors who
want a quick demo on the projector.

## Adding a new tool

1. Make a new folder named for the tool, e.g. `counters/`, and put the tool in
   `counters/index.html`. Keep it a single self-contained file.
2. Match the look: copy the `:root` color tokens (light and dark), the Barlow /
   JetBrains Mono fonts and the dark `header.top` bar from an existing tool.
   Show the tool's version (`v1.0`) in the header.
3. Add a card for it in the `<ul class="tools">` list on the home page
   (`index.html`), with the same version number.
4. Add a row to the Tools table above.
5. Add a section for the tool to `CHANGELOG.md`.

## Versions and changelog

Every change gets a version bump and a `CHANGELOG.md` entry. Each tool (and the
home page) has its own version number. When you bump a tool, update the
version in three places: the tool's header, its card on the home page, and
`CHANGELOG.md`. Changes to the home page bump the home page's version.

Version history lives in `CHANGELOG.md`, not in comments inside the HTML.
