---
name: Port remaining About pages
overview: Port the three remaining About page-types — Supporters & Partners, Past Initiatives (+ detail), Careers (+ position detail) — as three separate units, building blocks AB8–AB13 from the legacy file and wiring five routes.
todos:
  - id: supporters
    content: Unit 1 — AB8 logo band, SupportersPage shell, LOGO_BANDS config, /about/supporters-partners route, unstub, render check, tracker log
    status: completed
  - id: past
    content: Unit 2 — shared Banner primitive, AB9/AB10/AB11, listing + detail shells and routes, unstub both, render check, tracker + passes log
    status: completed
  - id: careers
    content: Unit 3 — AB12/AB13, EmptyState action + KV fill props, careers + position shells and routes, unstub both, render check all three states, tracker + passes log
    status: completed
isProject: false
---

# Port the remaining About pages

Task 1, About unit 2, split into three units per the working loop. Everything needed already exists: the five route entries are registered with `stub: true` in [lib/pages/routes.ts](lib/pages/routes.ts), the state configs (`supporters`, `pastlisting`, `careers`) are in [lib/pages/states.ts](lib/pages/states.ts), and `slots` / `onejob` / `nopositions` are already keys on `WireframeState`. So no scaffold work — six new blocks, five shells, config, and unstubbing.

Source of truth for all six blocks is [references/legacy-wireframes.html](references/legacy-wireframes.html) lines 757–799 (AB8–AB13) and the page assemblies at lines 1101–1132. Structure is owned by [specs/about.md](specs/about.md) §3.3–3.5.

I stop after each unit for the diff to be read, then commit.

## Unit 1 — Supporters & Partners

- New `components/blocks/about/AB8LogoBand.tsx` — props `label`, `count`, `note`. Logo grid is About-only (no other page-type has one), so it stays local to the block: `grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5`, tiles `flex h-16 items-center justify-center border border-black bg-neutral-200 text-xs text-neutral-500` reading `logo →`.
- New `components/blocks/about/SupportersPage.tsx` — client shell (reads `state.slots` for the optional AB6 intro), composing `AB6SectionIntro optional` + three bands from config + the page hint about relative band weights.
- Config `LOGO_BANDS` in [lib/pages/about.ts](lib/pages/about.ts): Donors 5 (carries the note), Supporters 1, Partners 12 of ~25.
- Route `app/about/supporters-partners/page.tsx`; remove `stub: true` from `about-supporters`.
- Render check: the single-logo Supporters band holds its label and grid; the `slots` toggle reveals the AB6 intro.

## Unit 2 — Past Initiatives + detail

- New shared primitive `components/wireframe/Banner.tsx` — `h-[210px]` full-width fill box with a `label` prop. Extracted rather than kept local because the legacy `.banner` rule serves AB10, N6 (news featured image) and HM5 (home spotlight); this extends decisions 62/67 and gets logged.
- New `AB9InitiativeDirectory.tsx` — 12 cards in the shared `CardGrid` using `Card` with `<Cover label="image" />`, title `Initiative title`, subtitle `one-line teaser`, href to the detail route. No filter bar, no pagination (decision 52).
- New `AB10InitiativeRecord.tsx` — `Banner` + prose(4) + a `Fill` subhead + prose(3) + a two-item fill list. Title comes from the page-header band.
- New `AB11OtherInitiatives.tsx` — 3 of the same card, reusing AB9's card verbatim.
- Shells `PastInitiativesPage.tsx` (client, reads `slots`) and `PastInitiativeDetailPage.tsx` (server — `about-past-detail` has no `statesKey`).
- Routes `app/about/past-initiatives/page.tsx` and `app/about/past-initiatives/initiative/page.tsx`; remove `stub: true` from `about-past` and `about-past-detail`.

## Unit 3 — Careers + position detail

- New `AB12OpenPositions.tsx` — props `onejob`, `nopositions`. Rows are shared `DirRow` with inline meta spans in the MN5 idiom (`Location · Full time`, `Apply by [date]`), four rows by default, one when `onejob`. The empty state uses shared `EmptyState`, which currently hardcodes its button:

```12:14:components/wireframe/EmptyState.tsx
      <p className="my-1.5 mb-3 text-xs text-neutral-500">{line}</p>
      <Btn>Clear all filters</Btn>
    </div>
```

Add an optional `action?: string` (default unchanged) so AB12 can pass `Contact Mawred`.

- New `AB13Position.tsx` — prose(6) + fill subhead + three-item fill list + primary `Apply` button + the "Or write to — [contact address]" row. That row is a `KV` with no value bar, so `KV` gains an optional `fill?: boolean` (default true) rather than AB13 hand-rolling a duplicate row.
- Shells `CareersPage.tsx` (client, reads `slots`, `onejob`, `nopositions`) and `PositionPage.tsx` (server).
- Routes `app/about/careers/page.tsx` and `app/about/careers/position/page.tsx`; remove `stub: true` from `about-careers` and `about-careers-detail`.
- Render check all three careers states — default multi-position, single, and empty.
- The page hint carries the standing flag: whether Careers has content to launch with is a client call, so all three states are laid out.

## Docs, per unit

- [docs/tracker.md](docs/tracker.md): tick the About line as each unit lands (final tick when Careers is done), one log entry per unit.
- [docs/wireframe-passes.md](docs/wireframe-passes.md): append the new decisions — `Banner` extraction (unit 2), `EmptyState` action prop and `KV` fill prop (unit 3). Unit 1 likely adds none; the band treatment is already decision 51.
- Doc changes go in the same commit as the unit that caused them. Commit messages: `port: supporters & partners`, `port: past initiatives`, `port: careers`.
