# Tracker

Records what's been done. Task definitions are not kept here — a task is given as a brief in plan mode, planned, then executed. This file records the outcome.

---

**Current task:** none.

---

## News rows: PA4 stack (date / title / category)

- [x] `NewsCard` matches `LibraryRow`: compact Cover, date above, title, category below
- [x] Leaves `DirRow`; N13 reuses the row; HM6 unchanged
- [x] Revise decision 192; standing-constraints §4, content-map, tracker

Left undone: nothing from this unit.

---

## News feed: all rows, no featured lead

- [x] N3: every post is a thumb `DirRow`; drop `NewsFeatured`
- [x] Drop `slots` from N3, the landing, and the `newslanding` panel
- [x] N13 hint drops “not the landing lead”
- [x] Revise decision 192; standing-constraints §4, content-map, tracker

Left undone: nothing from this unit.

---

## News listing rows + featured lead (N3 / N13)

- [x] N3: first visible post as HM5-style lead (`Banner` · title · badges · Read more); rest as thumb `DirRow`s
- [x] `NewsCard` is the thumb row; excerpt `slots` caption on the lead only
- [x] N13 reuses `NewsCard`, not the lead; drop `CardGrid`
- [x] Decision 192; revise 43, 189, 191; standing-constraints §4, content-map, tracker

Left undone: nothing from this unit.

---

## Publications listing rows (PA4 / PC2)

- [x] PA4: nine sampled `LibraryRow`s (compact Cover · author · title · languages); overflow line stays
- [x] PC2: same `LibraryRow` as PA4; drop `CardGrid`
- [x] Stack author above / languages below the title; compact Cover `w-24`; leave `DirRow`
- [x] Decision 191; revise 104, 108, 166, 189; standing-constraints §4, content-map, tracker

Left undone: nothing from this unit. N3 / N13 followed in the news listing-rows unit (decision 192).

---

## Listing-row primitives

- [x] `DirRow` optional `leading` before the title; MN5, AB12 and HM6 omit it
- [x] `Cover` optional `compact` — `aspect-3/4`, `w-24`, no `w-full` / `mb-2.25`
- [x] Revise decisions 67, 166; tracker

---

---

## News N1: category as a filter, not tabs

- [x] N1 drops the All / Announcements / News & Events tab row; Category and Programme are two FilterBar facets
- [x] Remove tab index from `NewsLandingPage`, `filterNewsPosts`, and N2
- [x] Decision 190; revise 27, 28, 78, 115, 116, 124; standing-constraints, content-map, tracker

---

## Listing cards: h2 titles, three columns

- [x] `Card` title is `h2` at `text-2xl font-bold`; drop `titleClassName` (and HM4 override)
- [x] Pass `cols={3}` on N3, AB9, PC2, N13, AB11; update PA4 hint
- [x] Decision 189; revise 167; standing-constraints, content-map, tracker

---

## Home HM4 / HM5 / HM6 gap

- [x] `looseAbove` on HM5 and HM6 — client view 5rem between the three strips
- [x] Decision 188; 175 noted; standing-constraints, tracker

---

## HM6 Latest news heading

- [x] HM6 uses `SectionHeading` like HM4 / HM5
- [x] Revise decision 135; standing-constraints, content-map, tracker

---

## Home strip headings and HM5 as one spotlight

- [x] Extract `SectionHeading`; use it on ProgramPage, HM4, and HM5
- [x] HM5 takes one `HOME_SPOTLIGHT` (Mawred's 20th); retire `twentieth` state
- [x] Revise decisions 44, 82, 133, 135; standing-constraints, content-map, tracker

---

## AB2 Vision as headline + sentence

- [x] Drop grey fill; `heading="Vision"` at Mission/Values size; body is the sentence
- [x] Revise decision 148 (57, 134, 135, 144); standing-constraints, AGENTS, content-map

---

## Home impact figures and action buttons

- [x] Drop years-since-2003; grants rail takes placeholder `~1,200`
- [x] HM4 heading-to-cards gap is 2rem
- [x] HM5 / HM6 action buttons hug their label

---

## HM1 positioning copy

- [x] Identity line as supplied; three phrases link to PA, Network, Who We Are

---

## HM1 wayfinding in the positioning line

- [x] Rewrite the identity sentence so the three destinations sit in the prose
- [x] Mark them with a 2px underline; drop the button row

---

## Home hero and button refinements

- [x] HM1 wayfinding sits in the positioning plate; row under the frame gone
- [x] HM1 full-bleed to the content column (`flushTop`, outside `PageWidth`)
- [x] HM5 / HM6 action buttons take a 1.5rem gap from the copy above

---

## HM4 card layout

- [x] Status chips under the descriptor; titles `text-2xl`; 3-col grid

---

## HM4 as open grants and opportunities

- [x] HM4 is the open-calls strip; Abbara dropped; `HOME_OPPORTUNITIES`
- [x] Revise decisions 39, 40, 132; content-map, states note, tracker

---

## In-flow mobile menu

- [x] SiteHeader: burger toggles UtilityBar + nav in flow; drop overlay
- [x] Revise decision 183, standing constraint 2, AGENTS chrome line, tracker

---

## Mobile site chrome

- [x] Below `lg`: stacked header → main → footer, no sticky rail
- [x] Burger toggles UtilityBar + nav in flow under the header

---

## PB2 video grid

- [x] Video series use a 2-col grid (1 col on mobile); Mudawanat stays stacked rows

---

## `cn` for className merging

- [x] `cn` replaces hand-rolled template-literal and array-join class strings

---

## Network browse toolbar

- [x] Search, facets, tabs, count and sort compact into one toolbar

---

## C7 in the sticky band

- [x] Apply now sits next to the page title and section nav

---

## Page-end site footer

- [x] Footer moves from the rail to under main

---

## Wijhat C5 covered costs as text

- [x] Travel grant costs as comma-separated body, not a list

---

## Wijhat Application highlights

- [x] S6 lead/KV gap; S6 notes and S5 save-and-return as grey highlights
- [x] Application highlights sit last in their parent
- [x] S5–C6 highlight stack uses the in-block 1rem gap

---

## Programme page — Figma 310:458

- [x] Unit 1 — `main` left border; `PageWidth` wrapper
- [x] Unit 2 — section rules; About heading; Contact under FAQs
- [x] Unit 3 — sticky section nav
- [x] Unit 4 — 3rem block-frame gap

---

## Header — Figma 309:392 notes

- [x] Header chrome matches the annotated spacing and hover/active treatment

---

## Home rework — five blocks, real hierarchy

- [x] Unit 1 — HM1 reads as a hero; HM8 retires
- [x] Unit 2 — HM2 is the stat strip only
- [x] Unit 3 — HM3 folds into HM4
- [x] Unit 4 — HM6 as rows, no images
- [x] Unit 5 — HM7 out
- [x] Unit 6 — HM5 owns the 20th; nav item out
- [x] Unit 7 — HM1 as an overlapping collage, not a single frame **(added mid-session; rolled back)**

**Unit 7, as briefed.** Replace HM1's one full-bleed frame with roughly five images at varied sizes, placed off the grid and allowed to overlap, as a composed hero rather than a sequence. Three things to settle when it's picked up, all of them consequences rather than open client calls: (1) **placement is hand-authored, not computed** — `Math.random()` at render would hydrate differently on server and client, and a wireframe wants a composition that reviews the same twice; the offsets belong in `HOME_HERO_FRAMES` beside the captions. (2) **Whether any motion survives.** A collage that doesn't move has no sequence, which finishes what decision 35's revision started — and with plan Unit 2 removing HM2's `staticfb` consumer, `staticfb` would then have no consumer at all and should retire from `lib/wireframe-state.tsx`, `components/StatePanel.tsx` and `lib/pages/states.ts`. If frames do cycle in place, it stays. (3) **Where the positioning line goes.** It is the largest type on a page with no H1 (decision 164) and currently sits bottom-left inside the single frame; over an irregular collage it needs a corner the composition leaves clear, or it moves out of the images entirely. Decisions **35**, **36**, **81** and **164** all get revised again.

---

## Log

Newest first. One entry per page-type completed: what was done, what was left as a gap, decisions taken, anything flagged.

### Publications listing rows — PA4 / PC2 (2026-09-09)

**Done:** PA4 drops the three-column `CardGrid`. Each record is a `LibraryRow` — compact Cover (`w-24`) beside a stacked column: author and languages as muted `text-xs`, title as `h2` between them. It leaves `DirRow`. Nine sampled rows and the overflow line stay. PC2 imports `LibraryRow` and drops `CardGrid`, so related titles match the library. Decision **191** logged and revised; **104**, **108**, **166** and **189** revised in place.

**Left undone:** N3 / N13 still use `CardGrid`. The N3 featured lead is a later unit. Author names are a stand-in — the live listing and detail do not publish them (decision 105).

**Decisions:** 191. Publications library listings are thumb LibraryRows (author · title · languages).

**Flagged:** Author on the library row is a reserved line, not live copy. Same gap as PC1's Author fill bar.

**Verified:** Type-check. No render-check — left for review in the browser.

### News N1: category as a filter, not tabs (2026-09-08)

**Done:** N1 drops the All / Announcements / News & Events tab row. Category and Programme sit as two FilterBar facets; “All” is gone because unfiltered is the default. `NewsLandingPage` no longer owns a category index; `filterNewsPosts` no longer cuts by tab. N2 reads “Showing N posts” with no tab scope, chips any applied filter, and says “no filters applied” when none are. N3 empty copy drops “switch back to All”. Decision **190** logged; **27** and **28** restored-and-revised; **78**, **115**, **116** and **124** revised in place.

**Left undone:** Nothing from this unit. FilterBar selection still does not drive the listing — the `filtered` / `empty` panel toggles do, same as Programme did before.

**Decisions:** 190. News category is a facet, not a tab row.

**Flagged:** The Announcements / News & Events list and the tagging model remain a client call.

**Verified:** Type-check. No render-check — left for review in the browser.

### Listing cards: h2 titles, three columns (2026-09-08)

**Done:** Shared `Card` titles are `<h2 className="text-2xl font-bold">` — Block's h3 visual, not Block's h2 and not `SectionHeading`. `titleClassName` is gone; HM4 drops its override. Listing and related `CardGrid`s (PA4, N3, AB9, PC2, N13, AB11) pass `cols={3}`; HM4 already did. AB7 and N14 stay four — they use `CardGrid` without `Card`. Related-strip Block headings stay `h2` at `text-3xl`, so card titles sit at the same rank as "Related posts" / "Related publications" / "Other past initiatives". No `titleAs` variant — standing constraint 4. Decision **189** logged; **167** revised in place; **182** caught up.

**Left undone:** Nothing from this unit.

**Decisions:** 189. Listing Card titles are h2 at Block-h3 size; listing grids are three columns.

**Flagged:** Card titles as `h2` match the related-strip heading rank. Verbatim reuse costs that collision; a fork would be the bug.

**Verified:** Type-check. No render-check — left for review in the browser.

### Home HM4 / HM5 / HM6 gap (2026-09-08)

**Done:** `Block` gains `looseAbove`. Client view raises HM5 and HM6's top frame margin from 3rem to 5rem, so the gaps HM4→HM5 and HM5→HM6 collapse to 5rem. HM2→HM4 stays 3rem. Review view is unchanged. Decision **188** logged; **175** noted.

**Left undone:** Nothing from this unit. Say if 5rem should go further.

**Decisions:** 188. Home HM4 / HM5 / HM6 sit 5rem apart.

**Flagged:** None.

**Verified:** Type-check. No render-check — left for review in the browser.

### HM6 Latest news heading (2026-09-08)

**Done:** HM6 drops `Block.heading` and renders `<SectionHeading>Latest news</SectionHeading>` as the first child, same helper as ProgramPage, HM4 and HM5. The inner `gap-6` column still owns rows-to-button. Decision **135** revised in place.

**Left undone:** Nothing from this unit.

**Decisions:** 135 revised — Home HM4 / HM5 / HM6 are `text-4xl` via `SectionHeading`.

**Flagged:** None.

**Verified:** Type-check. No render-check — left for review in the browser.

### Home strip headings and HM5 as one spotlight (2026-09-08)

**Done:** `SectionHeading` (`h2` + `.block-heading mb-2.5 text-4xl font-bold`) lives in `components/wireframe/SectionHeading.tsx`. ProgramPage drops its local helper. HM4 drops `Block.heading` and renders the helper as the first child (`mt-8` on CardGrid still collapses to a 2rem gap). HM5's title is a copy-column h2 with no kicker; inside `flex-col gap-6` the helper's bottom margin is omitted. HM5 takes one `HOME_SPOTLIGHT` — title Mawred's 20th, href `/mawreds-20th` — and drops `twentieth` / `HOME_FEATURE`. Campaign body stays fill bars. Home review toggle `twentieth` is gone from `states.ts`, `wireframe-state.tsx` and `StatePanel`; `staticfb` stays. The `/mawreds-20th` route stays as the stub destination. Decisions **44**, **82**, **133** and **135** revised in place.

**Left undone:** Nothing from this unit. Campaign copy is still not sourced.

**Decisions:** 44, 82, 133, 135 revised — the 20th is spotlight content, not a state; Home still reads `staticfb` only; programme section titles and Home HM4 / HM5 are `text-4xl`.

**Flagged:** Whether the 20th is a temporary campaign or something else stays a client call.

**Verified:** Type-check. No render-check — left for review in the browser.

### Home impact figures and action buttons (2026-09-08)

**Done:** HM2 drops the years-since-2003 rail and puts `~1,200` on grants awarded since 2003, leading the strip (`55` countries · `38` programmes & initiatives follow). HM4's heading-to-cards gap is 2rem (`mt-8` on `CardGrid`). HM5 Read more and HM6 All news take `self-start` so they hug the label instead of stretching in the flex column. Decision **187** logged; **131**, **37** and **185** revised in place.

**Left undone:** Nothing from this unit. The grant total is still not sourced.

**Decisions:** 187. Home action buttons hug their label; HM4's heading sits clear of the cards. 131 revised — placeholder `~1,200`, years rail gone.

**Flagged:** `~1,200` is invented for the wireframe. Replace it with a real Mawred-wide total when one exists.

**Verified:** Type-check. No render-check — left for review in the browser.

### HM1 positioning copy (2026-09-08)

**Done:** The hero line is the supplied copy: Culture Resource (Al-Mawred Al-Thaqafy) as a regional non-profit founded in 2003; "support artistic creativity" → Production Awards; "encourage cultural exchange" → Network; "More about us →" → Who We Are. Decision **186** revised in place; **42** caught up. The freedom-of-expression clause and the Grants vs Programs label leave this surface.

**Left undone:** Nothing from this unit. "Support artistic creativity" still lands on `/programs/production-awards` because there is no programmes index.

**Decisions:** 186 revised — linked phrases are now the supplied verbs and More about us.

**Flagged:** The creativity phrase is broader than Production Awards; same missing-index issue as before, now on a phrase that reads as the whole grants offer.

**Verified:** Type-check. No render-check — left for review in the browser.

### HM1 wayfinding in the positioning line (2026-09-08)

**Done:** The hero identity sentence is rewritten so Who we are, Grants & Opportunities and Mawred Network sit in the prose, each a 2px-underlined link at the same `text-2xl` as the rest of the line. `HOME_POSITIONING` is an array of text/link parts; `HOME_WAYFINDING` and the `Btn` row are gone. Decision **186** logged; **36**, **42**, **129** and **164** revised in place.

**Left undone:** Nothing from this unit. Graduating the line further stays a copy call; "Grants & Opportunities" vs "Programs" stays a client call. The first link still points at `/programs/production-awards` because there is no programmes index.

**Decisions:** 186. HM1 wayfinding sits in the positioning sentence.

**Flagged:** None.

**Verified:** Type-check clean. Eslint errors in SiteHeader and SectionNav are pre-existing. No render-check — left for review in the browser.

### Home hero and button refinements (2026-09-08)

**Done:** HM1 wayfinding moves into the positioning plate under the identity sentence; the row under the frame is gone. Home mounts HM1 outside `PageWidth` and pulls it into `main`'s top padding, so the frame fills the content column. `Block` gains `flushTop` to keep the 3rem gap to HM2. HM5 Read more and HM6 All news sit in `gap-6` columns so they cannot sit on the copy. Decision **185** logged; **164** revised in place; **36** and **42** caught up.

**Left undone:** Nothing from this unit. Real imagery and motion stay deferred.

**Decisions:** 185. HM1 is full-bleed to the content column. 164 revised — plate is sentence plus wayfinding. 36 and 42 revised so they do not still describe an empty corner and a row under the frame.

**Flagged:** None.

**Verified:** Type-check and eslint. No render-check — left for review in the browser.

### HM4 card layout (2026-09-08)

**Done:** Status `Badge` moves under the descriptor so a wrapping chip does not push titles out of line. `Badge` is `inline-block max-w-full` so a two-line chip is one box. Programme names are `text-2xl` like HM6's `DirRow`. `CardGrid` takes optional `cols`; HM4 passes `3` so the three open calls fill the row. Decision **184** logged; **40** and **167** revised in place.

**Left undone:** Nothing from this unit.

**Decisions:** 184. HM4 chips sit under the descriptor; three cards fill the row. 40 revised — empty fourth column set aside. 167 revised — `cols` optional; listings stay four.

**Flagged:** None.

**Verified:** Type-check and eslint. No render-check — left for review in the browser.

### HM4 as open grants and opportunities (2026-09-08)

**Done:** HM4 leaves the all-four programmes overview and becomes spec §3C's open-calls strip. `HM4ProgrammesOverview` is renamed `HM4OpenOpportunities`; heading is Grants & opportunities. `HOME_PROGRAMMES` / `ProgrammeOverview` become `HOME_OPPORTUNITIES` / `HomeOpportunity` with required `status`. Abbara drops off — call closed July 2025 — so the grid is Production Awards, Wijhat and Stand for Art. Shared `Card` + `CardGrid` stay; the fourth column is empty until another call opens. Spec §3D stays dropped. `nocalls` stays retired. Jobs stay on About. Decisions **39**, **40** and **132** revised in place; **130** caught up so it does not still describe four chipless cards as the empty.

**Left undone:** Nothing from this unit.

**Decisions:** 39 revised — impact still sits above HM4; the ask is the open grants. 40 revised — HM4 is the open-calls strip, not the all-four overview. 132 revised — `HOME_OPPORTUNITIES` is the only surface; closed programmes are not listed. 130 caught up.

**Flagged:** HM1's first wayfinding link still points at `/programs/production-awards` because there is no programmes index. With HM4 now the grants-and-opportunities strip, that link still wants an in-page target or a real index route — its own unit, carried forward.

**Verified:** Type-check and eslint. No render-check — left for review in the browser.

### In-flow mobile menu (2026-09-08)

**Done:** Below `lg`, the burger toggles one UtilityBar + `NavList` block in flow under the logo/burger row. Invert fill when open (same as the cog); no separate Close. Dropped the `fixed inset-0` overlay, body scroll lock, and overlay `pr-14`. Escape and pathname-change close stay. Header wrapper's bottom rule still divides header from main. `layout.tsx` unchanged. Decision **183** revised in place (overlay set aside); **154** pointer updated. Standing constraint 2 and the AGENTS chrome line catch up.

**Left undone:** Nothing from this unit.

**Decisions:** 183 revised — in-flow expand; overlay set aside.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### Mobile site chrome (2026-09-08)

**Done:** Below `lg` the shell is stacked header → main → footer: no two-column flex, no sticky header, no rail-edge left border (header takes a 1px bottom rule). From `lg` the sticky rail stands. The bar is logo + burger; Search and EN / ع live in a full-screen overlay that reuses UtilityBar and the existing `<details>` nav. Close on Close, Escape, and pathname change. Header and overlay take `pr-14` so they clear the state-panel cog. Decision **183** logged; **154** revised in place; 167 and 182 noted that CardGrid / listings do not reflow. Standing constraint 2 and the AGENTS chrome line catch up.

**Left undone:** Footer row, `PageWidth` padding, and CardGrid stay as they are — chrome only.

**Decisions:** 183 — mobile chrome is a stacked header and a burger overlay. 154 revised — sticky rail from `lg`; stacked header below.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### PB2 video grid (2026-09-08)

**Done:** PB2 takes a `layout` prop (`row` | `grid`). Mudawanat stays four stacked audio embeds; Foundations of Cultural Policies and Mawred Talks render eight video embeds in a local two-column grid (`grid-cols-1 md:grid-cols-2`), not `CardGrid`. Video `Embed` is `aspect-video` (16:9); audio stays `h-[58px]`. `SeriesPage` derives layout from `kind`. Working loop: agents no longer render-check — logged in `AGENTS.md` and `.cursor/rules/no-browser-checks.mdc`. Decision **182** logged, then revised in place from four columns to two (one on mobile). Decision **65** revised in place.

**Left undone:** Nothing from this unit. Browser review of the three series pages is yours.

**Decisions:** 182 — PB2 video series are a two-column grid, one column on mobile. 65 revised — video is 16:9; audio stays a fixed height.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### `cn` for className merging (2026-09-08)

**Done:** `cn` (the `tailwind-merge` + `clsx` replacement) is a dependency, imported directly as `import { cn } from 'cn'` — no `lib/utils.ts` wrapper, since this isn't a shadcn/ui project and the package is the helper. Eleven files drop hand-rolled class joining for it: `PageWidth` and `Field` (optional-`className` concat), `Btn` (array + `filter(Boolean)` + `join`), `SiteHeader` (`navItemClass` join, plus the summary's template wrap), `Block`, `Card`'s `Cover`, `Embed`, `Timeline`, `StatePanel`, `N5PrevNext` and `N10Schedule`. Static `className="…"` strings and whole-string ternaries that pick one list or the other — `Accordion`, `Tabs`, `Figs` — are left alone; those aren't joins.

