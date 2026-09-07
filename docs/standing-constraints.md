Rules that apply to every screen and every chat. Read before drawing.

Numbers in brackets point to the decision in **Wireframe Passes** that set the rule.

---

## 1. The artifact

A Next.js app styled with Tailwind. Blocks are React components; each page is a thin route composing them from a config object. Superseded the single static HTML file the first six page-types were built in, kept at `references/legacy-wireframes.html`.

- **Black and white only.** Solid 1px borders for fixed/always-present elements, dashed for optional/conditional, `neutral-200` fill bars for prose that doesn't exist yet. The permitted Tailwind utility set is in `AGENTS.md` and is narrow by design — no rounding, no shadows, no other colour, no imagery.
- **Clickable end to end.** Nav and dropdowns work; the chrome wraps every page; page-types not yet built render as "not yet wireframed" stubs inside the real chrome.
- **Routing is the App Router.** Real routes, real URLs. Supersedes the intercepted-click-handler approach the single file needed — see revised decision 17.
- **A block is one component**, used everywhere that block appears; one edit propagates. Content comes in as props from `lib/pages/`, never hardcoded in the component.
- **A state panel, opened from a cog at top right:** closed by default. The cog is always on the page; click opens the panel below it (`fixed top-3 right-3`). "Show review chrome" (key `codes`, **off** by default). Off hides code badges, Block labels, block wrapper borders, and Hint notes; headings that belong to the page stay. `<body>` starts with `codes-off` so the first paint is the client view. Plus a toggle for each meaningful state the current page has. Per page-type — a page contributes only its own states. [10, 134, 155, 156]
- **Block codes carry a per-page-type prefix** — C/S (programs), PA/PB/PC (Publications), MN (Network), N (News), HM (Home), AB (About) — so no code can be misread as belonging to another kit. [9, 18, 25, 34, 45]
- **Delivery is undecided** — possibly a deployed URL signed off as the deliverable, possibly a source for Figma conversion. Keep markup semantic and naming consistent; don't build for either route yet.

## 2. Language and chrome

- **English only this phase.** RTL is deferred.
- **Global chrome is a sticky right rail, drawn once and inherited:** logo, search + EN / ع, vertical nav, newsletter link (popup), social, copyright. Not a stacked utility bar / header / newsletter / footer. `main` has a 1px left border and vertical padding only. Page width (`max-w-300`) and horizontal padding live in `<PageWidth />`, which each page shell mounts, so a full-bleed rule can reach the rail. [154, 171]
- **The page-header band (breadcrumb + H1) is scaffold, not a block.** It is composed in the page shell, not in layout. Home is the only page that omits it — it opens on HM1. Every other page mounts `<PageHeaderBand />`. `suppressPageHead` is gone. Blocks do not render crumb or page title. [33, 137, 147, 152]
- **Section h2s are `text-2xl font-bold` site-wide.** Client-visible page-level titles — `Block.heading` (default `h2`), AB2 Vision, and programme section titles — share `.block-heading` at that size so review chrome hides them. Programme block titles under those sections are `h3` at `text-lg`. [135]
- **Programme pages are three always-on sections plus optional S3.** After the band: a sticky in-page nav whose arrow tracks the section in view, then About, Application, optional Past (S3), FAQs. About's h2 is `sr-only`; Application, Past and FAQs keep a visible `.block-heading`. Contact is a sentence under FAQs (C12), not its own section. Each section is a full-width rule with inner `PageWidth`. No extra section boxes. [135, 153, 172, 173, 174, 176]
- **Copy is being rewritten, not migrated.** Lay out for rewritten copy that fits the blocks; don't reproduce today's wrong-tab content or artifacts.

## 3. Grouping and lists

- **Long option lists render as stacked labelled sections, not tabs.** Tabs are warranted only where each group runs to hundreds of rows, stacking would bury the later group, and a single count/pagination control can't serve both. [19] S5 is not that case: two short application tracks (Individual / Group) render as tabs, with the shared core above. Stacking is the wrong treatment for a choose-one-of-two, not a long option list. [6 revised, 143]
- **Accordion groups:** most recent open, older collapsed above three. A single group renders flat, with no accordion.
- **Long lists get a truncated view.** A facet over ~12 values opens as an anchored combobox dropdown: type-to-filter, a scrollable list of every matching value, no "show all". A people group over ~12 records shows its first eight + "show all N". Shorter lists render in full. [12, 50, 168]
- **Optional fields render by omission** — no empty columns, no "N/A" placeholders, no dimming or special-casing of records that lack an optional field. [48]

## 4. Listings

- **Filtered listings always carry a result count row.** Active filters render as removable chips on that row with "Clear all". The row also carries the sort control where a listing has one, and the count is scoped to the active view. A control already visible above (e.g. an active category tab) is not chipped again. [13, 28]
- **Pagination is decided per page-type by browse pattern:** load-more for filterable directories that get narrowed (Network), a numbered pager for dated archives that get navigated (News). Surfaced strips on Home need neither. [23, 26]
- **When one page-type surfaces another's content, it reuses that page-type's card verbatim** — except Home, which is a summary index. HM6 uses the shared `DirRow` (title · date · category) rather than the News feed card; the hero already carries the imagery, so repeating the cover five blocks down is the wrong thing to repeat. A type tag is still the only permitted addition where a strip mixes kinds. [43]

## 5. Embeds and colour

- **Embed styling limits** — SoundCloud/YouTube on Publications, any retained map — have limited styling control. Lay them out as constrained embeds, with no bespoke wrapper fighting the provider chrome. [14]
- **Per-program colour is an open client call.** Don't bake a colour system into program wireframes, and don't commit to anything that depends on one (e.g. a persistent CTA bar). [2]
