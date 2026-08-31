---
name: Programs block kit
overview: Port the 18-block program component kit and the three-tier fixed scaffold from the legacy single-file wireframes into React components, and compose the first real page — Production Awards — from it.
todos:
  - id: primitives
    content: Add KV, Figs and the client Accordion to components/wireframe/
    status: completed
  - id: core-blocks
    content: Build C1-C12 in components/blocks/programs/, one file per block, content via props
    status: completed
  - id: specialist-blocks
    content: Build S1-S6, including square timeline markers and the nested C4 inside S5
    status: completed
  - id: shell
    content: Build ProgramPage implementing the three-tier scaffold and reading the program states
    status: completed
  - id: pa-page
    content: Add the Production Awards config in lib/pages/programs.ts, its route, and drop stub from the pa route entry
    status: completed
  - id: verify
    content: Build, lint, and check the page against the legacy screen with codes and both states toggled
    status: completed
  - id: docs
    content: Tick the tracker lines, add the log entry, and append the new decisions to wireframe-passes
    status: completed
isProject: false
---

# Programs — block kit + Production Awards

Unit of work: the program block kit (18 blocks + the page shell) plus Production Awards composed from it. Wijhat, Stand for Art and Abbara stay stubs and become their own units afterwards.

## Sources

- [references/legacy-wireframes.html](references/legacy-wireframes.html) — the `B` block map (lines 310–390), `programPage()` (lines 910–919), and the `pa` composition (lines 951–964). CSS for the block internals is lines 45–98.
- [references/program-component-kit.md](references/program-component-kit.md) — block definitions and the per-program composition matrix (Part 3).
- [references/program-fixed-scaffold.md](references/program-fixed-scaffold.md) — the three tiers the shell enforces.

This is a port, not a redesign: block bodies, hint text and composition come across as they are. No content population — that is Task 2.

## Shared primitives to add

Three are cross-page-type (Network and News reuse them later), so they go in `components/wireframe/` alongside `Fill`, `Prose`, `Block`, `Hint`, `Btn`, `Chip`, `Field`:

- `KV.tsx` — label row + `neutral-200` value bar. Legacy `.kv`: `flex justify-between gap-3 border-b border-neutral-200 py-[7px]`, value `h-2 flex-[0_0_40%] bg-neutral-200`.
- `Figs.tsx` — the figure strip: `grid grid-cols-2 gap-2.5`, each cell `border border-black p-2.5 text-center` with a `text-xl` number over an `text-xs text-neutral-500` label.
- `Accordion.tsx` — client component owning open/closed, replacing the legacy `acc()` handler. Head is `flex w-full justify-between border border-black px-2.5 py-2`; body `border border-black border-t-0 p-2.5`. Consumed by C11 and S3.

Record rows, step lists, timelines and hero cells stay inside their block components — they aren't shared.

## The 18 blocks

`components/blocks/programs/`, one file per block, named with its code so the state panel's badge and the filename agree: `C1Overview.tsx`, `C2ImpactFigures.tsx`, `C3AtAGlance.tsx`, `C4ApplySteps.tsx`, `C5FormsOfSupport.tsx`, `C6HighlightedNote.tsx`, `C7ApplyButton.tsx`, `C8Conditions.tsx`, `C9Selection.tsx`, `C10ContractTerms.tsx`, `C11Faqs.tsx`, `C12Contact.tsx`, `S1Timeline.tsx`, `S2Downloads.tsx`, `S3PastBeneficiaries.tsx`, `S4HeroSummary.tsx`, `S5ApplicationPaths.tsx`, `S6WhichRound.tsx`.

Each wraps its body in the existing `Block` with its code and label, and takes content as props — no hardcoded program facts, per the component-discipline rule. Points worth calling out:

- **C3** is one component with a `mode` of `"flat"` or `"rounds"`, not the legacy's two functions `C3flat`/`C3grouped` — a block is one component, and rounds mode is the same treatment with grouped rows.
- **C4** takes `nested` so S5 can render the step list without its own block frame, exactly as the legacy does.
- **C5** renders the amount as a `Chip` when a record carries one, and keeps the legacy hint about records with no amount rendering with no chip.
- **C6** passes `callout` to `Block` for the 3px border (decision 57).
- **C7** reads the `closed` state: disabled button plus the closed-state hint, otherwise the destination hint.
- **S1** markers become 2.5×2.5 squares rather than the legacy's `border-radius:50%` dots — `rounded-*` is outside the permitted utility set.
- **S3** takes `offered`, which drives dashed optional framing plus the "Offered, not currently used" hint.

## Page shell

`components/blocks/programs/ProgramPage.tsx` — a client component (the accordions and the state toggles both need it, and one boundary is cleaner than several) implementing the scaffold in `program-fixed-scaffold.md`:

```
[S4 hero — if configured]
top row: C1 in main column | C2 (if configured) + C7 in the rail
  ...free composition from config...
C11 + C12
```

It carries the legacy's "no impact figures on this programme — the rail carries the apply action alone. By design, not a gap." hint when a program configures none, and reads `offered` so blocks marked as offered only render when the toggle is on.

Top row per legacy `.toprow`: `flex flex-wrap items-start gap-3.5`, main `flex-[2_1_380px]`, rail `flex-[1_1_240px]`.

## Config and route

- `lib/pages/programs.ts` — a `ProgramConfig` type (`hero`, `figs`, `dest`, `free`) and the Production Awards config, ported from lines 951–964: flat at-a-glance facts, apply steps with the repeat CTA, four discipline support records, conditions, jury selection, contract terms, two downloadable files, and the offered past-beneficiaries block.
- `app/programs/production-awards/page.tsx` — a thin shell rendering `ProgramPage` with that config. It takes precedence over `app/[...slug]/page.tsx`, so the stub falls away.
- Drop `stub: true` from the `pa` entry in [lib/pages/routes.ts](lib/pages/routes.ts).

## Decisions to log in docs/wireframe-passes.md

- Square timeline markers instead of round dots — `rounded-*` is not in the permitted set.
- Single client boundary at `ProgramPage` rather than per-block `"use client"`.
- C3's flat and rounds modes as one component rather than the legacy's two functions.

## Close out

Run `npm run build` and `npm run lint`, check the page renders with codes on/off and both program states toggled, then tick the two tracker lines, add the log entry and the decisions, and leave the diff staged for review rather than committing unreviewed.
