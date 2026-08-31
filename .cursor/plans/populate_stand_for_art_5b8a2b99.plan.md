---
name: Populate Stand for Art
overview: Populate the Stand for Art programme page with real content from the audit, confirmed against the live page, and make C11 able to carry the six real English FAQs without changing the two populated pages.
todos:
  - id: blocks
    content: 'Add optional props: C11 items, C4 documents (S5 delegates), C5 record items, C9 process; ProgramConfig gains faqs'
    status: completed
  - id: config
    content: Rewrite STAND_FOR_ART with real content — C1, C7 dest, C6, C4, C5, C8, C9, C11, C12
    status: completed
  - id: rolling
    content: 'Rolling-intake state handling: programRolling states key + config rolling flag (unless struck)'
    status: completed
  - id: check
    content: Build, lint, render-check all four programme pages for no change to PA and Wijhat
    status: completed
  - id: docs
    content: Content-map section, tracker tick and log entry, decisions 90-95; stage one commit
    status: completed
  - id: handoff
    content: Write the Abbara session brief in the reply
    status: completed
isProject: false
---

# Populate Stand for Art

Unit: the Stand for Art page-type only. The audit and the live page agree line for line — I fetched the live page and every figure, list and note in `content/programs/audit-stand-for-art.md` is present there, including the six English FAQs, the two privacy notes, the five selection steps and the `artist@` visible-text contact. So no gap gets logged that the live page contradicts.

## The page shape

No C3 (no dates, no rounds, no call status), no S2 (nothing published to download), no S4 (audit §3b — like Production Awards), no S3 (past beneficiaries would contradict the confidentiality the programme runs on), no C10 (no installments, windows, guarantors, clawback or credit obligation exist), `figs: null` stays.

Blocks in [lib/pages/programs.ts](lib/pages/programs.ts) `STAND_FOR_ART`: C1 overview + C7 in the rail, then C6 → C4 → C5 → C8 → C9, then C11 → C12 from the shell. C6 stays first, ahead of the apply flow.

## Block changes — all optional props, placeholder fallback (decision 84)

- **[C11Faqs](components/blocks/programs/C11Faqs.tsx)** — the one block that can't take content. Add `items?: FaqItem[]` (`{ q: string; a: string | string[] }`). With items: real accordion titles, `<Prose text={a} />` bodies, and a hint that says these are the live FAQ tab's six Q&As. Without items: today's `count` placeholder render and today's hint, untouched — so the "English FAQ content doesn't exist" assertion stops being baked in and stays true where it is true. `ProgramConfig` gains `faqs?`; `ProgramPage` passes `<C11Faqs items={config.faqs} />`.
- **[C4ApplySteps](components/blocks/programs/C4ApplySteps.tsx)** — gains `documents?: string[]`, rendering the same "Documents to include" label + list that [S5ApplicationPaths](components/blocks/programs/S5ApplicationPaths.tsx) currently hand-rolls. S5 then passes `documents={documents}` down to its nested `C4ApplySteps` and drops its own copy. Order inside C4: steps → documents → note → Apply button, which is byte-identical to Wijhat's current output (S5 passes no note and no repeat).
- **[C5FormsOfSupport](components/blocks/programs/C5FormsOfSupport.tsx)** — record gains `items?: string[]`, a bullet list under the optional `body`. Needed because "up to six months" attaches to the living-expenses line only; a single compressed sentence would let it read as covering all support.
- **[C9Selection](components/blocks/programs/C9Selection.tsx)** — gains `process?: string[]`, rendered as an `<ol>` above/instead of `criteria`. The five selection steps are a sequence, not criteria, and Stand for Art has no criteria list to render.
- **[C12Contact](components/blocks/programs/C12Contact.tsx)** — no change; the config just passes `contact`.

## The content

