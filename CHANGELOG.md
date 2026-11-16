# Changelog

Every change gets a version bump and an entry here, newest first.
Each tool has its own version number, shown in its header bar.

## Home page (`index.html`)

- **v2.8** Addressing card: v1.2
- **v2.7** Connecting card: v1.2
- **v2.6** Connecting card: v1.1
- **v2.5** Added the Connecting card
- **v2.4** Analog I/O card: v1.3
- **v2.3** Analog I/O card: v1.2
- **v2.2** Added the Analog I/O card (v1.1)
- **v2.1** Sinking & Sourcing card: v1.3
- **v2.0** Sinking & Sourcing card: v1.2, mentions sensors
- **v1.9** Added the Sinking & Sourcing card
- **v1.8** Compare card: v1.1
- **v1.7** Added the Compare card
- **v1.6** Logic card: v1.4
- **v1.5** Added the Logic card
- **v1.4** Added the Counters card
- **v1.3** Timers card: v2.1, lists CLICK and DL06
- **v1.2** Addressing card: v1.1, lists CLICK and DL06
- **v1.1** Timers & Addressing split into two cards: Addressing and Timers
- **v1.0** First version: home page linking to each tool

## Addressing (`addressing/`)

- **v1.2** Compare: the row of PLC names stays at the top of the screen while you scroll down the table, follows the table sideways, and squares its corners when stuck so the table can’t show through
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

## Logic (`logic/`)

- **v1.4** New memory type, Latch/Unlatch + first scan, on its own row under the other three: the latch rungs plus a Rung 0 that uses the first-scan bit to unlatch the output at power-up. Its first-scan bit flashes after Simulate power loss, and the timing diagram gets a first-scan trace
- **v1.3** Latch/Unlatch: the (L) and (U) coils both highlight while the output bit is on and both go dark when it is off
- **v1.2** Memory types reordered: Relay seal-in, Seal-in, Latch/Unlatch. Latch note covers first-scan unlatch rungs, with the first-pass bit for each PLC. Power loss now takes the rails, wires, contacts and lamp dark for 1.5 s
- **v1.1** Seal-in button renamed Memory, with a selector for Seal-in, Latch/Unlatch and Relay seal-in. Seal-in rung reordered: Stop first, then Start with the seal-in contact, then Output. New Latch/Unlatch rungs (Stop as an NC instruction) and a hardwired relay seal-in circuit with no PLC. Simulate power loss button
- **v1.0** First version. Gates: NOT, AND, OR, NAND and NOR with switches, live ladder rung, gate symbol and truth table. Seal-in with a NO Start button and an NC-wired Stop button programmed as a NO instruction, field wiring diagram and input-bit table. Timing diagram for all. Generic tags, not tied to a PLC brand

## Compare (`compare/`)

- **v1.1** Added the range compare as a seventh, full-width button: LIM on SLC 500 and CompactLogix, IN_RANGE on S7, and two compare contacts in series on CLICK and DL06 (DL06 uses < High + 1). Range choices 2 to 5, 3 to 7 and 5 to 8, with Low and High marked on the number line and the timing diagram
- **v1.0** First version: GRT, GEQ, LES, LEQ, EQU and NEQ (and each PLC's symbols) comparing an up/down counter's count with 3, 5 or 8. Live ladder with the counter and the compare rung, number line with the true range shaded, results table and timing diagram. SLC 500 and CompactLogix compare boxes; S7, CLICK and DL06 compare contacts. DL06 builds > and ≤ from ≥ and < with the next value up

## Sinking & Sourcing (`sink-source/`)

- **v1.3** Sensors: some 4-wire sensors have BLK as a sourcing (PNP) output and WHT as a sinking (NPN) output, noted in the 4-wire note and the wire colors table
- **v1.2** New Sensors section. PNP and NPN sensors wired with real wire colors into the matching input, with diffuse or through-beam sensing, light-on or dark-on, 3-wire or 4-wire (complementary WHT output), and correct or mistake wiring. Wire colors reference with M12 pin numbers and 3-wire notes. Interactive sensitivity setting: mark the false-positive and false-negative points, then set the midpoint
- **v1.1** Relay output: the relay coil and its link to the contact light up while the output bit is on. "Watch the words" note explains that M-switching comes from German *Masse* (ground)
- **v1.0** First version. Basics: four battery, switch and bulb circuits, two wired correctly and two not. Inputs: sinking, sourcing and AC. Outputs: sourcing (PNP), sinking (NPN), triac and relay (24 VDC or 120 VAC). Wiring diagrams with animated current (back and forth on AC), a correct/mistake wiring choice on every DC page, and a table of voltage, current, LED and bit. Generic, not tied to a PLC brand

## Analog I/O (`analog/`)

- **v1.3** HART intro now says what HART carries (tag name, range, units, diagnostics, settings) before the waveform
- **v1.2** Sliders moved into a fixed bar at the bottom of the screen. "Transmitter" label no longer under the tank. 0–10 V wiring: transmitter raised clear of the negative wire, more room for the voltmeter
- **v1.1** SLC 500 note: the 1746-NIO4V output accepts up to 32767 but ignores the lowest 2 bits, so 32764 is the real maximum
- **v1.0** First version, for all five PLCs. Wiring: 0–10 V, 2-wire and 4-wire 4–20 mA, and the 250 Ω / 1–5 V trick, with animated current and a 0–10 V vs 4–20 mA comparison. Input: tank level (0–120 in) from a transmitter, bench supply or loop calibrator, through signal, raw counts and the PLC's scaling instruction (SCP, NORM_X/SCALE_X, Math), with a graph and the same signal on all five PLCs. Output: VFD pump speed (0–60 Hz) the other way. Cut-the-wire button for broken-wire detection. HART page with the FSK signal on top of 4–20 mA

## Connecting (`connect/`)

- **v1.2** Compare all: the frozen name row squares its corners and covers the sliver above it, so the table no longer shows through
- **v1.1** Compare all: the row of PLC names stays at the top of the screen while you scroll down the table, and follows the table sideways
- **v1.0** First version, for SLC 5/03 (1747-UIC to Channel 1, or RS-232 to Channel 0), CompactLogix 1769-L33ER (USB or Ethernet), S7-1200 1214C (Ethernet), CLICK Ethernet CPU (Ethernet or serial Port 1) and DL06 (serial Port 1). Five steps (connect, software, I/O setup, download, upload) with a cable diagram, where-to-click menu paths, a checklist remembered in the browser, and troubleshooting. Notes on less common connection methods. Compare table of all five, including download/upload vs write/read
