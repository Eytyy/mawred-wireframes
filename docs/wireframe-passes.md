The decisions taken while wireframing each page-type. They bind later chats — follow them rather than re-deciding.

> **Note:** The pre-scaffold history file was not present after the Next.js install. Decisions 1–54 should be restored from backup when available. Port decisions 55–58 are logged below.

---

## Next.js port (global)

**55. State panel mechanism** — a client context provider holds the state bag; the list of toggles per page-type comes from a static map keyed off the route registry. _Block bodies read state values to decide what they render, so a provider is required regardless; pages registering states separately would duplicate that channel._ → Set aside: pages self-registering with the panel — simpler API, but two channels for the same values.

**56. Real nested URLs** — App Router paths replace legacy flat hashes. `/` is Home; the wireframe index lives at `/wireframes`. _Real routes with shareable URLs; the iframe hash problem decision 17 solved no longer applies._ → Set aside: keeping flat hash-style paths — would fight the App Router and lose readable URLs.

**57. Legacy border weights kept** — 2px on header rule, primary buttons and active tabs; 3px on C6, N8, AB2 callouts; 2px dashed on stubs and the state panel. _Weight is the legacy file's only emphasis signal; flattening to 1px would lose C6's "visually set-apart" treatment._ → Set aside: strict 1px everywhere — obeys the original AGENTS constraint but makes callouts indistinguishable from prose blocks.

**58. Type scale collapsed** — legacy 10/11/12px → `text-xs`; 13/14px → `text-sm`; body base `text-sm`. `--fill:#eee` → `neutral-200`; `--soft:#666` → `neutral-500`. _Maps the legacy palette onto the permitted Tailwind set without inventing arbitrary sizes._ → Set aside: preserving exact pixel sizes — outside the permitted utility set.

**59. Square timeline markers** — S1 programme timeline uses 2.5×2.5px square markers instead of the legacy round dots. _The permitted Tailwind set excludes `rounded-*`; a square marker preserves the sequence cue without breaking the lo-fi constraint._ → Set aside: round dots via inline styles — would work but adds a one-off exception outside the utility set.

**60. Single client boundary at ProgramPage** — wireframe state (`closed`, `offered`) is read once in `ProgramPage` and passed down as props; block components stay server-renderable except where a child primitive requires interactivity (`Accordion`). _One boundary is easier to trace than scattering `"use client"` across C7 and S3._ → Set aside: per-block client components — each block self-contained, but duplicates the state channel.

**61. C3 flat and rounds as one component** — `C3AtAGlance` takes a `mode` prop (`"flat"` | `"rounds"`) rather than the legacy's two separate functions. _Same treatment, same block code; one component per block is the component-discipline rule._ → Set aside: two components (`C3flat`, `C3grouped`) — mirrors the legacy literally, but splits one block into two files.

## Publications

**62. Shared wireframe primitives over Publications-local ones** — `FilterBar`, `CountRow`, `Card`/`Cover`, `Embed` and `EmptyState` live in `components/wireframe/` because Mawred Network and News will reuse them. _One primitive per pattern; the unit that first needs a primitive owns it for the whole app._ → Set aside: Publications-local copies — faster to ship but duplicates MN3/MN4 and N1–N3 work later.

**63. `Chip` reused for removable filter chips** — active filter chips carry the `×` in the label rather than a separate `.chipx` size variant. _Decision 58 already collapsed the legacy size difference; one chip component is enough._ → Set aside: a dedicated removable-chip variant — mirrors legacy markup literally but adds a one-off size fork.

**64. `FilterBar` self-contained as a client component** — facet open/close state lives inside `FilterBar`, the same way `Accordion` owns its toggle. Page shells (`LibraryPage`, `SeriesPage`) remain the single wireframe-state boundary per decision 60. _Interactive primitives own their own UI state; the page shell only reads panel toggles._ → Set aside: lifting facet state into `LibraryPage` — one fewer `"use client"` file, but spreads interactivity up a tier.

**65. Fixed embed footprints over aspect ratios** — audio and video embeds use fixed height boxes rather than aspect-ratio utilities; the SoundCloud embed has no meaningful aspect to preserve. _Footprint difference is the wireframe signal; aspect-ratio would imply precision the provider chrome doesn't support._ → Set aside: provider-specific aspect ratios — closer to live embeds but outside the lo-fi constraint and hard to maintain across providers.

## Mawred Network

**66. Entity-tab state in DirectoryPage** — the Individuals & Groups / Organizations & Initiatives tab index lives in `DirectoryPage`, not inside the `Tabs` primitive, because MN4 (count row) and MN5 (listing) both need the same value. _One source of truth at the shell; the tabs are navigation, not a wireframe-state toggle._ → Set aside: self-contained tab state inside `Tabs` — simpler primitive API, but MN4 would need a callback or duplicate state.

**67. Tabs and DirRow as shared primitives** — `Tabs` and `DirRow`/`Badge` live in `components/wireframe/` ahead of the News unit, which reuses the same tab row and will need a row pattern for the post feed. _One primitive per pattern; the Network unit that first needed them owns them for the whole app (extends decision 62)._ → Set aside: Network-local copies — faster to ship but duplicates N1/N3 work later.

**68. Cover label prop over a second cover component** — `Cover` takes an optional `label` prop (default `"cover"`) so MN6 can render `photo / logo` without a separate portrait/logo component. _Same footprint, same block treatment; one component per pattern._ → Set aside: a dedicated `PortraitCover` — clearer naming, but two components for the same box.

## About

