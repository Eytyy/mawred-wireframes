# Tracker

Records what's been done. Task definitions are not kept here — a task is given as a brief in plan mode, planned, then executed. This file records the outcome.

---

**Task 2 — Populate the wireframes with real content ← current**

- [x] Programs — Production Awards
- [x] Programs — Wijhat
- [x] Programs — Stand for Art
- [ ] Programs — Abbara
- [ ] Publications
- [ ] Mawred Network
- [ ] News
- [ ] About
- [ ] Home

---

## Log

Newest first. One entry per page-type completed: what was done, what was left as a gap, decisions taken, anything flagged.

### Populate — Stand for Art (2026-08-31)

**Done:** Third Task 2 unit, and the first page whose FAQ block could be populated at all. Content props added to four shared blocks, all optional with the previous render as the fallback (decision 84): `C11Faqs` takes `items` (question plus one-or-more-paragraph answer) and, given them, swaps the placeholder hint for one naming the live tab's six Q&As; `C4ApplySteps` takes `documents` and now owns the "Documents to include" render that `S5ApplicationPaths` was hand-rolling, with S5 delegating each path's list down to the nested C4; `C5FormsOfSupport` records take `items`; `C9Selection` takes `process`, rendered as an ordered list. `ProgramConfig` gains `faqs` and `rolling`. `STAND_FOR_ART` rewritten with real content: three-paragraph C1, the confidentiality C6 first on the page, C4's three steps with the five required documents and the non-resumable-form note, C5's two records with their own cost and referral lists and a "Set case by case" chip, five C8 items, C9's committee lead plus the five-step process, the six English FAQs, the JotForm destination named as not `apply.mawred.org`, and artists@mawred.org. New `programRolling` states key with no toggles, pointed at from the `sfa` route. Build and lint clean; render-checked all four programme pages — Wijhat's per-path document lists come out with the same classes, same order and the same 6 and 5 items after the delegation, Production Awards' C4/C5/C9/C11 are untouched, and Abbara still shows C5's no-amount hint and C11's fill bars.

**Left undone:** Abbara is the last programme unit, then Publications onward. The English FAQ gap stands on Production Awards and Wijhat — Stand for Art is the exception, not the fix.

**Decisions:** 90–95 logged in wireframe-passes (C4 owning the documents list; the two privacy notes split across C4 and C6 with C6 ahead of the apply flow; C9 carrying the whole selection process because there is no C10; C5 record `items` and the case-by-case chip; "individuals only" promoted from FAQ to C8; the rolling-intake states key).

**Flagged:** The contact mismatch on the live page — visible text `artist@mawred.org`, mailto `artists@mawred.org`. C12 carries the plural the link resolves to. This is the second contact-link bug in two pages after Wijhat's abbara@ footer mailto, so it is now a site-wide contact-link QA pass for the client rather than a one-off. The global footer's Instagram embed is empty with a stray `-->` comment visible — a recurring artifact worth a sitewide check. No content gaps on this page: the audit and the live page agree line for line, and nothing was invented — in particular no support figure or range, because the programme states it has none.

### Populate — Wijhat (2026-08-31)

**Done:** Second Task 2 unit, and the one that needed the last three unpopulated blocks. Content props added to `S4HeroSummary` (cells take a label, an optional lead and a bullet list), `S5ApplicationPaths` (`core` prose, per-path `steps` and `documents`), `S6WhichRound` (`lead`, `rows`, `notes`) and `C6HighlightedNote` (`text`) — all optional, all defaulting to the render they had before, so Stand for Art and Abbara are untouched. `WIJHAT` in `lib/pages/programs.ts` rewritten with real content: the four-cell page-top summary, three-paragraph C1, four C2 rails, the three rounds with real dates, S6's when-to-apply logic, both application tracks with their own steps and document lists, a new C6 for the visa letter, eleven C8 items, C9, nine C10 items, `apply.mawred.org` and wijhat@mawred.org. Live page checked against the audit before writing, not after. Build and lint clean; render-checked `/programs/wijhat` in default, `closed` and `offered` states, plus `/programs/production-awards`, `/programs/stand-for-art` and `/programs/abbara` — Abbara's S4 still renders four bare labels over fill bars, both C6 uses still render label plus fill bars, C5's no-amount hint still shows on Abbara and Stand for Art.

