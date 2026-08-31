> **Design-judgment track · single dedicated pass (inventory + structure in one).** About is its own visual world: this spec stands alone and does **not** read from or write to the program component register. Where prose graduates into styled blocks here, whether any block is later shared with the programs is a wireframe/design-stage decision, deliberately deferred.

**Scope of this document:** the current six About sub-pages, inventoried as they exist on the live site, restructured into a proposed merged set. Covers per-page structure, what current content graduates into styled blocks, the merges, and the decisions left open for the client / wireframe stage. This is a structure spec, not wireframes.

## 1. What exists now (inventory)

Six sub-pages sit under the **About Us** nav dropdown today (no landing page — the dropdown links straight to the six). "Mawred's 20th" sits in the _top_ nav, not under About.

| Sub-page                              | Current shape                                                                                                                                                                                                                                        |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Who We Are**                        | Prose intro (3 paras) → **Our Vision** (1 line) → **Our Mission** (4 bullets) → **Our Values** (6 labelled bullets). Governance mentioned in passing (35-member general assembly incl. Belgium, 7-member artistic board).                            |
| **Artistic Board & General Assembly** | Two people-card grids: **Artistic Board** (~7 people) + **General Assembly** (~35 people). Each card = photo · name · **role** (board only) · country, expanding to a full bio. Many assembly bios are empty stubs (card present, no bio behind it). |
| **Supporters & Partners**             | Three logo grids — **Donors** (~5) · **Supporters** (~1) · **Partners** (~25). Logos link out to each org. No descriptions.                                                                                                                          |
| **History**                           | One long chronological prose narrative, summer 2003 → 2017+, dense with dated milestones (program launches, venue openings, spin-offs like AFAC and Action for Hope, the Cairo→Beirut relocation).                                                   |
| **Past Initiatives**                  | Grid of ~30 retired-initiative cards (title · one-line teaser · "Learn more"). Each links to a detail page = **main image + rich-text body** (the tabbed sub-sections seen in teasers are just body headings, not the active-program tab structure). |
| **Careers**                           | A single open-position listing → its own detail page (full description). Effectively a one-item list most of the time.                                                                                                                               |

**Cross-page observations (inventory-level, carried into the design):**

- Only **History** nests under `/about-us/` in its URL; the other five are top-level slugs. No real "About Us" landing exists behind the dropdown today.
- The global footer artifacts already logged site-wide recur here too: empty Instagram embed (stray `-->`), newsletter iframe. These are the **decision-log D** migration/QA items, not About-structure problems.
- Board/Assembly cards carry **country** consistently — a latent facet if the team page ever needs filtering (not proposing it now).

## 2. The merge — six sub-pages → five destinations

Confirmed direction: merge where it simplifies, keep the dropdown (no landing page for now — revisit later), absorb the **new Team section** rather than adding a seventh page.

| #   | Merged destination               | Absorbs                                          | Rationale                                                                                                                                                                                                        |
| --- | -------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Who We Are**                   | Who We Are **+** History                         | Identity and origin story are one narrative arc. Vision/mission/values up top; History graduates from a prose wall into a **timeline** below. One "who and where we came from" page.                             |
| 2   | **Our Team** _(name TBD — §5.1)_ | Artistic Board & General Assembly **• new Team** | Board and assembly are part of the team, so one page with three sub-groups (Team · Artistic Board · General Assembly) sharing the card→optional-bio treatment. Team-led umbrella, not three co-equal categories. |
| 3   | **Supporters & Partners**        | — (standalone)                                   | Logo-grid groups; distinct treatment, nothing to merge into it.                                                                                                                                                  |
| 4   | **Past Initiatives**             | — (standalone)                                   | Retired-initiative directory → simple image + rich-text detail.                                                                                                                                                  |
| 5   | **Careers**                      | — (standalone)                                   | Open-positions list → position detail.                                                                                                                                                                           |

Net: **five sub-pages** under the About dropdown, down from six, with Team folded in.

## 3. Per-page structure

Block names below are **descriptive** (this spec is standalone; they are not the program register's blocks). "Graduates" = current prose/content that should lift into a styled, non-prose treatment.

### 3.1 Who We Are (+ History)

Order top → bottom:

1. **Intro** — the org's one-paragraph "what we are" statement (keep as prose; it's the anchor).
2. **Vision** — single-line styled statement (pull-quote / emphasized band, not a buried heading).
3. **Mission** — the 4 mission points as a small styled group (cards or a clean list — wireframe call).
4. **Values** — the 6 labelled values as a styled key-point group (label + description each). _Graduates_ from plain bullets into a scannable grid/list.
5. **History timeline** — **the main graduation.** History's dated narrative becomes a **timeline block**: each entry = year(s) + milestone, in sequence (2003 founding → 2004 first programs → 2005 Genaina/training → 2006 AFAC → 2009 cultural policy → 2011–12 Abbara → 2013 Action for Hope → 2016–17 Cairo→Beirut → later). Long-form nuance that doesn't fit a timeline row can stay as a short intro paragraph above the timeline.

_Note:_ the timeline is a **treatment**, not a data commitment — copy gets rewritten from the existing narrative (per the copy-rewrite precondition). Exact entry count/granularity is a copy + wireframe call.

**Open thread:** if the merged page runs long, History could be a linked section rather than inline — hold for wireframe (§5.4).

### 3.2 Our Team (Team + Artistic Board + General Assembly)

Order top → bottom:

