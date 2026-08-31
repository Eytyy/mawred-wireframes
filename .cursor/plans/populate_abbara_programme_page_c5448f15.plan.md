---
name: Populate Abbara programme page
overview: Populate the Abbara programme page with real content from the audit — org-level eligibility, the four-component support bundle, the eight-stage Abbara 08 lifecycle timeline, the attrition figures, and the round-grouped directory with all 56 named organisations — adding three optional props to shared blocks and leaving the two English content gaps flagged rather than filled.
todos:
  - id: props
    content: 'Add optional props to shared blocks: S1Timeline lead, S3PastBeneficiaries records/label, C1Overview items — each defaulting to the existing render'
    status: completed
  - id: config
    content: 'Rewrite ABBARA in lib/pages/programs.ts with real content: S4 two cells, C1 plus goals, C2 four figures, C3 eligibility rows, S1 eight chronological stages, C4, C5 four records, C6 exclusion, C8, C9, C10 near-empty, S3 eight rounds with 56 orgs, dest and contact'
    status: completed
  - id: states
    content: Add programDirectory states key (closed only) and point the abbara route at it
    status: completed
  - id: check
    content: 'Verify via IDE diagnostics plus curl against the running dev server (terminal 1): Abbara renders its new content, and Production Awards / Wijhat / Stand for Art are unregressed. No npm run build.'
    status: completed
  - id: docs
    content: Update tracker, append decisions 96+ to wireframe-passes, add the Abbara section to content-map, and stage as one commit without committing
    status: completed
isProject: false
---

# Populate Abbara programme page

## Unit of work

One unit: populate Abbara — the fourth and last programme page-type in Task 2. Then stop, update the three docs, and leave the diff staged.

## Sources checked before writing

`content/programs/audit-abbara.md` against the live page: they agree throughout — the 87/60/27 figures, the €22,000 and its exclusions, the eight dated stages, the five eligibility criteria, the five-member jury and its three criteria, the six application requirements, the empty English FAQ tab and the absent contractual section are all on the page as audited. Live round counts across the eight groups come to 56 named organisations.

One divergence to act on: the live Timeline lists **End of contracting period: February 2028** sixth, ahead of the second workshop (2026) and the technical-assistance programme (2026–2027). S1 exists to preserve order and duration (register: "Preserves order + duration, which a flat label-value strip loses"), so the stages go in chronological order, not source order.

## The two calls this session had to make

**The map is not wireframed; S3 goes at page end, populated.** This is already owned by [references/program-component-register.md](references/program-component-register.md): the beneficiary-block entry records that "**The live geo-map is dropped from the proposal** (design clash + embed-styling constraints; impact carried by the stat strip instead) — logged as a **client-revisit option**, plan/rebuild only if the client chooses to keep a map", and that the directory is "**pushed to page-end** in the redesign (was page-top on the live site)". The parked thread at the foot of the same file repeats it. So C2 carries the impact (87 · 60 · 27 · 8 rounds), S3 stays last in the block list, and the audit's "rebuild, not restyle" verdict is recorded in the content map as what happens _if_ the client elects to keep a map — not built now.

**S4 gets two cells, not four.** The live page has exactly two above-tab headings — "Who is Abbara for" (2 bullets) and "What kind of support does the program offer" (4 bullets). The port's four bare strings (`["Who", "What", "Where", "Support"]`) were placeholders borrowed from Wijhat's shape; they migrate to two `{ label, items }` cells. The malformed leading question mark on both live headings is a CMS artifact — dropped, and flagged.

## Block props to add (all optional, existing render as fallback — decision 84)

- `S1Timeline` — a `lead` prop above the rail, carrying "rounds run 24–30 months depending on each organisation's needs" and that the dates are the current round, Abbara 08.
- `S3PastBeneficiaries` — `groups` widens from an array of strings to an array of either a string or `{ title, records }`, where each record is a name plus an optional country; plus a `label` prop defaulting to "Past beneficiaries", so Abbara's annotation can read as beneficiary organisations by round rather than _past_ ones, with 60 of them still active. Country renders by omission — the live directory publishes none. Production Awards and Wijhat keep passing plain strings and are untouched. The largest round is 11 records, under the ~12 truncation threshold, so every group renders in full.
- `C1Overview` — an `items` list under the prose, for the three programme goals the live page carries as a bulleted list under its own heading. The register places the goals in the overview block.

## `ABBARA` in [lib/pages/programs.ts](lib/pages/programs.ts)

