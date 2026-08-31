Rules that apply to every screen and every chat. Read before drawing.

Numbers in brackets point to the decision in **Wireframe Passes** that set the rule.

---

## 1. The artifact

A Next.js app styled with Tailwind. Blocks are React components; each page is a thin route composing them from a config object. Superseded the single static HTML file the first six page-types were built in, kept at `references/legacy-wireframes.html`.

- **Black and white only.** Solid 1px borders for fixed/always-present elements, dashed for optional/conditional, `neutral-200` fill bars for prose that doesn't exist yet. The permitted Tailwind utility set is in `AGENTS.md` and is narrow by design — no rounding, no shadows, no other colour, no imagery.
- **Clickable end to end.** Nav and dropdowns work; the chrome wraps every page; page-types not yet built render as "not yet wireframed" stubs inside the real chrome.
- **Routing is the App Router.** Real routes, real URLs. Supersedes the intercepted-click-handler approach the single file needed — see revised decision 17.
- **A block is one component**, used everywhere that block appears; one edit propagates. Content comes in as props from `lib/pages/`, never hardcoded in the component.
- **A fixed state panel, bottom right:** "Show block codes" (badges like C1/S4, on by default for review, off for a clean client view), plus a toggle for each meaningful state the current page has. Per page-type — a page contributes only its own states. [10]
- **Block codes carry a per-page-type prefix** — C/S (programs), PA/PB/PC (Publications), MN (Network), N (News), HM (Home), AB (About) — so no code can be misread as belonging to another kit. [9, 18, 25, 34, 45]
- **Delivery is undecided** — possibly a deployed URL signed off as the deliverable, possibly a source for Figma conversion. Keep markup semantic and naming consistent; don't build for either route yet.

## 2. Language and chrome

- **English only this phase.** RTL is deferred.
- **Global chrome is drawn once and inherited, never redrawn:** utility bar (search, EN|AR), header nav with dropdowns, breadcrumb + H1 page-header band, newsletter, footer.
- **The page-header band (breadcrumb + H1) is scaffold, not a block.** No page-type's kit supplies a title block. A page-type may _suppress_ the band where it would fight the page's own opening block (Home) — that's a router flag, not a change to the chrome. [33]
- **Copy is being rewritten, not migrated.** Lay out for rewritten copy that fits the blocks; don't reproduce today's wrong-tab content or artifacts.

## 3. Grouping and lists

- **Long option lists render as stacked labelled sections, not tabs.** Tabs are warranted only where each group runs to hundreds of rows, stacking would bury the later group, and a single count/pagination control can't serve both. [19]
- **Accordion groups:** most recent open, older collapsed above three. A single group renders flat, with no accordion.
- **Long lists get a truncated view.** A facet over ~12 values renders as search + first six + "show all N"; a people group over ~12 records shows its first eight + "show all N". Shorter lists render in full. [12, 50]
- **Optional fields render by omission** — no empty columns, no "N/A" placeholders, no dimming or special-casing of records that lack an optional field. [48]

## 4. Listings

- **Filtered listings always carry a result count row.** Active filters render as removable chips on that row with "Clear all". The row also carries the sort control where a listing has one, and the count is scoped to the active view. A control already visible above (e.g. an active category tab) is not chipped again. [13, 28]
- **Pagination is decided per page-type by browse pattern:** load-more for filterable directories that get narrowed (Network), a numbered pager for dated archives that get navigated (News). Surfaced strips on Home need neither. [23, 26]
- **When one page-type surfaces another's content, it reuses that page-type's card verbatim.** A type tag is the only permitted addition, and only where a strip mixes kinds. [43]

## 5. Embeds and colour

- **Embed styling limits** — SoundCloud/YouTube on Publications, any retained map — have limited styling control. Lay them out as constrained embeds, with no bespoke wrapper fighting the provider chrome. [14]
- **Per-program colour is an open client call.** Don't bake a colour system into program wireframes, and don't commit to anything that depends on one (e.g. a persistent CTA bar). [2]