**Left undone:** Nothing from this unit.

**Decisions:** None — tooling, not a layout call, so nothing appended to Wireframe Passes.

**Flagged:** Conflict resolution changes two rendered outputs, both toward what the code already intended. A **disabled `Btn`** emitted `cursor-pointer` and `cursor-not-allowed` together, and `.cursor-pointer` is defined later in the compiled sheet, so the pointer cursor won; `cn` now drops it and the not-allowed cursor applies (visible on N4's ellipsis and on C7 in the `closed` state). A **primary `Btn`** emitted `border` and `border-2` together; `cn` keeps only `border-2`, which is what already rendered — `.border-2` is defined after `.border` — so decision 57's 2px is unchanged. Also noticed in passing: `N10Schedule` has no consumer anywhere in the app.

**Verified:** `tsc --noEmit` clean, no lint errors, and every route in the registry still returns 200 with the converted class strings intact in the rendered HTML. **Not checked in a browser** — the visual pass is the reviewer's.

### Network browse toolbar (2026-09-08)

**Done:** The Network directory's browse chrome collapses from roughly 250px to one toolbar. MN3's search field no longer takes a row of its own — `FilterBar` gained an optional `lead` slot, so the field, the Search button and the five facet triggers sit on one wrapping row at `px-2.5 py-1`, still at `text-sm`. `Btn` and `Field` take an opt-in `compact`; the facet trigger is compact unconditionally, so PA2 and N1 tighten with it, and Sort / Clear all in MN4, PA3 and N2 take `compact` too. `CountRow` is untouched. The entity tabs move from MN5 into MN4, which is now the listing header — tabs, then count · chips · sort — with `onTabSelect` rewired in `DirectoryPage`. Block gaps stay at the site-wide 3rem — the plan's `tightBelow` on MN3 and MN4 was tried and dropped, since the saving is in the control row and the tab move, and 1rem gaps crowded the three blocks into one slab. Decisions **180** and **181** logged; 19, 20, 175 and 178 noted, none revised. Content-map MN3 / MN4 / MN5 rows and the MN3 / MN5 hints catch up.

**Left undone:** Nothing from this unit. The content-map MN3 row still describes the pre-168 "six plus Show all N" facet panel — stale from an earlier pass, not touched here.

**Decisions:** 180 — browse controls are one compact row. 181 — entity tabs sit in MN4, above the count they scope.

**Flagged:** None.

**Verified:** Type-check and lint only (`tsc --noEmit` clean; the remaining Tailwind warnings on `FilterBar` and `Field` are pre-existing arbitrary values). **Not checked in a browser** — the visual pass is the reviewer's.

### C7 in the sticky band (2026-09-07)

**Done:** C7 leaves the Application heading row and sits in the sticky page-header band, right of the H1 and section nav (`flex` / `self-center`). Apply now is visible from the first paint and stays there through About / Application / Past / FAQs. Same on all four programmes. C7 no longer has a `float-right` / `top-(--band-h)` offset of its own. Decision **159** revised in place; **137**, **141**, **139**, **145**, **152**, **153**, **174**, **176** catch up. Standing constraint 2 and content-map placement lines catch up.

**Left undone:** Nothing from this unit.

**Decisions:** 159 revised — C7 sits in the sticky band, not on the Application heading.

**Flagged:** None.

**Verified:** Headless Chrome, 1440×900, all four programme routes, codes-off. One "Apply now" on each, in the sticky band (before `#about`, not inside `#application`). Button sits right of the H1 and overlaps the title/nav cluster (`top: 74px`); after scrolling ~2000px the button, H1 and nav stay at the same viewport positions while the Application heading has scrolled away. Home and Who We Are have no Apply now.

### Page-end site footer (2026-09-07)

**Done:** `SiteFooter` leaves the sticky rail and mounts after `main` in the content column. The column wrapper carries the 1px left border so it runs through the footer; the rail is header only (logo, search, nav). Footer is a full-bleed top rule with inner `PageWidth`: Newsletter popup, Social placeholder, copyright, as a row. Short pages still close at the bottom of the column. Decision **179** logged; **154** revised in place. Standing constraint 2 and AGENTS chrome lines catch up.

**Left undone:** Nothing from this unit.

**Decisions:** 179. Site footer sits under main, not in the rail. 154 revised.

**Flagged:** None.

**Verified:** Curl against `/` and `/programs/wijhat`. Footer is a sibling of `main` in the content column; the rail contains only `SiteHeader`.

### Wijhat C5 covered costs as text (2026-09-07)

**Done:** Wijhat's Travel grant C5 record drops its five-item bullet list. The costs render as comma-separated `body` under the label — same C5 shape as Production Awards' grant descriptions. Abbara and Stand for Art keep `items` for longer provisions. Decision **86** revised in place.

**Left undone:** Nothing from this unit.

**Decisions:** 86 revised — five short cost types are a sentence, not a list.

**Flagged:** None.

**Verified:** Curl against `/programs/wijhat`.

### S5–C6 highlight stack gap is 1rem (2026-09-07)

**Done:** When S5 closes on a highlight and C6 follows, S5 takes `tightBelow` so client view uses 1rem between the two grey fills — the same `mt-4` as tabs-to-highlight — instead of the 3rem block-frame gap. C6 stays its own block. Abbara's C6 (after C5) is untouched. Decision **178** logged; **175** and **177** noted.

**Left undone:** Nothing from this unit.

**Decisions:** 178. Stacked application highlights share the in-block 1rem gap.

**Flagged:** None.

**Verified:** Curl against `/programs/wijhat` (S5 carries `block-tight-below`) and `/programs/abbara` (C6 not preceded by S5).

### Wijhat Application highlights sit last (2026-09-07)

**Done:** S5's save-and-return highlight moves after the tabs, immediately before C6. C4's confidentiality highlight moves after the steps, documents and `note`. S6's notes were already last in the block. Decision **177** revised in place as the placement rule; **88** and **91** catch up. Standing constraint 2 records it.

**Left undone:** Nothing from this unit.

**Decisions:** 177 revised — in-block application highlights sit last in their parent. 88 and 91 revised.

**Flagged:** None.

**Verified:** Curl against `/programs/wijhat` and `/programs/stand-for-art`.

### Wijhat Application highlights (2026-09-07)

**Done:** S6's lead takes `mb-4` so it sits clear of the KV rows. S6's three schedule notes wrap in the same `bg-neutral-200` padded band as C6, at body size. S5's save-and-return / purpose sentence leaves `core` for an optional `highlight` in that same treatment, still above the tabs and before C6. Decision **177** logged; **88** and **89** revised in place.

**Left undone:** Nothing from this unit.

**Decisions:** 177. S6 notes and S5's save-and-return line are in-block grey highlights. 88 and 89 revised.

**Flagged:** None.

**Verified:** Curl against `/programs/wijhat` Application section.

### Programme page section nav tracks the active section (2026-09-07)

**Done:** `SectionNav` is a client component. An IntersectionObserver over the section elements (`rootMargin: '-112px 0px -60% 0px'`) marks the topmost intersecting section in items order. Each link holds a `→` in an always-occupied slot, `invisible` unless active; the active link takes `aria-current="true"`. Default active is the first item. The effect keys off the joined item ids. Decision **174** revised in place; **176** logs the Unit 1 `pt-15` sticky alignment.

**Left undone:** Nothing from this unit.

**Decisions:** 174 revised — IntersectionObserver active state. 176. Sticky nav aligns with the rail's 60px inset.

**Flagged:** As found at the start of this unit, the sticky wrapper includes `PageHeaderBand` and has no `pt-15`. Decision 176 records the Unit 1 alignment (`pt-15`, band scrolls away). Not restored here.

**Verified:** Curl against the four programme routes. Each nav link is `flex items-center gap-2` with an always-present `→` (`invisible` on inactive); About has `aria-current="true"` on first paint. Observer behaviour and the stuck-state arrow left for review in the browser.

### Programme page heading, sticky alignment, section spacing (2026-09-07)

**Done:** About's h2 is `sr-only` again; Application, Past and FAQs keep visible headings. Sticky nav wrapper is `sticky top-0 z-20 bg-white pt-15` so the bar aligns with the rail's 60px inset. Sections take `scroll-mt-28`; C7 is `sticky top-28`. Section padding halved (`py-8` / `pb-8` / `pt-8`). Decision **172** revised in place (About `sr-only`; 2rem section padding); **159** revised (C7 `top-28`); **135** and **153** catch the About heading. Standing constraint 2 catches up.

**Left undone:** Unit 2 — IntersectionObserver active state on the nav (decision 174's set-aside; 176 for the `pt-15` alignment). `.block-frame` 3rem gap (decision 175) unchanged.

**Decisions:** 172 revised — About `sr-only`; section padding 2rem; `scroll-mt-28`. 159 revised — C7 `top-28`. 135 and 153 revised for the About heading.

**Flagged:** The first block in each section still carries its full 3rem top margin, because `.page-width > .block-frame:first-child` in `globals.css` cannot match when a heading is the actual first child. Pre-existing, not caused by this pass — worth a look once the sections are tighter.

**Verified:** Curl against all four programme routes. About is `<h2 class="sr-only">About</h2>` on each; Application / Past / FAQs keep `.block-heading`. Page sections are `scroll-mt-28` with `pb-8` / `py-8` / `pt-8`; C7 wrapper is `sticky top-28`; nav wrapper is `sticky top-0 z-20 bg-white pt-15`. No leftover `scroll-mt-24` or `sticky top-20`. Sticky alignment and C7 offset in the stuck state left for review in the browser.

### Block-frame gap is 3rem (2026-09-07)

**Done:** `body.codes-off .block-frame` `margin-block` is `3rem`. Site-wide. Decision **175** logged; **135** revised in place.

**Left undone:** Knock-on across Home, About, News, Publications and Network left for review in the browser.

**Decisions:** 175. Block-frame gap is 3rem in client view.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### Programme page sticky section nav (2026-09-07)

**Done:** `SectionNav` is a `→` plus About / Application / (Past when shown) / FAQs anchors. Sticky at `top-0` as a direct child of `main`; crumb and H1 scroll away. `html` is `scroll-smooth`; sections take `scroll-mt-24`. C7's sticky offset is `top-20`. Decision **174** logged; **159** revised in place.

**Left undone:** No active-on-scroll tracking — all links sit at the same weight.

**Decisions:** 174. Programme pages have a sticky in-page nav. 159 revised — C7 `top-20`.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### Programme sections are full-bleed rules; Contact folds into FAQs (2026-09-07)

**Done:** Each programme section is a full-width `<section>` with `border-b` and `py-16` (About `pb-16`; FAQs `pt-16`, no border), content in `PageWidth`. Overview's `sr-only` h2 is a visible "About". C12 renders "If you have more questions, email us at {address}" and mounts under C11 inside FAQs. Per-block wrapper divs are gone. Decisions **172** and **173** logged; **135** and **153** revised in place. Standing constraint 2 and content-map C12 rows catch up.

**Left undone:** Nothing from this unit.

**Decisions:** 172. Programme sections are full-bleed rules with inner `PageWidth`. 173. Contact is a sentence under FAQs. 135 and 153 revised.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### Main left border; PageWidth wrapper (2026-09-07)

**Done:** `main` has `border-l border-black` and vertical padding only. `max-w-300` and horizontal padding move to shared `PageWidth`. Every page shell wraps in it; programme pages mount more than one. `.block-frame` first/last-child rules retarget from `main` to `.page-width`. Decision **171** logged; **154** revised in place. Standing constraint 2 and AGENTS.md chrome line catch up.

**Left undone:** Nothing from this unit.

**Decisions:** 171. Main carries a left border; page width lives in `PageWidth`. 154 revised.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### AB7 people groups are four-column CardGrid (2026-09-07)

**Done:** AB7 leaves the local `minmax(165px)` auto-fill for shared `CardGrid`. Four cards fill the row; Team's four sit as one row. Decision **167** revised in place.

**Left undone:** Nothing from this brief.

**Decisions:** 167 revised — AB7 is a CardGrid consumer.

**Flagged:** None.

**Verified:** Curl against `/about/our-team`. Three `grid-cols-4` CardGrids (Team, Board, Assembly), 19 covers, no leftover `minmax(165px)` / `auto-fill`. Not click-tested in a browser — no browser tool in this session.

### AB7 people photos are portrait Cover (2026-09-07)

**Done:** AB7 drops the local `h-[105px]` photo box and uses shared `Cover` with `photo` / `default avatar` labels. Same 3:4 footprint as publication covers and MN6. Decision **166** revised in place.

**Left undone:** Nothing from this brief. AB7's `minmax(165px)` auto-fill grid is unchanged.

**Decisions:** 166 revised — AB7 is a Cover consumer.

**Flagged:** None.

**Verified:** Curl against `/about/our-team`. 19 people cards, 19 `aspect-3/4` covers (15 `photo`, 4 `default avatar`), no leftover `h-[105px]`. Grid still `minmax(165px)`. Not click-tested in a browser — no browser tool in this session.

### C4 step cards are full-width, number and headline inline (2026-09-07)

**Done:** `C4ApplySteps` stacks each step as a full-width card. Index and label sit on one `text-xl font-bold` line; detail stays under them. Nested S5 use picks it up. Decision **170** logged; **141** revised in place. Content-map C4 rows catch up.

**Left undone:** Nothing from this brief.

**Decisions:** 170. C4 step cards are full-width, with index and label on one line. 141 revised.

**Flagged:** None.

**Verified:** Curl against the running dev server. `/programs/production-awards` four C4 cards, each `1 Label` on one `text-xl font-bold` line; `/programs/abbara` three; `/programs/stand-for-art` two; `/programs/wijhat` two nested cards on the Individual path (Group is client-only). No leftover `minmax(210px)` grid. Not click-tested in a browser — no browser tool in this session.

### Network directory sample is twelve per tab (2026-09-07)

**Done:** `NETWORK_ROWS` is twelve individuals and twelve organisations. Names and countries from the live community listing; involvement and discipline authored. The original four stay first so the filtered-state chips still land on a real row. MN5 hint, content-map, and decision **110** catch up; decision **169** logged.

**Left undone:** Still one populated record page (Al Kasaba); every row still links there. Involvement and discipline are not scraped from live records.

**Decisions:** 169. Directory listing sample is twelve rows per entity tab. 110 revised.

**Flagged:** None.

**Verified:** `/network` HTML shows 12 individual rows and “Showing 12 records in Individuals & Groups”. Organizations tab is client-only; its 12 rows are in `NETWORK_ROWS[1]` and were not click-tested (no browser tool in this session).

### Facet panels are combobox dropdowns (2026-09-07)

**Done:** Shared `FilterBar` opens each facet as an anchored dropdown with type-to-filter (when v > 12), a scrollable list of every value, real checkboxes, and a Clear footer when something is selected. `defaultOpenIdx` is gone — everything closed on first paint. PA2 and MN3 hints rewritten; N1 untouched. Decision **168** logged; **12** and **64** revised in place. Standing constraint 3 rewritten.

**Left undone:** MN3's separate `Search by name…` row is out of scope. Browser review left unverified.

**Decisions:** 168. Facet panels are anchored combobox dropdowns. 12 revised — facet truncation superseded. 64 noted — selection state joins open/close inside the primitive.

**Flagged:** None.

**Verified:** `npx tsc --noEmit` and `npm run lint` both clean. Not in the browser — left for review.

### CardGrid is four columns (2026-09-07)

**Done:** Shared `CardGrid` is `grid-cols-4` instead of `auto-fill` / `minmax(190px)`. Publications, news, initiatives, rosters, related strips, and HM4 follow. PA4's hint drops the reflow line. Decision **167** logged.

**Left undone:** Nothing from this unit.

**Decisions:** 167. CardGrid is four columns.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### Cover is portrait 3:4 (2026-09-07)

**Done:** Shared `Cover` uses `aspect-3/4 w-full` instead of `h-[120px]` / `h-[250px]`. Publication cards, related cards, the detail cover, news and initiative images, and MN6's photo/logo share the ratio. `tall` only drops the card margin. Decision **166** logged; **68** revised in place.

**Left undone:** Nothing from this unit.

**Decisions:** 166. Cover is portrait 3:4. 68 revised — one footprint, now the ratio.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### Publications nav drops Library / Series groups (2026-09-07)

**Done:** Publications in the rail is a flat dropdown like About and Grants: Research & Publications, Mudawanat Podcast, Foundations of Cultural Policies, Mawred Talks. The Library / Series group labels and the `groups` nav shape are gone. Decision **154** revised in place.

**Left undone:** Nothing from this unit. The four destinations stay; only the grouping labels left.

**Decisions:** 154 revised — Publications is a flat list.

**Flagged:** None.

**Verified:** Not in this session — left for review in the browser.

### Site-wide h2 matches programme sections (2026-09-07)

**Done:** Client-visible h2s use `.block-heading` at `text-2xl font-bold` everywhere, matching programme section titles (Application, Past, FAQs, Contact). `Block.heading` defaults to that size; AB2 Vision follows. Programme blocks that pass `headingAs="h3"` stay `text-lg`. Decision **135** revised in place; standing constraint 2 names the site-wide scale.

**Left undone:** Nothing from this unit. Stub page titles stay `text-lg` — they are not section headings.

**Decisions:** 135 revised — the About / Home / News / Publications exception is gone.

**Flagged:** None.

**Verified:** Type-check and eslint clean. Curl against the running dev server: Home Programmes / Latest news, Who We Are Vision / Mission / Values / History, Our Team groups, Supporters bands, Careers, news-post Share / Related, publication Related — all `h2` at `text-2xl font-bold`. Wijhat section titles stay `text-2xl`; programme block titles stay `h3` `text-lg`.

### Header — Figma 309:392 notes (2026-09-07)

**Done:** SiteHeader and UtilityBar follow the annotated header notes. Rail top inset is 60px to the logo; 40px logo to Search / EN / ع; 60px utility to nav; 28px between top-level items; 18px parent to first child; 12px between children. Search is a bordered control; language is two boxes (EN filled, ع bordered). Expandable triggers prefix `+` and switch to `-` when open. Hover, the current route, and an open parent are a black fill with white text that hugs the label. About is labelled About. Decision **154** revised in place; standing constraint 2 and the AGENTS chrome lines match.

**Left undone:** Search and language still do not switch anything — English-only this phase.

**Decisions:** 154 revised — spacing, lang boxes, +/− prefix, and black hover/active.

**Flagged:** The Figma hover example only lists three About children and shows Publications without a `+`. The live IA stays: five About links, and Publications' Library / Series groups (decision 154). The red notes are spacing and state, not a nav cut.

**Verified:** Type-check and eslint clean. Headless Chrome against the running dev server: `/` spacing is 60 / 40 / 60 / 28. Open About: parent fill black, `- About`, 18px to first child, 12px between children, 28px to Grants. `/about/who-we-are` — About and Who We Are black with white text; Our Team not filled. `/news` — News black, white text. `/publications/research` — Publications open, parent and Research filled. Search / EN / ع present. No "About Us" in the rail. No "EN | AR" chip.

### Home — overlapping collage rolled back (2026-09-07)

**Done:** Unit 7 of the Home rework is rolled back. HM1 is again one full-bleed frame (`aspect-[16/9]`, `min-h-[360px]`) with the positioning line inside it, bottom-left, and the frame-count note top-left. Placement fields leave `HOME_HERO_FRAMES`. `staticfb` returns — hero-only, switching the frame note. Decision **165** rolled back in place; **35**, **36**, **38**, **81**, **82** and **164** restored to their pre-collage revisions. The Positioning line Unit 7 added to AGENTS.md and standing constraint 1 is gone.

**Left undone:** Nothing from this rollback. Units 1–6 of the Home rework stand.

**Decisions:** 165 rolled back — the collage is gone. 35, 36, 38, 81, 82, 164 restored.

**Flagged:** Same as Unit 1: whether a funded work is credited in the frame, under it, or not at all; the Grants & Opportunities wayfinding link still points at Production Awards.

**Verified:** Type-check and eslint clean. Curl against the running dev server: `/` 200. One full-bleed frame (`1 of 5`), not five overlapping boxes. Positioning line present. No "overlapping collage".

### Home — HM1 as an overlapping collage (2026-09-07)

**Done:** Unit 7 of the Home rework, and the last unit in the plan. HM1's single `aspect-[16/9]` fill becomes a `relative` composition area holding five `absolute` fill boxes. Overlap is the point: each box keeps a 1px black border; `z` is explicit. Placement (`top` / `left` / `width` / `height` / `z`) lives on `HOME_HERO_FRAMES` beside the captions, so it is content, not component — not `Math.random()`. Nothing moves, so there is no sequence: `staticfb` retires from `lib/wireframe-state.tsx`, `components/StatePanel.tsx` and `lib/pages/states.ts`. The positioning line stays bottom-left of the composition, on the white plate at `z-50`, over a corner the frames leave clear (decision 164 revised rather than undone). The note top-left names the composition, not a count in a sequence. Captions still do not render — five overlapping frames cannot each carry a chip. Decision **165** logged; **35**, **36**, **38**, **81**, **82** and **164** revised in place. AGENTS.md permitted set and standing constraint 1 name `relative` / `absolute` / `z-*` where overlap is the point.

**Left undone:** Nothing from this plan. Flagged items below stay out of scope.

**Decisions:** 165. HM1 is an overlapping collage, not a sequence. 35 revised — no sequence at all. 36 revised — still no caption. 38 and 82 revised — `staticfb` retires. 81 revised — composition area, not a single fill. 164 revised — the line stays bottom-left over a reserved corner.

**Flagged:** Whether a funded work is credited at all remains open — captions stay in config, unrendered. HM1's first wayfinding link still points at `/programs/production-awards` because there is no programmes index. Block order is hero → stats → programmes → feature → news; the feature slot is Home's only editorial voice sitting fourth. HM2 has no heading.

**Verified:** Type-check and eslint clean. Curl against the running dev server: `/` 200. Codes HM1–HM2–HM4–HM5–HM6. Five overlapping fill boxes. Positioning line present. News as `DirRow`s (three titles, `border-b`). Status chips on Production Awards / Wijhat / Stand for Art; Abbara present without a chip. No "Currently open opportunities", no "Latest from Publications", no "All publications". Rail has no Mawred's 20th item. `staticfb` is not a panel toggle.

### Home — HM5 owns the 20th; nav item out (2026-09-07)

**Done:** Unit 6 of the Home rework. "Mawred's 20th" leaves the rail. `NavGroup.optional` and the dashed-border branch retire with it — it was the only optional item. `/mawreds-20th` stays as the campaign destination reached from HM5's `twentieth` branch; its stub message names the content gap rather than the nav question. HM5's hint now says this slot is the 20th's only home. Decision **44** restored-and-revised; **133** and **154** revised in place.

**Left undone:** Unit 7 of the same plan — HM1 as an overlapping collage. That unit decides whether `staticfb` still has a consumer.

**Decisions:** 44 revised — the rail item is gone; HM5 is the 20th's only home. 133 revised — same. 154 revised — the optional 20th item no longer stays.

**Flagged:** The permanent-vs-temporary question stays the client's; the structure no longer depends on the answer. Carried forward: HM1's first wayfinding link still points at `/programs/production-awards`; block order is hero → stats → programmes → feature → news.

**Verified:** Type-check and eslint deferred to Unit 7.

### Home — HM7 out (2026-09-07)

**Done:** Unit 5 of the Home rework. `HM7LatestPublications` is deleted and unmounted from `HomePage`; the HM7 code is not reused. `PubStripItem`, `HOME_PUB_STRIP` and `HOME_ALL_PUBLICATIONS_HREF` leave `lib/pages/home.ts`, and Home no longer reads from `lib/pages/publications.ts`. Publications has no Home surface — the library and the three series stay reachable from the rail. Spec §5's "every inner section is represented" no longer holds; logged as a client-visible departure. Decision **41** restored-and-revised; **129** caught up so it no longer names "All publications".

**Left undone:** Units 6–7 of the same plan. HM5's nav item and Unit 7 (HM1 as a collage) are untouched.

**Decisions:** 41 revised — the combined strip retires with the block.

**Flagged:** Publications now has no Home surface. Carried forward: HM1's first wayfinding link still points at `/programs/production-awards`; block order after the remaining cuts is hero → stats → programmes → feature → news.

**Verified:** Type-check and eslint deferred to the remaining units of this session.

### Home — HM6 as rows, no images (2026-09-07)

**Done:** Unit 4 of the Home rework. HM6 leaves `NewsCard` / `CardGrid` for the shared `DirRow` — title, date and category as `Badge`s, no image. Three real posts from the News sample still each link to their own route. N13 still reuses the feed card verbatim. Decision **43** restored-and-revised (it was in the missing 1–54 set, restored in the same form decision 33 uses); standing constraint 4 revised in place.

**Left undone:** Units 5–7 of the same plan. HM7, HM5's nav item and Unit 7 (HM1 as a collage) are untouched.

**Decisions:** 43 revised — Home is the exception to the verbatim-card rule; the News landing and N13 keep the feed card.

**Flagged:** None new. Carried forward: HM1's first wayfinding link still points at `/programs/production-awards`; block order after the remaining cuts is hero → stats → programmes → feature → news.

**Verified:** Type-check and eslint deferred to the remaining units of this session.

### Home — HM3 folds into HM4 (2026-09-07)

**Done:** Unit 3 of the Home rework. `HM3OpenOpportunities` is deleted and unmounted from `HomePage`; the HM3 code is not reused. HM4 takes the open-call card: shared `Card` + `CardGrid`, `Badge` holding `programme.status` when present, descriptor in the footer. The `Programme` eyebrow and the `Cells` row are gone. `OpenCall` / `HOME_OPEN_CALLS` deleted from `lib/pages/home.ts`. `nocalls` retires from `lib/wireframe-state.tsx`, `components/StatePanel.tsx` and `lib/pages/states.ts` — with status on the card, "nothing open" is four cards with no chips, so spec §3C's empty is dissolved rather than unwired. HM4 was the last `Cells` consumer, so `components/wireframe/Cells.tsx` is deleted and the stale HM4 note in AB3 is gone. Decisions **39** and **40** restored-and-revised (both were in the missing 1–54 set, restored in the same form decision 33 uses); **80**, **130** and **132** revised in place (149, 160 and 82 caught up so they do not silently contradict).

**Left undone:** Units 4–7 of the same plan. HM6, HM7 and HM5's nav item are untouched; Unit 7 (HM1 as a collage) is still queued, and that unit decides whether `staticfb` still has a consumer once the hero's sequence is reconsidered.

**Decisions:** 39 revised — impact still sits above the programmes grid; HM3 retires. 40 revised — HM4 takes the cards; the two-strip distinction is gone. 80 revised — Cells retires, no consumers. 130 revised — `nocalls` retired. 132 revised — `HOME_PROGRAMMES` is the only surface.

**Flagged:** HM1's first wayfinding link still points at `/programs/production-awards` because there is no programmes index, and with HM4 now carrying all four programmes on the page that link probably wants an in-page target or a real index route — its own unit, carried forward from Unit 1. Also carried forward from the plan, unfixed here: block order after the remaining cuts is hero → stats → programmes → feature → news, and the feature slot is Home's only editorial voice sitting fourth.

**Verified:** Type-check and eslint clean. Curl against the running dev server: `/` 200. HM3 is gone. HM4 is four cards (Production Awards, Wijhat, Stand for Art, Abbara) with status badges on the first three and none on Abbara; no `Programme` eyebrow; no Cells row. `nocalls` is not a panel toggle. `/about/who-we-are` AB3 still four numbered cards.

### Home — HM2 is the stat strip only (2026-09-07)

**Done:** Unit 2 of the Home rework. HM2 drops the mosaic grid and the `staticfb` `Banner` fallback; `<Figs wide />` is the whole block. `HOME_MOSAIC` and `MosaicTile` are deleted from `lib/pages/home.ts`. The `00` grants awarded since 2003 rail moves last in `HOME_FIGURES` so the strip does not open on a blank; the gap stays visible (decision 131 unchanged). `staticfb` stays — it is now hero-only, switching HM1's frame note, and the panel note in `states.ts` says so. HM1's hint no longer claims the two blocks share imagery. Decisions **37** and **38** restored-and-revised (both were in the missing 1–54 set, restored in the same form decision 33 uses).

**Left undone:** Units 3–7 of the same plan. HM3, HM6, HM7 and HM5's nav item are untouched; Unit 7 (HM1 as a collage) is still queued, and that unit decides whether `staticfb` still has a consumer once the hero's sequence is reconsidered.

**Decisions:** 37 revised — the wall retires; HM2 is the figures only. 38 revised — the hero is the only place the faces-of-impact material appears; `staticfb` is hero-only.

**Flagged:** HM2 has no heading. Four large numbers under the hero may want one; left headingless for now. Which figures lead remains a client call — the `00` rail sits last as presentation, not a ranking of the sourced three. Also carried forward from the plan, unfixed here: block order after the remaining cuts is hero → stats → programmes → feature → news, and the feature slot is Home's only editorial voice sitting fourth.

**Verified:** Type-check and eslint clean. Curl against the running dev server: `/` 200. HM2 is the four figures in order (`55` countries · `38` programmes & initiatives · `23` years since 2003 · `00` grants awarded since 2003), labelled "Impact stat strip", with no mosaic grid and no static-fallback banner. HM1's hint no longer claims the two blocks share imagery. `staticfb` remains a client toggle on HM1 only.

### Home — HM1 reads as a hero; HM8 retires (2026-09-07)

**Done:** Unit 1 of the Home rework. HM1's marker bar is gone — the nine-pixel squares and the "auto-advance · click a marker to jump · pauses on interaction" line went with it, so nothing in the block reads as a slider control. The frame leaves its fixed `h-[300px]` for `aspect-[16/9]` with a `min-h-[360px]` floor, so it scales with the column and can't collapse. The positioning line moves off the row under the frame and into the frame, bottom-left, at `text-2xl font-bold` on a white plate, and is the only thing in that corner — the frame caption is not drawn. `HOME_HERO_FRAMES` keeps its five sourced captions, since they are what makes the frame count count something real, but HM1 doesn't render them. The row below the frame is now the wayfinding buttons only, and gains a third link — **Who we are** → `/about/who-we-are`. `HM8IdentityLeadIn` is deleted and unmounted from `HomePage`; `HOME_IDENTITY_TEXT`, `HOME_WHO_WE_ARE_HREF` and the `WHO_WE_ARE_INTRO` import are out of `lib/pages/home.ts`, so Home no longer reads from `lib/pages/about.ts`. The HM8 code is not reused. `staticfb` stays — it still switches HM1's frame note to the no-motion label and HM2 is still a consumer. Decision **164** logged; **35**, **36** and **42** restored-and-revised (all three were in the missing 1–54 set, restored in the same form decision 33 uses) and **81** revised in place.

**Left undone:** Units 2–6 of the same plan. HM2 still carries the mosaic and the `staticfb` banner fallback; HM3, HM6, HM7 and HM5's nav item are untouched.

**Decisions:** 164. The positioning line sits inside the hero frame. 35 revised — no marker bar, no controls. 36 revised — no caption is drawn. 42 revised — the identity lead-in retires into the hero. 81 revised — frame still local, new proportion.

**Flagged:** Whether a funded work is credited in the frame, under it, or not at all is now open — the captions are sourced and kept in config but not drawn, so restoring them is a one-line change if the credit turns out to be needed. The plan's "frame-count note stays top-left as review chrome only — a label, not a control" is read as a role change, not a visibility one: the note stays visible in client view, as every other placeholder-box label does (`Banner`, `Cover`). Hiding it would also leave the `staticfb` branch with no client-visible difference now that the marker bar is gone. Also carried forward from the plan, unfixed here: HM1's first wayfinding link still points at `/programs/production-awards` because there is no programmes index, and with HM4 carrying all four programmes on the page that link probably wants an in-page target or a real index route — its own unit.

**Verified:** Type-check and eslint clean. Render check deferred to the user in the app.

### Site — 16px body type (2026-09-06)

**Done:** Body is `1rem` (16px), not the port's `0.875rem` / `text-sm`. `text-sm` is remapped to `1rem` so chrome, cards and buttons that were matching the old body follow. `text-xs` stays 12px. Decision **163** logged; **58** revised in place.

**Left undone:** Nothing from this brief.

**Decisions:** 163. Body type is 16px.

**Flagged:** None.

**Verified:** Headless Chrome computed styles on `/programs/wijhat`. Body and C1 prose `16px`. Nav `text-sm` (`About Us +`) `16px`. `text-xs` labels still `12px`. H1 still `48px`. Compiled CSS has no `0.875rem`; `--text-sm` is `1rem`.

### Programs — S1 last in Overview (2026-09-06)

**Done:** Programme timeline sits at the bottom of Overview on every programme that has one. `ProgramPage` pulls S1 out of the overview bucket and mounts it after C5 (and after Abbara's C6, which still qualifies C5). Production Awards: C1–C2–C5–S1. Wijhat: C1–C2–S4–C5–S1. Abbara: C1–C2–S4–C5–C6–S1. Stand for Art has no S1 — rolling intake, no dates — so Overview stays C1–C5. Config arrays match the new order. Decision **162** logged; **153** revised in place.

**Left undone:** Nothing from this brief.

**Decisions:** 162. S1 sits last in Overview.

**Flagged:** None.

**Verified:** Headless Chrome against the running dev server. `/programs/production-awards` codes C1–C2–C5–S1 then C7–C4–C8–C9–C10–S2 then C11–C12; headings H1 → Overview (sr-only) → Available grants → Programme timeline → Application. `/programs/wijhat` C1–C2–S4–C5–S1 then C7–S6–S5–C6–C8–C9–C10 then C11–C12; Forms of support then Programme timeline. `/programs/abbara` C1–C2–S4–C5–C6–S1 then C7–C4–C8–C9–C10 then S3 then C11–C12; Forms of support then Programme timeline. `/programs/stand-for-art` still C1–C5 then C7–C4–C8–C9 then C11–C12 — no S1.

### Programs — S4 cards hug content (2026-09-06)

**Done:** S4 items leave the equal-width `minmax(210px)` grid. Each row is `flex flex-wrap`; each card is `w-fit max-w-full shrink-0` with the same `border border-black p-2.5` chrome and body type. Two sit on one line when they fit; otherwise they wrap. The term-row `Chip` exception is gone — Abbara's twelve disciplines are the same cards as Who is Abbara for / Where they work. Shared component, so Wijhat's three rows follow. Decision **160** revised in place.

**Left undone:** Nothing from this brief. C4 and C5 chips are unchanged.

**Decisions:** 160 revised — S4 items hug content; no chip size fork.

**Flagged:** None.

**Verified:** Headless Chrome at 1280px against the running dev server. `/programs/abbara` S4: flex wrap, every card `14px` / `10px` padding. Who is Abbara for — two cards wrap (659px then 801px, different tops). Disciplines covered — twelve cards, Cinema 71px wide, same type as the long cards, wrap onto a second line. Where they work — two cards share a line (125px + 549px). No `text-xs` Cinema chip. `/programs/wijhat` same chrome: Who is it for two-then-one; For what purpose four-then-one (Fairs 53px); From where to where three on one line. Production Awards and Stand for Art still have no S4. C4 grid and C5 amount chips untouched.

### Programs — Stand for Art, no S4, duplicates removed (2026-09-06)

**Done:** Unit 4 of the S4 plan, taken without the S4. Stand for Art gets no scope summary — the planned Who it's for / What counts as a risk / Where would have restated C1's risk list and two C8 items one screen higher, which is what the Production Awards rollback settled. Four restatements come out instead: C1's second paragraph drops its closing sentence (the two ways an applicant can be at risk, already in paragraph one — the five risk types stay); C4 drops "Complete it in Arabic" as a step, so it is two steps and the rule stays as C8's condition; C9's label loses ", and it sets the form of support", which the lead says in full; C11's organisations answer keeps only the redirect, since C8 carries the individuals-only clause verbatim. Config-only — no component change, since Stand for Art has no `hero`. Decision **161** logged; **94**, **139** and **160** revised in place. The plan is closed: S4 is Wijhat and Abbara only.

**Left undone:** Nothing from this plan. The cross-programme version of the same problem is not touched — see Flagged.

**Decisions:** 161. Stand for Art gets no S4; the page's restated facts are removed instead.

**Flagged:** The Arabic-except-English rule is stated twice on **Wijhat** (both S5 path steps and a C8 item) and on **Abbara** (C4's step detail and a C8 item). Production Awards states it once. Whether that rule's home across the kit is the apply step or the C8 condition is a unit of its own, not a call to make inside a Stand for Art pass.

**Verified:** Curl against the running dev server. `/programs/stand-for-art` headings: H1 → Overview (sr-only) → Forms of support → Application → How to apply → Conditions / exclusions → How applicants are selected → Frequently Asked Questions → Contact. Codes C1–C5 then C7–C4–C8–C9 then C11–C12 — no S4. C1's second paragraph ends at "legal or illegal means"; "expression and production" is gone. C4 has two step cards, no "Complete it in Arabic", with the documents list, highlight and note intact. C8 five items, still including the Arabic rule. C9 label "Steering committee — six members". The organisations FAQ answer is the redirect only. Wijhat (C1–C2–S4–S1–C5 …) and Abbara (C1–C2–S4–S1–C5–C6 …) still own S4; Production Awards still has none. Type-check clean.

### Programs — Production Awards S4 rolled back (2026-09-06)

**Done:** Production Awards S4 is gone. Who-submits and funds-in-the-region return to C8 (six items → eight). Under 35 and Arab origin stay in C1. Birth-year range stays omitted. Overview is C1–C2–S1–C5 again. Decisions **85**, **139**, **158**, **160** revised in place to record the rollback.

**Left undone:** Unit 4 of the same plan (Stand for Art S4) is not started. Production Awards does not get another S4 pass — the reserved shape is closed as not belonging on this page.

**Decisions:** 158 rolled back — the reserved "Who is eligible" S4 restated facts that already live in C1 and C8.

**Flagged:** None new.

**Verified:** Curl against the running dev server. `/programs/production-awards` headings: H1 → Overview (sr-only) → Programme timeline → Available grants → Application → How to apply → Conditions → Selection → Contract → Downloads → FAQs → Contact. Codes C1–C2–S1–C5 then C7–C4–C8–C9–C10–S2 then C11–C12. No S4, no Who can apply / Who submits / Where the funds are spent, no January 1992. C8 eight items again, including funds-in-the-region and who-submits. Wijhat and Abbara still own S4.

### Programs — Production Awards S4 (2026-09-06)

**Done:** Production Awards gains S4 — the titled "Who is eligible" shape decision 158 reserved. Three stacked rows after C1 + C2: Who can apply (Arab origin wherever they live; under 35; born January 1992 – December 2011); Who submits the application (five roles by discipline); Where the funds are spent (in, or for the benefit of, the Arab region). No disciplines cell — C5 already lists the five grants. C8 loses the who-submits line and the funds-in-the-region item (eight items → six). Under-18 extra documents stay in C8. C1 keeps "under 35" and "of Arab origin" as prose. Overview is C1–C2–S4–S1–C5. Decisions **85**, **139**, **158**, **160** revised in place.

**Left undone:** Unit 4 of the same plan (Stand for Art S4). Stand for Art still has no S4.

**Decisions:** 158 closed — the reserved S4 is on the page as three untitled rows, not a fourth section. 85, 139, 160 revised.

**Flagged:** Whether the birth-year range should be published at all, given it shifts every round. Recorded in the content map as a finding.

**Verified:** Curl against the running dev server. `/programs/production-awards` headings: H1 → Overview (sr-only) → Who can apply · Who submits the application · Where the funds are spent → Programme timeline → Available grants → Application → How to apply → Conditions → Selection → Contract → Downloads → FAQs → Contact. Codes C1–C2–S4–S1–C5 then C7–C4–C8–C9–C10–S2 then C11–C12. Nine S4 cards (3 + 5 + 1), no chips, no Disciplines covered, no At-a-glance, no `grid-cols-2`. Birth-year present. C8 six items — no who-submits line, no funds-in-the-region; under-18 stays. C5 still five grants. `/programs/wijhat` unchanged (three S4 rows + Travel grant C5). `/programs/abbara` unchanged (Who is Abbara for · Disciplines covered chips · Where they work). `/programs/stand-for-art` still has no S4.

### Programs — Abbara S4/C3 retire (2026-09-06)

**Done:** Abbara's S4 drops the support cell (pure C5 duplicate) and gains Disciplines covered (twelve chips) and Where they work (two cards) from C3. Who-can-apply is dropped — it restated "Who is Abbara for". C3's remaining three facts move into C8: budget band fused with years operating as the live page has it, plus registration and previous-beneficiary. C8 goes from six items to nine. `C3AtAGlance`, the `C3flat` config arm, and the ProgramPage cases are deleted. The C3 code is not reused. Overview is C1–C2–S4–S1–C5–C6. Decisions **85**, **97**, **98**, **140**, **158** revised in place; **61**, **139**, **145**, **153**, **160** also revised so they are not silently contradicted.

**Left undone:** Units 3–4 of the same plan (Production Awards S4; Stand for Art S4). Production Awards' titled "Who is eligible" S4 is still reserved.

**Decisions:** 85, 97, 98, 140, 158 revised — C3 retires; S4 is Abbara's scope summary; C5 is what you get; C8 takes the rules.

**Flagged:** Whether the US$50,000–500,000 gate should be stated somewhere prominent — it is a hard eligibility bar published only inside a prose bullet on a secondary tab. Recorded in the content map as a finding. The `?Who is Abbara for` CMS artifact stays dropped.

**Verified:** Curl against the running dev server. `/programs/abbara` headings: H1 → Overview (sr-only) → Who is Abbara for · Disciplines covered · Where they work → Programme timeline → Forms of support → Application → How to apply → Conditions → Selection → Contract → Abbara organisations by round → FAQs → Contact. Codes C1–C2–S4–S1–C5–C6 then C7–C4–C8–C9–C10 then S3 then C11–C12. No At-a-glance, no Who can apply, no support cell, no Budget band label, no `grid-cols-2`. Twelve discipline chips (Cinema … Research). C8 nine items, fused budget+years first. C5 still four records with €22,000. `/programs/wijhat` unchanged (three S4 rows + Travel grant C5). Production Awards and Stand for Art still have no S4 and no C3.

### Programs — Wijhat S4/C5 (2026-09-06)

**Done:** S4 is stacked full-width rows: `h3` label, optional lead, items as wrapping cards reusing C3's chrome. A row whose items are single terms renders as chips. The string `HeroCell` variant and its Fill fallback are gone. Wijhat's "The grant" cell leaves S4 for a single-record C5 (Travel grant, Up to €7,000, five covered costs). Remaining S4 rows — Who is it for, For what purpose (keeps "To take part in:"), From where to where — unchanged in content. Overview is C1–C2–S4–S1–C5. Decision **160** revised; **86** overturned in place; **80** revised; **140** noted.

**Left undone:** Units 2–4 of the same plan (Abbara + C3 retire; Production Awards S4; Stand for Art S4). Abbara's S4 picks up the stacked-card layout from the shared component; its content is unchanged this unit.

**Decisions:** 160 revised — S4 rows are stacked, items as cards, taxonomy as chips. 86 overturned — Wijhat gets a single-record C5.

**Flagged:** None.

**Verified:** Curl against the running dev server. `/programs/wijhat` — S4 is three stacked rows (Who is it for · For what purpose · From where to where), items as `minmax(210px)` cards, "To take part in:" lead kept, no "The grant" cell, no `grid-cols-2`. C5 after S1: "Forms of support" / Travel grant / Up to €7,000 / five covered costs; no no-amount hint. `/programs/abbara` — same stacked-card S4, two rows, content unchanged. Production Awards and Stand for Art have no S4 and no Wijhat C5. Headless Chrome dump-dom hung; markup confirmed from the served HTML.

### Programs — S4 2-up titled cells (2026-09-06)

**Done:** S4 leaves shared `Cells`. Cells are a `grid-cols-2` with `gap-8` and no card borders. Each label is an `h3` at `text-lg font-bold` (same size as programme block titles); lists and leads inherit body type. Same on Wijhat (four cells, two rows) and Abbara (two cells, one row). HM4 stays on Cells. Decision **160** logged; **80** and **149** revised in place.

**Left undone:** Nothing from this brief.

**Decisions:** 160. S4 is a 2-up gapped grid; cell labels are h3s.

**Flagged:** None.

**Verified:** Skipped — review in the app.

### Programs — C7 on the Application heading (2026-09-06)

**Done:** C7 floats right of the Application h2 and is `sticky top-4`, so the button shares that row and stays in view after the heading scrolls away, through Past / FAQs / Contact. Same on all four programmes. C4 drops `withRepeat` — one Apply now. C7's Block is `flush` so codes-off margin does not drop it off the heading line. Decision **159** logged; **137**, **141**, **153** revised in place.

**Left undone:** Nothing from this brief.

**Decisions:** 159. C7 sits on the Application heading row and stays sticky.

**Flagged:** None.

**Verified:** Headless Chrome, 1440×900, all four programme routes, codes-off. One "Apply now" on each (C4 repeat gone). Application h2 and C7 share a row (same top); heading text left, button at the right of main. After scrolling past the heading, C7 sticks at `top: 16px` while the h2 is offscreen; still there at FAQs / Contact.

### Production Awards — drop C3 + live map (2026-09-06)

**Done:** `PRODUCTION_AWARDS` no longer mounts C3. Overview is C1–C2–S1–C5. The leftover three cards (eligibility, disciplines, grant period) repeated C1, C5 and C10. `C3AtAGlance` stays; Abbara is the remaining consumer. Content-map now has a live-tab → wireframe inventory (About / Guidelines / FAQs) recording every move, compression and omission — source for a later client note. Decision **158** logged; **85**, **140**, **145** revised in place.

**Left undone:** A titled "Who is eligible" section (S4 is the reserved shape). Birth-year range, ethnicity/citizenship, the five who-submits roles, and the three under-18 files stay compressed or omitted until that section exists.

**Decisions:** 158. Production Awards drops C3.

**Flagged:** The live Guidelines "Who is eligible" section is the largest compression on the page — it has no titled home. The inventory names what was cut so a client note can be written from the content map without re-reading the live tabs.

**Verified:** Curl against the running dev server. Production Awards headings: H1 → Overview (sr-only) → Programme timeline → Available grants → Application → How to apply → Conditions → How applicants are selected → Contract → Downloads → FAQs → Contact. No "At-a-glance", no "Disciplines covered", no "Grant period". Abbara still has "At-a-glance facts" / "Who can apply" / "Disciplines covered". Wijhat still has no C3.

### Figs — value type size (2026-09-06)

**Done:** `Figs` value (`<b>`) is `text-4xl` (was `text-xl`, then `text-2xl`). Shared by C2, HM2, MN2. Labels unchanged.

**Left undone:** Nothing from this brief.

**Decisions:** 157 revised — Figs values are `text-4xl`.

**Flagged:** None.

### Chrome — review chrome off by default (2026-09-06)

**Done:** `codes` defaults `false`. `<body>` carries `codes-off` in layout so the first paint is the client view. Panel toggle still turns review chrome on. Headless Chrome: Who We Are load — `body.codes-off`, badges/labels/hints `display: none`, Vision heading `block`, frames 0px; panel checkbox unchecked; checking it restores badges and hides headings. Production Awards fresh load is codes-off again (At-a-glance facts heading visible).

**Left undone:** Nothing from this brief.

**Decisions:** 156. Review chrome is off by default. 134 and 155 revised in place.

**Flagged:** None.

### Chrome — state panel cog (2026-09-06)

**Done:** State panel no longer sits on the page. A 1px cog at `fixed top-3 right-3` opens it below the button; click again closes it. Open state inverts the cog (black fill). Panel contents, `codes` default, and per-page toggles are unchanged. Headless Chrome: Who We Are closed — cog only, no bottom panel, no heading; click — panel below the cog (`top: 50`), Who We Are note present; click again — closed. Production Awards open — Applications closed / offered toggles. `codes` still flips `body.codes-off`.

**Left undone:** Nothing from this brief.

**Decisions:** 155. State panel opens from a top-right cog. 154 revised in place (panel is no longer an always-on overlay).

**Flagged:** None.

### Chrome — in-flow nav dropdowns (2026-09-06)

**Done:** Chrome unit. `NavItem` leaves the left flyout (`absolute right-full top-0`) and the hover/focus-within reveal. Parents with children are `<details>` / `<summary>`: click opens the menu in flow under the parent, full rail width, no panel or row borders, `mb-4` below an open menu, `+` on the trigger. Shared `name="site-nav"` keeps one menu open at a time. Leaf items stay `Link`s. Publications' Library / Series groups and the optional Mawred's 20th item stay. No `overflow-y-auto` on the rail — not added unless a later pass shows a clip.

**Left undone:** Docs/verify units of the same plan if they are still queued. Decision **154** revised in this unit because click + in-flow overturns the hover flyout.

**Decisions:** 154 revised — click, in-flow, not hover flyout.

**Flagged:** Parent hrefs on About Us / Grants & Opportunities / Publications are no longer on the trigger (those destinations stay as the first child link).

### Docs — sticky right rail (2026-09-06)

**Done:** Docs unit of the website shell. Standing constraint 2: global chrome is a sticky right rail (logo, search + EN|AR, vertical nav, newsletter link, social, copyright), not a stacked utility bar / header / newsletter / footer. AGENTS.md chrome line and repo-map chrome row match; the 2px-header-rule note is gone — rail edge is 1px, 2px stays on primary buttons only. Wireframe-passes **154** logged; **57** revised in place (header/footer 2px rules no longer exist); **146**'s parenthetical revised so it no longer says the header rule stays 2px.

**Left undone:** Verify unit of the same plan.

**Decisions:** 154. Global chrome is a sticky right rail.

**Flagged:** None.

### Chrome — sticky right rail (2026-09-06)

**Done:** Chrome unit of the website shell. Layout is a two-column flex: scrolling main (`flex-1`, no max-width) and a sticky right rail (`w-64`, `h-screen`, 1px left border). `SiteHeader` owns the rail top: Logo → UtilityBar (Search + EN|AR, no centering) → vertical nav. Dropdowns stay CSS-only and fly left (`absolute right-full top-0`). Publications' Library / Series groups and the optional Mawred's 20th item stay. `SiteFooter` owns the rail bottom: Newsletter is a link that opens a lo-fi popup (Field + Subscribe + Close); Social is a labelled placeholder; copyright stays. Footer link columns and the inline email row are gone. Logo scales to the rail width.

**Left undone:** Docs unit (standing-constraints §2, AGENTS.md chrome / 2px-header-rule note, wireframe-passes new decision + 57 revised in place) and verify unit of the same plan.

**Decisions:** None this unit — logged with the docs unit.

**Flagged:** None.

### Verify — programme page sections (2026-09-06)

**Done:** Headless Chrome against the running dev server, codes on and `codes-off`, all four programme routes. One H1 in the band on each; Overview h2 is `sr-only` (in the DOM, 1×1px, not `.block-heading`); Application / FAQs / Contact h2s `display: none` in review, `display: block` at 24px `codes-off`; badges `display: none` `codes-off`; H1 stays `inline-block`. C7 first in Application on all four; C4's repeat "Apply now" still there on Production Awards, Stand for Art, Abbara. S3 omitted by default on Production Awards / Wijhat, present when `offered` is on (own section, heading from S3's label); Abbara always has S3 ("Abbara organisations by round"); Stand for Art never has S3 and has no closed toggle — C7 stays open (decision 95). Closed toggle disables C7 on the other three. Titled programme blocks under the sections are h3. Codes: Production Awards C1–C2–C3–S1–C5 then C7–C4–C8–C9–C10–S2 then C11–C12 (S3 only with `offered`); Wijhat C1–C2–S4–S1 then C7–S6–S5–C6–C8–C9–C10 then C11–C12; Stand for Art C1–C5 then C7–C4–C8–C9 then C11–C12; Abbara C1–C2–S4–C3–S1–C5–C6 then C7–C4–C8–C9–C10 then S3 then C11–C12.

**Left undone:** Nothing from this plan.

**Decisions:** None this unit — 153 logged with the docs unit.

**Flagged:** None.

### Docs — programme page sections (2026-09-06)

**Done:** Docs unit of the programme page sections. Wireframe-passes **153** logged; **135** revised (programme block titles are h3 under a section h2; section h2s are `text-2xl`; Overview's h2 is `sr-only` and never uses `.block-heading`); **145** revised (S6 still follows S1, with the Application h2 + C7 between them); **152** revised (C7 remounted at Application, no longer parked). **137** and **139** revised in place so they no longer say C7 is parked. Standing constraint 2: programme pages are four always-on sections plus optional S3; Overview h2 is semantic-only. Content-map: C7 remounts at Application on all four programmes; Stand for Art / Abbara C5 sit in Overview; Abbara C6 in Overview (`section: 'overview'`).

**Left undone:** Verify unit of the same plan — done in the verify entry above.

**Decisions:** 153. C7 is no longer parked.

**Flagged:** None.

### Verify — page-level header band (2026-09-06)

**Done:** Headless Chrome against the running dev server, codes on and `codes-off`. `/` — no crumb, no H1, HM1 first. `/programs/production-awards` — one H1 ("Production Awards") in the band, then C1 overview, no C7 (codes C1–C2–C3–S1–C5–C4–C8–C9–C10–S2–C11–C12); C4's repeat "Apply now" is not C7. `/about/who-we-are` — one H1 ("Who We Are") then AB1's three intro paragraphs. `/about/our-team` — band then three AB7 groups. `/network` — band then MN1. `/news` — band then N1 tabs. `/publications/research` — band inside main (PA1 still behind `slots`). `/contact` — band then stub. `/wireframes` — band then index copy. `codes-off` hides badges (`display: none`); H1 stays (`inline-block`); section headings show.

**Left undone:** Nothing from this plan.

**Decisions:** 152, logged with the docs unit.

**Flagged:** C7 parked, so the programme `closed` panel toggle currently has no consumer. `config.dest` is unused until C7 remounts.

### Docs — page-level header band (2026-09-06)

**Done:** Docs unit of the page-level header band. Standing constraint 2: the band is page-level, not layout; Home is the only omit; `suppressPageHead` is gone; blocks do not own crumb/H1. AGENTS.md chrome line matches. Wireframe-passes **152** logged; **33** restored-and-revised (it was in the missing 1–54 set); **137**, **138**, **139**, **147** revised in place — C1/AB1 no longer own H1; C7 parked off the opening; C1's unused inner `title` slot dropped. Content-map: AB1 / Our Team no longer say the band is suppressed; Wijhat/Abbara S4 order is C1 + C2; Stand for Art C2 no longer claims the rail carries the apply action; C7 `dest` stays on config.

**Left undone:** Verify unit of the same plan — done in the verify entry above.

**Decisions:** 152. C7 stays parked.

**Flagged:** C7 parked, so the programme `closed` panel toggle currently has no consumer. `config.dest` is unused until C7 remounts.

### Blocks — C1 / AB1 drop H1; C7 parked (2026-09-06)

**Done:** Blocks unit of the page-level header band. `C1Overview` drops `crumb` / `pageTitle` and the fragment / `flex-1` wrap that sat beside C7 — overview prose and optional `items` only. `AB1Intro` drops `crumb` / `pageTitle` — the three intro paragraphs only. `ProgramPage` unmounts `C7ApplyButton` from the opening; C1 sits under `PageHeaderBand` with no title-row flex. `usePathname` / `getRouteByPath` leave the shell. The C7 component and `dest` on `ProgramConfig` stay.

**Left undone:** Decision revisions (33, 137, 147) and standing-constraint / AGENTS / content-map catch-up wait on the docs unit — done in the docs entry above. Shells mounting the band was a separate unit, also landed.

**Decisions:** None this unit — logged with the docs unit. C7 is off the opening on purpose; a later programme restructure will place it with the apply / guidelines section.

**Flagged:** C7 parked, so the programme `closed` panel toggle currently has no consumer. `config.dest` is unused until C7 remounts.

**Verified:** Headless Chrome against the running dev server. `/programs/production-awards` — one H1 ("Production Awards") in the band, then C1 overview, no C7, no H1 inside C1; codes list is C1–C2–C3–S1–C5–C4–C8–C9–C10–S2–C11–C12. `/about/who-we-are` — one H1 ("Who We Are") in the band, then AB1's three intro paragraphs, no H1 inside AB1. Wijhat / Stand for Art / Abbara each one H1, C1 present, C7 absent.

### Chrome — lift PageHeaderBand out of layout (2026-09-06)

**Done:** Chrome unit of the page-level header band. `PageHeaderBand` is no longer composed in `app/layout.tsx` — layout keeps utility bar, header, `<main>`, footer, and the state panel. The band is crumb + H1 only (`text-xs text-neutral-500` / `text-4xl font-bold`), sitting inside `main` with no extra max-width or `px-4` wrapper, still a client island that reads `crumb` / `title` from the route registry via `usePathname`. `suppressPageHead` is gone from `RouteEntry` and every route flag. Home simply does not render the band.

**Left undone:** Page shells do not yet mount `<PageHeaderBand />`. C1 / AB1 / Our Team still own crumb + H1. C7 is still on the programme opening. Standing constraints, AGENTS, wireframe-passes, and content-map catch-up wait on the docs unit.

**Decisions:** None this unit — logged with the docs unit.

**Flagged:** Pages that previously inherited the band from layout have no crumb/H1 until the shells unit mounts it.

### Polish — About Our Team cards (2026-09-06)

**Done:** Unit 3 of the About presentation pass, and the last unit in that plan. AB7 drops the card’s outer `border border-black`; the photo box keeps its own border, and name / role / country sit under it with no frame. The “Read bio” AccordionItem is gone. Records with a bio get a disclosure arrow next to the name (`▸` / `▾`); the name row toggles the bio in place. Records without a bio stay static — no arrow, no click (decision 48). AB7 is a client block owning open/closed state (same pattern as Accordion / S5). Default Accordion stays boxed — S3 and C11 unchanged. Headless Chrome: `/about/our-team` — Team first card is photo (bordered) + Name `▸` button, no outer frame, no “Read bio”; third card is photo + static Name, no button; ten name-row arrows across the three groups. `body.codes-off` hides AB7 labels and hints; Team / Artistic Board / General Assembly headings and the Name `▸` row stay. `/about/who-we-are` still has AB1 crumb+H1 then intro. `/about/supporters-partners` default is AB8 only; AB6 remains behind `slots` in that shell. `/programs/abbara` S3 accordion still boxed.

**Left undone:** Nothing from this plan. Supporters, Past Initiatives, Careers, position/initiative detail, populating Our Team, and writing the 2018–2026 history stay out of scope.

**Decisions:** 151 logged in wireframe-passes. Decisions 71 and 142 revised in place.

**Flagged:** None.

### Polish — About Who We Are blocks (2026-09-06)

**Done:** Unit 2 of the About presentation pass. AB2 drops the 3px border for an inner `bg-neutral-200` padded band holding the Vision heading and the sentence (same fill as C6, heading inside the wrapper so it survives `codes-off`). AB3 leaves shared `Cells` for a wrapping gapped card grid matching AB4; the `01`–`04` eyebrow stays; S4 and HM4 stay a tight shared-border row. AB5 puts `mt-4` on the Timeline under the lead and stops passing `fill: 72`; the last row stays labelled `2018–2026` — “Not covered by the published history”, with no grey bar. N8 and N15 stay 3px. Standing constraint 2 already notes the two About routes from Unit 1 — no catch-up. Headless Chrome: `/about/who-we-are` — AB2 grey fill with heading inside (hidden under review chrome, visible `codes-off`); four AB3 cards with gap, numbered 01–04; AB5 lead then rail; last row named 2018–2026 with no fill; `/programs/abbara` S1 still date-only with no fills; `/programs/wijhat` S4 still a tight cell row.

**Left undone:** Unit 3 of the same plan (AB7 cards). Supporters, Past Initiatives, Careers, position/initiative detail stay out of scope.

**Decisions:** 148–150 logged in wireframe-passes. Decisions 57, 80, 126, 128, 134 and 144 revised in place.

**Flagged:** None.

### Polish — About opening (2026-09-06)

**Done:** Unit 1 of the About presentation pass. `about-who` and `about-team` set `suppressPageHead`. AB1 takes crumb and page H1 from the route registry, then the three intro paragraphs — no inner heading, no page-header band a block away. Our Team drops AB6 (the fill for net-new micro-copy) and renders crumb + H1 in the shell, then the AB7 groups. AB6 stays on Supporters / Past Initiatives / Careers behind `slots`. Standing constraint 2 notes these two About routes alongside Home and programmes. Headless Chrome: `/about/who-we-are` — one H1 in main (not in the band), crumb then AB1 then the three paragraphs; codes off hides AB1's label and hint, H1 and intro stay. `/about/our-team` — crumb then H1 then three AB7 groups, no AB6. `/about/supporters-partners` — band H1 still there, AB8 only until `slots` is on, then AB6 ("Section intro — available slot") then the three bands.

**Left undone:** Units 2–3 of the same plan (AB2/AB3/AB5; AB7 cards). Supporters, Past Initiatives, Careers, position/initiative detail stay out of scope.

**Decisions:** 147 logged in wireframe-passes.

**Flagged:** None.

### Polish — schedule and tabs, docs + verify (2026-09-06)

**Done:** Docs half of the follow-up unit. Wireframe-passes 145–146 logged with 57 / 61 / 126 / 140 revised in place; content-map records Wijhat C3→S1 and Production Awards' date rows C3→S1. Standing-constraints has no 2px-active-tabs mention, so no catch-up (decision 57's tab revision lives in 146 and AGENTS.md). Headless Chrome against the running dev server: `/programs/wijhat` — S1 six year-less round stages, no fills, no C3, S6 then S5, Individual/Group as a light tab strip with a connected panel (`border-t-0 border-neutral-200`), Group click swaps the nested C4 (individual form → group form), codes on (S1/S5 badges visible, headings hidden) and codes off (`codes-off`: badges `display:none`, Programme timeline / Application paths headings `display:block`, S1 stages and the S5 panel still there); `/programs/production-awards` — S1 Open call / Deadline / Results then three-card C3 (Eligibility, Disciplines covered, Grant period), no S1 fills; `/programs/abbara` — seven-card C3 then eight-stage S1 with no fills; `/programs/stand-for-art` still has neither S1 nor C3; `/news` — All / Announcements / News & Events on the same 1px `neutral-200` row, no 2px active weight, no panel; News & Events click activates that tab only; `/network` — Individuals & Groups / Organizations & Initiatives same strip, no panel; Organizations click activates that tab only.

**Left undone:** About polish plan stays last and is not started.

**Decisions:** None new — 145–146 and the in-place revisions already stand.

**Flagged:** None.

### Polish — tab strip (2026-09-05)

**Done:** Follow-up unit, tabs half. Shared `Tabs` drops overlap and the 2px active weight. The row sits on a 1px `border-neutral-200` bottom rule; active is `font-bold` with a 1px light box whose white bottom covers the rule; inactive is `text-neutral-500` with no box. Optional `children` render in a 1px light panel with no top border. S5 passes the nested C4 as children (Individual/Group is tabs + one panel). N1 and MN5 pass nothing — tab row over filters/listing.

**Left undone:** About polish plan stays last and is not started.

**Decisions:** 146 logged in wireframe-passes. Decision 57 revised in place for active tabs only; 143 noted.

**Flagged:** None.

### Polish — programme schedule on S1 (2026-09-05)

**Done:** Follow-up unit, schedule half. Wijhat's `C3rounds` becomes `S1`: six chronological stages (Round 1–3 deadline then results), year-less dates, short lead that intake is year-round against a repeating calendar. S6 stays immediately after; Wijhat has no C3. Production Awards pulls Open call / Deadline / Results into an `S1` above the remaining three-card C3 (Eligibility, Disciplines covered, Grant period). `C3AtAGlance` is flat-only — no `mode` union, no `C3RoundGroup`; `C3rounds` dropped from the config union and `ProgramPage`. `Timeline` renders `text` if present, else Fill only when `fill` is passed, else omits the body — Abbara/Wijhat/PA S1 stages are date-only with no fills; AB5's 2018–2026 gap row still passes `fill: 72`.

**Left undone:** Tabs half of the same follow-up (S5 / N1 / MN5 tab-row treatment). About polish plan stays last and is not started.

**Decisions:** 145 logged in wireframe-passes. Decisions 61, 126 and 140 revised in place.

**Flagged:** None.

### Polish — C6 grey fill + Stand for Art confidentiality (2026-09-05)

**Done:** Unit 6 of the Grants & Opportunities presentation pass, and the last unit in that plan. C6 drops the 3px `callout` border for an inner `bg-neutral-200` padded band with no border, so the fill survives `codes-off` (the Block wrapper is a `block-frame` again). `Block.callout` is unused and removed. N8, AB2 and N15 stay 3px. Stand for Art no longer has a page-level C6: confidentiality is C4's optional `highlight` (label + text) at the top of the apply steps, same grey treatment; the non-resumable-form `note` stays at the bottom. Wijhat (visa letter) and Abbara (core-funding exclusion) keep C6.

**Left undone:** Nothing from this plan. About, Home, News, Publications, Network, and global chrome beyond programme `suppressPageHead` stay out of scope.

**Decisions:** 144 logged in wireframe-passes. Decisions 57 and 91 revised in place; 134 noted.

**Flagged:** None.

### Polish — S5 Individual/Group tabs (2026-09-05)

**Done:** Unit 5 of the Grants & Opportunities presentation pass. `S5ApplicationPaths` is a client block that owns its tab index (same pattern as Accordion / FilterBar). Shared core stays above; Individual / Group are tabs; the nested C4 cards render in the active panel. The "stacked labelled sections, not tabs (decision 6)" hint is dropped. Standing constraint 3 notes the exception: S5 is two short tracks, not a long option list. Decision 6 revised in place.

**Left undone:** Unit 6 of the same plan (C6 highlight + Stand for Art confidentiality). About, Home, News, Publications, Network, and global chrome beyond programme `suppressPageHead` stay out of scope.

**Decisions:** 143 logged in wireframe-passes. Decision 6 revised in place; 60 and 88 noted.

**Flagged:** None.

### Polish — C11 FAQ rows (2026-09-05)

**Done:** Unit 4 of the Grants & Opportunities presentation pass. `Accordion` gains a `plain` variant used only by `C11Faqs`: no item borders, question at `text-base font-bold`, rows spaced with `py-3` / `mb-3`. Default Accordion stays boxed — S3 beneficiary groups and AB7 bios are unchanged. Both the populated Stand for Art Q&As and the placeholder English-gap render on the other three programmes pick up the treatment.

**Left undone:** Unit 6 of the same plan (C6 highlight + Stand for Art confidentiality). About, Home, News, Publications, Network, and global chrome beyond programme `suppressPageHead` stay out of scope.

**Decisions:** 142 logged in wireframe-passes.

**Flagged:** None.

### Polish — C4 numbered step cards (2026-09-05)

**Done:** Unit 3 of the Grants & Opportunities presentation pass. `C4ApplySteps` drops the ordered list for a wrapping row of numbered cards — large index, step label, detail — using the same card chrome as C3 (decision 140). Documents, note, and the repeat apply button stay below the card row. Nested use still returns a fragment, so Wijhat's S5 paths pick up the cards without a second Block wrap.

**Left undone:** Units 4–6 of the same plan (C11 FAQ rows, S5 tabs, C6 highlight + Stand for Art confidentiality). About, Home, News, Publications, Network, and global chrome beyond programme `suppressPageHead` stay out of scope.

**Decisions:** 141 logged in wireframe-passes.

**Flagged:** None.

### Polish — C3 card grid (2026-09-04)

**Done:** Unit 2 of the Grants & Opportunities presentation pass. Both modes of `C3AtAGlance` drop full-width KV rows for a wrapping card grid (`border border-black p-2.5`). Flat (Production Awards' six facts, Abbara's seven eligibility facts): muted `text-xs` label, value as body, long Abbara copy wrapping inside the card. Rounds (Wijhat's three): one card per round — title, deadline, results — in a 3-up grid. Missing values still render a Fill (decision 84). Decision 61's one-component split is unchanged; both modes now share the card treatment.

**Left undone:** Units 3–6 of the same plan (C4 step cards, C11 FAQ rows, S5 tabs, C6 highlight + Stand for Art confidentiality). About, Home, News, Publications, Network, and global chrome beyond programme `suppressPageHead` stay out of scope.

**Decisions:** 140 logged in wireframe-passes. Decision 61 noted in place.

**Flagged:** None.

### Polish — programme opening (2026-09-04)

**Done:** Unit 1 of the Grants & Opportunities presentation pass. The four programme routes set `suppressPageHead` (same flag Home uses). C1 owns the crumb and the page H1; `ProgramPage` puts C7 on the H1 row, far right, as its own block; C2 is a full-width `wide` Figs row under that; S4 (Wijhat, Abbara) renders after the opening, not before C1. The inner C1 heading ("What is the … Program?") is no longer passed from any of the four configs — the H1 is the heading, and a missing inner title is omission rather than a Fill. Standing constraint 2 revised: the band may be suppressed when the opening block owns the H1, not only on Home.

**Left undone:** Units 2–6 of the same plan (C3 cards, C4 step cards, C11 FAQ rows, S5 tabs, C6 highlight + Stand for Art confidentiality). About, Home, News, Publications, Network, and global chrome beyond programme `suppressPageHead` stay out of scope.

**Decisions:** 137–139 logged in wireframe-passes. Decision 135's note that C1 titles itself via an inner h3 revised in place.

**Flagged:** None.

### List markers — unordered lists (2026-09-04)

**Done:** Tailwind Preflight zeros `list-style` on `ul`, so content lists (C1, C4 documents, C5, C8, C9 criteria, C10, S4, S6) were indented with `pl-5` and had no bullets. Added `list-disc` on those lists (same restore `list-decimal` already did for `<ol>`) and a `@layer base` `list-style: disc` fallback. Layout lists stay `list-none`. Decision 136 logged.

**Left undone:** Nothing from this unit.

**Decisions:** 136 logged in wireframe-passes.

**Flagged:** None.

### Client view — section headings (2026-09-04)

**Done:** Presentation pass so section titles actually show when review chrome is off. `.block-heading` is hidden only under `body:not(.codes-off)`; the h2 is `text-lg font-bold`; `.block-frame` gets `margin-block: 2rem` in client view. C5 takes an optional `heading`; Production Awards passes "Available grants", Stand for Art and Abbara keep the default. Decision 135 logged. Headless Chrome: Production Awards codes on — labels and boxes, headings `display: none`, no duplicated h2s; codes off — C3 At-a-glance facts, C4 How to apply, C5 Available grants, then C8 / C9 / C10 / S2 / C11 / C12 as visible h2s with 32px gaps; C1's inner title, C2, C7 stay untitled (no C6 or S4 on this page; S3 stays behind `offered`). Home and Who We Are: larger heading + spacing still reads; HM1/HM2/HM5/HM8 and AB1 stay untitled.

**Left undone:** Nothing from this unit.

**Decisions:** 135 logged in wireframe-passes.

**Flagged:** None.

### Client view — review chrome (2026-09-04)

**Done:** Panel copy "Show block codes" → "Show review chrome"; `codes` key and default-on unchanged. Standing constraint [10] revised in place: off hides codes, labels, block wrapper borders, and hints; headings that belong to the page stay. Decision 134 logged — labels are reviewer names, `heading` is the client-visible title, codes-off is review chrome rather than codes only.

**Left undone:** Nothing from this unit. The presentation pass is closed.

**Decisions:** 134 logged in wireframe-passes.

**Flagged:** None.

### Populate — Home (2026-09-03)

**Done:** Ninth and last in-scope Task 2 unit. Home consolidates content already sourced on the other populated page-types and writes back to none of them. `lib/pages/home.ts` rewritten: positioning line tightened from `WHO_WE_ARE_INTRO[0]`; five hero-frame captions from the Production Awards 2026 roster and the Network sample; `HOME_FIGURES` re-cut to `00` grants awarded since 2003 · `55` countries · `38` programmes & initiatives · `23` years since 2003; `HOME_PROGRAMMES` as the single source of the four C1-compressed descriptors, with `HOME_OPEN_CALLS` derived from the three that carry a `status`; default feature Made With Your Magic, Beirut, linking to `/news/editorial-post`; the three real news posts; the first three `LIBRARY_RECORDS` plus a Mudawanat series card; identity paragraph from `WHO_WE_ARE_INTRO[1]`. HM1–HM8 take those props; leftover headline Fills in HM1 and HM8 retire (decisions 107/113). `Btn` gains an optional `href` (decision 129); only Home passes it. Type-check and eslint clean. Curl against the running dev server — `/`, the four programme routes, `/news`, `/news/post`, `/news/editorial-post`, `/publications/research`, `/publications/mudawanat`, `/network` and `/about/who-we-are` all 200. Render-checked `/` in default and the three panel branches: default shows the positioning line, frame-1 caption, five markers, `00 · 55 · 38 · 23`, three open-call cards (Abbara absent), four HM4 cells, the exhibition feature, three news cards each on its own route, three library cards plus Mudawanat, and the identity paragraph; `nocalls` swaps HM3 for the empty state while HM4 still shows all four programmes; `twentieth` swaps HM5 to the campaign eyebrow and title over fill bars, linking to the `/mawreds-20th` stub; `staticfb` drops the marker bar and mosaic for single-image banners, caption remaining. Inner pages re-checked after the `Btn` change — Production Awards, the editorial post, the library, the Network directory and Who We Are are unchanged.

**Left undone:** Task 2 is complete for the units in scope. Our Team, Past Initiatives, Supporters & Partners and Careers remain deferred, as recorded in the completed-task entry. No next unit is queued.

**Decisions:** 129–133 logged in wireframe-passes (`Btn` `href`; `nocalls` kept as a template branch; the unpublished grant total left as `00`; `HOME_PROGRAMMES` as the single source; the 20th kept as a state with campaign content a gap).

**Flagged:** Three gaps, all kept visible rather than filled: no Mawred-wide grant total, so HM2's first rail stays `00`; no 20th-anniversary campaign copy, so the `twentieth` branch is fill bars on a stub route; no Mudawanat episode titles, so HM7's media card is the series, not an episode. For the client: the wayfinding label ("Grants & Opportunities" vs "Programs"), which figures lead, graduating the hero positioning line, and whether the 20th is permanent nav or a temporary campaign — all still open calls, all still in the hints. The live Home's "Wijhat is open all year" is wrong against the populated Wijhat page and is not reproduced. The `nocalls` empty state's "See all programmes" action is still a button without an href — `EmptyState` takes a label only (decision 73), the branch is unreachable, and widening the primitive was out of this unit.

### Populate — About, Who We Are (2026-09-01)

**Done:** Eighth Task 2 unit, and the first About page. `lib/pages/about.ts` carries the merged page (spec §3.1): `WHO_WE_ARE_INTRO`'s three paragraphs, `VISION` as one sentence, `MISSION_POINTS` widened from a count of 4 to the four real bullets, `VALUES` from a count of 6 to six `{ label, text }` pairs, a new two-paragraph `HISTORY_LEAD`, and `HISTORY_ENTRIES` rewritten — the port's nine guessed rows become eleven real dated entries, 2003 to 2017, each with a paragraph, plus a twelfth row spanning 2018–2026 that carries no text. AB1–AB5 take content **directly**, with no fill-bar fallback: each has exactly one consumer, so decision 84's reason doesn't reach them and a fallback would be unreachable (decision 125). `Timeline` gains an optional `text` per item with the fill bar as the fallback (decision 126), which is the one shared primitive this unit touched. Type-check and eslint clean; curl against the running dev server — `/about/who-we-are` and `/programs/abbara` both 200. Read the rendered page in full: AB1's three paragraphs, AB2's sentence inside the 3px band, AB3's four numbered cells, AB4's six labelled cards, AB5's two lead paragraphs and twelve rail rows — eleven with prose, the twelfth a fill bar with the rail terminating there. Abbara's S1, the primitive's other consumer, still renders its eight label-and-date stages as eight fill bars.

**Left undone:** ~~Our Team is the next unit~~ — **superseded 2026-09-01: Our Team and Past Initiatives were deferred so Home could close Task 2** (see the completed-task entry). The inheritance still holds whenever Our Team is picked up: it takes AB1's third paragraph — the governance sentence (35-member general assembly including Belgium, seven-member artistic board) which spec §3.2 says is the only existing context for that page. It stays on Who We Are as well; whether it should be stated twice is a copy call, not a structural one. Supporters & Partners and Careers remain skipped.

**Decisions:** 125–128 logged in wireframe-passes (single-consumer About blocks take content directly; `Timeline`'s optional `text`; eleven dated entries with the undated passage in the lead and the closing paragraph dropped; the 2018–2026 fill-bar row).

**Flagged:** One gap, and it is the largest content gap found so far — **the published history stops at 2017.** Nine years are unwritten: the master's programme past its first class, the Lebanon crises, All Around Culture, the 20th anniversary. The rail renders that as a labelled fill-bar row rather than ending at 2017, because a rail that ends at 2017 reads as finished (decision 128). Synthesising the years from the news archive was available and not taken. For the client: the first value's label renders as `inclusiveness:we believe` on the live page — a missing space after the colon, dropped here rather than reproduced, and a sign the values were pasted rather than authored in the field; the history is one unbroken wall of dated prose with no headings at all, which is why the spec names the timeline as its headline graduation; the closing "stories still to be told" paragraph is dropped as voice rather than content; and the global-footer Instagram artifact appears here too, as on every page audited.

### Populate — News (2026-09-01)

**Done:** Seventh Task 2 unit, three routes and two new blocks. `lib/pages/news.ts` carries the sample: three real posts newest first (the Made With Your Magic exhibition opening 27 July, the second-round Wijhat grantees 20 July, the Production Awards 2026 results 6 May), the four programmes as the Programme facet's real values, and the two populated posts in full. The tab counts the port invented (231 / 128 / 103) are gone, and with the facet values in place no kit renders `"value"` any more — decision 109's closing note revised accordingly. Two new blocks: `N14Roster`, one block for both the grantee and the jury roster, with the project title and description rendering by omission on a juror; and `N15Quotes`, attributed 3px blockquotes attached to the jury roster above them rather than to the post. `N6FeaturedImage` gains a caption slot carrying the image credit the live page prints at the very end of the body. Content props added to N7 (`date`, `category`, `author`), N8 (`detail`, `aside`), N9 (`text`) and N13 (`posts`) — all optional with the previous render as the fallback (decision 84). `/news/post` is now the Production Awards results post — real title, crumb and index labels, Cinema in full (five grantees, three jurors, two quotes), Literature's roster and jury with no quotes, and the remaining three disciplines in one overflow line naming the 29 grantees. New route `/news/editorial-post` with its own `EditorialPostPage` shell and `newseditorial` states key: N5 · N6 with no credit · N7 · N8 · N9's five paragraphs · N12 · N13. The `structured` toggle is retired and out of `WireframeState` (decision 122). Type-check and lint clean; curl against the running dev server — `/news`, `/news/post`, `/news/editorial-post`, `/network`, `/publications/research`, `/programs/production-awards` and `/wireframes` all 200. Render-checked both posts in full and every landing branch through a throwaway route (since removed): tabs give All 3 / Announcements 2 / News & Events 1, the Wijhat chip narrows to one real row, the empty state keeps tabs and count row with the count at 0, `slots` shows the excerpt caption on every card, `edge` drops the previous card, `byline` reads "by Mawred", and N6 / N13 / N14 / N15 given nothing still render their placeholder fallbacks.

**Left undone:** N10 and N11 render nowhere now — they want the multi-date-programme-plus-registration shape of the Living Fabric forum and no such post was in scope. Blocks kept, absence recorded as a sampling gap. N5's neighbour titles stay placeholder (decision 123). About — Who We Are is the next unit.

**Decisions:** 115–124 logged in wireframe-passes (three sampled posts driving the tabs; invented counts retired and the facet's real values; N14 as one block for grantees and jury; N15 as its own block attached to its roster; two detail routes with a states key each; the sampling inside the announcement; N6's caption; the retired `structured` toggle with `edge` kept; N5 left placeholder; zero results computed rather than toggled). Decision 109's note revised in place.

**Flagged:** One bug found and fixed while render-checking — opening the News & Events tab with the programme chip active yields no posts, and the landing was passing the panel's `empty` toggle through instead of the real result count, so that branch rendered an empty grid with an archive overflow line and a pager under it. `noResults` is now derived from the list (decision 124). For the client: the country spread in the results post is published in no particular order and reads as a list wanting one — kept as sourced; both posts repeat the title as an H2 under the featured image, which the page-header band already carries; every post is authored "Mawred", which is worth knowing before the byline call is made; and spec §A4's inventory flags stand — one post parented under `/uncategorized/`, "Gallery" artifacts in the live Related strip, and the internal `Mawred News` / `SliderEN` categories doing no user-facing work. The global-footer Instagram artifact appears here too.

### Populate — Mawred Network (2026-09-01)

**Done:** Sixth Task 2 unit, both routes. `lib/pages/network.ts` rewritten with the live content: five facets carrying their real value lists (Involvement 8, Programme 38, Discipline 22, Country 55, Year **21** — the port had 22, and 2006 has no entry), figures carrying 55 countries / 38 programmes / 21 years tagged, the two-paragraph responsible-data intro with `communications@mawred.org`, four sampled records two per entity tab, per-tab filter chips the sample actually satisfies, and Al Kasaba Theatre and Cinematheque as `NETWORK_RECORD`. Content props added to MN1 (`heading`, `text`, `contact` — the headline Fill is now an unused slot, decision 113) and MN6 (`record`); MN4 and MN5 now read the sampled rows, MN5 renders one badge per engagement and takes `filtered` so the narrowed state shows one real row, and `Tabs.count` is optional so the tabs can carry no total. MN2 and MN3 needed no code change — `Figs` and `FilterBar` already accept values. MN6 restructured: Country and Discipline stay record-level and the involvement/programme/round/year/project fields become a group repeated once per engagement (decision 111). `sparse` retired everywhere — out of the `record` states key, out of `WireframeState`, and `NetworkRecordPage` is a server shell again (decision 114). Record route title and crumb now name Al Kasaba. Type-check and lint clean; curl against the running dev server — `/network`, `/network/record`, `/publications/research` and `/news` all 200. Directory default renders both intro paragraphs, `00 · 55 · 38 · 21`, Programme open on Abbara→Circairo with "Show all 38", "Showing 2 records in Individuals & Groups" with no denominator, and Hiba Taim / Nour Shantout. The three client branches were render-checked through a throwaway route (since removed): filtered narrows to one row per tab with matching chips (Student/Morocco, All Around Culture/Palestine), the orgs tab shows Al Kasaba and Editions Motifs with two badges each, empty keeps tabs and count row with the count at 0, and MN6 given no record still renders the six placeholder KV rows and project fill bars. News tabs still carry their counts (231) after the `Tabs` change, and the library still reads "Showing 33 of 33" with Achraf Maher in the open Author facet.

**Left undone:** Three of the four records are directory rows only — Editions Motifs, Hiba Taim and Nour Shantout have no detail page, and all four rows link to Al Kasaba's. News is the next unit.

**Decisions:** 110–114 logged in wireframe-passes (four sampled records with one populated detail; MN6's repeating engagement group with Round generalised to round/track; unpublished totals left unpublished; MN1's headline retired and the data-access ask surfaced as a client call; the emptied `record` states key). Decision 109 revised in place — Network's facets now carry real values, so News is the only kit still rendering `"value"`.

**Flagged:** The spec's record field set is wrong, and the port inherited it: §B5 describes one involvement per record, but Al Kasaba and Editions Motifs are each Participant **and** Grantee on the same All Around Culture project, and the "Round" slot holds a track name rather than a round number. Corrected in the wireframe, not in the spec. Three gaps: no record count exists for the network or either entity tab, so MN2's first rail and MN4's denominator are both open; the Year facet has no 2006; and the live listing returns **no directory rows at all** in its HTML — the several-hundred-record list is JS-rendered, which matters for an index meant to be found and cited. For the client: whether the retired notice's `resources@mawred.org` data-access invitation is permanent content; `Entrepeneurship` [sic] in the Discipline facet; `Libya` spelled correctly here against `Lybia` in the Publications Country facet, so two facet lists disagree; and on the participant pages, the same `Beirut in <timestamp>` artifact, the dead decorative `Asset-2/3/4.svg` links already in spec §A4, and Previous/Next record navigation the wireframe doesn't reproduce.

### Populate — Publications (2026-09-01)

**Done:** Fifth Task 2 unit, and the first non-programme page-type. Content props added to `PB1SeriesIntro` (`text`, optional `heading` slot), `PC1PublicationRecord` (`record`), `PC2RelatedPublications` / `PA4ResultsGrid` (`records`), `PA3CountRow` (default total 30 → 33) and the shared `FilterBar` (`Facet.values`) — all optional with the previous render as the fallback (decision 84), so Network MN3 and News N1 still show `"value"`. `lib/pages/publications.ts` rewritten with the live library: six facets carrying the real lists (51 authors, 13 countries, 2 themes, 3 languages, 3 types, 14 years), 33 `{ title, languages }` records with the Lebanon Humanitarian Fund report first, that one record populated on the detail page (two-paragraph abstract, Language and Year, two download buttons, three related titles), and the three series intros compressed to the spec's own paragraph counts. `pub-detail` takes the real title and crumb; `indexLabel` stays "Publication detail". Type-check and lint clean; curl against the running dev server — all eight routes 200. Library default shows Achraf Maher…Ayman Masoud (six of 51), nine sampled cards, "Showing 33 of 33" and "… 33 items in the grid"; detail renders the real title, Language/Year values with the other four rows as fill bars, ↓ English and ↓ Arabic, and the three related titles; Mudawanat/Foundations/Talks render their intros with no headline fill; Network's open Programme facet still reads `value`; Production Awards C1/C5/C12 unchanged. Library `filtered` / `empty` / `slots` still branch in the shell on the same props as before.

**Left undone:** Mawred Network is the next unit. PB2's four embed footprints and the per-item caption slot stay as they were — captions remain behind `slots`.

**Decisions:** 104–109 logged in wireframe-passes (one populated record rather than 33; PC1 keeping unpublished rows as fill bars; one download per language; PB1's headline as a slot; PA4's overflow line; facet `values`).

**Flagged:** The Year facet stops at 2024 while the Lebanon record is dated April 2026 — untagged or the facet list is stale. The detail page publishes none of the taxonomy the library filters on. The live author/date line renders as "Beirut in 2026-06-16T…April 16th, 2026", the same CMS artifact as the footer's "Beirut in". Foundations' intro promises per-episode reference links and a summary, which is PB2's optional caption slot; whether those surface is a client call. `Lybia` [sic] in the Country facet, and the global-footer Instagram artifact seen on every page so far.

### Populate — Abbara (2026-08-31)

**Done:** Fourth Task 2 unit, and the last of the four programme pages. Three more content props added to shared blocks, all optional with the previous render as the fallback (decision 84): `S1Timeline` takes a `lead` above the rail, `C1Overview` takes an `items` list under the prose, and `S3PastBeneficiaries` takes a `label` (default "Past beneficiaries") plus a widened `groups` prop — a group is now either a plain string, which renders the three placeholder `Name / Country` rows exactly as before, or `{ title, records }` with each record a name and an optional country. `ABBARA` rewritten with real content: two hero cells with the live above-tab bullets, a three-paragraph C1 with the three programme goals as `items`, four C2 rails all carrying figures for the first time (87 supported · 60 active · 27 ceased · 8 rounds), seven C3 eligibility rows, eight chronological S1 stages for the Abbara 08 round, three portal steps in C4 with the save-each-section and last-hours cautions as its note, four C5 records with only Financial support carrying a chip (€22,000), the core-funding exclusion as C6, six C8 application requirements, C9's five-member jury with its three criteria, C10 held in its near-empty mode with the two contract facts the English page states, and S3 publishing all eight rounds and 56 organisations unconditionally. New `programDirectory` states key carrying the `closed` toggle only, pointed at from the `abbara` route. Type-check clean; verified by curl against the running dev server — the four programme routes all 200, Abbara renders the seven C3 rows, eight S1 stages, €22,000 chip, all eight round groups with eleven records open in Abbara 08, and the English-FAQ hint; Production Awards and Wijhat still render their dashed `offered` S3 with the three placeholder rows and the "Past beneficiaries" label after the `groups` widening; Stand for Art unchanged, including C5's no-amount hint.

**Left undone:** The beneficiary geo-map is not wireframed — the register drops it from the proposal and logs a rebuild as a client-revisit option, with C2 carrying the impact instead. Publications is the next unit; Task 2's programme pages are complete.

**Decisions:** 96–103 logged in wireframe-passes (map not wireframed with the directory at page end; two hero cells rather than four; eligibility in C3 with the application terms staying in C8; chronological S1 with a lead naming the round; S3 records and label; C10's near-empty mode; C1 goals as `items`; the `programDirectory` states key).

**Flagged:** Two gaps, both real and both English-side. The FAQ tab is an empty shell pointing at the Arabic page, so C11 is back to its placeholder render — Stand for Art stays the only exception. And there is no contractual section at all on the English Guidelines tab: no installments, signing or completion windows, guarantors, clawback or credit obligation. Recorded as a suspected English content gap to verify against the Arabic page rather than as a genuine absence, since the programme plainly has contracts. Also for the client: the two summary headings render with the question mark at the front ("?Who is Abbara for") — the same CMS artifact flagged on Wijhat, dropped here rather than reproduced; several beneficiary entries are named but unlinked (`href="#"` — Hassala films, Association l'Art Vivant, Stories film Lab, Damascus Theatre Lab); and the global footer's empty Instagram embed with its stray comment terminator appears here too, now seen on enough pages to be a global-footer fix.

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

### Programme page — fixes from review (2026-09-07)

- [x] Unit 1 — heading, sticky alignment, section spacing
- [x] Unit 2 — the arrow tracks the active section

**Plan closed.** About is `sr-only` again; sticky nav aligns with the rail (`pt-15`, decision 176); section padding is 2rem; the in-page arrow tracks the active section (decision 174).

### Home rework — five blocks, real hierarchy (2026-09-07)

- [x] Unit 1 — HM1 reads as a hero; HM8 retires
- [x] Unit 2 — HM2 is the stat strip only
- [x] Unit 3 — HM3 folds into HM4
- [x] Unit 4 — HM6 as rows, no images
- [x] Unit 5 — HM7 out
- [x] Unit 6 — HM5 owns the 20th; nav item out
- [x] Unit 7 — overlapping collage landed, then rolled back

**Plan closed.** Home is HM1 → HM2 → HM4 → HM5 → HM6. HM3, HM7 and HM8 retired; their codes are not reused. HM1 is the Unit 1 single-frame hero, not a collage.

### Programs — Stand for Art, no S4 (2026-09-06)

- [x] S4 skipped — the planned scope summary would restate C1 and C8 (as on Production Awards)
- [x] Remove the page's duplicates — C1's repeated either/or, C4's Arabic step, C9's label clause, the organisations FAQ's individuals-only clause
- [x] Docs — wireframe-passes 161 (94/139/160 revised), content-map, tracker
- [x] Verify — no S4; C4 two steps; C8 five items; Wijhat / Abbara / Production Awards unchanged

**Plan closed.** S4 is Wijhat and Abbara only. C3 is retired from the kit.

### Programs — Production Awards S4 (2026-09-06) — rolled back

- [x] Add S4, then roll it back — eligibility stays in C1 and C8
- [x] Restore C8 who-submits and funds-in-the-region (six → eight)
- [x] Docs — wireframe-passes 85/139/158/160 revised for the rollback, content-map, tracker
- [x] Verify — Production Awards has no S4; C8 eight items; Wijhat / Abbara unchanged

### Programs — Abbara S4/C3 retire (2026-09-06)

- [x] Drop S4 support cell (C5 duplicate) and C3 who-can-apply card
- [x] Add Disciplines covered (chips) and Where they work to S4; move budget+years, registration, previous-beneficiary to C8
- [x] Delete C3AtAGlance, C3flat config arm, ProgramPage cases; C3 code not reused
- [x] Docs — wireframe-passes 85/97/98/140/158 (61/139/145/153/160 also revised), content-map, tracker
- [x] Verify — Abbara S4 three rows + chips; C8 nine items; no C3 on any programme

### Programs — Wijhat S4/C5 (2026-09-06)

- [x] S4 stacked rows; items as cards; taxonomy rows as chips; drop string HeroCell
- [x] Wijhat: drop "The grant" from S4; add single-record C5 (Travel grant, Up to €7,000, five costs)
- [x] Docs — wireframe-passes 160/86/80 (140 noted), content-map, tracker
- [x] Verify — Wijhat S4 three rows + C5; Abbara S4 layout only

### Programs — S4 2-up titled cells (2026-09-06)

- [x] Cell labels as h3 at `text-lg font-bold`; list items at body type
- [x] Drop cell borders; `gap-8`; two cards per row
- [x] Docs — wireframe-passes 160 (80/149 revised), content-map, tracker
- [ ] Verify — skipped; review in the app

### Programs — C7 on the Application heading (2026-09-06)

- [x] C7 inline with Application h2, right-aligned, sticky after that row
- [x] Remove C4's repeat Apply now on Production Awards / Stand for Art / Abbara
- [x] Docs — wireframe-passes 159 (137/141/153 revised), content-map, tracker
- [x] Verify — all four programmes, one button, same row, sticky through FAQs/Contact

### Production Awards — drop C3 + live map (2026-09-06)

- [x] Remove C3 from `PRODUCTION_AWARDS`; component stays for Abbara
- [x] Live-tab → wireframe inventory in content-map (source for a later client note)
- [x] Docs — wireframe-passes 158 (85/140/145 revised), tracker
- [x] Verify — Production Awards has no At-a-glance; Abbara C3 still there

### Review chrome off by default (2026-09-06)

- [x] `codes` default false; `body` starts `codes-off`
- [x] Docs — wireframe-passes 156 (134/155 revised), standing-constraints, tracker
- [x] Verify — Who We Are load + toggle on; Production Awards fresh load

### State panel cog (2026-09-06)

- [x] Hide the always-on panel; 1px cog at top right opens it
- [x] Docs — wireframe-passes 155 (154 revised), standing-constraints, tracker
- [x] Verify — closed/open/reclose, Who We Are + Production Awards, `codes` toggle

### Programme page sections (2026-09-06)

- [x] Compose ProgramPage into Overview / Application / optional Past / FAQs / Contact; remount C7; C6 `section` slot
- [x] `headingAs` on Block; programme titled blocks as h3; C11 / C12 / S3 drop heading
- [x] Docs — wireframe-passes 153 (135/145/152/137/139 revised), standing-constraints, content-map, tracker
- [x] Verify — four programme routes, codes on and `codes-off`

### Page-level header band (2026-09-06)

- [x] Chrome — lift `PageHeaderBand` out of layout; `suppressPageHead` gone
- [x] Shells — every page except Home mounts the band
- [x] Blocks — C1 / AB1 drop crumb+H1; C7 parked off the programme opening
- [x] Docs — standing-constraints, AGENTS.md, wireframe-passes 152 (33/137/138/139/147 revised), tracker, content-map
- [x] Verify — Home, a programme (one H1, no C7), Who We Are, Network, News, library, stub, index

### Polish — About (2026-09-06)

- [x] Opening — `suppressPageHead` on Who We Are / Our Team; AB1 owns crumb+H1; AB6 omitted on Our Team
- [x] Who We Are blocks — AB2 grey fill, AB3 gapped cards, AB5 spaced rail and labelled gap row
- [x] Our Team cards — no outer frame; name-row bio disclosure (`▸` / `▾`); Accordion stays boxed for S3/C11

### Fix programme schedule and tabs (2026-09-06)

- [x] Dates on S1 — Wijhat six round stages, Production Awards open/deadline/results, C3 rounds mode dropped
- [x] Tab strip — 1px `neutral-200` row; S5 connected panel; N1/MN5 tab row only
- [x] Docs + verify — tracker, wireframe-passes 145–146 (57/61/126/140 revised), content-map C3→S1; four programme routes plus News/Network tabs

### Task 2 — Populate the wireframes with real content (2026-09-03)

- [x] Programs — Production Awards
- [x] Programs — Wijhat
- [x] Programs — Stand for Art
- [x] Programs — Abbara
- [x] Publications
- [x] Mawred Network
- [x] News
- [x] About — Who We Are
- [x] Home

Not populated this pass: **Our Team**, **Past Initiatives** (+ initiative detail), **Supporters & Partners** and **Careers** (+ position detail). Our Team's team-section content is net-new and Mawred hasn't supplied it; Past Initiatives needs its twelve initiatives sourced one by one. Supporters is three logo bands over an optional intro; Careers is a position list, an empty state and a detail page whose content Mawred hasn't written. All four keep their ported structure.

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
