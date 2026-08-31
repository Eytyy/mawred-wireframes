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
