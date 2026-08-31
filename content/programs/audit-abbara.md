> **Frozen inventory.** Internal working doc — record of what the live Abbara page currently contains. Not client-facing. Pre-pivot template framing has been stripped; this is raw inventory only.

This document: **Abbara** (organizations / core-funding audit).

Source: `mawred.org/cultural-organizations-management/abbara/?lang=en` (captured 2026; page `modified_time` 2026-05-07)

---

## 1. Page-level facts

| Attribute        | Value                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Program type     | Capacity-building + **core funding** grant for **organizations** (not individuals)                                                                                                                                                                                                                                                                                                |
| Audience         | Independent, non-governmental artistic/cultural **initiatives & organizations** of Arab origin (incl. diaspora serving Arabic-language production); small/midsize (US$50k–500k budget); ≥3 years' experience                                                                                                                                                                      |
| Cadence          | **Rounds** (round-based, not fixed annual) — currently on **Abbara 08**; each round runs 24–30 months                                                                                                                                                                                                                                                                             |
| Breadcrumb       | Home / Cultural Organizations & Management / Abbara                                                                                                                                                                                                                                                                                                                               |
| Tab structure    | About the Program · Application Guidelines · FAQs                                                                                                                                                                                                                                                                                                                                 |
| Apply route      | External portal — `apply.mawred.org` (same portal as PA & Wijhat)                                                                                                                                                                                                                                                                                                                 |
| Contact          | abbara@mawred.org                                                                                                                                                                                                                                                                                                                                                                 |
| Program identity | **Name only.** Program is identified by name; **per-program logo is out** and **per-program color is deferred/unconfirmed** (per client assumption, 2026-08-26). _The current live site uses a teal Abbara program color (carried through the beneficiary map); banner color to confirm in a Phase-2 capture. Retained as a record of what exists, not a confirmed design input._ |
| Languages        | Page in EN + AR; **application must be in Arabic** (except English-required fields); FAQs EN = "Available only in Arabic" (empty shell — same gap as PA & Wijhat)                                                                                                                                                                                                                 |
| URL pattern      | Nested under `/cultural-organizations-management/` — a **third top-level section** (PA & Wijhat sit under `/artistic-creativity/`; Stand for Art is top-level `/stand-for-art/`)                                                                                                                                                                                                  |

---

## 2. Content inventory — as it exists today

### PRE-TAB — Interactive beneficiary MAP (above everything)

The page opens with an interactive map of beneficiary orgs, sitting above the "Active Abbara Organizations" heading. (The map is script-rendered; a plain text scrape flattens it into just the round directory below it.)

- **Interactive SVG map**, full page width, in the teal Abbara program color (grey landmasses on a pale-teal sea; teal circular markers = beneficiary orgs).
- **One marker per active organization**, plotted by city. Coverage spans the Maghreb, Nile Valley, Levant, Gulf, and Yemen, plus **diaspora points outside the Arab region** (markers up into Turkey / southern Europe), matching the "orgs abroad serving Arabic production" eligibility.
- **Custom `+` / `−` zoom controls** bottom-right; the map is pannable/zoomable.
- **Two inconsistent hover/marker tooltip treatments** (a genuine bug, not just taste):
  - a **small pin tooltip** — bilingual org name only (EN + AR), e.g. "Hassala films / حصّالة فلم";
  - a **large card/near-modal** — AR name, EN name, EN + AR one-line description, org **logo**, and city/country, e.g. "Piccolo Teatro Di Bizerta … Cultural center specialized in theatrical coaching and production … Bizerte, Tunisia". This card is large enough to **cover ~a third of the map** and obscure other markers while open.
- Markers are **dense and overlapping** in the Tunis, Cairo, and Beirut/Levant clusters — individual orgs are hard to hit/disambiguate at default zoom.

