> **Lightweight track · single combined pass** (inventory of current content + structure spec in one). No component register, no consolidation. Covers **two page-types as one system**: News Landing (the feed) and News Detail (a single post). Sources: the live News landing (`/mawred-news/`, paginated) + representative detail pages (Living Fabric forum, Leadership Transition, Production Awards call, Grantees rounds).

## Part A — Inventory (what exists now)

### A1. News Landing — current state

- **Location / nav:** top-level nav item "News" → `/mawred-news/?lang=en`. Breadcrumb: Home › News.
- **Body:** a single reverse-chronological **feed of post cards**, ~9 per page.
- **Card contents:** thumbnail · linked title · publication date. No excerpt, no category label, no author on the card.
- **Pagination:** numbered pager (‹ 1 2 3 … 26 ›), **26 pages** of history (~230+ posts back to at least 2021). Server-rendered `?spg-page=N`.
- **No filters, no search-within-news, no category tabs** surfaced to the user — despite posts belonging to distinct kinds (see A3).
- Standard global chrome. Footer carries the recurring **empty Instagram embed** (`-->` artifact) seen site-wide.

### A2. News Detail — current state

Top to bottom: **(1)** Title (H1) + breadcrumb · **(2)** Prev / Next post links (sequential by date) · **(3)** Featured image (lightbox) · **(4)** Title repeated (H2) + **body** = free-form prose, shape varies widely (editorial = multi-paragraph narrative; announcement = 1–2 short paragraphs + a deadline line; some posts embed a structured `Program:` sub-section = dates · venues · times · performers, plus CTAs like a detailed-programme link + a mandatory Google-Form registration) · **(5)** Meta line: author · date · categories (`Mawred News`, `SliderEN`) · "Comments Off" · **(6)** Share bar (8 targets) · **(7)** Related Posts strip of 5 (thumbnail + title), currently **most-recent, not topically related**; stray "Gallery" link artifacts · **(8)** Global footer.

### A3. Content kinds actually present in the feed

The feed mixes two distinct kinds under one flat list:

- **Program-lifecycle announcements** — "The Call Is Now Open for …", "Results of …", "Grantees of the Nth Round of …". A large share of the feed. Also live on/near the program pages; duplicate the program's own call-status / results.
- **Editorial / institutional news** — forums & events (Living Fabric), exhibition openings, participation in external summits, leadership transition, director search. Genuine newsroom content.

Both are dated posts with the same card + detail shape; only the _content kind_ differs. No taxonomy distinguishes them for the user (internally just `Mawred News` + `SliderEN`, plus stray `uncategorized`).

### A4. Inventory flags (migration / QA — not structural)

- **Inconsistent post parent path:** most posts under `/mawred-news/…`; at least one (Abbara 08 call) under `/uncategorized/…`. → URL/taxonomy cleanup.
- **Empty Instagram footer embed** (`-->`) — recurring site-wide global-footer artifact (decision-log D).
- **"Gallery" link artifacts** in the Related Posts strip.
- **Categories effectively unused** as a user-facing facet (`Mawred News` / `SliderEN` = internal plumbing).
- **Prev/Next + Related** both key purely off recency today, not relevance.

## Part B — Structure spec (proposed)

Two structures. RTL / EN-AR aware throughout.

### B1. News Landing — structure

1. **Page header** — "News" title + breadcrumb (scaffold-standard).
2. **Lightweight category filter** _(decision 1)_ — a small set of user-facing filters/tabs over the feed, driven by a **real content taxonomy** (not the internal `Mawred News`/`SliderEN` tags). Starter facets: **All** (default) · **Announcements** (calls · results · grantees) · **News & Events** (forums, exhibitions, participations, institutional) · _(optional: by Program — PA / Wijhat / SFA / Abbara)_. Exact facet list = client tagging call; structurally the slot is "a filter bar over the feed." Keep lightweight — **not** the 6-facet directory machinery of Publications/Network.
3. **Post feed** — reverse-chronological grid of **post cards**. Card = thumbnail · title · date · **category tag** (new — makes the kind legible on the card) · optional short excerpt. Filter narrows this list.
4. **Pagination** — kept (numbered pager). ~26 pages of history worth preserving; numbered-vs-load-more is a wireframe call.
5. Global footer (fix empty IG embed at migration).

**Note — shared source with program pages** _(decision 2 — noted, not designed)._ The Announcements kind is the same information surfaced on/near the program pages' call-status + results. Flag a **shared-source relationship** so program lifecycle events and their News announcements don't drift apart — same move logged for Network ↔ program past-beneficiaries. Data-architecture flag only.

### B2. News Detail — structure

1. **Title** + breadcrumb (scaffold-standard).
2. **Prev / Next** — kept.
3. **Featured image.**
4. **Post meta strip** — date · category tag · author (optional — surface only if client wants bylines). Cleaner than today's trailing `Mawred News, SliderEN, Comments Off`.
5. **Body** — free prose by default, **plus optional structured body blocks** _(decision 3)_: **Schedule / programme block** (dated rows: venue · time · detail — the Living Fabric case) · **CTA block** (register form, detailed-programme link, apply-portal link) · **Key-detail line** (deadline / results-date callout). _Available, never forced_ — most posts are prose-only; announcement/event posts opt in. The lightweight analogue of a component kit: "prose body + a few optional structured inserts."
6. **Share bar** — kept; trim the 8-target list at design stage (copy/QA call).
7. **Related Posts** _(decision 4 — spec as_ related*)* — a strip of related posts. Preferred: **topical relevance via tagging** (same category and/or same program). **Fallback when tags absent: date-proximate, not most-recent** — posts published _near this post's own date_ (a window around it), so an older post surfaces its contemporaries rather than always today's newest. Intent is relevance, not recency.
8. Global footer.

## Part C — Decisions taken (this pass)

| #   | Decision                        | Resolution                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Landing feed: flat vs. filtered | **Lightweight category filter** over the feed; facets from a real taxonomy (client confirms list); card gains a category tag. **Considered and rejected: splitting News into two separate content types** (Announcements vs. News & Events) at migration — cleaner in principle but re-parents ~230 posts and is judged beyond the build team / too risky. The filter delivers the same user-facing split as a soft, tag-driven layer over one feed, without a taxonomy migration. |
| 2   | Program-announcement overlap    | **Note a shared-source relationship** (News announcements ↔ program call-status/results). Flag only, not designed.                                                                                                                                                                                                                                                                                                                                                                 |
| 3   | Detail body shape               | **Prose body + optional structured body blocks** (schedule · CTA · key-detail). Available, never forced.                                                                                                                                                                                                                                                                                                                                                                           |
| 4   | Related Posts logic             | **Spec as \*related** \*— by tag (category/program) when available; fallback = date-proximate to the current post\*\*, not always most-recent.                                                                                                                                                                                                                                                                                                                                     |

## Open flags (carry to wireframe / client — not blocking)

- **Exact filter facet list + tagging model** — needs client input (what categories are real; is "by Program" wanted). → client. The facet split is intentionally a **tag/filter, not a two-content-type split**, because re-parenting the post history is judged beyond the build team — keep the tagging model simple enough to apply to existing posts **in place**.
- **Numbered pager vs. load-more** for ~26 pages of history — wireframe call.
- **Author bylines** — surface or drop? → client (low stakes).
- **Migration / QA:** normalize post URLs (`/uncategorized/` → `/mawred-news/`); retag posts onto the real taxonomy; strip "Gallery" artifacts in Related strip; fix empty IG footer embed (decision-log D); trim share-target list.
- **Nav label** — "News" is unambiguous; no change flagged (unlike Publications).
