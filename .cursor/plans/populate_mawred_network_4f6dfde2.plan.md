---
name: populate mawred network
overview: 'Populate the Mawred Network page-type (directory + record detail) with real content: the five live facet lists, the responsible-data intro, four sampled records — two individuals, two organisations — and Al Kasaba Theatre and Cinematheque as the one populated record.'
todos:
  - id: config
    content: 'Rewrite lib/pages/network.ts: five real facet lists (Year 21), figures with values, ENTITY_TABS without counts, four sampled rows, NETWORK_INTRO, NETWORK_RECORD (Al Kasaba with two engagements)'
    status: completed
  - id: blocks
    content: 'Add content props: MN1 text/contact (headline Fill retired), MN4 shown-only count with real chips, MN5 real rows with one badge per engagement, MN6 record with repeating engagement group; Tabs count optional; MN3 hint corrected'
    status: completed
  - id: states-route
    content: Empty the record states key (retire sparse), make NetworkRecordPage a server shell, remove sparse from WireframeState if unused, set the record route title and crumb to Al Kasaba
    status: completed
  - id: docs
    content: Add the Mawred Network section to content-map, decisions 110-114 to wireframe-passes, tick and log the unit in tracker
    status: completed
  - id: verify
    content: Type-check, lint, and curl /network in default/filtered/empty on both tabs plus /network/record, re-checking /publications/research and /news for the shared primitives
    status: completed
isProject: false
---

# Populate Mawred Network

Task 2, sixth unit. One unit = the page-type, both routes (`/network`, `/network/record`).

Sources: [specs/mawred-network.md](specs/mawred-network.md) for structure; the live listing (`mawred.org/mawred-community/?lang=en`) for the intro prose and all five facet value lists; the four participant records the brief names.

## What the live pages actually give

- **Facets, all five confirmed:** Involvement 8 · Programme 38 · Discipline 22 · Country 55 · Year **21, not 22** — 2004–2025 with **2006 absent**.
- **No record total anywhere.** The listing publishes no count, no pagination, and the fetched HTML contains **zero directory rows** (the list is JS-rendered). So `ENTITY_TABS`' `318` / `94` and `NETWORK_PAGE_SIZE` are invented and get dropped rather than re-sourced.
- **A record has one _or more_ engagements.** Spec §B5's flat field set (one involvement · programme · round · year · project) is wrong: Al Kasaba and Editions Motifs each carry two — Participant and Grantee — with a sub-track name (`Cultural Alliances - Regional Workshop`) where Tarek Elazhary had `Round 02`. Individuals carry a descriptor and no bio prose; organisations carry bio prose and no descriptor.

## 1. Config — [lib/pages/network.ts](lib/pages/network.ts)

Rewrite, following the `facet()` helper pattern in [lib/pages/publications.ts](lib/pages/publications.ts):

- `NETWORK_FACETS` — the five real value lists (`Lybia` is spelled `Libya` here, kept as published); Year `v` corrected to 21.
- `NETWORK_FIGURES` → `{ label, value }` items: `55` countries, `38` programmes & initiatives, `21` years tagged 2004–2025, and records-in-the-network left at the `00` placeholder as a stated gap.
- `ENTITY_TABS` — labels keep, counts drop.
- `NETWORK_ROWS` — four sampled rows split by tab: Hiba Taim (Morocco · Student · Visual Arts) and Nour Shantout (Syria, Austria · Grantee · Visual Arts); Al Kasaba Theatre and Cinematheque (Palestine · Participant + Grantee · Performing Arts, Cinema) and Editions Motifs (Algeria · Participant + Grantee · Literature).
- `NETWORK_INTRO` — two short paragraphs (what the directory is; the responsible-data commitment) plus the `communications@mawred.org` correction line.
- `NETWORK_RECORD` — Al Kasaba: countries, disciplines, two-paragraph body compressed from four live ones, and two engagements, the Participant one carrying a project title with **no** description.

## 2. Blocks — content props, optional with the placeholder as fallback (decision 84)

- **MN1** takes `text` + `contact`; the `Fill width={38}` headline retires as an unused slot (decision 107's precedent — the H1 is the chrome band). The live "under development" / get-involved notice with `resources@mawred.org` stays retired per spec decision 2, and its disappearance is named in the hint as a client call.
- **MN2** — no code change; `Figs` already accepts `{ label, value }`.
- **MN3** — no code change; `FilterBar` already renders `facet.values`. Hint's "Year (22)" corrected to 21.
- **MN4** — with no published total, the row reads `Showing 2 individuals & groups` (what's shown only, no `of N`), the hint names the missing total, and the chips become real sample values (`Programme: All Around Culture ×`, `Country: Palestine ×`).
- **MN5** — real rows from `NETWORK_ROWS`, involvement rendered as **one badge per engagement** so Al Kasaba shows two; `Load 40 more` → `Load more records`. `Tabs`' `count` becomes optional in [components/wireframe/Tabs.tsx](components/wireframe/Tabs.tsx).
- **MN6** — takes a `record`. Record-level: logo cover, optional descriptor (absent on an organisation), Country and Discipline as `KV` rows, body prose. Then a **repeating engagement group** — involvement badge · programme · round/track · year · project title · optional description — replacing the single flat table plus one project slot.

## 3. States and route

- `STATES.record` loses the `sparse` toggle (empty list + a note saying omission is visible in the default render — follows decisions 95 and 103). [app/network/record/NetworkRecordPage.tsx](app/network/record/NetworkRecordPage.tsx) drops `"use client"` and becomes a server shell; `sparse` is removed from `WireframeState` and `BOOLEAN_KEYS` if nothing else references it.
- [lib/pages/routes.ts](lib/pages/routes.ts): `network-record` `title` and `crumb` become "Al Kasaba Theatre and Cinematheque"; `indexLabel` stays "Network record".

## 4. Docs, in the same commit

- **[docs/content-map.md](docs/content-map.md)** — new `## Mawred Network` section, block by block, recording the gaps: no record total, the 2006-shaped Year facet, `Entrepeneurship` [sic], and the listing's JS-only rows.
- **[docs/wireframe-passes.md](docs/wireframe-passes.md)** — decisions 110–114: four sampled records two per tab with one populated detail (extends 104); the repeating engagement group superseding §B5's flat field set, with Round generalised to round/track; unpublished totals left unpublished rather than invented; MN1's headline retired and the responsible-data paragraph promoted; the `record` states key emptied.
- **[docs/tracker.md](docs/tracker.md)** — tick Mawred Network, log entry, then stop and ask for the next unit.

## 5. Verify

Type-check and lint, then curl the running dev server: `/network` in default, `filtered` and `empty`, both entity tabs; `/network/record`. Re-check `/publications/research` (shared `FilterBar`, `Figs`, `Tabs`, `KV` untouched) and `/news` (shared `Tabs`, `CountRow`).

## Flags to carry into the log

The retired `resources@` data-access ask is a client call (is the invitation permanent content?); `Entrepeneurship` [sic] and `Libya` here against `Lybia` in the Publications facet; live participant pages carry the `Beirut in <timestamp>` artifact, dead `Asset-2/3/4.svg` icons and Previous/Next record nav we aren't adding; and the directory rendering no rows without JS is a build concern for a several-hundred-record index.
