> **Track:** Lightweight (single combined pass — inventory the current content + a simple structure spec in one go; no register, no consolidation).

> **Page:** Mawred Network — live at `/mawred-community/` (nav label "Mawred Network").

> **Source:** live site, fetched 2026-08-29 — the listing page + one record page (Tarek Elazhary).

## Part A — Inventory (what exists now)

### A1. The page in one line

A **directory / database of everyone Mawred has worked with** — individuals, groups, and organizations — presented as a long flat list of names + country, sitting under a bank of filters, with a short "under development" notice on top. Each name links out to its own record page.

### A2. Current on-page content, in order

1. **Standard chrome** — global header/nav, language toggle (EN/العربية), search, footer. (Same shell as every page; not page-specific.)
2. **Page title** — "Mawred Network."
3. **"Under development" notice** — a short paragraph saying the page is still being built, inviting people to request data access or take part in data activities (collection, entry, analysis, discussion), with a contact address (`resources@mawred.org`). Temporary placeholder, not permanent content.
4. **Filter bank** — six filter facets, each a list of values:
   - **Entity Type** — Individuals & Groups · Organizations & Initiatives (2 values)
   - **Type of Involvement** — Commissioned Artist · Expert · Featured Artist · Grantee · Juror · Participant · Researcher · Student (8 values)
   - **Program** — 38 programs/initiatives (Abbara, All Around Culture, AFAC Steering Committee, Wijhat, Stand for Art, Production Awards, Mudawanat, … — includes many past/partner initiatives, not just the four current programs)
   - **Discipline** — 22 values (Architecture, Cinema, Music, Performing Arts, Visual Arts, Cultural Policies, …)
   - **Country** — 55 values (Arab-region + diaspora/international)
   - **Year** — 2004–2025 (single years)
5. **The list itself** — a long flat run of records, each showing **Name + Country** (country can be multiple, e.g. "Farah Saleh — Palestine, United Kingdom"). Several hundred records (individuals, groups, and organizations intermixed in one list). No visible grouping, no pagination markers, no sort control on the page.
6. **Responsible-data / correction notice** — a short paragraph stating the database follows responsible-data practices (consent, privacy, security, ownership) and giving a contact for profile-change requests (`communications@mawred.org`).

### A3. What a single record (detail page) contains

From the Tarek Elazhary record — a record page holds: **photo** (portrait / logo) · **name** · **country** · **short descriptor / role** ("Oud Player and Composer") · **discipline** ("Music") · **involvement type** (badge — "Grantee") · **program** ("Wijhat") · **round** ("Round 02", where the program has rounds) · **year** ("2023") · **one-line project title** · **short project description** · a few decorative social/asset icons (currently linking nowhere) · standard share buttons + comment box (generic WordPress furniture).

So the six on-page filters map directly onto fields the records already carry (Entity Type, Involvement, Program, Discipline, Country, Year), plus richer per-record fields not exposed as filters (descriptor, project title + description, round, photo).

### A4. Flags (content/QA — for the build, not structure decisions)

- **`resources@` vs `communications@`** — the page shows two different contact addresses for two different asks (data access vs. profile correction). Not a bug, but worth confirming both are intended and monitored.
- **"Under development" notice is temporary** — resolved: retired at launch (§B1).
- **Dead decorative icons** on record pages (the `Asset-2/3/4.svg` links point nowhere) — copy/QA cleanup. Likely meant to be the person's own socials/links.
- **Empty Instagram footer embed** (stray `-->`) and the **RTL "?heading" artifact** — the same global-footer / CMS-wide items already logged from the program audits; not new here.
- **No pagination / sort / result-count** visible on the current listing — flagged as a build concern given the list is several-hundred long (see §B4).
- **Mixed entity types in one list** — individuals, groups, and organizations all run together; Entity Type is a filter but not a visible grouping.

---

## Part B — Structure Spec (proposed)

The page is structurally settled in kind: a **filterable directory backed by detail records**. Same _family_ as the Publications "Media Library" (a filtered record library), but a different record type and filter set — noted for the wireframe stage, not merged here (lightweight track).

Proposed structure, top to bottom: **intro/purpose · impact stat strip · filter bank · entity-split listing · record detail (paired) · shared-source note.**

### B1. Intro / purpose block _(short prose)_

