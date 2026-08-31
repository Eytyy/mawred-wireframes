---
name: Port Wireframes To Next
overview: 'Port the six page-types out of the single legacy HTML file into the Next.js app, one unit per session. This plan covers the scaffold instructions (yours to run) and the first unit only: global chrome, the wireframe primitives, the state panel, the route registry, and stub routes for every unported screen.'
todos:
  - id: scaffold-check
    content: Confirm the Next.js scaffold landed; strip Geist font and the default boilerplate page, set the legacy font stack and text-sm base in app/globals.css plus the codes-off rule
    status: completed
  - id: routes-registry
    content: Build lib/pages/routes.ts — the 23-screen registry (path, title, crumb, statesKey, suppressPageHead) from the legacy PAGES and STUBS maps
    status: completed
  - id: primitives
    content: 'Build components/wireframe/ primitives: Fill, Prose, Block (code badge + optional/callout variants), Hint, Stub, Btn, Chip, Field'
    status: completed
  - id: chrome
    content: 'Build components/chrome/: UtilityBar, SiteHeader with CSS-only dropdowns, PageHeaderBand with suppression flag, Newsletter, SiteFooter'
    status: completed
  - id: state
    content: Build lib/wireframe-state.tsx provider + lib/pages/states.ts map + components/StatePanel.tsx, including the empty/filtered interlocks and the codes-off body class
    status: completed
  - id: shell-routes
    content: Compose app/layout.tsx, app/page.tsx (Home stub), app/wireframes/page.tsx (index grid), app/[...slug]/page.tsx (catch-all stub)
    status: completed
  - id: verify
    content: Run the dev server and click the whole nav end to end; check the state panel's codes toggle and that Home suppresses the page-header band
    status: completed
  - id: close-unit
    content: Update docs/tracker.md, append decisions 55-58 to docs/wireframe-passes.md, revise the AGENTS.md 1px line and the two wrong paths, stage the commit, stop
    status: completed
isProject: false
---

# Port the wireframes to Next.js — unit 1: chrome, primitives, state panel, shell

## Source of truth

[references/legacy-wireframes.html](references/legacy-wireframes.html) — 1256 lines, 23 screens, six page-types. Chrome is lines 232–293, primitives 45–228, state panel 1176–1226, router 1147–1252.

Note: `AGENTS.md` points at `reference/legacy-wireframes.html` and `content/specs/*.md`; the real paths are `references/` and `specs/`. Fixing those in this unit's commit.

## Step 0 — scaffold (you run this)

The repo has no `package.json` and no `.git` yet.

```bash
cd /Users/Eytyy/Code/mawred-wireframes
npx create-next-app@latest . --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"
```

The existing `AGENTS.md`, `docs/`, `specs/`, `content/`, `references/` don't conflict, so installing in place is fine. `create-next-app` runs `git init` itself. No extra packages needed — Tailwind is the only dependency this work has.

Expect Tailwind v4 (`@import "tailwindcss"` in `app/globals.css`, no `tailwind.config.js`). I'll adapt to whichever version lands, and I'll strip the Geist font and the default boilerplate page when I start.

Tell me when it's done and I'll take unit 1.

## Decisions taken (to log in `docs/wireframe-passes.md`)

- **55. State panel mechanism** — resolves the open call in decision 10. A client context provider holds the state bag; the _list_ of toggles per page-type comes from a static map keyed off the route registry. The provider is needed regardless, because block bodies read state values (`S.closed`, `S.filtered`, `S.sparse`) to decide what they render — so pages registering their own states would duplicate a channel that already has to exist.
- **56. Real nested URLs**, replacing the legacy flat hashes. `/` is Home; the wireframe index moves to `/wireframes`.
- **57. Legacy border weights kept** — 2px on the header rule, primary buttons and active tabs; 3px on C6, N8, AB2; 2px dashed on stubs and the panel. The `AGENTS.md` "1px only" line gets revised in the same commit, since weight is the file's only emphasis signal and a 3px callout _is_ C6's definition.
- **58. Type scale collapsed** to the permitted set — legacy 10/11/12px all become `text-xs`, 13/14px become `text-sm`, body base is `text-sm`. `--fill:#eee` maps to `neutral-200`, `--soft:#666` to `neutral-500`.

## Route map

Every legacy hash gets a real path. This table lives in `lib/pages/routes.ts` and drives titles, breadcrumbs, the state panel and the stubs.

