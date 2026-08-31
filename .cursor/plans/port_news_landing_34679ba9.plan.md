---
name: Port news landing
overview: Port the News landing feed (blocks N1–N4) from the legacy single-file wireframes into the Next.js app, wiring the live route at /news and reusing the existing shared primitives. News post detail (N5–N13) is unit 2 and is deliberately left for the next session.
todos:
  - id: primitives
    content: Add Tag and Caption primitives, refactor PB2MediaListing onto Caption, add footer prop to Card
    status: completed
  - id: config
    content: Create lib/pages/news.ts with categories, programme facet, page size, pager total and hrefs
    status: completed
  - id: blocks
    content: Build N1CategoryFilter, N2CountRow, N3PostFeed (exporting NewsCard), N4Pagination in components/blocks/news/
    status: completed
  - id: shell-route
    content: Build NewsLandingPage client shell with category tab state and page hint; wire app/news/page.tsx and drop stub from the news route entry
    status: completed
  - id: verify
    content: Render-check all newslanding states and the three tabs, re-check a Publications series page, run ReadLints
    status: completed
  - id: close
    content: Log the unit in docs/tracker.md, append decisions to docs/wireframe-passes.md, stage and stop
    status: completed
isProject: false
---

# Port News — unit 1: landing feed (N1–N4)

Task: **Task 1 — Port the wireframes to next js**, News page-type. Split into two units per your call; this plan covers **unit 1 only** and stops.

Source: [references/legacy-wireframes.html](references/legacy-wireframes.html) lines 517–553 (blocks), 867–877 (`CATS`, `newsCard`), 1054–1059 (page composition + hint). Structure owned by [specs/news.md](specs/news.md) §B1.

State toggles (`filtered`, `empty`, `slots`) and the route entry are **already registered** — [lib/pages/states.ts](lib/pages/states.ts) `newslanding`, [lib/pages/routes.ts](lib/pages/routes.ts) `news`. Nothing to add there beyond dropping `stub: true`.

## Shared primitives

Three small changes, each because a later consumer already exists in the legacy source:

- **New `components/wireframe/Tag.tsx`** — the uppercase tracked label box (legacy `.tag`, line 158). Distinct from the existing `Badge` in [components/wireframe/DirRow.tsx](components/wireframe/DirRow.tsx): under the collapsed type scale (decision 58) the only surviving difference is `uppercase` + `tracking`, and that difference is the whole signal. Used by the news card now, N7's meta strip in unit 2.
- **New `components/wireframe/Caption.tsx`** — the dashed optional-field box (legacy `.cap`, line 135). Currently hand-rolled inline in [components/blocks/publications/PB2MediaListing.tsx](components/blocks/publications/PB2MediaListing.tsx); refactor PB2 onto it so the card excerpt is not a second copy.
- **`Card` gains optional `footer?: ReactNode`** in [components/wireframe/Card.tsx](components/wireframe/Card.tsx), rendered after the subtitle, so the news card's excerpt slot sits below the date. The category tag needs no new prop — it goes in the existing `children` slot next to `Cover`.

## Blocks — `components/blocks/news/`

- `N1CategoryFilter.tsx` — `Tabs` (All / Announcements / News & Events with counts) + `FilterBar` with the single `Programme` facet, closed by default (legacy passes `-1`). Takes `activeIdx` / `onSelect`.
- `N2CountRow.tsx` — `CountRow` scoped to the open tab; programme chip + "Clear all" when `filtered || empty`, otherwise the "no programme filter applied" note. No sort control (decision 28).
- `N3PostFeed.tsx` — exports **`NewsCard`** for N13 and HM6 to reuse (decision 43), mirroring `InitiativeCard` exported from [components/blocks/about/AB9InitiativeDirectory.tsx](components/blocks/about/AB9InitiativeDirectory.tsx). Card = `Cover label="image"` · `Tag` · title · date, plus the excerpt `Caption` under `slots` and a `bare` prop to suppress it for the related strip. Nine cards; `EmptyState` in the feed slot when `empty`.
- `N4Pagination.tsx` — numbered pager (‹ Prev · 1 2 3 … 26 · Next ›), 2px border on the active page per decision 57. Pager markup stays local to the block: the Network uses load-more (decision 23) and Home needs neither, so there is no second consumer.
- `NewsLandingPage.tsx` — `"use client"` shell reading `filtered` / `empty` / `slots`, owning the category tab index and passing it to both N1 and N2 (extends decision 66), and carrying the page hint. N4 drops out entirely when `empty`.

## Config — `lib/pages/news.ts`

`NEWS_CATEGORIES` (231 / 128 / 103), `NEWS_PROGRAMME_FACET`, `NEWS_PAGE_SIZE = 9`, `NEWS_TOTAL_PAGES = 26`, `NEWS_LANDING_HREF`, `NEWS_DETAIL_HREF` — same shape as [lib/pages/network.ts](lib/pages/network.ts).

## Route

`app/news/page.tsx` → `<NewsLandingPage />`; remove `stub: true` from the `news` entry in [lib/pages/routes.ts](lib/pages/routes.ts). The post-detail entry keeps its stub.

## Verify

Render-check at `/news`: default feed, `filtered` chips, `empty` (tabs and count row stay, pager gone), `slots` excerpt, and each of the three category tabs. Re-check `/publications/mudawanat` after the PB2 refactor. Then `ReadLints`.

## Close the unit

- Log entry in [docs/tracker.md](docs/tracker.md) — News checkbox stays unticked until unit 2, as Publications was handled.
- Append decisions to [docs/wireframe-passes.md](docs/wireframe-passes.md): `Tag` as a primitive distinct from `Badge`, `Caption` extracted with PB2 refactored onto it, `Card` footer prop.
- Leave changes staged for review, then stop. **Do not start N5–N13.**
