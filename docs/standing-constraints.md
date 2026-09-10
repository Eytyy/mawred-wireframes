Rules that apply to every screen and every chat. Read before drawing.

Numbers in brackets point to the decision in **Wireframe Passes** that set the rule.

---

## 1. The artifact

A Next.js app styled with Tailwind. Blocks are React components; each page is a thin route composing them from a config object. Superseded the single static HTML file the first six page-types were built in, kept at `references/legacy-wireframes.html`.

- **Black and white only.** Solid 1px borders for fixed/always-present elements, dashed for optional/conditional, `neutral-200` fill bars for prose that doesn't exist yet. The permitted Tailwind utility set is in `AGENTS.md` and is narrow by design — no rounding, no shadows, no other colour, no imagery.
- **Clickable end to end.** Nav and dropdowns work; the chrome wraps every page; page-types not yet built render as "not yet wireframed" stubs inside the real chrome.
- **Routing is the App Router.** Real routes, real URLs. Supersedes the intercepted-click-handler approach the single file needed — see revised decision 17.
- **The block catalog is a review route, not a page-type.** `/wireframes/blocks` lists live blocks the way `/wireframes` lists screens; same chrome, not in the rail nav. [56, 193]
- **A block is one component**, used everywhere that block appears; one edit propagates. Content comes in as props from `lib/pages/`, never hardcoded in the component.
- **A state panel, opened from a cog at top right:** closed by default. The cog is always on the page; click opens the panel below it (`fixed top-3 right-3`). "Show review chrome" (key `codes`, **off** by default). Off hides code badges, Block labels, block wrapper borders, and Hint notes; headings that belong to the page stay. `<body>` starts with `codes-off` so the first paint is the client view. Plus a toggle for each meaningful state the current page has. Per page-type — a page contributes only its own states. [10, 134, 155, 156]
- **Block codes carry a per-page-type prefix** — C/S (programs), PA/PB/PC (Publications), MN (Network), N (News), HM (Home), AB (About) — so no code can be misread as belonging to another kit. [9, 18, 25, 34, 45]
- **Delivery is undecided** — possibly a deployed URL signed off as the deliverable, possibly a source for Figma conversion. Keep markup semantic and naming consistent; don't build for either route yet.

## 2. Language and chrome

- **English only this phase.** RTL is deferred.
- **Global chrome is a sticky rail from `lg`, a stacked header below that, and a page-end footer, drawn once and inherited:** from `lg` the rail is logo, search + EN / ع, vertical nav, and the content-column wrapper carries the 1px left border so it runs through the footer. Below `lg` the shell is header → main → footer: no flex, no sticky, a bottom rule on the header instead of the rail edge; nav is a burger that toggles UtilityBar and nav in flow under the header. Newsletter (inline Field + Subscribe), social row and copyright sit under `main` in the content column. `main` has vertical padding only. Page width (`max-w-300`) and horizontal padding live in `<PageWidth />`, which each page shell mounts, so a full-bleed rule can reach the rail. Home mounts HM1 outside `PageWidth` so the hero fills the content column; the rest of Home stays inside it. [154, 171, 179, 183, 185, 197]
- **The page-header band (breadcrumb + H1) is scaffold, not a block.** It is composed in the page shell, not in layout. Home is the only page that omits it — it opens on HM1. Every other page mounts `<PageHeaderBand />`. On both news posts, the publication detail and the network record the band is crumb only; the H1 lives in the reading column from `lg` on both news posts and the network record (on both news posts, N7 wraps it: category above, date below; on the network record, MN6 renders it), and from `wide` (90rem / 1440) on the publication detail. Below `wide` the publication title follows the cover (compact portrait beside it from `md`); the network record title precedes the cover, then sits beside a compact portrait from `md`. From `wide` publication meta sits under the title and downloads under the abstract; PC2 is a full-span row below. Both news posts close with a page-level ← prev / next → pair at the bottom of the shell, not a block. `suppressPageHead` is gone. Blocks do not render crumb. [33, 137, 147, 152, 199, 201, 202, 205, 206, 208, 209, 210, 217, 218]
- **Programme section titles and Home HM4 / HM5 / HM6 are `text-4xl font-bold`.** They share `SectionHeading` (`h2` + `.block-heading`) so review chrome hides them. Other `Block.heading` h2s stay on Block's default. Programme block titles under those sections are `h3`. On the announcement post, each discipline is a page-level `h2` at that default; N14 roster titles under it are `h3`; N15 has no heading and sits in the jury group. HM4 / HM5 / HM6 sit 5rem apart in client view (`looseAbove` on HM5 and HM6); the site-wide block-frame gap stays 3rem. [135, 175, 188, 216]
- **Programme pages are three always-on sections plus optional S3.** The sticky band is crumb + H1 + section nav, with C7 right-aligned next to the title and links; the nav arrow tracks the section in view. Then About, Application, optional Past (S3), FAQs. About's h2 is `sr-only`; Application, Past and FAQs keep a visible `.block-heading`. Contact is a sentence under FAQs (C12), not its own section. Each section is a full-width rule with inner `PageWidth`. No extra section boxes. [135, 153, 159, 172, 173, 174, 176]
- **Application in-block highlights sit last in their parent.** Grey-fill notes on C4, S5 and S6 close the block; they do not interrupt the steps, tabs or round rows. C4's `note` uses the same fill as `highlight`. C6 is itself the highlight. When S5's closing highlight is followed by C6, the pair uses the in-block 1rem gap, not the 3rem block-frame gap. [177, 178, 213]
- **Copy is being rewritten, not migrated.** Lay out for rewritten copy that fits the blocks; don't reproduce today's wrong-tab content or artifacts.