- `home` → `/` · `index` → `/wireframes`
- `pa` → `/programs/production-awards` · `wijhat` → `/programs/wijhat` · `sfa` → `/programs/stand-for-art` · `abbara` → `/programs/abbara`
- `pub-research` → `/publications/research` · `pub-detail` → `/publications/research/publication` · `pub-mudawanat` → `/publications/mudawanat` · `pub-foundations` → `/publications/foundations-of-cultural-policies` · `pub-talks` → `/publications/mawred-talks`
- `network` → `/network` · `network-record` → `/network/record`
- `news` → `/news` · `news-detail` → `/news/post`
- `about-who` → `/about/who-we-are` · `about-team` → `/about/our-team` · `about-supporters` → `/about/supporters-partners` · `about-past` → `/about/past-initiatives` · `about-past-detail` → `/about/past-initiatives/initiative` · `about-careers` → `/about/careers` · `about-careers-detail` → `/about/careers/position`
- `contact` → `/contact` · `twentieth` → `/mawreds-20th`

## What gets built

### Chrome — `components/chrome/`

Ported verbatim from legacy 232–293. All server components; the nav dropdowns use CSS only in the legacy file (`:hover`, `:focus-within`), so `group-hover:` / `group-focus-within:` keeps them JS-free.

- `UtilityBar.tsx` — search + `EN | AR` chips, right-aligned
- `SiteHeader.tsx` — logo (links `/wireframes`) + the seven nav items. About Us / Grants & Opportunities / Publications carry dropdowns; Publications keeps its two labelled `Library` / `Series` groups (decision 16); `Mawred's 20th` keeps its dashed border marking it optional
- `PageHeaderBand.tsx` — breadcrumb + bordered H1. Suppressed by a `suppressPageHead` flag on the route entry, which only Home sets (decision 33)
- `Newsletter.tsx`, `SiteFooter.tsx` — newsletter row, four footer columns, copyright line

### Primitives — `components/wireframe/`

Only the ones chrome, the stub and the index need. The rest (`KV`, `Card`, `Tabs`, `Timeline`, `FacetBar`, `Accordion`, …) arrive with the unit that first uses them, so nothing unused gets built.

- `Fill.tsx` — the `.p` fill bar, `h-2 bg-neutral-200` at a given width
- `Prose.tsx` — n fill bars at the legacy `[100,96,88,92,72,84]` width cycle
- `Block.tsx` — the `blk()` wrapper: code badge + uppercase label + children, with `optional` (dashed) and `callout` (3px) variants
- `Hint.tsx` — the italic secondary note under a block
- `Stub.tsx` — "not yet wireframed" panel
- `Btn.tsx`, `Chip.tsx`, `Field.tsx`

### State — `lib/wireframe-state.tsx` + `lib/pages/states.ts`

`WireframeStateProvider` (client) wraps `children` inside the server layout and holds the legacy `S` bag: `codes` plus `closed · offered · filtered · empty · slots · orgs · sparse · cat · byline · structured · edge · nocalls · twentieth · staticfb · onejob · nopositions`. Blocks read values through `useWireframeState()`.

`states.ts` is the legacy `STATES` map (1176–1207) unchanged — 14 page-type keys, each with its toggle list and flag note.

`components/StatePanel.tsx` (client) resolves the current route to its `statesKey`, renders "Show block codes" always plus that page-type's toggles, and keeps the two legacy interlocks: `empty` implies `filtered`, and clearing `filtered` clears `empty`. Codes-off flips a class on `<body>`, matching `body.codes-off .code{display:none}`.

### Routes — `app/`

- `layout.tsx` — utility bar, header, provider, page-header band, `<main class="wrap">`, newsletter, footer, state panel
- `page.tsx` — Home. Renders `Stub` until the Home unit replaces it
- `wireframes/page.tsx` — the index grid from legacy 922–949, 23 links each labelled with its page-type and status
- `[...slug]/page.tsx` — catch-all rendering `Stub` inside real chrome for anything in the route registry that isn't ported yet; `notFound()` for anything not in the registry. As each page-type lands, its real route directory shadows the catch-all, so this file needs no upkeep

Net effect: the whole nav is clickable end to end from the first unit, with unported page-types honestly stubbed.

## Out of scope for this unit

No block kits. No page bodies. Programs (the 18-block C/S kit + four compositions) is the next unit and takes the shared-component discipline test first, as briefed.

## Closing the unit

Tick "Chrome + state panel + app shell" in [docs/tracker.md](docs/tracker.md) with a log entry, append decisions 55–58 to [docs/wireframe-passes.md](docs/wireframe-passes.md), revise the `AGENTS.md` 1px line and the two wrong paths, and leave one commit staged (`port: chrome and app shell`) for you to read before it lands. Then stop and wait rather than starting Programs.