1. **Short intro** — one line framing the governance/team structure (net-new micro-copy; today this context only exists as a passing sentence on Who We Are).
2. **Team group** — people cards (new content — Mawred to supply).
3. **Artistic Board group** — people cards, with **role** (President, VP, Treasurer, Secretary, members).
4. **General Assembly group** — people cards.

**Shared card pattern across all three groups:**

- Card = photo · name · country · role _(role shown where it applies — board has it; assembly/team may not)_.
- Bio is **optional per record.** A card with a bio is **clickable/expandable**; a card without one is **static** (no dead click). Differentiating the two visually is a **UX/design decision — flagged, not solved here** (§5.2).
- Photo fallback: some records use a default-avatar placeholder today — treated as a normal state, not an error.

### 3.3 Supporters & Partners

1. **Optional short intro** — one line (currently none; low priority).
2. **Donors** — logo grid, each links out.
3. **Supporters** — logo grid.
4. **Partners** — logo grid.

One treatment (logo grid, link-out), three labelled groups. No per-logo descriptions. The only real question is whether the three tiers stay as separate labelled bands (recommend yes — they signal relationship type).

### 3.4 Past Initiatives

**Listing page:**

- **Optional short intro** — one line ("programs and initiatives no longer active").
- **Initiative directory** — card grid: image · title · one-line teaser · link to detail. ~30 entries. Whether it needs filtering/pagination at 30 is a wireframe call (probably not — a plain grid is fine).

**Detail page (per initiative):**

- **Title**
- **Main image**
- **Rich-text body** — single rich-text field with simple styling (headings, bulleted/numbered lists, links). This replaces the pseudo-"tabs" seen in current teasers; those were just body headings.
- **"Other past initiatives"** — a tail section linking a few sibling initiatives (relevance or recency — wireframe call; mirrors the News "Related Posts" pattern conceptually but is _not_ borrowing that spec).

_Note on the archived-program template:_ confirmed these are **not** structurally like active program pages (image + body, not the program tab system), so Past Initiatives is handled fully here as its own simple structure. The separate archived-program template deliverable stays about _retired grant programs_ if/when that's needed; this page does not depend on it.

### 3.5 Careers

**Listing page:**

- **Optional short intro** — one line.
- **Open positions list** — each = title · (optional meta: location/type/deadline) · link to detail. Renders cleanly at one item or many. When empty, a short "no open positions" state.

**Detail page (per position):**

- **Title**
- **Rich-text body** — full description (responsibilities, requirements, how to apply).
- Optional **apply CTA / contact** (email or link).

Simple listing-index + detail. Structurally the same family as News/Publications listings, but spec'd standalone here — no shared-block commitment.

## 4. What graduates into styled blocks (summary)

The design-judgment brief for About is specifically "where long prose graduates into styled blocks to break up heavy text." The graduations:

| Current prose/content                           | Graduates to                                                     |
| ----------------------------------------------- | ---------------------------------------------------------------- |
| History narrative (wall of dated text)          | **Timeline** — the headline graduation                           |
| Values (6 plain bullets)                        | Styled label+description key-point group                         |
| Mission (4 bullets)                             | Styled point group                                               |
| Vision (1 line in body)                         | Emphasized statement / pull-quote band                           |
| Board/Assembly (already cards)                  | Kept as cards; formalize the optional-bio clickable/static split |
| Past-initiative "tabs" (actually body headings) | Collapse into one rich-text body                                 |

Everything else stays prose (the intro paragraph on Who We Are, position descriptions, initiative bodies).

## 5. Decisions left open

### 5.1 Page name _(client / wireframe)_

Confirmed framing: board and assembly are **part of the team**, so the page reads as one team with sub-groups, not three co-equal categories. That favors a **team-led umbrella** name over a governance-led one. Options to put to the client: **"Our Team"** · **"The Team"** · **"People"**, with Team / Artistic Board / General Assembly as in-page sections. Recommend "Our Team." Flagged for client sign-off, not decided here.

### 5.2 Optional-bio card states — clickable vs. static _(UX/design, at wireframe)_

Bios are optional per record; a card with a bio expands, one without is static. How to signal the difference (and whether static cards look visibly different) is a wireframe/visual-design decision, explicitly deferred.

### 5.3 About landing page — dropdown-only for now _(revisit later)_

Keeping About as a pure nav dropdown, no overview landing, for simplicity. Noted that a landing may need revisiting when Home is spec'd (if Home wants a single "About" link target). Both options may get explored later; parked by choice.

### 5.4 Merged Who We Are length _(wireframe)_

If identity + full timeline is too long on one page, History becomes a linked/anchored section. Hold for wireframe.

### 5.5 Migration / QA (not structure) _(decision-log D — build stage)_

Empty Instagram footer embed, newsletter iframe, any RTL "?heading" artifacts, default-avatar placeholders on team cards. These are copy-rewrite / build items, consistent with how they're handled site-wide — noted here, fixed at build, not solved in this spec.

## 6. Summary

- **Six → five** About sub-pages: **Who We Are** (+History as timeline) · **Our Team** (Team + Board + Assembly) · **Supporters & Partners** · **Past Initiatives** · **Careers**.
- Kept as a **nav dropdown**, no landing (parked).
- Main graduation: **History → timeline.** Secondary: vision/mission/values into styled groups; optional-bio card split.
- Past Initiatives and Careers are simple **listing → image/rich-text detail** structures, spec'd standalone (no program-kit or archived-template dependency).
- Open decisions routed to **client** (page name) and **wireframe** (bio card states, page length, landing revisit).
- About remains **its own visual world** — no blocks read from or written to the program register.
