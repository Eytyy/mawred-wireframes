<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# What this is

Lo-fi, English-only wireframes for the Mawred (Culture Resource / Al-Mawred Al-Thaqafy) website redesign, built as a Next.js app styled with Tailwind. IA and a structure spec per page-type are complete for every page-type except Contct.
Six page-types were originally built as a single static HTML file, kept at `references/legacy-wireframes.html`; this repo is the port of that work and everything after it.

This repo is the source of truth. The Notion workspace it came from is a client-facing archive, pushed to at milestones — never read from, never assumed current.

**Delivery is undecided.** It may end up a deployed URL signed off as the wireframes deliverable, or a source for conversion to Figma. Don't optimise for either yet — but keep markup semantic and component naming consistent, since both routes depend on structure being legible from the outside.

## Repo map

| Path                             | What it is                                                                           | When to read it                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `app/`                           | Routes. Each route directory has a thin `page.tsx` wrapper and a co-located `<Name>Page.tsx` shell that composes blocks from config. Shared shells (`ProgramPage`, `SeriesPage`) sit at the route-group level (`app/programs/`, `app/publications/`). | The route for the page in hand — read `page.tsx` and the co-located shell. |
| `components/chrome/`             | Sticky rail (logo, search + EN / ع, nav), page-end footer (newsletter form, social row, copyright), and the page-header band. Shared by every page. | Only when changing global chrome.                                 |
| `components/blocks/<page-type>/` | Block components. One file per block.                                                | The blocks for the page in hand.                                  |
| `components/StatePanel.tsx`      | The wireframe state panel.                                                           | Only when adding or changing states.                              |
| `lib/pages/`                     | Per-page config — which blocks, in what order, with what content.                    | The config for the page in hand.                                  |
| `docs/tracker.md`                | Current task, what's done, session log.                                              | Every session, first.                                             |
| `docs/standing-constraints.md`   | Rules applying to every screen.                                                      | Every session.                                                    |
| `docs/wireframe-passes.md`       | The numbered decisions taken per page-type, with rationale. Binding.                 | Every session.                                                    |
| `content/`                       | Content sources, one per page-type.                                                  | Only the file for the page-type in hand.                          |
| `references/`                    | Structure references, plus the legacy single-file wireframes.                        | Only when a structural question comes up, or when porting a page. |

## Start of every session

1. Read `docs/tracker.md` — the current task, what's done, and the log of previous sessions.
2. Read `docs/standing-constraints.md` and `docs/wireframe-passes.md`. These apply to every task.
3. Read whatever the current task actually needs, and nothing more:
   - **porting a page** → that page in `references/legacy-wireframes.html`
   - **populating content** → the one `content/` file for the page-type in hand
   - **a structural or feature change** → the relevant `reference/` file
   - **a refactor or cleanup** → usually neither
4. State the task and the unit of work before editing anything.

Task definitions don't live in the repo. A task arrives as a brief; the tracker records the outcome.

## The working loop

Work one unit at a time. What a unit is depends on the task — a page-type when porting or populating, a block when building or changing one, a single concern when refactoring. Never batch units; finish one and stop.

After a unit is built:

- Tick or record it in `docs/tracker.md` and add a log entry: what changed, what was left undone and why, decisions taken, anything flagged.
- Append any new decisions to `docs/wireframe-passes.md`.
- Stop. Don't start the next unit.

**Do not render-check.** Don't open the app in a browser, take screenshots, curl local routes to verify UI, or put a render-check step in a plan. Browser review is the user's.

When the current task is finished, move it to Completed tasks in the tracker and ask what the next task should be. Don't invent one.

## Tailwind — the lo-fi constraint is enforceable here

These are wireframes, not a design. Tailwind makes it very easy to accidentally produce something that reads as a visual proposal. The permitted utility set is deliberately small:

**Allowed**

- Layout and spacing: flex, grid, gap, padding, margin, width, max-width, aspect
- Borders: `border`, `border-dashed`, `border-black` — 1px default; **1px** on the rail edge; **2px** on primary buttons only; **3px** on callout blocks (N15); **2px dashed** on stubs and the state panel (decision 57). Active tabs are 1px `border-neutral-200` on a light strip (decision 146). C6 highlights are `bg-neutral-200` padding, no border (decision 144)
- Colour: `black`, `white`, `neutral-200` (placeholder fill), `neutral-500` (secondary text). Nothing else.
- Type: one font stack for the whole app; `text-xs` through `text-2xl`; `font-normal` and `font-bold` only
- Interaction states where they carry meaning (open/closed, active tab)

**Not allowed**

- `rounded-*`, `shadow-*`, gradients, any other colour, decorative opacity or transitions, custom fonts, real imagery
- Any utility whose only job is to make it look finished

Solid 1px borders mark fixed/always-present elements; dashed marks optional/conditional. `neutral-200` fill bars stand in for prose that doesn't exist yet. If a block seems to need something outside the allowed set, that's a question to raise, not a licence.

## Fidelity

