> **Consolidated wireframe reference.** One document to wireframe from, so the seven spec pages don't need cross-checking live per screen. Pulls each specced page-type into a single ordered layout, with the states/variants/RTL notes a wireframe needs, and gathers every "→ wireframe" open flag into one punch-list (§7). **Not a re-spec** — every structural decision is settled in the source specs; this flattens them into build order. Where a spec left something to the wireframe stage, it appears here as a flag, settled at the board.

**Scope.** All specced page-types: Programs (kit + scaffold), Publications, Mawred Network, News, Home, About. **Contact excluded** — not yet specced (deliberately skipped).

## Standing conventions

Apply to every screen; not repeated per page.

- **Bilingual EN/AR, RTL-aware.** Every layout mirrors in Arabic — filter bars, cards, timelines, hero transitions, breadcrumbs. Where a block has a directional behaviour (hero transition, timeline flow, prev/next), the RTL direction is itself a wireframe decision, flagged inline.
- **Global chrome (header/nav, language toggle, search, footer) is scaffold, not page content** — out of scope for these page layouts; wireframe once, globally.
- **Copy is being rewritten, not migrated.** Layouts assume rewritten copy that fits the blocks; content in the "wrong" tab today, editorial artifacts, duplicated lines are copy-rewrite items, not layout constraints.
- **Migration/QA artifacts** (empty IG footer embed, RTL "?heading", `/uncategorized/` URLs, dead icons) are build-stage fixes in decision-log D — not things to design around.

---

## 1. Program pages (Production Awards · Wijhat · Stand for Art · Abbara)

**The one page-type that is not a fixed layout.** Each program page is _composed_ from an 18-block kit onto a thin 3-tier scaffold. Wireframe the **scaffold + each block once**, then wireframe the **four compositions** — the middle of each page differs by design. Don't wireframe "a program page"; wireframe the kit and four assemblies of it.

### 1.1 The scaffold (anchored positions — hold across all four)

```
[Hero summary — if used]
        ↓
Overview  +  Apply button  +  [Impact figures — if used]
        ↓
   … free composition from the kit …
        ↓
[FAQs — recommended near end]
        ↓
     Contact
```

- **Tier 1 — always present, fixed position:** Overview (page top, first block) · Apply button (top region, may repeat by the apply steps) · Contact (page tail).
- **Tier 2 — optional, but fixed _when_ used:** Hero summary (very top, above Overview) · Impact figures (top region, beside Overview).
- **Tier 3 — recommended order only:** FAQs (near the end, before Contact — soft slot).
- **Everything else composes freely** between the top region and the tail.

### 1.2 The kit (18 blocks) — wireframe each once

**Core** (used across most/all programs):

