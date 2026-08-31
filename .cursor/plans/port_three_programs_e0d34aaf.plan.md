---
name: port three programs
overview: Port Wijhat, Stand for Art and Abbara out of the legacy HTML file as three configs in `lib/pages/programs.ts` plus three thin routes. No new components — every block the three pages use already exists in the kit.
todos:
  - id: configs
    content: Add WIJHAT, STAND_FOR_ART and ABBARA configs to lib/pages/programs.ts, transcribed from legacy-wireframes.html lines 966-1010
    status: completed
  - id: routes
    content: 'Add the three route shells under app/programs/ and drop stub: true from the wijhat, sfa and abbara entries in lib/pages/routes.ts'
    status: completed
  - id: verify
    content: Walk all four program pages with both state toggles, check S1/S5/S6/C6 first renders and SFA's figure-less rail, then ReadLints
    status: completed
  - id: docs
    content: Tick the three tracker boxes and add one log entry covering the batched unit
    status: completed
isProject: false
---

# Port Wijhat, Stand for Art and Abbara

## Task and unit

**Task 1 — Port the wireframes to Next.js.** Unit: the three remaining program pages, done together. `AGENTS.md` says never batch units; you've explicitly overridden that here on the grounds that the block kit is finished, so these are config-only. Recording it in the plan so the tracker entry can say the same.

## What's already there

The kit is complete for all three pages — nothing new to build:

- `C3AtAGlance` already takes `mode="rounds"` (decision 61), which is what Wijhat needs.
- `S1Timeline`, `S5ApplicationPaths`, `S6WhichRound`, `C6HighlightedNote` exist but were unused by Production Awards. Wijhat and Abbara are their first real use, so this port is also their first render check.
- `ProgramConfig` in [lib/pages/programs.ts](lib/pages/programs.ts) already covers every block variant these three need, including `figs: null` for the no-figures case and `S3`'s `offered` / `offeredOnly` flags.
- `ProgramPage` already emits the "no impact figures — by design, not a gap" hint when `figs` is falsy, which is exactly Stand for Art's case.

## The three configs

Added to [lib/pages/programs.ts](lib/pages/programs.ts), transcribed from `PAGES.wijhat`, `PAGES.sfa` and `PAGES.abbara` at lines 966–1010 of `references/legacy-wireframes.html`.

**`WIJHAT`** — hero `Who / What / Where / Support`; figs `travel grants / countries / years running`; dest online application portal. Blocks: `C3rounds` (Round 1–3), `S6`, `S5` (Individual, Group), `C8`, `C9` (Jury), `C10` (5 lines), `S3` (2025/2024/2023) gated `offered: true, offeredOnly: true`.

**`STAND_FOR_ART`** — no hero, `figs: null`, dest "private encrypted form (not the public portal)". Blocks: `C6` ("Your request is confidential"), `C4` (contact via secure form / committee reviews / you are contacted directly, `withRepeat`), `C5` with `Emergency fund` carrying an amount and `Referral to a partner organisation` not, `C8`, `C9` ("Committee — also decides the level of support"). No C10, no S2, no S3 — the shortest of the four.

**`ABBARA`** — hero `Who / What / Where / Support`; four figs (organisations supported / still active / ceased operating / countries). Blocks: `C3flat` (budget band, years operating, registration status, country), `S1` with the eight-stage two-year timeline, `C4` (3 steps, `withRepeat`), `C5` (core funding with amount, plus training / technical assistance / networking without), `C6` ("What the funding does and does not cover"), `C8`, `C9` (Jury), `C10` (2 lines), `S3` (Cohort 03/02/01) rendered unconditionally with `offered` unset.

Note the S3 divergence, since it's the one thing easy to get wrong: Production Awards and Wijhat only show S3 when the `offered` state toggle is on and mark it as an offered-not-used block; Abbara shows it always, unmarked.

## Routes

Three thin shells mirroring [app/programs/production-awards/page.tsx](app/programs/production-awards/page.tsx):

```tsx
import { ProgramPage } from '@/components/blocks/programs/ProgramPage';
import { WIJHAT } from '@/lib/pages/programs';

export default function WijhatPage() {
  return <ProgramPage config={WIJHAT} />;
}
```

at `app/programs/wijhat/page.tsx`, `app/programs/stand-for-art/page.tsx`, `app/programs/abbara/page.tsx`. Then drop `stub: true` from the `wijhat`, `sfa` and `abbara` entries in [lib/pages/routes.ts](lib/pages/routes.ts) (lines 60–88) so the catch-all stub no longer claims them.

## Check, then docs

Run the dev server and walk all four program pages with both state toggles, watching specifically for: Wijhat's C3-rounds and S5 nested-step rendering, Abbara's eight-stage S1, Stand for Art's figure-less rail plus its hint. Then `ReadLints` on the touched files.

Docs in the same commit: tick the three boxes in [docs/tracker.md](docs/tracker.md) and add one log entry covering the three (noting the batching override and that S1/S5/S6/C6 rendered for the first time). No new entries expected in [docs/wireframe-passes.md](docs/wireframe-passes.md) — this is transcription, not decision-making. If anything does need deciding, it gets appended there.

Per `AGENTS.md` I'll stage the work rather than commit it, so you can read the diff first.