**69. Timeline extracted as a shared primitive** — the rail-and-marker treatment moves to `components/wireframe/Timeline.tsx`, taking `label` / optional `meta` / `fill` per item; S1 (programme timeline) is refactored onto it and AB5 (history) uses it. _The legacy file already shared one `.tl` rule between both blocks, and the rail is real styling — absolute marker, left border, transparent last row — not two utility classes. Decision 45 keeps About's **blocks** out of the programme kit; it doesn't require duplicating a primitive._ → Set aside: an About-local timeline — literal reading of decision 45, but two copies of the same rail to keep in step.

**70. AB3 mission cells not extracted** — ~~AB3 repeats the cell-row markup that S4 (programme summary) already carries rather than pulling a shared `Cells` primitive out. _Three utility classes and a one-line cell body; the pattern's third user (HM4) isn't built yet, so extraction is better decided when Home lands and the real variation is visible._~~ **Superseded by decision 80** — Home landed with HM4 as the third consumer; `Cells`/`Cell` extracted and S4/AB3 refactored onto it.

**71. AB7 bio expander reuses `AccordionItem`** — the per-card "Read bio" expander is the shared accordion primitive, not a smaller About-local one. _One interactive primitive per pattern (decision 64); the legacy only shrank type and padding, which the collapsed type scale (decision 58) drops anyway._ → Set aside: a compact card-sized expander — closer to the legacy density, but a second toggle component doing the same job.

**72. Banner extracted as a shared primitive** — the full-width 210px fill box moves to `components/wireframe/Banner.tsx`, taking a `label` prop; AB10 (initiative record) uses it first, with HM5 and N6 to follow. _The legacy file already shared one `.banner` rule across three blocks; extracting now avoids a third copy when Home and News land (extends decisions 62/67)._ → Set aside: an About-local banner — literal per-page ownership, but duplicates the same box for News and Home later.

**73. `EmptyState` action prop** — `EmptyState` takes an optional `action` string (default `"Clear all filters"`) so AB12 can pass `"Contact Mawred"` without a Careers-local empty component. _One empty-state primitive per pattern; the button label is the only variable._ → Set aside: a second empty-state variant — clearer intent in the type name, but two components for the same dashed box.

**74. `KV` fill prop** — `KV` takes an optional `fill` boolean (default `true`) so AB13's "Or write to — [contact address]" row renders label-only with no value bar. _Same row component; the value column is optional per field, matching publication metadata omission._ → Set aside: a label-only row hand-rolled in AB13 — works, but forks the row pattern for one field.

## News

**75. `Tag` as a shared primitive distinct from `Badge`** — the uppercase tracked label box lives in `components/wireframe/Tag.tsx`, separate from `DirRow`'s `Badge`. _Under the collapsed type scale (decision 58) the only surviving difference is `uppercase` + `tracking`, and that difference is the whole signal for category labels on cards and N7's meta strip._ → Set aside: reusing `Badge` with an uppercase class — one component, but loses the semantic split between directory row labels and taxonomy tags.

**76. `Caption` extracted as a shared primitive** — the dashed optional-field box moves to `components/wireframe/Caption.tsx`; PB2 is refactored onto it so the news card excerpt is not a second copy. _One primitive per pattern (extends decisions 62/67); the legacy `.cap` rule was already duplicated inline in PB2._ → Set aside: hand-rolling the dashed box in each block — mirrors the legacy literally but forks on the second consumer.

**77. `Card` footer prop** — `Card` takes an optional `footer` ReactNode rendered after the subtitle, so the news card's excerpt slot sits below the date without overloading `children`. _Category tag stays in `children` beside `Cover`; the excerpt is structurally below title and date, matching the legacy card order._ → Set aside: putting the excerpt in `children` after the title — simpler API, but breaks the date-then-excerpt sequence.

**78. Category-tab state in NewsLandingPage** — the All / Announcements / News & Events tab index lives in `NewsLandingPage`, not inside `Tabs`, because N2 (count row) scopes its count to the open tab (extends decision 66). _One source of truth at the shell; the tabs are navigation, not a wireframe-state toggle._ → Set aside: self-contained tab state inside `Tabs` — simpler primitive API, but N2 would need a callback or duplicate state.

**79. `NewsDetailPage` as single client boundary** — wireframe state (`structured` / `byline` / `edge`) is read once in `NewsDetailPage` and passed down as props; optional blocks N8/N10/N11 render by omission when `structured` is off (extends decision 60). _One boundary is easier to trace than scattering `"use client"` across nine blocks._ → Set aside: per-block client components — each block self-contained, but duplicates the state channel.

## Home

**80. `Cells`/`Cell` extracted as shared primitives** — the flex-wrap cell row moves to `components/wireframe/Cells.tsx`; S4 (programme summary), AB3 (mission) and HM4 (programmes overview) refactored onto it, resolving decision 70's deferral. _Three consumers with the same wrapper and only the cell body differing; extraction on two samples was premature, but Home made the variation visible._ → Set aside: leaving three inline copies — worked at two samples, but HM4 confirmed the pattern before a fourth user appeared.

**81. HM1 hero frame stays local** — the 300px cinematic frame (note top-left, caption chip bottom-left, optional marker bar) stays inside HM1 rather than extending `Banner` with internal slots and a second height. _Banner is a single fill box (decision 72); the hero frame carries structure Banner was never meant to hold._ → Set aside: a taller `Banner` variant with slots — one primitive, but overloads `Banner` with hero-only internals.

**82. `HomePage` as single client boundary** — wireframe state (`nocalls` / `twentieth` / `staticfb`) is read once in `HomePage` and passed down as props (extends decisions 60 / 79). _One boundary is easier to trace than scattering `"use client"` across eight blocks._ → Set aside: per-block client components — each block self-contained, but duplicates the state channel.
