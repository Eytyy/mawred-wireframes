# Tracker

Records what's been done. Task definitions are not kept here — a task is given as a brief in plan mode, planned, then executed. This file records the outcome.

---

**Task 1 — Port the wireframes to next js ← current**

- [x] Chrome + state panel + app shell
- [x] Programs — block kit
- [x] Programs — Production Awards
- [x] Programs — Wijhat
- [x] Programs — Stand for Art
- [x] Programs — Abbara
- [ ] Publications
- [ ] Mawred Network
- [ ] News
- [ ] About
- [ ] Home

**Task 2 — Populate the wireframes with real content**

- [ ] Programs — Production Awards
- [ ] Programs — Wijhat
- [ ] Programs — Stand for Art
- [ ] Programs — Abbara
- [ ] Publications
- [ ] Mawred Network
- [ ] News
- [ ] About
- [ ] Home

---

## Log

Newest first. One entry per page-type completed: what was done, what was left as a gap, decisions taken, anything flagged.

### Programs — Wijhat, Stand for Art, Abbara (2026-08-31)

**Done:** Config-only port of the three remaining program pages — `WIJHAT`, `STAND_FOR_ART` and `ABBARA` in `lib/pages/programs.ts`, thin route shells at `/programs/wijhat`, `/programs/stand-for-art` and `/programs/abbara`, `stub: true` removed from routes. Transcribed from legacy lines 966–1010. First render check for S1 (Abbara eight-stage timeline), S5 (Wijhat nested paths), S6 (Wijhat round guide) and C6 (Stand for Art confidentiality note, Abbara funding coverage). Stand for Art figure-less rail and hint verified.

**Left undone:** Real content population is Task 2. Production Awards block-kit log entry still lists the three as stubs — superseded by this entry.

**Decisions:** Batched as one unit per plan override — block kit was complete, nothing new to build. No new wireframe-pass entries; transcription only.

**Flagged:** None.

### Programs — block kit + Production Awards (2026-08-31)

**Done:** 18 program blocks (C1–C12, S1–S6) in `components/blocks/programs/`, shared primitives (`KV`, `Figs`, `Accordion`), `ProgramPage` shell enforcing the three-tier scaffold, Production Awards config in `lib/pages/programs.ts`, live route at `/programs/production-awards`. Block codes, hint text and composition ported from the legacy file.

**Left undone:** Wijhat, Stand for Art and Abbara remain stubs — each is its own unit. Real content population is Task 2. Pre-scaffold decisions 1–54 still not restored.

**Decisions:** 59 (square timeline markers), 60 (single client boundary at ProgramPage), 61 (C3 flat/rounds as one component). Logged in wireframe-passes.

**Flagged:** None.

### Chrome + state panel + app shell (2026-08-31)

**Done:** Next.js app shell with global chrome (utility bar, header nav with CSS-only dropdowns, page-header band, newsletter, footer), wireframe primitives (`Fill`, `Prose`, `Block`, `Hint`, `Stub`, `Btn`, `Chip`, `Field`), state panel with per-route toggle map, route registry for all 23 legacy screens, `/wireframes` index, catch-all stub routes, Home at `/` with page-header suppressed.

**Left undone:** All page bodies remain stubs until their page-type units. Block-level primitives (`KV`, `Card`, `Tabs`, etc.) deferred to the unit that first needs them.

**Decisions:** 55 (state provider + static map), 56 (nested URLs, `/` = Home), 57 (legacy border weights), 58 (type scale collapse). Logged in wireframe-passes.

**Flagged:** `docs/`, `references/`, `specs/`, and `content/` were not present in the repo after the Next.js scaffold — only AGENTS.md survived from the pre-scaffold tree. Restoring those directories is a separate task.

---

## Completed tasks

_Nothing yet._