- **C1** — title "What is Stand for Art?", three paragraphs: what it supports and the 2016 launch after the regional risk study; the prioritised risks (kidnapping or detention, imprisonment, threats of physical harm, violence and abuse, prosecution, by legal or illegal means) and the two ways an applicant can be at risk; the goals — free expression, living and working in safety and dignity — with the support stated as **temporary**, and applications open all year with no rounds or deadlines (the fact that would have lived in C3).
- **C7** `dest` — "an encrypted form hosted on JotForm — not apply.mawred.org".
- **C6** — "Your request is confidential": the form is encrypted; all information is confidential and used internally by the Stand for Art team.
- **C4** — three steps (fill in the encrypted form; complete it in Arabic except the fields marked English; attach the required documents), the five-item document list, and `note` = the form cannot be saved and reopened, so it is completed in one sitting with documents to hand.
- **C5** — two records. Emergency fund: `amount: "Set case by case"` and four covered cost types (living and accommodation in the country of residence or host country for up to six months; travel — tickets, visa costs, internal transport; legal advice or lawyers; other expenditure such as psychological or physical health care). Referral: no chip, three connection types (short-term residencies in the region or abroad as a temporary safe haven; international at-risk-artist organisations, with the programme's recommendation letter behind the application; advocacy organisations or lawyers for free legal advice). No figure and no range is invented anywhere.
- **C8** — the three eligibility criteria, plus individuals only, plus the Arabic-language rule. Five items.
- **C9** — label "Steering committee — six members, and it sets the form of support"; lead covering composition (artists and cultural managers with field expertise, aware of developments in the Arab region and in exile, gender-diverse and geographically distributed) and that the committee both decides and sets the level; `process` = all five steps, ending with the signed agreement.
- **C11** — the six Q&As, compressed: journalists (no, unless working in cultural or artistic journalism with published work); artists not at risk (no); organisations (no — individuals only); family (support goes to the individual, family circumstances and dependents taken into account); how much (no preset figures, set against severity and urgency, programme budget, cost of living); visas (cannot intervene, can supply a support-certifying letter).
- **C12** — `artists@mawred.org`, the address the mailto resolves to.

## One item beyond the brief — strike it if you'd rather

The `sfa` route uses `statesKey: "program"`, so the panel offers "Applications closed" and "Show offered blocks" on a page with rolling intake and no S3 — and C7's closed render says "next round [date]". I'd add a `programRolling` states key in [lib/pages/states.ts](lib/pages/states.ts) with an empty list and a note naming both absences, point `sfa` at it in [lib/pages/routes.ts](lib/pages/routes.ts), and add `rolling?: boolean` to `ProgramConfig` so `ProgramPage` passes `closed={false}` regardless of state carried in from another page. About ten lines. Say the word and I'll leave the panel as it is and flag it in the log instead.

## Decisions to log (90–95)

90. C4 owns the required-documents list; S5 delegates its per-path list to the same render.
91. The privacy notes split — non-resumable form as C4's `note`, data confidentiality in C6, C6 kept ahead of the apply flow.
92. C9 carries the whole five-step process, including the signed agreement, because there is no C10 on this page.
93. C5 records take an `items` list, and the amount chip states "Set case by case" rather than showing the placeholder chip or a figure.
94. "Individuals only" promoted out of the FAQ into C8; the finer FAQ readings stay in C11.
95. Rolling intake means no call-status state (dropped if the item above is struck).

## Close-out

`npm run build`, `ReadLints` on touched files, render-check `/programs/stand-for-art` plus the other three programme pages — Wijhat's S5 document lists and Production Awards' C4/C5/C9/C11 must be pixel-unchanged. Then append the Stand for Art section to [docs/content-map.md](docs/content-map.md), tick and log in [docs/tracker.md](docs/tracker.md), append 90–95 to [docs/wireframe-passes.md](docs/wireframe-passes.md), stage everything in one commit (`populate: stand for art`) without committing.

Flagged in the log, not reproduced: the `artist@` vs `artists@` contact mismatch, named as a site-wide contact-link QA pass now that it's the second in two pages; the global footer's empty Instagram embed with the stray comment.

Then I hand you the Abbara brief for the next session as the last thing in my reply.
