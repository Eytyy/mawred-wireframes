---
name: Port publications wireframes
overview: 'Port the Publications page-type from the legacy single-file wireframes into the Next.js app: eight blocks (PA1–PA4, PB1–PB2, PC1–PC2), four new shared wireframe primitives, and the Research & Publications library live as unit 1; the detail page and three series pages as a config-only unit 2.'
todos:
  - id: primitives
    content: 'Add shared wireframe primitives: FilterBar (client), CountRow, Card/CardGrid/Cover, Embed, EmptyState'
    status: completed
  - id: blocks
    content: Port the eight Publications blocks PA1-PA4, PB1-PB2, PC1-PC2 into components/blocks/publications/
    status: completed
  - id: shells-config
    content: Add LibraryPage/SeriesPage client shells, PublicationDetailPage, and lib/pages/publications.ts config
    status: completed
  - id: research-route
    content: Wire /publications/research live and drop its stub flag
    status: completed
  - id: docs-unit1
    content: Log unit 1 in tracker, append decisions 62+ to wireframe-passes, commit, stop
    status: completed
  - id: unit2
    content: 'Unit 2: routes and config for publication detail and the three series pages, then log and commit'
    status: completed
isProject: false
---

# Port Publications

Structure is settled — [specs/publications.md](specs/publications.md) Part 2 defines three structures, and all eight blocks are already drawn in [references/legacy-wireframes.html](references/legacy-wireframes.html) (blocks at lines 388–445, page compositions at 1012–1037 and 1134–1139). This is transcription. Nothing to re-litigate.

Already in place, not touched: all five routes registered in [lib/pages/routes.ts](lib/pages/routes.ts), header nav links pointing at them, and `library` / `series` / `detail` state configs in [lib/pages/states.ts](lib/pages/states.ts).

## Unit 1 — Block kit + shared primitives + Research & Publications

### Shared primitives, in `components/wireframe/`

These are used again by Mawred Network (MN3/MN4) and News (N1/N2/N3) in the legacy file. The chrome log already deferred them to "the unit that first needs them"; this is that unit.

- `FilterBar.tsx` — client component, owns its own facet-panel open/close state the way `Accordion.tsx` does. Takes `facets: { n: string; v: number }[]` and `openIdx`. A facet over 12 values renders search field + first six values + "Show all N"; shorter facets list every value. Ports `filterBar` / `facetPanel` (legacy 828–845).
- `CountRow.tsx` — the `neutral-200` top/bottom-ruled row: left-hand count, right-hand slot for chips and any sort control.
- `Card.tsx` — exports `Card`, `CardGrid` and `Cover` (with a `tall` variant for PC1). Grid is `repeat(auto-fill, minmax(190px, 1fr))`; no fixed column count.
- `Embed.tsx` — `kind: "audio" | "video"`, `neutral-200` fill, placeholder text naming the provider.
- `EmptyState.tsx` — dashed box, heading + line + "Clear all filters".

Removable filter chips reuse the existing `Chip` with the `×` in the label — legacy's `.chip` and `.chipx` differ only in size, which decision 58 already collapsed.

### Blocks, in `components/blocks/publications/`

- `PA1IntroLine.tsx` — renders only when `slots` is on; dashed/optional block.
- `PA2FilterBar.tsx` — the six facets from the spec (Author 50 · Country 13 · Theme 2 · Language 3 · Type 3 · Year 14), Author shown open to demonstrate the long-facet treatment.
- `PA3CountRow.tsx` — `empty` → 0, `filtered` → 6, otherwise 30 of 30; chips + "Clear all" when filtered.
- `PA4ResultsGrid.tsx` — nine cards, or the empty state when `empty`. Cards link to `/publications/research/publication`.
- `PB1SeriesIntro.tsx` — `paras` and `links` props; prose flexes 1–3 paragraphs.
- `PB2MediaListing.tsx` — four embeds of one `kind`, plus the per-item caption slot when `slots` is on, plus the "… N items in this series" line.
- `PC1PublicationRecord.tsx` — tall cover left, six metadata rows + abstract + document button right.
- `PC2RelatedPublications.tsx` — three cards, reusing `Card` verbatim.

### Shells and config

- `LibraryPage.tsx` and `SeriesPage.tsx` — client components, the single state boundary per decision 60. `PublicationDetailPage.tsx` stays a server component; Structure C reads no state.
- [lib/pages/publications.ts](lib/pages/publications.ts) — `LIBRARY_FACETS`, a `SeriesConfig` type, and `MUDAWANAT` / `FOUNDATIONS` / `MAWRED_TALKS`. Content stays out of components.
- `app/publications/research/page.tsx` — thin shell, matching `app/programs/production-awards/page.tsx`. Drop `stub: true` from the `pub-research` route entry.

### Docs

Tracker log entry, and new decisions appended to [docs/wireframe-passes.md](docs/wireframe-passes.md) starting at 62: shared primitives over Publications-local ones; `Chip` reused for removable filter chips; `FilterBar` self-contained as a client component (extending decision 60); fixed embed footprints rather than aspect ratios, since the audio embed has no meaningful aspect.

Commit: `port: publications block kit + research library`. Stop here.

## Unit 2 — Detail + three series pages

Config and routing only; the kit is already built.

- `app/publications/research/publication/page.tsx`, `app/publications/mudawanat/page.tsx`, `app/publications/foundations-of-cultural-policies/page.tsx`, `app/publications/mawred-talks/page.tsx`.
- Drop `stub: true` from the four remaining route entries.
- Series instances per legacy: Mudawanat = 3 paragraphs, three outbound links, audio, ~7 items; Foundations = 3 paragraphs, three links, video, 9 items; Mawred Talks = 1 paragraph, no links, video, ~13 items — the same block at its thin end.
- Render-check the thin-intro case and the `slots` caption state, then log and commit `port: publications series + detail`.

## Not resolved here

Spec Part 3 flags that the "Publications" nav parent holds two different kinds of thing — a document library and a set of media series — and asks whether the label or nav should signal that split. That is a client call. It gets surfaced in the tracker, not wireframed around.