> **Map is real but poorly executed — a Phase-2 problem to solve.** Concrete issues: inconsistent tooltip styles (tiny pin vs. giant card) for the same interaction; the large card behaves like an accidental modal that blocks the map; overlapping markers in dense clusters are unpickable without zooming; no visible legend, round filter, or list-sync between the map and the accordion below; markers carry no round attribution (you can't tell an Abbara 01 org from an Abbara 08 one on the map); and the embed has **limited styling control** (consistent with the Home Data-Studio map and other embeds already flagged as constraints). Candidate for **rebuild**, not just restyle.

### PRE-TAB — Active Abbara Organizations directory (below the map)

Below the map, Abbara lists its **past & present beneficiary organizations grouped by round** — the accordion a text scrape _does_ capture. Map + directory are two views of the same underlying org dataset (ideally they'd share one source and sync; today they don't).

- **Heading** — "Active Abbara Organizations."
- **8 round groups** (Abbara 01 → Abbara 08), each an anchor-linked sub-heading, each expanding to a **list of organizations with outbound links** to their own sites/socials.
- Roughly **60+ organizations** listed across the 8 rounds (counts per round vary: e.g. Abbara 05 and Abbara 08 each list ~8–11; Abbara 04 lists 2).
- Several org links are **placeholder/dead** (`href="#"` — e.g. Hassala films, Association l'Art Vivant, Stories film Lab, Damascus Theatre Lab), i.e. named but not linked.
- Outbound links are a mix of dedicated sites, blogspot, and Facebook/Instagram pages — **external, third-party, styling-uncontrolled**.

### PRE-TAB — Header summary block (above the tabs)

Like Wijhat, Abbara front-loads a **scannable two-part summary above the tab strip**, each with its own heading + bullet list:

- **"Who is Abbara for"** — independent, non-governmental Arab-region artistic/cultural initiatives/orgs; Arab orgs abroad whose work serves Arabic-language production.
- **"What kind of support does the program offer"** — €22,000 financial support per org; training in strategic planning & org management; technical assistance (governance, financial management, fundraising, communications…); networking & collaborations.

> Note: like Wijhat's hero block, this duplicates content that also appears inside the tabs (support components, eligibility).

### TAB 1 — About the Program

1. **Heading + intro** — "What is the Abbara program?" Launched 2011; framed around supporting independent cultural initiatives as key sector actors. **Includes a lifecycle/impact narrative:** across 8 rounds it has supported **87** initiatives/orgs; the team continues to accompany them; **27 have ceased operations, 60 remain active.** (This candid attrition stat is unique among the four programs.)
2. **Sector-context paragraphs** — two paragraphs framing regional challenges (warfare, occupation, political/economic crises, absence of government arts support, scarcity of unrestricted core funding) → Abbara as a response building administrative viability & sustainability.
3. **Program goals** — 3 bullets: support collective cultural work (train/equip/guide structures); develop the sector by testing sustainability models (esp. financial); address common challenges by forging links & mutual-support frameworks.
4. **What does Abbara offer?** — the **4 support components**, each expanded:
   - **Financial support** — €22,000 **core funding** covering organizational costs (staffing, assets/premises setup & maintenance, running costs); **does not cover program activities**; lasts **no more than 24 months**.
   - **Training** — two physical workshops (strategic planning + org management) with experts, plus online peer-learning sessions.
   - **Technical assistance** — tailored per org via a needs assessment after the first/second workshop (governance, financial management, fundraising, communications…).
   - **Networking** — exchange/working visits between round cohort orgs; contact with Culture Resource continues post-program, sometimes → partnerships.
5. **How it works** — 6 process bullets: preliminary eligibility screening → independent jury evaluation & selection → 2 reps per org attend first workshop → contracts signed after first workshop (on the basis of a first-draft strategic plan) → 2 reps attend second workshop → tailored technical support during contracting.
6. **Timeline** — intro line ("rounds range between 24–30 months depending on each org's needs") **plus an 8-item dated schedule for the current round (Abbara 08):** Open Call (2 Jun 2025) · Deadline (17 Jul 2025 16:00 Beirut) · Results (end Sep 2025) · First workshop (week of 9–15 Nov 2025) · Agreements signed (Feb 2026) · End of contracting period (Feb 2028) · Second workshop (during 2026) · Technical-assistance program (2026–2027). **A multi-stage lifecycle timeline, not a single deadline/results pair.**
7. **How are participant organizations selected?** — new **5-member** independent jury per round (larger than PA/Wijhat's 3); 3 criteria: future vision/goals/impact; organizational structure/capacities/skills; motives for applying.

### TAB 2 — Application Guidelines

1. **Eligibility criteria** — 5 bullets: independent non-governmental initiatives/orgs across a broad discipline list (cinema, performing arts, literature, publishing, archiving, visual arts, music, podcasts, cultural management, cultural policies, cultural heritage, research); founded/directed by Arab-origin artists/cultural actors (regardless of ethnicity/citizenship); work mainly focused on the Arab region (diaspora OK if serving Arabic production); **unregistered initiatives may still apply** if operating within transparent legal frameworks; must be **small/midsize (US$50k–500k expenditure or income)** with **≥3 years'** experience; **must NOT be a previous Abbara beneficiary**.
2. **Application instructions** — 3-step portal registration (go to `apply.mawred.org` → activation email → log in & fill form online). Same portal flow as PA/Wijhat but stated more briefly (no separate "activation → select program" numbered graphic set).
3. **Application requirements** — fill all blanks + asterisked attachments (incomplete/ineligible apps eliminated before jury); **Arabic-only** except English-required blanks; Arabic-required docs must be in Arabic, other languages rejected; **WeTransfer attachments not accepted**; **state budget/funding figures in Euro**; save each section before moving on; submit before deadline / avoid last-hours upload traffic.

> Note: Abbara's Guidelines tab is **noticeably thinner than PA's and Wijhat's on the contractual/back-end side** — there is **no standalone "Contractual Procedures & Obligations" section** here (no installment split, no signing-window days, no completion-window clause, no guarantors, no clawback, no citation/credit obligation stated on the EN page). What contract detail exists is embedded in "How it works" (contracts signed after first workshop) and the Timeline. Flag to confirm against the AR page — this may be a content gap rather than a genuine absence.

### TAB 3 — FAQs

1. **"Available only in Arabic"** — links to the Arabic page anchor. No English content. Same empty-shell gap as PA & Wijhat (Stand for Art is the only one with a populated EN FAQ).

### In-template footer

1. **Contact line (in-tab)** — "For further questions on the program and how to fill in the application form, please contact the Abbara team: abbara@mawred.org" _(mailto resolves correctly to abbara@ here — notably, this is the address the Wijhat footer erroneously pointed to.)_

_(Then the global site footer: About blurb · Instagram (empty embed — stray `-->` visible, same artifact as SFA) · Newsletter.)_

---

## 3. Observations & issues (Abbara specific)

- **Beneficiary map + directory is the defining structural feature.** Abbara opens with an **interactive SVG map of beneficiary orgs** followed by a **round-grouped accordion** of the same orgs (8 rounds, ~60+ orgs, outbound links), both **above the summary and tabs**. No other program surfaces its grantees on-page at all. Two synced views of one org dataset (a map and a round-grouped list).
- **The map is real but badly executed — flag for rebuild, not restyle.** Concrete problems: two inconsistent tooltip treatments (tiny bilingual pin vs. a large logo+description card that acts like a modal and covers ~⅓ of the map); overlapping/unpickable markers in the Tunis/Cairo/Beirut clusters at default zoom; no legend, no round filter, no round attribution on markers, and no sync between map and the accordion below; limited embed styling control (same class of constraint as the Home Data-Studio map).
- **Organizations, not individuals — reframes eligibility entirely.** Eligibility is about org age (≥3 yrs), budget band (US$50k–500k), registration status, and governance — not birth year or discipline-of-the-applicant.
- **Multi-stage lifecycle timeline, not a deadline/results pair.** Abbara's timeline runs Open Call → Deadline → Results → Workshop 1 → Agreements → Workshop 2 → Technical assistance → End of contracting, spanning ~2–2.5 years. The most complex "key dates" shape of the four.
- **Support is a bundle, not just money.** €22,000 is only one of four components (financial + training + technical assistance + networking) — money **plus** structured non-monetary services. (Different from SFA's fund-and/or-referral split, but both are multi-component support.)
- **Core funding with explicit exclusions.** The €22,000 is unrestricted **core** funding (staffing, premises, running costs) and explicitly **does not cover program activities** — the opposite of most project-based grants.
- **Candid attrition stat in the intro.** "87 supported; 27 ceased, 60 active" — an unusually transparent impact/lifecycle statement. Ties directly to the beneficiary directory. A content-tone note for migration (don't sanitize it away).
- **Thinner contractual section than PA/Wijhat.** No standalone contractual-obligations block on the EN page (no installments/windows/guarantors/clawback/citation). Flag as a **possible EN content gap** (Abbara plainly _has_ contracts — signed after workshop 1), so verify against AR before assuming absence.
- **Malformed headings from source** — the two summary headings render with the question mark at the front ("?Who is Abbara for", "?What kind of support does the program offer") — the same RTL/punctuation CMS artifact flagged on Wijhat.
- **Dead/placeholder org links** — several beneficiary entries use `href="#"` (named, unlinked). Migration QA item for the directory block.
- **Footer contact is correct here** — abbara@mawred.org resolves properly, which is notable because the **Wijhat** footer mailto wrongly pointed to this same abbara@ address. Confirms the Wijhat bug is a Wijhat-side copy/paste error, not a shared-include problem.
- **Recurring global-footer artifacts confirmed sitewide** — empty Instagram embed (stray `-->`) appears here too (as on SFA). Seen on enough pages to treat as a **global-footer** fix, not a per-page one.
- **FAQs empty shell in English** — same gap as PA & Wijhat; only SFA differs.
- **Content unique to this program:** interactive beneficiary map + round-grouped directory (8 rounds), 4-component support bundle (core funding + training + technical assistance + networking), staged 24–30-month lifecycle timeline, org-level eligibility (budget band / registration / years operating), 5-member jury, "does not cover program activities" core-funding constraint.