**Left undone:** Stand for Art and Abbara are the next two units.

**Decisions:** 86–89 logged in wireframe-passes (covered-costs list in S4 rather than a single-record C5; the visa letter as a C6 after S5; S5's shared core holding what both tracks share; schedule rules in S6 rather than C8 or C3).

**Flagged:** The round dates carry no year anywhere on the live page — Wijhat runs a fixed repeating calendar, so C3 states them year-less rather than inferring one. Two gaps in C2: no cumulative grant total and no country count exists, so those rails keep `00`. S3 beneficiary names still come from Network records (spec §B6). Same English FAQ gap as Production Awards. Three content-integrity issues for the client: the live clawback clause carries unresolved editor comments in published copy, the footer contact mailto points at abbara@mawred.org while the visible text reads wijhat@, and the group document list omits the CV line the individual list has — rendered as sourced rather than repaired, since adding it would invent a requirement.

### Populate — Production Awards, source check (2026-08-31)

**Done:** Verified the populated page block by block against the live page. Dates, figures, grant amounts, jury structure, contact and block structure all checked out. Corrected in `PRODUCTION_AWARDS`: the re-application rule now names both live conditions (previous grant closed, two rounds passed) instead of pointing at the guidelines — it had been recorded as a gap when the live Guidelines tab states it in full; C5 chips read "Up to €X" because the live amounts are ceilings; C5 coverage lines widened to the live scope; four over-stated items pulled back to the source (reproduction exclusion, two selection criteria, the second installment's reports trigger, the 45-day cancellation consequence); accepted file formats added to C8; the extension's 30-day notice and the guarantors' co-signing and expertise conditions added to C10; discipline order in C1/C3 and download order in S2 aligned to the live page; C4 step 1 no longer claims one account covers every programme; C7 names `apply.mawred.org`.

**Left undone:** Nothing from this check. The other three programmes are still their own units.

**Decisions:** None new — no structure changed, only content accuracy.

**Flagged:** Two gaps stand, both real: no country count for the C2 rail, and S3 beneficiary names come from Network records (spec §B6). English FAQ content still doesn't exist on the live site.

### Populate — Production Awards (2026-08-31)

**Done:** First Task 2 unit. Content-carrying props added to the shared primitives (`Prose.text`, `KV.value`, `Figs` item values) and to eight program blocks (C1, C3, C4, C5, C8, C9, C10, C12) — every one optional, defaulting to the existing placeholder render. `PRODUCTION_AWARDS` in `lib/pages/programs.ts` rewritten with real content from the audit plus the 2026 round's dates; `ProgramConfig` gains `overview` and `contact` for the two blocks `ProgramPage` renders outside the block list. `WIJHAT`, `STAND_FOR_ART` and `ABBARA` got the mechanical shape migration only (bare strings to `{ label }`) — no content, no visual change. New `docs/content-map.md` records the block-by-block sourcing. Build and lint clean; render-checked `/programs/production-awards` in default, `closed` and `offered` states, plus `/programs/abbara`, `/programs/wijhat`, `/programs/stand-for-art`, `/about/who-we-are` and `/network/record` — all unpopulated pages still render their fill bars unchanged.

**Left undone:** The other three programmes are their own units. C7's destination hint still names the kind of destination rather than `apply.mawred.org`.

**Decisions:** 84–85 logged in wireframe-passes (optional content props with placeholder fallback; the C8 eligibility merge).

**Flagged:** Three gaps, all recorded in the content map — no country count exists for the C2 rail, so it keeps `00`; ~~the re-application waiting period isn't in the audit, so C8 points at the guidelines instead of naming it~~ (not a gap — the live Guidelines tab states the rule; corrected in the source-check entry above); S3 beneficiary rows stay placeholder because names come from Network records (spec §B6). English FAQ content doesn't exist on the live site at all — supplying it is a client call, now said plainly in the C11 hint.

### Refactor — co-locate page shells (2026-08-31)

**Done:** Moved all 16 page shells out of `components/blocks/<page-type>/` and co-located them with their routes — 14 single-route shells sit beside their `page.tsx`; `ProgramPage` and `SeriesPage` sit at `app/programs/` and `app/publications/` for shared use. Updated imports in all 21 route files to relative paths. `components/blocks/` now holds block components only. Build and lint clean; render-checked `/programs/wijhat`, `/publications/mudawanat`, `/about/careers`, `/about/who-we-are`; `/programs` and `/publications` still stub via catch-all.

**Left undone:** Nothing — standalone refactor, not a Task 2 unit.

**Decisions:** 83 logged in wireframe-passes.

**Flagged:** None.

### Home — HM1–HM8 (2026-08-31)

**Done:** Shared `Cells`/`Cell` primitive in `components/wireframe/Cells.tsx`; S4 and AB3 refactored onto it. Eight blocks (HM1–HM8) in `components/blocks/home/`; shell `HomePage` (client — reads `nocalls` / `twentieth` / `staticfb`). Config in `lib/pages/home.ts`. Live route at `/`; `stub: true` removed from `home`. Render-checked: default (all eight blocks, hero marker bar, mosaic grid, three open-call cards), `nocalls` empty state, `twentieth` campaign eyebrow/title, `staticfb` (marker bar omitted, mosaic replaced by Banner). Production Awards and Who We Are re-checked after the `Cells` refactor. Build clean. **Task 1 complete.**

**Left undone:** Real content population is Task 2. Wayfinding label ("Grants & Opportunities" vs "Programs"), which figures lead, and whether the 20th is permanent nav or a temporary campaign remain client calls — all surfaced in hint text.

**Decisions:** 80–82 logged in wireframe-passes; decision 70 revised in place (superseded by 80).

**Flagged:** None.

### News — post detail N5–N13 (2026-08-31)

**Done:** Nine blocks (N5–N13) in `components/blocks/news/`; `NewsDetailPage` shell (client — reads `structured` / `byline` / `edge`). N6 uses shared `Banner`; N13 reuses exported `NewsCard` with `bare`. Config extended in `lib/pages/news.ts` (`NEWS_SHARE_TARGETS`, `NEWS_RELATED_COUNT`). Live route at `/news/post`; `stub: true` removed from `news-detail`. Render-checked: default editorial (prose only), structured inserts via panel toggle, byline on/off, first-post edge (prev omitted). Build clean. News page-type complete for Task 1.

**Left undone:** Real content population is Task 2.

**Decisions:** 79 logged in wireframe-passes (`NewsDetailPage` client boundary).

**Flagged:** None.

### News — landing feed N1–N4 (2026-08-31)

**Done:** Shared primitives `Tag`, `Caption` in `components/wireframe/`; `Card` gains optional `footer` prop; PB2 refactored onto `Caption`. Four blocks (N1–N4) in `components/blocks/news/`; `NewsCard` exported from N3 for N13/HM6 reuse. Shell `NewsLandingPage` (client — reads `filtered` / `empty` / `slots`, owns category-tab index). Config in `lib/pages/news.ts`. Live route at `/news`; `stub: true` removed from `news`. Render-checked: default nine-card feed with pager, filtered chips, empty state (tabs and count row stay, pager gone), excerpt slot via `slots`, Mudawanat series page after PB2 refactor. Build clean.

**Left undone:** News unit 2 — N5–N13 and post detail at `/news/post`. Real content population is Task 2.

**Decisions:** 75–78 logged in wireframe-passes (`Tag`, `Caption`, `Card` footer, category-tab state in shell).

**Flagged:** None.

### About — Careers + position detail (2026-08-31)

**Done:** AB12–AB13 in `components/blocks/about/`. `EmptyState` gains optional `action` prop (default unchanged); `KV` gains optional `fill` prop for label-only rows. Shells `CareersPage` (client — reads `slots`, `onejob`, `nopositions`) and `PositionPage` (server). Live routes at `/about/careers` and `/about/careers/position`; `stub: true` removed from both. Render-checked: default four-position list, single-position toggle, empty state with Contact Mawred action, position detail with Apply + contact row.

**Left undone:** Real content population is Task 2. Whether Careers has content to launch with remains a client call — all three states are laid out.

**Decisions:** 73–74 logged in wireframe-passes (`EmptyState` action prop, `KV` fill prop).

**Flagged:** None.

### About — Past Initiatives + detail (2026-08-31)

**Done:** Shared `Banner` primitive in `components/wireframe/` (extends decisions 62/67). AB9–AB11 in `components/blocks/about/`; `InitiativeCard` exported from AB9 for AB11 reuse. Shells `PastInitiativesPage` (client — reads `slots`) and `PastInitiativeDetailPage` (server). Live routes at `/about/past-initiatives` and `/about/past-initiatives/initiative`; `stub: true` removed from both. Render-checked: 12-card directory grid, optional AB6 intro via `slots`, detail banner + prose + sibling cards.

**Left undone:** Real content population is Task 2.

**Decisions:** 72 logged in wireframe-passes (shared Banner).

**Flagged:** None.

### About — Supporters & Partners (2026-08-31)

**Done:** AB8 logo band in `components/blocks/about/`. Shell `SupportersPage` (client — reads `slots` for optional AB6 intro). `LOGO_BANDS` config in `lib/pages/about.ts` (Donors 5 with note, Supporters 1, Partners 12 of ~25). Live route at `/about/supporters-partners`; `stub: true` removed from `about-supporters`. Render-checked: three bands at relative weights, single-logo Supporters band holds label and grid, `slots` toggle reveals AB6 intro.

**Left undone:** Real content population is Task 2.

**Decisions:** None — band treatment is decision 51.

**Flagged:** None.

### About — block kit AB1–AB7 + Who We Are + Our Team (2026-08-31)

**Done:** Seven blocks (AB1–AB7) in `components/blocks/about/`. Shared `Timeline` primitive extracted to `components/wireframe/`, with `S1Timeline` refactored onto it. Shells `WhoWeArePage` and `OurTeamPage` (both server — neither page has wireframe states). Config in `lib/pages/about.ts` (`HISTORY_ENTRIES`, `PEOPLE_GROUPS`, mission/value counts). Live routes at `/about/who-we-are` and `/about/our-team`; `stub: true` removed from both. Render-checked: nine-row history timeline, 3px vision band, the three people groups with cards that carry a role and cards that don't, default-avatar cards, bio expanders present on some records and absent on others, "Show all 35" on the assembly group only. Abbara re-checked after the S1 refactor.

**Left undone:** About unit 2 — AB8–AB13 and five routes (Supporters & Partners, Past Initiatives + detail, Careers + position). Real content population is Task 2.

**Decisions:** 69–71 logged in wireframe-passes (shared Timeline, AB3 cells left unextracted, AccordionItem reused for bios).

**Flagged:** Page name for Our Team is a client call, surfaced in the page hint and unresolved. Team-section content is net-new — Mawred supplies it, so those cards stand for content that doesn't exist yet.

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

### Task 1 — Port the wireframes to Next.js (2026-08-31)

- [x] Chrome + state panel + app shell
- [x] Programs — block kit
- [x] Programs — Production Awards
- [x] Programs — Wijhat
- [x] Programs — Stand for Art
- [x] Programs — Abbara
- [x] Publications
- [x] Mawred Network
- [x] News
- [x] About
- [x] Home