- **Lo-fi.** Boxes, labels, hierarchy, block order, states — not type, colour, imagery or pixel spacing.
- **Real content where the task calls for it.** Fill bars stay only where copy genuinely doesn't exist yet; they are not a default.
- **English only.** RTL is a real site requirement, deferred to a later pass. Arabic-only content is flagged as a gap, not translated.
- **Structure is settled.** Every block and merge is owned by its source spec. These sessions compose and lay out; they don't re-litigate structure. If something genuinely can't be laid out as specced, stop and flag it — don't silently redesign around it.
- **Copy is being rewritten, not migrated.** Use real content for length, substance and structure, not as final wording.

## Component discipline

- **A block is one component**, used by every page that has that block. A block that looks different on two pages is a bug, not a variant — unless a logged decision says otherwise.
- **Content lives in `lib/pages/`, not in components.** A block component takes props; it does not hardcode a program's grant amount.
- **Block codes stay.** Each component carries its code (C1, PA3, MN2, HM5, AB7) in its name or a constant, and the state panel's "show block codes" toggle renders them as badges. The prefixes are per page-type and can't be reused across kits.
- **Chrome is composed once** in `app/layout.tsx` as a sticky rail from `lg` (logo, search + EN / ع, vertical nav) and a stacked header below that (logo + burger; burger toggles search, lang and nav in flow). A page-end footer sits under `main` (newsletter form, social row, copyright). The content column carries the 1px left border from `lg` so it runs through the footer; page width lives in `<PageWidth />`, which each page shell mounts, so a full-bleed block can reach the rail. Home mounts HM1 outside `PageWidth`; every other Home block stays inside it. The page-header band is page-level: every shell except Home mounts `<PageHeaderBand />`. On both news posts, the publication detail and the network record the band is crumb only (`hideTitle`); the H1 sits in the reading column from `lg` (decisions 202, 205, 210, 217). Below `lg` the publication title follows the cover (decision 208); the network record title precedes it. On both news posts N7 wraps it: category above, date below (decisions 206, 217). Both news posts close with page-level ← prev / next → at the bottom of the shell (decisions 209, 217). Blocks do not own crumb.

## Content sources by page-type

| Page-type         | Source file                                                                  | Live page                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Production Awards | `content/programs/audit-production-awards.md`                                | https://mawred.org/artistic-creativity/production-awards/?lang=en                                                                                                                                                                                                                                                                                                                       |
| Wijhat            | `content/programs/audit-wijhat.md`                                           | https://mawred.org/artistic-creativity/wijhat/?lang=en                                                                                                                                                                                                                                                                                                                                  |
| Stand for Art     | `content/programs/audit-stand-for-art.md`                                    | https://mawred.org/stand-for-art/?lang=en                                                                                                                                                                                                                                                                                                                                               |
| Abbara            | `content/programs/audit-abbara.md`                                           | https://mawred.org/cultural-organizations-management/abbara/?lang=en                                                                                                                                                                                                                                                                                                                    |
| Publications      | `specs/publications.md`                                              | [Research & Publications](https://mawred.org/research-publications/?lang=en) · [Mudawanat](https://mawred.org/podcast-mudawanat/?lang=en) · [Foundations of Cultural Policies](https://mawred.org/foundations-of-cultural-policies/?lang=en) · [Mawred Talks](https://mawred.org/mawred-talks/?lang=en)                                                                                 |
| Mawred Network    | `specs/mawred-network.md`                                            | https://mawred.org/mawred-community/?lang=en                                                                                                                                                                                                                                                                                                                                            |
| News              | `specs/news.md`                                                      | https://mawred.org/mawred-news/?lang=en — plus any one post, for the detail page                                                                                                                                                                                                                                                                                                        |
| About             | `specs/about.md`                                                     | [Who We Are](https://mawred.org/who-we-are/?lang=en) · [Artistic Board & General Assembly](https://mawred.org/artistic-board-general-assembly/?lang=en) · [Supporters & Partners](https://mawred.org/supporters-partners-2/?lang=en) · [History](https://mawred.org/about-us/history/?lang=en) · [Past Initiatives](https://mawred.org/past-initiatives/?lang=en) · Careers _(URL TBC)_ |
| Home              | `specs/home.md`, plus content consolidated from the page-types above | https://mawred.org                                                                                                                                                                                                                                                                                                                                                                      |

Cross-program: `content/programs/comparison-matrix.md` — read only when a decision turns on how the four programs differ.

**What the audits do and don't give you.** The four program audits are inventories, not copy: they record the real substance — grant amounts, installment splits, signing and completion windows, jury composition, selection criteria, application steps, contact addresses, tab structure — but describe running prose rather than reproducing it. Take the substance from the audit; go to the live page only for prose length and current-round dates.

## Decisions

Wireframe-stage calls — rendering, order, interaction behaviour, card states — are yours to take. Default to whichever option is faster to build, keep moving, and log it: append a numbered entry to `docs/wireframe-passes.md` in the existing format (subject + block code — decision. Why. → Set aside: the alternative and what was wrong with it). Later sessions follow logged decisions rather than re-deciding.

A decision the port overturns gets **revised in place** with a note saying what superseded it — never silently contradicted, never deleted.

Calls that are the client's to make are not yours. Surface them and lay out around them rather than wireframing past them.

## Git

- Commit per unit of work. Message: `<verb>: <unit>` — e.g. `port: news landing`, `populate: wijhat`.
- Doc changes go in the same commit as the work that caused them.
- Don't commit unreviewed work — leave changes staged and let the diff be read first.
- Never force-push, never rewrite history.
