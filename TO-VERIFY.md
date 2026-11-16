# Things to verify

Facts in PLC Lab that came from memory or general references and still need a
check against the manuals or real hardware. Tick an item when it's confirmed,
or tell Claude what's wrong and it will fix the tool (with a version bump) and
move the item to **Confirmed** at the bottom.

Each item says where it appears: tool → tab or page.

## Addressing

- [ ] **S7 add-on module address:** the first signal module defaults to `%I8.0`.
  *Addressing → Compare → "First input on an add-on module"*

## Timers

- [ ] **CLICK on-delay:** `TD` keeps counting past the setpoint, up to 32,767. *Timers → CLICK → On Delay / Retentive*
- [ ] **CLICK off-delay:** `TD` counts up from 0 after the input turns off and stops at the setpoint. *Timers → CLICK → Off Delay*
- [ ] **CLICK retentive:** the retentive option adds a Reset input to the Timer box. *Timers → CLICK → Retentive*
- [ ] **DL06 TMR:** `TA` keeps counting past the preset, up to 9999. *Timers → DL06 → TMR*
- [ ] **DL06 TMRA:** holds its time when the enable input turns off. *Timers → DL06 → TMRA*
- [ ] **DL06:** has no off-delay timer instruction. *Timers → DL06 → note*

## Counters

- [ ] **SLC 500 RES:** with the count button held, does releasing Reset add one count? Does RES above vs below the CTU behave like the timer RES? Test: hold Up, press and release Reset; then move RES above the CTU and repeat. If it matches the timer behavior, add a "why RES goes below the counter" note (Counters v1.1). *Counters → SLC 500*
- [ ] **DL06 SGCNT:** the stage counter has no reset input and is cleared with RST. *Counters → DL06 → note*

## Logic

- [ ] **First-scan bits:** `S:1/15` (SLC 500), `S:FS` (Logix), FirstScan system bit, often `%M1.0` (S7), `SC2` (CLICK), `SP0` (DirectLOGIC). *Logic → Memory → Latch/Unlatch + first scan; also Addressing → Compare*
- [ ] **Latched bits after power loss:** retained on Allen-Bradley; on Siemens and AutomationDirect it depends on retentive memory settings. *Logic → Memory → Latch/Unlatch → note*

## Compare

- [ ] **CLICK range:** CLICK has no single range instruction, so two compare contacts are needed. *Compare → CLICK → Range*
- [ ] **LIM with reversed limits:** with Low Lim above High Lim, LIM is true outside the range. *Compare → SLC 500 / CompactLogix → LIM → note*
- [ ] **CLICK compare symbols:** does CLICK draw `≥ ≤ ≠` or `>= <= <>`? *Compare → CLICK buttons and rung*

## Analog I/O

- [ ] **1746-NIO4V inputs:** 0–10 V = 0–32767; 4–20 mA = 3277–16384; no wire-break status bit. *Analog → SLC 500*
- [ ] **1746-NIO4I outputs:** 4–20 mA = 6242–31208. *Analog → SLC 500 → Output → 4–20 mA*
- [ ] **1769-IF4 / 1769-OF4 (Engineering Units format):** 0–10 V = 0–10000, 4–20 mA = 4000–20000; the input bottoms out at 3.2 mA (3200) and sets the under-range bit. *Analog → CompactLogix*
- [ ] **CLICK analog:** module names C0-04AD-1/-2 and C0-04DA-1/-2; 12-bit 0–4095 for 0–10 V and for 4–20 mA; is there a broken-transmitter flag? *Analog → CLICK*
- [ ] **DL06 analog:** module names F0-04AD-1/-2, F0-2AD2DA-2, F0-4AD2DA-1; 12-bit 0–4095 for both signal types; is there a broken-transmitter indication? *Analog → DL06*
- [ ] **S7-1200 built-in analog inputs:** 0–10 V only on the lab CPUs. *Analog → Siemens S7 → note*

## Connecting

- [ ] **1747-UIC:** the RSLinx Classic driver name, the 5/03's default DH-485 node (1), and the 1747-C13 cable. *Connecting → SLC 500 → Connect*
- [ ] **CompactLogix upload:** do rung comments and descriptions come back, or only tag names? *Connecting → CompactLogix → Upload; Compare all*
- [ ] **Studio 5000:** the "discover modules while online" feature. *Connecting → CompactLogix → I/O setup*
- [ ] **CLICK mode switch:** must be in RUN for the software to change modes. *Connecting → CLICK → Download*
- [ ] **CLICK upload:** "Read Project from PLC" brings back nicknames. *Connecting → CLICK → Upload*
- [ ] **DL06 mode switch:** its positions, and how the software changes modes. *Connecting → DL06 → Download*
- [ ] **DirectSOFT menus:** the exact wording "Write to PLC" and "Read from PLC". *Connecting → DL06*
- [ ] **DL06 Port 1:** fixed at 9600 baud, K-sequence. *Connecting → DL06 → Connect*
- [ ] **DirectSOFT free version:** has a program size limit. *Connecting → DL06 → Software*

## Confirmed

Checked by the instructor; no action needed.

- [x] Addressing: CLICK and DL06 entries (addresses, ranges, quiz answers).
- [x] Compare: DL06 has no plain `>` or `≤` compare contact.
- [x] Counters: CLICK count registers are signed 32-bit and can go negative.
- [x] Counters: DL06 counts don't go negative; a real UDC wraps (the app stops at 0, with a note).
- [x] Analog I/O: the 1746-NIO4V output accepts up to 32767 but ignores the lowest 2 bits, so 32764 is the real maximum.
- [x] Sinking & Sourcing: "M-switching" (from German *Masse*) is the right term.
- [x] Sinking & Sourcing: some 4-wire sensors have BLK as a sourcing (PNP) output and WHT as a sinking (NPN) output.
