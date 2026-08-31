> **Structure specification · Programs / Grants & Opportunities.** The client-facing spec sheet for the four program pages. Assembles the Component Register (the kit) and the Fixed Scaffold (the skeleton) into one deliverable.

## What this document is

This is the structure the four program pages — **Production Awards, Wijhat, Stand for Art, and Abbara** — will be built and rewritten from.

It is deliberately **not a single template.** The four programs differ by nature: one funds individuals, another organisations; one runs three rounds a year, another is always open, another runs a two-year staged lifecycle. Forcing them into one identical page shape was the wrong goal, and we're not doing it.

Instead the deliverable is two things working together:

1. **A component kit** — a library of 18 reusable content blocks, each defined by _what it does_ (a timeline, an accordion, a row of figures), not by a fixed meaning. The client composes each program page by choosing the blocks that program needs.
2. **A light page scaffold** — a small set of anchored positions (page-top, apply action, contact) that stay consistent across all four programs so a visitor always knows where to look. Everything between the anchors is composed freely per program.

The result: consistency where it helps the visitor, freedom where the programs genuinely differ.

A note on copy: this specifies **structure, not wording.** The existing page copy will be rewritten to fit these blocks, not migrated as-is.

---

## Part 1 — The page scaffold

Most of a program page is composed freely. A **thin skeleton** holds a few elements in fixed positions — only those that (a) genuinely belong on every program and (b) sit where their position actively helps a visitor scan the page.

The skeleton, top to bottom:

> **[Hero summary — if used]** → **Overview** + **Apply button** + **[Impact figures — if used]** → … _free composition from the kit_ … → **[FAQs — recommended near the end]** → **Contact**

It has three tiers.

### Tier 1 — Always present, fixed position