## 3. Grouping and lists

- **Long option lists render as stacked labelled sections, not tabs.** Tabs are warranted only where each group runs to hundreds of rows, stacking would bury the later group, and a single count/pagination control can't serve both. [19] S5 is not that case: two short application tracks (Individual / Group) render as tabs, with the shared core above. Stacking is the wrong treatment for a choose-one-of-two, not a long option list. [6 revised, 143]
- **Accordion groups:** most recent open, older collapsed above three. A single group renders flat, with no accordion.
- **Long lists get a truncated view.** A facet over ~12 values opens as an anchored combobox dropdown: type-to-filter, a scrollable list of every matching value, no "show all". A people group over ~12 records shows its first eight + "show all N". Shorter lists render in full. [12, 50, 168]
- **Optional fields render by omission** — no empty columns, no "N/A" placeholders, no dimming or special-casing of records that lack an optional field. [48]

## 4. Listings

- **Filtered listings always carry a result count row.** Active filters render as removable chips on that row with "Clear all". The row also carries the sort control where a listing has one, and the count is scoped to the active view. A control already visible above (e.g. an active entity tab) is not chipped again; a FilterBar facet is. [13, 28, 181, 190]
- **Pagination is decided per page-type by browse pattern:** load-more for filterable directories that get narrowed (Network), a numbered pager for dated archives that get navigated (News). Surfaced strips on Home need neither. [23, 26]
- **When one page-type surfaces another's content, it reuses that page-type's card verbatim** — except Home, which is a summary index. HM6 uses the shared `DirRow` (title · date · category) rather than the News feed row; the hero already carries the imagery, so repeating the cover five blocks down is the wrong thing to repeat. A type tag is still the only permitted addition where a strip mixes kinds. [43]
- **Listing `Card` titles are `h2` at Block-h3 size (`text-2xl font-bold`).** Listing and related `CardGrid`s are three columns (HM4). PA4 is a `LibraryRow` (compact Cover · author · title · languages). PC2 reuses that row without the Cover. N3 is the same stack (compact Cover · date · title · category), not `DirRow`. N13 reuses that row without the Cover. AB9 and AB11 are the same stack (compact Cover · title · teaser). PA4 and AB9 wrap those rows two-up from `lg`; PC2, AB11, N3 and N13 stay stacked. AB7 people groups stay four; N14 rosters are three — they use `CardGrid` only, not `Card`. Related-strip headings stay at the same rank as the cards they introduce; no `titleAs` fork. [167, 189, 191, 192, 194, 196, 204, 205, 214]

## 5. Embeds and colour

- **Embed styling limits** — SoundCloud/YouTube on Publications, any retained map — have limited styling control. Lay them out as constrained embeds, with no bespoke wrapper fighting the provider chrome. [14]
- **Per-program colour is an open client call.** Don't bake a colour system into program wireframes, and don't commit to anything that depends on one (e.g. a persistent CTA bar). [2]
