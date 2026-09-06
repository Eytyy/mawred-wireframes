---
name: populate publications
overview: 'Populate the four Publications pages: real facet values, record titles and count on the Research library, one fully real publication record behind it (the Lebanon Humanitarian Fund report), and real series intros on Mudawanat, Foundations and Mawred Talks.'
todos:
  - id: config
    content: 'Populate lib/pages/publications.ts: facet values, LIBRARY_RECORDS (33), PUBLICATION_RECORD, series text'
    status: completed
  - id: blocks
    content: Add content props to PB1, PC1, PC2, PA4, PA3 and FilterBar; wire through LibraryPage, SeriesPage, PublicationDetailPage
    status: completed
  - id: route
    content: Give the pub-detail route the real title and crumb
    status: completed
  - id: verify
    content: Type-check, lint and render-check the four Publications routes plus Network, News and one programme page
    status: completed
  - id: docs
    content: Content-map section, wireframe-passes decisions 104-109, tracker tick and log entry
    status: completed
isProject: false
---

# Populate Publications

Task 2, unit 5 — the Publications page-type as one unit (library, detail, three series pages). Same shape as the four programme units: content goes into [lib/pages/publications.ts](lib/pages/publications.ts), blocks gain optional content props that fall back to the existing fill bars (decision 84), no structure changes.

## Sources

- Library grid and facets: the live listing publishes all 33 record titles with their language lines and every facet value list.
- The one detail record: [Mawred's Initiative: Lebanon Humanitarian Fund Through Cultural Organizations](https://mawred.org/research-publication/mawreds-initiative-lebanon-humanitarian-fund-through-cultural-organizations/?lang=en) — title, one abstract paragraph, two download links (English, Arabic), posted April 2026. It publishes no author, country, theme, type or year.
- Series intros: the three descriptions supplied in the brief, compressed to wireframe length (three paragraphs for Mudawanat and Foundations, one for Mawred Talks — matching the spec's own count).

## Config — `lib/pages/publications.ts`

- `Facet` gains `values?: string[]`; `LIBRARY_FACETS` carries the real lists — 13 countries, 2 themes, 3 languages, 3 types, 14 years, ~50 author names. Long facets still render six plus "Show all N", so Author shows six real names.
- New `LIBRARY_RECORDS` — 33 `{ title, languages }` entries, the Lebanon report first. PA4 samples the first nine.
- New `PUBLICATION_RECORD` — the one real record: title, two-paragraph abstract, `Language: Arabic, English`, `Year: 2026`, two download labels, and three related titles (the two Lebanon studies plus the regional ecosystem report, so "related" reads as related).
- `SeriesConfig` gains `text: string[]`; `paras` becomes optional (default 3) and drops out of the three configs. Existing `links`, `kind` and `total` (7 / 9 / 13) are already correct.

## Blocks

- `PB1SeriesIntro` — takes `text`, renders `<Prose text>` instead of the fill bars; the headline `Fill` becomes an optional `heading` slot, unused by all three series (none has a headline above the intro; the H1 is the chrome band).
- `PC1PublicationRecord` — takes the record. All six metadata rows stay; Language and Year carry values, the other four stay fill bars with the hint naming the display gap. The single "Open the document" button becomes one primary button per published language.
- `PA4ResultsGrid` / `PC2RelatedPublications` — take `records`, render real titles and language lines. PA4 gains PB2's italic overflow line ("… 33 items in the grid") so nine sampled cards can't be misread as the whole set.
- `PA3CountRow` — default total 30 → 33.
- `FilterBar` — renders `facet.values[i]` where supplied, `value` otherwise, so Network MN3 and News N1 are untouched.

## Routes

`pub-detail` in [lib/pages/routes.ts](lib/pages/routes.ts) takes the real title and crumb tail; `indexLabel` stays "Publication detail" so the wireframe index still reads structurally. The long real title also exercises the page-header band.

## Docs

- `docs/content-map.md` — new Publications section, block by block, in the existing table format.
- `docs/wireframe-passes.md` — roughly decisions 104–109: one populated record rather than 33; PC1 keeping the unpublished rows as fill bars; one download per language; PB1's headline as a slot; PA4's overflow line; facet `values`.
- `docs/tracker.md` — tick Publications, add a log entry.

## Flags expected (surfaced, not designed around)

- The Year facet stops at 2024 while the Lebanon record is dated April 2026 — the record is either untagged or the facet list is stale.
- The detail page shows none of the taxonomy the library filters on.
- The author/date line renders as "Beirut in 2026-06-16T…April 16th, 2026" — the same CMS artifact as the footer's "Beirut in".
- Foundations' intro promises per-episode reference links and a summary, which is exactly PB2's optional per-item caption slot. Whether those surface on the page is a client call; the caption stays behind the `slots` toggle.
- `Lybia` [sic] in the Country facet, and the global-footer Instagram artifact seen on every page so far.

## Verify

Type-check and lint, then render-check `/publications/research`, its default / filtered / empty / slots states, `/publications/research/publication`, and the three series pages — plus `/network` and `/news` for the `FilterBar` change, and one programme page for `Prose`/`KV`/`Btn`.
