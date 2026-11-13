# Changelog

Every change gets a version bump and an entry here, newest first.
Each tool has its own version number, shown in its header bar.

## Home page (`index.html`)

- **v1.4** Added the Counters card
- **v1.3** Timers card: v2.1, lists CLICK and DL06
- **v1.2** Addressing card: v1.1, lists CLICK and DL06
- **v1.1** Timers & Addressing split into two cards: Addressing and Timers
- **v1.0** First version: home page linking to each tool

## Addressing (`addressing/`)

- **v1.1** Added CLICK and DirectLOGIC DL06 (breakdowns, quick reference, quiz). New Compare view: a table of the same addresses across all five PLCs, with the left column fixed and the rest scrolling sideways. Platform buttons now sit in a 3 × 2 grid
- **v1.0** Split out of Timers & Addressing v1.7 as its own tool. Same content: address breakdowns, quick reference and quiz for SLC 500, CompactLogix and S7

## Timers (`timers/`)

Called "Timers & Addressing" through v1.7.

- **v2.1** Added CLICK (On Delay, Off Delay, Retentive) and DirectLOGIC DL06 (TMR, TMRA). Their current values keep counting past the preset, and the timing diagram leaves room to show it. Platform buttons now sit in two rows. Fixed the S7 TONR rung, where the "Start switch" label overlapped the reset address
- **v2.0** Addressing moved to its own tool; renamed "Timers". Old `timers/#addressing` links forward to the Addressing tool

- **v1.7** "PLC Lab" title in the header is now a link back to the home page
- **v1.6** Renamed from Rung Lab to PLC Lab
- **v1.5** Tabs switch directly on tap (more reliable Addressing tab); version number added
- **v1.4** Note on RES above vs below the RTO
- **v1.3** RES clears EN and TT on RTO (verified on SLC 500 hardware)
- **v1.2** Timing diagram label "Rung" -> "IN"; SLC quiz: B3 question replaced with 3 slot/terminal questions
- **v1.1** Switch, reset and indicators moved to fixed bottom bar
- **v1.0** First version: timers (TON/TOF/RTO, TONR) and addressing for SLC 500, CompactLogix, S7

## Counters (`counters/`)

- **v1.0** First version: up, down and up/down counters on a live rung with a timing diagram, for SLC 500 (CTU, CTD, RES), CompactLogix (CTU, CTD, RES), Siemens S7 (CTU, CTD, CTUD), CLICK (Count Up, Up/Down) and DirectLOGIC DL06 (CNT, UDC)