| Element          | Position                                       | Why it's anchored                                                                                                                                         |
| ---------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Overview**     | Page top, first block                          | Every program needs an opening orientation. Being first _is_ its job — a page that opens on a figure strip or an accordion disorients.                    |
| **Apply button** | Top region; may repeat next to the apply steps | Every program routes to an apply action (the online portal, or Stand for Art's private form). It's the primary action and must sit at a predictable spot. |
| **Contact**      | Page tail                                      | Every program has a contact email, and visitors look for contact at the end. A fixed tail slot means they never hunt for it.                              |

### Tier 2 — Optional, but fixed _when_ used

These aren't on every program, so they can't be mandatory — but when a program does use one, its position matters, so we anchor it.

| Element            | Position when used              | Notes                                                                                                                                                                                          |
| ------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero summary**   | Very top, above the Overview    | A scannable who/what/where summary. Wijhat and Abbara use one today; any program may add one, none is required to.                                                                             |
| **Impact figures** | Top region, beside the Overview | A short row of headline numbers. Used by Production Awards, Wijhat, Abbara. Stand for Art doesn't — a risk/emergency program has no scale figures to promote, and that's by design, not a gap. |

### Tier 3 — Recommended order only

| Element  | Position                     | Notes                                                                                                                                |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **FAQs** | Near the end, before Contact | Belongs on every program, but its exact spot among the closing blocks isn't critical — this is a recommended order, not a hard rule. |

**Everything else composes freely** between the top region and the tail, in whatever order each program warrants.

---

## Part 2 — The component kit (18 blocks)

Each block is defined by its **treatment** — the visual/structural job it does. The same block carries different content on different pages: the "row of figures" block shows grant statistics on one program and beneficiary counts on another.

The **"Editor label"** column is the name a content editor sees when building a page. The **"Handles"** column notes, for the blocks that do heavy lifting, how one block absorbs differences across programs so we don't need separate blocks per program.

Each block carries a short **code** (`C1`–`C12` core, `S1`–`S6` specialist) used as shorthand in the composition matrix below. The appendix maps every code back to its name in our internal component register, for traceability.

### Core blocks — used across most or all programs

| Code    | Block                            | Editor label                           | What it is                                                                                                              | Handles                                                                                                                                                                                                                                                            |
| ------- | -------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **C1**  | **Overview text**                | Intro / About section                  | Heading + intro prose. The general-purpose text container and default for anything that reads fine as prose.            | —                                                                                                                                                                                                                                                                  |
| **C2**  | **Impact figures**               | Impact figures / key numbers           | A row of scannable headline figures.                                                                                    | Candid framing where relevant (e.g. Abbara's active-vs-ceased counts) — figures aren't sanitised.                                                                                                                                                                  |
| **C3**  | **At-a-glance facts**            | At-a-glance facts (dates, eligibility) | Label → value rows for dates and structured facts.                                                                      | Single deadline **or** multiple rounds (Wijhat's three deadline/results pairs); flat facts; structured eligibility criteria (e.g. Abbara's budget band, years operating, registration).                                                                            |
| **C4**  | **Apply steps**                  | How to apply — steps                   | Numbered, ordered steps for the application process.                                                                    | Sits on its own, or nested inside the application-paths block when a program has more than one route.                                                                                                                                                              |
| **C5**  | **Forms of support**             | Forms of support / grant amounts       | Repeating records: label + description + amount.                                                                        | Monetary **and** non-monetary support in one list — a record can carry an amount or leave it blank, so "no preset amount" or a referral sits beside a funded grant. Also carries multi-part bundles (e.g. funding + training + technical assistance + networking). |
| **C6**  | **Highlighted note**             | Highlighted note / assurance           | A visually set-apart box for a short assurance or condition that must read as first-class content, not buried in prose. | Confidentiality assurances (Stand for Art); "what the funding does and doesn't cover" flags (Abbara).                                                                                                                                                              |
| **C7**  | **Apply button**                 | Apply-now button                       | The primary apply action.                                                                                               | Routes to the online portal **or** an alternative route (Stand for Art's private encrypted form) — the destination is a setting on the block.                                                                                                                      |
| **C8**  | **Conditions / exclusions note** | Conditions / exclusions note           | Prose block for exclusions, conditions, application requirements.                                                       | —                                                                                                                                                                                                                                                                  |
| **C9**  | **Selection**                    | How applicants are selected            | Prose describing the jury or committee and the selection criteria.                                                      | A standard jury, or a body that also decides the level of support (Stand for Art's committee).                                                                                                                                                                     |
| **C10** | **Contract terms**               | Contract terms & obligations           | Prose for contractual terms and obligations.                                                                            | Scales from detailed (instalments, signing windows, guarantors) down to near-empty without looking broken.                                                                                                                                                         |
| **C11** | **FAQs**                         | FAQs                                   | Question-and-answer expander.                                                                                           | —                                                                                                                                                                                                                                                                  |
| **C12** | **Contact**                      | Contact                                | Label + program contact email.                                                                                          | —                                                                                                                                                                                                                                                                  |

### Specialist blocks — used by one to three programs, available to all

| Code   | Block                     | Editor label                                | What it is                                                                                                                                            | Used by                                                                                                                |
| ------ | ------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **S1** | **Programme timeline**    | Programme timeline / schedule               | An ordered sequence of stages, each with a label and optional date/duration/description. Preserves order and duration, which a flat facts list can't. | Abbara (8-stage lifecycle); available to any program with sequenced dates.                                             |
| **S2** | **Downloadable files**    | Downloadable forms / files                  | A list of downloadable documents.                                                                                                                     | Production Awards.                                                                                                     |
| **S3** | **Past beneficiaries**    | Past beneficiaries / grantees               | Records grouped into labelled sets (e.g. by round or year), each linking out.                                                                         | Abbara; **offered** to Production Awards and Wijhat for past grantees. Not offered to Stand for Art (confidentiality). |
| **S4** | **Hero summary**          | Page-top summary                            | A scannable summary of a few cells (who / what / where / support), restating fields defined elsewhere on the page.                                    | Wijhat, Abbara; available to all.                                                                                      |
| **S5** | **Application paths**     | Application paths (e.g. individual / group) | A wrapper holding a shared core plus two or more named paths (e.g. individual vs. group), so the ~80% they share isn't authored twice.                | Wijhat.                                                                                                                |
| **S6** | **"Which round?" helper** | Which round should I apply to?              | A small decision aid: compare inputs (e.g. travel date vs. round deadline) to guide a choice.                                                         | Wijhat.                                                                                                                |

That's the full kit: **12 core + 6 specialist = 18 blocks.** New programs, or rewrites of these four, compose from this set; a genuinely new need adds a block to the kit rather than bending an existing one.

---

## Part 3 — How each program composes

The same kit produces four very different pages. This shows each program's composition and confirms the kit covers all four.

| Block                        | Production Awards | Wijhat                 | Stand for Art       | Abbara            |
| ---------------------------- | ----------------- | ---------------------- | ------------------- | ----------------- |
| `S4` Hero summary            | —                 | ●                      | —                   | ●                 |
| `C1` Overview                | ●                 | ●                      | ●                   | ●                 |
| `C2` Impact figures          | ●                 | ●                      | —                   | ●                 |
| `C3` At-a-glance facts       | ●                 | ● (3 rounds)           | —                   | ● (eligibility)   |
| `S1` Programme timeline      | —                 | —                      | —                   | ● (8 stages)      |
| `C4` Apply steps             | ●                 | ● (per path)           | ●                   | ●                 |
| `S5` Application paths       | —                 | ● (individual / group) | —                   | —                 |
| `S6` "Which round?" helper   | —                 | ●                      | —                   | —                 |
| `C5` Forms of support        | ● (disciplines)   | — (single amount)      | ● (fund + referral) | ● (4-part bundle) |
| `C6` Highlighted note        | —                 | —                      | ● (confidentiality) | ● (funding scope) |
| `S2` Downloadable files      | ●                 | —                      | —                   | —                 |
| `C7` Apply button            | ● (portal)        | ● (portal)             | ● (private form)    | ● (portal)        |
| `C8` Conditions / exclusions | ●                 | ●                      | ●                   | ●                 |
| `C9` Selection               | ● (jury)          | ● (jury)               | ● (committee)       | ● (jury)          |
| `C10` Contract terms         | ● (detailed)      | ● (detailed)           | — (none)            | ● (light)         |
| `S3` Past beneficiaries      | _offered_         | _offered_              | —                   | ●                 |
| `C11` FAQs                   | ●                 | ●                      | ●                   | ●                 |
| `C12` Contact                | ●                 | ●                      | ●                   | ●                 |

● = composes this block · _offered_ = available as a recommendation, not currently used · — = not used

The pattern to notice: the **anchors** (Overview, Apply, Contact, FAQs) hold across all four, while the middle of each page looks quite different — which is exactly the intent.

---

## Part 4 — Open items for Mawred

A few kit decisions are recommendations that need your sign-off before build. They don't change the block definitions above; they're choices about content and adoption.

1. **English FAQ content.** Stand for Art has a real English FAQ; the other three show an "available only in Arabic" placeholder. We recommend writing genuine English FAQ content for every program. This is a standing commitment to author and maintain it, so it's your call — flagging it rather than assuming it.
2. **Past-beneficiaries lists for Production Awards and Wijhat.** The grouped directory block is available to list past grantees on these two programs (not Stand for Art, for confidentiality). Worth doing, if you'd like to showcase past recipients — confirm whether to include.
3. **Abbara beneficiary map.** The live site's beneficiary geo-map is dropped from this proposal (it clashes with the redesign and the embed offers little styling control). Its real job — showing impact — is carried by the impact-figures block instead. If you'd prefer to keep a map, we'd plan or rebuild one at that point; flag if so.
4. **Navigation label.** Still open: "Grants & Opportunities" vs. "Programs" for this section.
5. **Per-program colour.** Whether each program keeps a colour identity as a wayfinding cue is unconfirmed — noting it as an open choice.

---

## Appendix — Code reference

Maps each block code to its client name and its name in our internal component register (for traceability back to the working documents).

| Code | Block (client name)          | Register name                          |
| ---- | ---------------------------- | -------------------------------------- |
| C1   | Overview text                | Overview text block                    |
| C2   | Impact figures               | Stat / figure strip                    |
| C3   | At-a-glance facts            | Key-value strip                        |
| C4   | Apply steps                  | Numbered step sequence                 |
| C5   | Forms of support             | Repeatable card / row grid             |
| C6   | Highlighted note             | Callout / badge block                  |
| C7   | Apply button                 | CTA button                             |
| C8   | Conditions / exclusions note | Notes / caveat text block              |
| C9   | Selection                    | Selection text block                   |
| C10  | Contract terms               | Contractual text block                 |
| C11  | FAQs                         | FAQ accordion                          |
| C12  | Contact                      | Contact block                          |
| S1   | Programme timeline           | Process / lifecycle timeline           |
| S2   | Downloadable files           | Download-list block                    |
| S3   | Past beneficiaries           | Grouped directory / linked record list |
| S4   | Hero summary                 | Header-summary (hero) container        |
| S5   | Application paths            | Variant-paths container                |
| S6   | "Which round?" helper        | "When to apply" decision-aid           |
