---
name: Populate Production Awards
overview: Populate the Production Awards programme page with real content adapted from the live page and audit, by adding optional content props to the program blocks and shared primitives (fill bars stay as the fallback for every page not yet populated), and start a per-page content-transformation log.
todos:
  - id: primitives
    content: Add optional real-text props to Prose (text), KV (value) and Figs (per-item value), keeping fill-bar fallbacks
    status: completed
  - id: blocks
    content: Add optional content props to C1, C3, C4, C5, C8, C9, C10, C12; sharpen the C11 FAQ hint
    status: completed
  - id: config
    content: Rewrite PRODUCTION_AWARDS with real content in lib/pages/programs.ts and migrate the other three programme configs to the new shapes
    status: completed
  - id: verify
    content: Build, lint, and render-check Production Awards in all states plus Abbara, Who We Are and Network record for regressions
    status: completed
  - id: docs
    content: Create docs/content-map.md with the Production Awards section; tick the tracker, add the log entry and append new decisions to wireframe-passes
    status: completed
isProject: false
---

# Task 2, unit 1 — Populate Production Awards

Unit: the Production Awards page-type only. Sources: [content/programs/audit-production-awards.md](content/programs/audit-production-awards.md) for substance, the live page for prose length and the current round's dates (open call 17 Aug 2026 · deadline 19 Oct 2026, 16:00 Beirut · results end of March 2027).

Content is adapted to the blocks we have, not migrated paragraph-for-paragraph: long live prose gets split across the blocks that own each part, shortened to wireframe length, and what happened to it gets logged.

## The mechanism

`Fill` and `Prose` take no text today, so real content can't reach the page without prop additions. Every new prop is optional and defaults to the current placeholder render, so the three unpopulated programmes and all other page-types keep their fill bars until their own session.

Shared primitives in `components/wireframe/`:

- `Prose` gains `text?: string | string[]` — renders paragraphs when given, `Fill` bars when not.
- `KV` gains `value?: string` — real text in place of the 40% grey bar.
- `Figs` items gain an optional value — falls back to the hardcoded `00`.

Program blocks in `components/blocks/programs/` — all additions optional:

- `C1Overview`: `title?`, `text?`
- `C3AtAGlance`: rows become `{ label, value? }`; round groups become `{ title, deadline?, results? }`
- `C4ApplySteps`: steps become `{ label, detail? }`; new `note?` for the "read the guidelines first" warning
- `C5FormsOfSupport`: records become `{ label, body?, amount? }` — `amount` carries the real figure in the existing chip
- `C8Conditions`: `text?`, `items?`
- `C9Selection`: `text?`, `criteria?`
- `C10ContractTerms`: `items?` (keeps `lines` as fallback)
- `C12Contact`: `contact?`

## Content mapping

Rewrite `PRODUCTION_AWARDS` in [lib/pages/programs.ts](lib/pages/programs.ts):

- **C1** — "What is the Production Awards Program?" plus the launch/eligibility/disciplines paragraph and the scale sentence.
- **C2** — real figures where sourced: ~400 grants since 2004, 25 grants per year. The "countries" figure has no source, so it keeps its `00` placeholder and is flagged.
- **C3 flat** — Open call · Deadline · Results · Eligibility · Disciplines covered · Grant period, with real values.
- **C4** — the four real portal steps, plus the guidelines warning as `note`.
- **C5** — five discipline records (Performing Arts €8,500 · Visual Arts €8,500 · Literature €6,500 · Music & Sound Art €8,500 · Cinema €13,000) with a short coverage line each.
- **C8** — exclusions, application terms and the eligibility conditions (re-application rule, who submits per discipline, under-18 documents) as one condensed list. This is the one judgement call: the eligibility detail lives on the Guidelines tab live and has no block of its own, so it folds into C8 rather than bloating C3.
- **C9** — independent three-member jury per discipline, changing yearly, plus the four selection criteria.
- **C10** — 70/30 installments, 45-day signing window, 18-month completion, one-time extension (6 months; 1 year cinema), cancellation and clawback, halt of the final installment, two guarantors, credit obligation.
- **S2** — five per-discipline application previews plus the required-documents list, all PDF.
- **S3** — real round years; beneficiary rows stay placeholder (names aren't in the audit and come from Network records per spec §B6).
- **C11** — unchanged fill bars; hint sharpened to say English FAQ content doesn't exist on the live site.
- **C12** — awards@mawred.org.

`WIJHAT`, `STAND_FOR_ART` and `ABBARA` get a mechanical shape migration only (bare strings to `{ label }`) so the file typechecks — no content, no visual change.

## Logging

New `docs/content-map.md`, one section per page-type, recording for each block what came from where, what was shortened, what was split out of a single live passage, and what was left as a gap. Production Awards is its first section; later units append.

Then the usual tracker tick and log entry, and any new numbered decisions appended to [docs/wireframe-passes.md](docs/wireframe-passes.md) — expected: the optional-content-prop fallback convention, and the C8 eligibility merge.

## Verification

Build and lint clean; render-check `/programs/production-awards` in default, `closed` and `offered` states, plus `/programs/abbara` (shares C3 flat, C5, C10), `/about/who-we-are` and `/network/record` (KV, Prose, Figs consumers) to confirm no regression.

Then stop — Wijhat is the next unit, not this session.