A one-paragraph statement of what the directory is and the responsible-data commitment. This absorbs the **responsible-data notice** (consent/privacy/ownership), which moves up from the very bottom to become a permanent, first-class line here. The **"under development" notice is retired** at launch (per decision). The `communications@` address for profile-correction requests stays here as a clearly-labelled ask.

### B2. Impact stat strip _(new — replaces the dropped map)_

Instead of a geo-map/visualization (dropped — no styling control over an embed we don't build), impact is carried by a **native stat / figure strip** — the same move already made on Abbara (map dropped → impact carried by the 87/60/27 figure strip). The numbers are already latent in the directory's own facets, so this needs no new data and no embed:

- **~[N] people, groups & organizations** in the network _(total record count — to fill in; the live list runs several hundred, unpaginated, so not hard-coding an estimated count)_
- **55 countries** _(from the Country facet)_
- **38 programs & initiatives** _(from the Program facet)_
- **22 years, 2004–2025** _(from the Year facet)_

Optionally also **8 kinds of involvement** and **22 disciplines** if a fuller strip is wanted. This is the "in-between" option: more than a bare list, no map headache. Reads at the top as the impact signal; degrades to plain text/numbers. Placement: directly under the intro, above the filters.

### B3. Filter bank _(the six existing facets — kept as-is)_

Keep all six facets: **Entity Type · Type of Involvement · Program · Discipline · Country · Year.** They map cleanly onto real record fields and need no restructuring.

Two facets need a design-stage treatment note (not a structure change):

- **Program (38 values)** and **Country (55 values)** are long flat lists — same class of "long filter list" flag raised for Publications' Author facet; a wireframe/design-stage revisit (searchable dropdown, grouping, type-ahead), _not_ a reason to change the facets now.
- **Year (2004–2025)** as individual years is long; a range or decade grouping is a design-stage option.

### B4. Directory listing — split by entity type _(decided)_

The directory is **split into two views by Entity Type** — **Individuals & Groups** and **Organizations & Initiatives** — rather than one intermixed run. Whether that split renders as **two tabs or two stacked sections is a wireframe/design-stage call**; the spec fixes only that they are separated. The Entity Type facet still exists as a filter, but the primary listing is entity-split by default so the two record kinds don't read as one undifferentiated list.

The flat Name + Country row is the core unit. Recommended structural additions (take-it-or-leave-it for wireframing): a **result count** ("Showing X of Y") · a **sort control** (by name / year / country) · **pagination or lazy-load** (needed in practice at several-hundred records) · each row stays minimal (Name + Country; optionally the involvement badge + discipline, which the record already carries) and links to the detail page.

### B5. Record detail page _(kept as-is; fields confirmed)_

The per-record page already has a clear field set (photo · name · country · descriptor · discipline · involvement badge · program · round · year · project title · project description). Keep it. Recommended: drop the generic WordPress furniture (comment box, share-everywhere strip, dead decorative icons) at the wireframe stage — a design/QA call.

The listing (B4) and the detail (B5) are two views of **one record type** — the listing is the filtered index, the detail is the full record. Speced as a pair (mirrors the Publications library ↔ Publication Detail relationship).

### B6. Shared record source with the program past-beneficiaries block _(decided — noted, not designed)_

The program kit's optional **past-beneficiaries directory** block (offered to PA + Wijhat, not SFA) and this Network page are two surfaces onto the **same underlying people/orgs data** — the Network page being the site-wide superset (everyone, all programs, filterable). They **should share a single record source** rather than maintain duplicate lists: a program's past-beneficiaries block is effectively this directory pre-filtered to that program. Flagged as a data-architecture note for the build/wireframe stage; not designed further in this lightweight pass.

---

## Part C — Decisions (resolved 2026-08-29)

1. **Entity grouping →** directory is **split by Entity Type** (Individuals & Groups / Organizations & Initiatives). Tabs-vs-sections is a wireframe call. _(§B4)_
2. **"Under development" / get-involved notice →** **retired** at launch. Responsible-data line kept and promoted into the intro. _(§B1)_
3. **Impact without a map →** map/visualization **dropped**; impact carried by a **native stat strip** built from the directory's own facet counts (in-between option). _(§B2)_
4. **Shared record source →** Network page and the program past-beneficiaries block **share one record source**; noted, not designed. _(§B6)_
