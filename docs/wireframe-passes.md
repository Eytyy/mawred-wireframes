The decisions taken while wireframing each page-type. They bind later chats — follow them rather than re-deciding.

> **Note:** The pre-scaffold history file was not present after the Next.js install. Decisions 1–54 should be restored from backup when available. Port decisions 55–58 are logged below.

---

## Next.js port (global)

**55. State panel mechanism** — a client context provider holds the state bag; the list of toggles per page-type comes from a static map keyed off the route registry. _Block bodies read state values to decide what they render, so a provider is required regardless; pages registering states separately would duplicate that channel._ → Set aside: pages self-registering with the panel — simpler API, but two channels for the same values.

**56. Real nested URLs** — App Router paths replace legacy flat hashes. `/` is Home; the wireframe index lives at `/wireframes`. _Real routes with shareable URLs; the iframe hash problem decision 17 solved no longer applies._ → Set aside: keeping flat hash-style paths — would fight the App Router and lose readable URLs.

**57. Legacy border weights kept** — 2px on header rule, primary buttons and active tabs; 3px on C6, N8, AB2 callouts; 2px dashed on stubs and the state panel. _Weight is the legacy file's only emphasis signal; flattening to 1px would lose C6's "visually set-apart" treatment._ → Set aside: strict 1px everywhere — obeys the original AGENTS constraint but makes callouts indistinguishable from prose blocks.

**58. Type scale collapsed** — legacy 10/11/12px → `text-xs`; 13/14px → `text-sm`; body base `text-sm`. `--fill:#eee` → `neutral-200`; `--soft:#666` → `neutral-500`. _Maps the legacy palette onto the permitted Tailwind set without inventing arbitrary sizes._ → Set aside: preserving exact pixel sizes — outside the permitted utility set.
