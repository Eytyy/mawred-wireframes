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
- [x] Publications
- [x] Mawred Network
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

### Mawred Network — directory + record (2026-08-31)

**Done:** Six blocks (MN1–MN6) in `components/blocks/network/`. Shared primitives `Tabs`, `DirRow`/`Badge` in `components/wireframe/`; `Cover` gains a `label` prop, `Figs` a `wide` prop. Shells: `DirectoryPage` (client — owns wireframe state + entity-tab state) and `NetworkRecordPage` (client — reads `sparse`). Config in `lib/pages/network.ts`. Live routes at `/network` and `/network/record`; `stub: true` removed from both route entries. Render-checked: default directory, filtered + empty states, both entity tabs, record full and sparse.

**Left undone:** Real content population is Task 2.

**Decisions:** 66–68 logged in wireframe-passes (tab state in shell, shared Tabs/DirRow ahead of News, Cover label prop).

**Flagged:** Shared record source with the program past-beneficiaries block (spec §B6 — data-architecture note, not designed). Long Programme / Country / Year facets need a design-stage revisit (searchable dropdown, grouping, type-ahead).

### Publications — series + detail (2026-08-31)

**Done:** Four route shells — publication detail at `/publications/research/publication`, series pages at `/publications/mudawanat`, `/publications/foundations-of-cultural-policies` and `/publications/mawred-talks`. `stub: true` removed from all four route entries. Series instances wired from `MUDAWANAT`, `FOUNDATIONS` and `MAWRED_TALKS` in `lib/pages/publications.ts`. Render-checked: Mawred Talks thin intro (1 paragraph, no links) and per-item caption slot on any series page via the `slots` state toggle.

**Left undone:** Real content population is Task 2. Nav-label split (library vs media series) remains a client call — flagged in Unit 1, not wireframed around.

**Decisions:** No new wireframe-pass entries — config and routing only; kit built in Unit 1.

**Flagged:** Same as Unit 1 — "Publications" nav parent holds two structurally different page types.

### Publications — block kit + Research library (2026-08-31)

**Done:** Shared wireframe primitives (`FilterBar`, `CountRow`, `Card`/`Cover`, `Embed`, `EmptyState`) in `components/wireframe/`. Eight Publications blocks (PA1–PA4, PB1–PB2, PC1–PC2) in `components/blocks/publications/`. Shells: `LibraryPage` and `SeriesPage` (client, single state boundary per decision 60), `PublicationDetailPage` (server). Config in `lib/pages/publications.ts` (`LIBRARY_FACETS`, `SeriesConfig`, `MUDAWANAT` / `FOUNDATIONS` / `MAWRED_TALKS`). Live route at `/publications/research`; `stub: true` removed from `pub-research`.

**Left undone:** Publication detail and three series pages (Unit 2) remain stubs. Real content population is Task 2. Spec Part 3 nav-label split (library vs media series) is a client call — surfaced, not wireframed around.

**Decisions:** 62–65 logged in wireframe-passes (shared primitives, `Chip` for filter chips, `FilterBar` client boundary, fixed embed footprints).

**Flagged:** "Publications" nav parent holds two structurally different page types (document library + media series) — client call per spec Part 3.

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