| Code | Block                   | Wireframe-relevant shape & states                                                                                                                                                              |
| ---- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1   | Overview text           | Heading + prose. Default text container.                                                                                                                                                       |
| C2   | Impact figures          | Row of scannable headline numbers. Must not sanitise (Abbara shows active-vs-ceased). Degrades to plain numbers.                                                                               |
| C3   | At-a-glance facts       | Label→value rows. Must handle three shapes: single deadline · multiple rounds (Wijhat's 3 deadline/results pairs) · structured eligibility (Abbara budget band / years / registration).        |
| C4   | Apply steps             | Numbered ordered steps. Stands alone or nests inside S5 when >1 route.                                                                                                                         |
| C5   | Forms of support        | Repeating records: label + description + amount. Amount can be blank ("no preset amount" / referral beside a funded grant). Carries multi-part bundles (funding + training + TA + networking). |
| C6   | Highlighted note        | Visually set-apart box. Hosts confidentiality assurance (SFA) or funding-scope flag (Abbara). Reads first-class, not fine print.                                                               |
| C7   | Apply button            | Primary action. Destination is a setting: portal or private encrypted form (SFA).                                                                                                              |
| C8   | Conditions / exclusions | Prose block for exclusions/conditions/requirements.                                                                                                                                            |
| C9   | Selection               | Prose: jury or committee-that-also-sets-support-level (SFA).                                                                                                                                   |
| C10  | Contract terms          | Prose. Scales detailed → near-empty without looking broken (SFA = none). Design the thin state deliberately.                                                                                   |
| C11  | FAQs                    | Q&A expander.                                                                                                                                                                                  |
| C12  | Contact                 | Label + program email.                                                                                                                                                                         |

**Specialist** (1–3 programs, available to all):

| Code | Block                 | Wireframe-relevant shape & states                                                                                                                           |
| ---- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| S1   | Programme timeline    | Ordered stages, each label + optional date/duration/description. Flexes by stage count (Abbara = 8). Preserves order + duration. RTL flow direction = flag. |
| S2   | Downloadable files    | List of downloadable documents (PA's per-discipline PDFs).                                                                                                  |
| S3   | Past beneficiaries    | Records grouped into labelled sets (by round/year), each links out. Abbara uses; offered to PA + Wijhat; never SFA.                                         |
| S4   | Hero summary          | Scannable few-cell summary (who/what/where/support), restating on-page fields. Container block.                                                             |
| S5   | Application paths     | Wrapper: shared core + 2+ named paths (individual/group), so the ~80% shared isn't authored twice. Wijhat only. Tabs/toggle/accordion = wireframe call.     |
| S6   | "Which round?" helper | Small decision aid (compare travel date vs round deadline). Wijhat only.                                                                                    |

### 1.3 The four compositions

● = uses · — = doesn't · _offered_ = available, not currently used. Read down a column to wireframe that program.

| Block                      | PA              | Wijhat         | SFA                 | Abbara            |
| -------------------------- | --------------- | -------------- | ------------------- | ----------------- |
| S4 Hero summary            | —               | ●              | —                   | ●                 |
| C1 Overview                | ●               | ●              | ●                   | ●                 |
| C2 Impact figures          | ●               | ●              | —                   | ●                 |
| C3 At-a-glance facts       | ●               | ● (3 rounds)   | —                   | ● (eligibility)   |
| S1 Programme timeline      | —               | —              | —                   | ● (8 stages)      |
| C4 Apply steps             | ●               | ● (per path)   | ●                   | ●                 |
| S5 Application paths       | —               | ● (ind/group)  | —                   | —                 |
| S6 "Which round?" helper   | —               | ●              | —                   | —                 |
| C5 Forms of support        | ● (disciplines) | — (single amt) | ● (fund + referral) | ● (4-part bundle) |
| C6 Highlighted note        | —               | —              | ● (confidentiality) | ● (funding scope) |
| S2 Downloadable files      | ●               | —              | —                   | —                 |
| C7 Apply button            | ● (portal)      | ● (portal)     | ● (private form)    | ● (portal)        |
| C8 Conditions / exclusions | ●               | ●              | ●                   | ●                 |
| C9 Selection               | ● (jury)        | ● (jury)       | ● (committee)       | ● (jury)          |
| C10 Contract terms         | ● (detailed)    | ● (detailed)   | — (none)            | ● (light)         |
| S3 Past beneficiaries      | _offered_       | _offered_      | —                   | ●                 |
| C11 FAQs                   | ●               | ●              | ●                   | ●                 |
| C12 Contact                | ●               | ●              | ●                   | ●                 |

**Composition notes that bite at the board:**

- **PA** — only S2 user; leads C5 with a per-discipline matrix (5 disciplines × amount), not a single line.
- **Wijhat** — only page with S5 (dual paths) _and_ S6 (round helper); C3 is the 3-round shape. Round dates + "which round" sit under About today but inform Application — place adjacent to the apply step (cross-program placement rule).
- **SFA** — the sparse one: no impact figures, no facts strip, no timeline, no contract terms, private-form CTA, C6 carries confidentiality first-class. Emptiness is by design — layout must read intentional, not broken. Confidentiality may also want a light presence near the intro.
- **Abbara** — the dense one: hero + 8-stage S1 + eligibility C3 + 4-part C5 bundle + funding-scope C6 + S3 directory. The dropped geo-map's impact job is carried by C2.

### 1.4 Program flags → wireframe

- Cross-program tab/placement rule (Overview vs Application content), applied to all four.
- S5 rendering (tabs/toggle/accordion) for Wijhat.
- S1 timeline RTL flow + low-stage-count flex.
- C10 near-empty state design (SFA/Abbara-thin).
- Near-overlap pairs kept separate (S1 vs C3; S6 vs C3) — merge-or-keep is a wireframe call.
- Per-program colour as wayfinding (client-conditional).

---

## 2. Publications (4 pages, 3 structures)

Four separate pages in nav; three underlying structures. Wireframe the three; the three media pages are instances of Structure B.

### 2.1 Structure A — Media Library (Research & Publications)

```
Page heading (title + breadcrumb)
[Intro line — optional, not present today; available slot]
Filter bar — 6 facets: Author · Country · Theme · Language · Type · Year
Results grid — responsive cards
```

- **Card** = cover thumbnail · linked title · language line → detail (Structure C).
- Empty/filtered-to-nothing state handled by the grid.
- **Flag:** Author facet ~50 names — heavy as a flat list; wireframe treatment (typeahead / collapse / drop) if unwieldy. Not a structure change.
- **RTL:** facet labels + values mirror in Arabic.

### 2.2 Structure B — Series Listing (Mudawanat · Foundations · Mawred Talks · future series)

```
Page heading (series title + breadcrumb)
Series intro — prose, length flexes (1 para Mawred Talks → 3 paras Foundations); may carry outbound links
Media embed listing — flat ordered stack of embeds
```

- **Provider-agnostic:** each item is audio (SoundCloud) or video (YouTube); one structure spans both. Mixed sources within one series are fine.
- No filtering (matches current + flat scale).
- Per-item caption = available field, not present today, not required.
- **Flag:** audio-vs-video visual differentiation (if wanted) is a treatment on one structure, not two. Embed styling control is limited — factor into visual treatment.

### 2.3 Structure C — Publication Detail (behind each Library card)

```
Page heading (title + breadcrumb: Home › Research & Publications › {title})
Publication record — cover · title · metadata (author/country/theme/type/language/year) · description/abstract · document link
Related publications (NEW) — grid cards reusing the Library card treatment
```

- "Related" logic left to client/build; structure only reserves the section.

### 2.4 Publications flags → wireframe

- Author facet (~50) treatment.
- Audio-vs-video differentiation (Structure B).
- Nav/labelling: should "Publications" signal it holds two kinds of thing (library + media series)? Same class as the Grants/Programs nav-label question.

---

## 3. Mawred Network (directory + record detail)

Filterable directory backed by per-record detail pages. Same _family_ as Publications' Media Library, different record type — noted, not merged.

### 3.1 Listing page

```
Intro / purpose — short prose; absorbs the responsible-data line (now permanent, first-class); communications@ correction ask kept
Impact stat strip — native figures (replaces dropped map)
Filter bank — 6 facets (kept as-is)
Directory listing — SPLIT by Entity Type
```

- **Stat strip:** ~[N] records (total, confirm at build — several hundred, unpaginated) · 55 countries · 38 programs · 22 years (2004–2025). Optionally 8 involvement kinds · 22 disciplines. Degrades to plain numbers. Under intro, above filters.
- **6 facets:** Entity Type · Type of Involvement · Program · Discipline · Country · Year.
- **Listing split by Entity Type** (Individuals & Groups / Organizations & Initiatives) is fixed by spec; **tabs vs stacked sections = wireframe call.** Entity Type still exists as a filter too.
- **Row** = Name + Country (minimal); optionally involvement badge + discipline → detail.
- **Take-it-or-leave-it adds:** result count ("Showing X of Y") · sort (name/year/country) · pagination or lazy-load (needed at several-hundred records).
- **"Under development" notice retired** — don't wireframe it.

### 3.2 Record detail page (paired — two views of one record type)

```
Photo · Name · Country · Descriptor/role · Discipline · Involvement badge · Program · Round (where applicable) · Year · Project title · Project description
```

- Keep the field set. Drop generic WordPress furniture (comment box, share-everywhere strip, dead decorative icons) at wireframe stage.

### 3.3 Network flags → wireframe

- Entity split: tabs vs sections.
- Long-filter treatment: Program (38) + Country (55) flat lists; Year (2004–2025) individual years — searchable dropdown / grouping / decade buckets.
- Listing row density.
- Shared record source with program S3 past-beneficiaries (a program's block = this directory pre-filtered) — data-architecture note, not designed.

---

## 4. News (Landing + Detail, one system)

Two page-types as one system. RTL/EN-AR aware throughout.

### 4.1 News Landing

```
Page header — "News" + breadcrumb
Lightweight category filter — small tab/filter bar (real taxonomy, NOT internal Mawred News/SliderEN)
Post feed — reverse-chron card grid
Pagination — numbered pager (~26 pages)
```

- **Starter facets:** All (default) · Announcements (calls/results/grantees) · News & Events (forums/exhibitions/participations/institutional) · _optional: by Program_. Exact list = client tagging call. Keep lightweight — not the 6-facet directory machinery.
- **Card** = thumbnail · title · date · **category tag** (new) · optional short excerpt.
- **Flag:** numbered pager vs load-more.
- **Shared-source note:** Announcements = same info as program call-status/results (three-way with Home open-calls). Noted, not designed.

### 4.2 News Detail

```
Title + breadcrumb
Prev / Next (sequential by date — kept)
Featured image
Post meta strip — date · category tag · author (optional, client call on bylines)
Body — free prose by default
  + optional structured body blocks (available, never forced):
      • Schedule/programme block (dated rows: venue · time · detail)
      • CTA block (register form / detailed-programme link / apply-portal link)
      • Key-detail line (deadline / results-date callout)
Share bar (kept; trim 8-target list at design stage)
Related Posts — RELATED, not most-recent
```

- **Related logic:** topical via tags (same category/program) when available; **fallback = date-proximate** (posts near this post's own date), not always newest.
- Body = lightweight analogue of the program kit: prose + optional inserts.

### 4.3 News flags → wireframe

- Numbered pager vs load-more.
- Author bylines: surface or drop (client, low stakes).
- Exact facet list + tagging model (client).

---

## 5. Home (curated cross-page summary)

Design-judgment. Home **surfaces** every inner page and restructures none. Engagement concentrated at the top (imagery-led, interactive), utility below. Two calls settled: open-calls = curated block (not a live query — kit stays closed); map dropped for native stats + a custom visual.

### 5.1 Structure (top → bottom)

```
A. Cinematic hero — faces-of-impact sequence + positioning line   [engagement centerpiece]
B. Impact stat strip + faces-of-impact mosaic wall                [replaces the map]
C. Currently open opportunities   (curated)
D. Programs overview — all four   (NEW vs current Home)
E. Featured / spotlight strip     (curated; doubles as 20th slot)
F. Latest news                    (surfaces News)
G. Publications / media taste      (surfaces Publications)
H. Identity / about lead-in        (surfaces About)
I. Newsletter + contact + footer   (utility tail)
```

- **A — Hero.** Full-bleed large-image sequence (yaghmour-style), imagery = funded artists/work/orgs. Short positioning line + minimal nav + 1–2 wayfinding links (Grants & Opportunities · Network). **Interactivity lives here.** Structural decision = "imagery-led sequence, not a static banner." Continuous with B — same material.
- **B — Impact.** Native stat strip (widest cut: ~400 grants since 2004 · 55 countries · 22 years · N orgs — confirm vs Network counts), figures count up on scroll. Faces-of-impact mosaic wall in place of the map. Both numbers + imagery from the **Network record source.** Under the hero (impact top-of-scan).
- **C — Open opportunities.** Card per open program: name · one-liner · call-status (rolling/deadline/round) · link. Curated; shared source with News + program call-status. Handles empty gracefully (next-round timing or programs-overview fallback, never empty).
- **D — Programs overview.** Compact all-four, name + one-liner + link. Name+descriptor only (no kit dependency). The "what to add" call.
- **E — Featured/spotlight.** One editorial highlight, big image + title + line + link. The curation lever. Doubles as the "Mawred's 20th" slot when active.
- **F — Latest news.** 3–4 latest posts as cards (image·title·date·category tag) → News landing.
- **G — Publications taste.** A few latest covers and/or one latest media episode → Publications. _Flag:_ combined vs documents+media split (lean combined).
- **H — Identity lead-in.** Tightened about blurb → merged Who We Are. _Flag:_ can go very light or fold toward footer if the hero already carries identity.
- **I — Utility tail.** Newsletter · contact CTA · social · global footer.

### 5.2 Home flags → wireframe

- Hero interaction: auto-advance vs scroll-driven vs hover; frame count; captions naming artist/work (recommended); **RTL transition direction**; hero→mosaic handoff (dissolve vs distinct).
- Order: impact strip (B) vs open-opportunities (C) — lean B first, easy to flip.
- Mosaic execution: density/rhythm; caption-on-hover; stat-figure placement (overlaid vs adjacent band). Direction (mosaic) chosen — these are execution details.
- Publications combined-vs-split strip (G).
- Identity-block weight (H).

### 5.3 Home flags → client

- Confirm native-numbers direction (map kept only as revisit).
- Confirm headline impact figures to display.
- "Mawred's 20th": permanent nav vs temporary campaign (informs whether E leads with it).
- Nav label "Grants & Opportunities" vs "Programs" (surfaces on hero wayfinding).

---

## 6. About (5 sub-pages, nav dropdown, no landing)

Design-judgment. **About is its own visual world** — its block names are descriptive and do not borrow the program kit; whether anything is shared with programs is a deferred design call. Six sub-pages → five destinations, kept as a dropdown (no landing — parked).

### 6.1 Who We Are (+ History merged in)

```
Intro — one-para "what we are" (stays prose; the anchor)
Vision — single-line styled statement (pull-quote / emphasized band)
Mission — 4 points as a small styled group (cards or clean list)
Values — 6 labelled values as styled key-point group (label + description)
History timeline — THE headline graduation (dated narrative → timeline block)
```

- Timeline entries = year(s) + milestone in sequence (2003 → 2004 → 2005 → 2006 AFAC → 2009 → 2011–12 Abbara → 2013 → 2016–17 Cairo→Beirut → later). Long nuance that won't fit a row → short intro para above the timeline.
- Timeline is a treatment, not a data commitment (copy rewritten). Entry count/granularity = copy + wireframe call.
- **Flag:** if the merged page runs long, History becomes a linked/anchored section.

### 6.2 Our Team (Team + Artistic Board + General Assembly) — _name TBD, recommend "Our Team"_

```
Short intro — one line framing team/governance (net-new micro-copy)
Team group — people cards (new content, Mawred supplies)
Artistic Board group — people cards, with role (President/VP/Treasurer/Secretary/members)
General Assembly group — people cards
```

- **Shared card pattern (all three groups):** photo · name · country · role (where it applies).
- **Bio optional per record:** card with a bio is clickable/expandable; card without is static (no dead click). **Signalling the difference visually = wireframe call** (the key open UX decision here).
- Photo fallback: default-avatar placeholder is a normal state, not an error.

### 6.3 Supporters & Partners

```
[Optional short intro — one line, low priority]
Donors — logo grid, link-out
Supporters — logo grid
Partners — logo grid
```

- One treatment (logo grid, link-out), three labelled bands. No per-logo descriptions. Recommend keeping three tiers as separate bands (signal relationship type).

### 6.4 Past Initiatives

```
Listing:
  [Optional short intro — one line]
  Initiative directory — card grid (~30): image · title · one-line teaser · link
Detail (per initiative):
  Title
  Main image
  Rich-text body — single field, simple styling (replaces pseudo-"tabs" which were just body headings)
  "Other past initiatives" — tail linking a few siblings
```

- Confirmed NOT structurally like active program pages — image + body, not the tab system. No archived-program-template dependency. Filtering/pagination at ~30 probably unneeded (plain grid) — wireframe call.
- "Other past initiatives" relevance vs recency = wireframe call (mirrors News Related conceptually, not borrowing that spec).

### 6.5 Careers

```
Listing:
  [Optional short intro — one line]
  Open positions list — each: title · (optional meta: location/type/deadline) · link
  Empty state: "no open positions"
Detail (per position):
  Title
  Rich-text body — full description
  Optional apply CTA / contact
```

- Renders cleanly at one item or many. Same family as News/Publications listings but spec'd standalone — no shared-block commitment.

### 6.6 About flags

- **→ wireframe:** optional-bio card states (clickable vs static signalling) · merged Who We Are length (inline vs linked History) · About-landing revisit (parked; may return when Home wants a single "About" target) · Past Initiatives "other initiatives" logic.
- **→ client:** Team page name ("Our Team" recommended) · Careers content-readiness (net-new / phased-in).

---

## 7. Consolidated wireframe punch-list

The decisions the specs deliberately left to wireframing — the working agenda.

**Programs**

- Cross-program tab/placement rule (Overview vs Application content), all four.
- S5 individual/group rendering (tabs/toggle/accordion).
- S1 timeline RTL flow + low-stage-count flex.
- C10 near-empty/thin contract state design.
- Timeline-vs-facts and round-helper-vs-facts merge-or-keep.
- Per-program colour (client-conditional).

**Publications**

- Author facet (~50) treatment.
- Audio vs video visual differentiation (Structure B).
- "Publications" nav-label signalling.

**Network**

- Entity split: tabs vs sections.
- Long-filter treatment (Program 38 · Country 55 · Year range).
- Listing row density.

**News**

- Numbered pager vs load-more.
- Author bylines (client).
- Facet list + tagging model (client).

**Home**

- Hero interaction (auto/scroll/hover · frame count · captions · RTL direction · hero→mosaic handoff).
- Block order B vs C.
- Mosaic execution (density · caption-on-hover · stat placement).
- Publications strip combined vs split.
- Identity block weight.
- (client) native-numbers confirm · headline figures · 20th permanent-vs-campaign · nav label.

**About**

- Optional-bio card states (clickable vs static signalling).
- Merged Who We Are length (inline vs linked History).
- About-landing revisit.
- Past Initiatives "other initiatives" logic.
- (client) Team page name · Careers content-readiness.

**Site-wide (settle once)**

- Nav label "Grants & Opportunities" vs "Programs" (client) — surfaces on Home + programs.
- Global header/footer treatment (wireframe once; carries decision-log D fixes).
- RTL mirroring as a standing check on every screen.