- **S4** — two cells with the live bullets; the €22,000 and the three service components in the support cell.
- **C1** — title "What is the Abbara program?", three paragraphs (2011 launch and the 87 supported / 27 ceased / 60 active statement, kept candid; the two sector-context paragraphs compressed to one; Abbara as the response, building administrative viability), plus the three goals as `items`.
- **C2** — four rails, all carrying figures for the first time: 87 organisations supported, 60 still active, 27 ceased operating, 8 rounds. The "countries" rail is replaced — no country count exists, and the register puts the attrition figures here.
- **C3flat** — eligibility only, no dates: who can apply (independent non-governmental initiatives and organisations founded and directed by artists or cultural actors from an Arab country, regardless of ethnicity or citizenship) · disciplines · where they work (mainly the Arab region; diaspora if the work serves Arabic-language production) · budget band (US$50,000–500,000 expenditure or income) · years operating (at least three) · registration (unregistered initiatives may apply within transparent legal frameworks) · previous beneficiaries (a prior Abbara beneficiary may not apply). Seven rows replacing four bare labels.
- **S1** — eight stages, chronological: Open call 2 Jun 2025 · Deadline 17 Jul 2025 16:00 Beirut · Results end Sep 2025 · First workshop week of 9–15 Nov 2025 · Agreements signed Feb 2026 · Second workshop during 2026 · Technical assistance 2026–2027 · End of contracting Feb 2028.
- **C4** — three portal steps with details, a `note` carrying the save-each-section and don't-upload-in-the-last-hours cautions, and the repeat Apply button. No documents list: the live page names asterisked attachments without enumerating them.
- **C5** — four records; only Financial support carries a chip (€22,000), each with its own `items`: covered organisational costs and the 24-month limit; two workshops with two representatives per organisation plus online peer-learning; assistance tailored after a needs assessment; exchange visits and post-programme contact. The asymmetric-record pattern the register describes, so C5's no-amount hint still shows here.
- **C6** — the bare label becomes the real exclusion: unrestricted core funding for organisational costs that explicitly does not cover programme activities, running no more than 24 months. Stays immediately after C5, which it qualifies.
- **C8** — six application-requirement items rewritten for an organisational applicant, with a lead saying the programme funds organisations and not individuals.
- **C9** — label naming the five-member per-round jury, lead covering the team's eligibility screening then individual assessment and the selection meeting, and the three live criteria (future vision, goals and potential impact; organisational structure, capacities and skills; motives for applying).
- **C10** — kept in the near-empty mode the register defines for Abbara, with the two contract facts the English page actually states: contracts signed after the first workshop on the basis of the first-draft strategic plan, and the funding component running no more than 24 months to a contracting period ending February 2028. No installments, windows, guarantors or clawback borrowed from the other programmes.
- **S3** — eight round groups, Abbara 08 first down to Abbara 01, with all 56 organisation names from the live directory. Published unconditionally: no `offered` or `offeredOnly` flags.
- `dest` names apply.mawred.org, `contact` is abbara@mawred.org, and no `faqs` — so C11 renders its placeholder and the English-gap hint, as on Production Awards and Wijhat.

## States

New `programDirectory` key in [lib/pages/states.ts](lib/pages/states.ts) and [lib/pages/routes.ts](lib/pages/routes.ts), carrying the `closed` toggle only, with the `abbara` route pointed at it. The closed state is real here — Abbara 08's call closed in July 2025 — but the "show offered blocks" toggle would be inert, since Abbara's directory is published content rather than an offered block. Follows decision 95: a state that can't occur on a page shouldn't be togglable there.

## Gaps to flag, not fill

- **English FAQ tab** — an empty shell pointing at the Arabic page. C11 goes back to its placeholder render; Stand for Art stays the exception.
- **Contractual obligations** — no installments, signing or completion windows, guarantors, clawback or credit obligation anywhere on the English Guidelines tab. Recorded as a suspected English content gap to verify against the Arabic page, per the audit and the register's QA note.
- Also for the log: the two malformed question-mark-prefixed summary headings, several beneficiary entries named but unlinked (empty `href="#"`), and the recurring empty Instagram embed with the stray comment terminator in the global footer.

## Verification — against the running dev server, not a fresh build

`npm run build` is what wedged on the Stand for Art unit, so this unit doesn't run it. Terminal 1 already has `npm run dev` active in the repo (pid 48125), and its log shows the programme routes serving 200s, so verification goes through that instance:

- Diagnostics from the IDE's TypeScript server on every edited file, which is what catches the `groups` widening on `S3PastBeneficiaries` breaking Production Awards or Wijhat — the same class of error a build would report, without the build.
- `curl` each of the four programme routes on the dev server and grep the returned HTML for the content that has to be there: the €22,000 chip, the eight Abbara 08 stages, the seven C3 rows, a name from the first and the last round group, C11's English-gap hint, and — on Wijhat and Production Awards — that their S3 still renders the placeholder `Name / Country` rows.
- Read terminal 1's log afterwards to confirm the compiles were clean and no route 500'd.

Panel-driven states can't be flipped over `curl`, since they're client state: the closed toggle changes only C7, which this unit doesn't touch, and the offered toggle is being removed from this page by the states change. Those two stay a browser check for you if you want them.

No `npm run build` and no `npm run lint` unless you ask for them — if a full build is wanted before the commit, it's better run in the background with a timeout than in front of the unit.

## Close-out

Tick Abbara in [docs/tracker.md](docs/tracker.md) with a log entry, append the decisions to [docs/wireframe-passes.md](docs/wireframe-passes.md) (96 onward — map not wireframed with the directory at page end; two hero cells; eligibility in C3 with application terms staying in C8; chronological S1 and its lead; S3 records and label; C10's near-empty mode; C1 goals items; the new states key), add the Abbara section to [docs/content-map.md](docs/content-map.md), and stage everything as one commit `populate: abbara` without committing. Task 2's programme pages are then complete, and the next unit is Publications.
