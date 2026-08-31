**Lightweight track · single combined pass** — inventory of the current four Publications sub-pages, followed by a simple structure spec. No component register, no consolidation; Publications is structurally settled and needs capturing, not deliberation.

**Pages covered:** Research & Publications · Mudawanat Podcast · Foundations of Cultural Policies · Mawred Talks.

**Governing decision (settled before drafting):** keep **four separate pages** in the sitemap, backed by a small set of structures — a _Media library_ (Research & Publications), a reusable, provider-agnostic _Series listing_ that the three media pages each instantiate (and a future series can too), and the _Publication detail_ page behind each library record. Current nav preserved, no forced merge, repeatability retained.

---

## Part 1 — Content inventory (what exists now)

### 1.1 Research & Publications

`/research-publications/` · last modified 2021-02-15

A filtered document library — the structurally heaviest of the four, and unlike the other three.

- **Page title + breadcrumb** (Home › Research & Publications).
- **Filter facets** (6), each a value list:
  - **Author** — ~50 names (Achraf Maher … Wedad Salloum).
  - **Country** — 13 (Algeria, Arab Region, Egypt, Jordan, KSA, Lebanon, Lybia [sic], Morocco, Palestine, Qatar, Syria, Tunisia, UAE).
  - **Theme** — 2 (Cultural Management, Cultural Policies).
  - **Language** — 3 (Arabic, English, French).
  - **Type** — 3 (Exploratory Survey, Publication, Research/Study).
  - **Year** — 14 values (2006–2016, then 2021, 2023, 2024).
- **Results grid** — ~30 items, 3 columns. Each cell = cover thumbnail + linked title + language line (e.g. "Arabic, English, French"). Each title links to a per-item detail page under `/research-publication/…`.
- No intro/descriptive prose — the page opens straight into filters + grid.
- Standard global chrome (header nav, About-us blurb, Contact, Newsletter, social, footer).

**Note on the item detail page** (`/research-publication/{slug}/`): each publication has its own page (cover, metadata, description, document link). Specced as **Structure C** in Part 2 — kept as-is with an added Related publications section.

### 1.2 Mudawanat Podcast

`/podcast-mudawanat/` · last modified 2023-03-02

- **Page title + breadcrumb.**
- **Intro prose** — 3 short paragraphs: what Mudawanat is (living archive of contributions documenting the contemporary culture scene), the British Council partnership, that it's the output of two project rounds launched 2020, and a "follow us on your preferred platform / SoundCloud" line. Links out to the Mudawanat _program_ page and to the British Council.
- **Listing** — flat stack of ~7 **SoundCloud** playlist embeds (series/season sets, mostly Arabic-titled). No grouping, no filters, no per-item captions beyond the embed's own title.
- Standard global chrome.

### 1.3 Foundations of Cultural Policies

`/foundations-of-cultural-policies/` · last modified 2025-02-13

- **Page title + breadcrumb.**
- **Intro prose** — 3 substantial paragraphs: the series as part of the Cultural Policies program (launched 2009); what the series is (short interview videos with cultural actors/experts introducing cultural-policy concepts, origins, schools, models); that it's 9 episodes published successively, content by Marwa Helmy (Artistic Board member); note that each episode links to referenced studies and ends with a detailed summary. Links out to the YouTube playlist, the Cultural Policies program page, and the Artistic Board page.
- **Listing** — flat stack of **9 YouTube** embeds (the playlist episodes).
- Standard global chrome.

### 1.4 Mawred Talks

`/mawred-talks/` · last modified 2024-02-21

- **Page title + breadcrumb.**
- **Intro prose** — 1 paragraph: a talks series launched 2021, addressing questions about artistic/literary production with artists and writers from the Arab region; purpose (space to discuss projects, approaches, artistic value; benefit from the network; foster critical thinking). (A couple of stray "." lines sit above/below the body — editorial artifact, see flags.)
- **Listing** — flat stack of ~13 **YouTube** embeds (first 10 share the Mawred Talks playlist; last 3 are standalone oembed links — same series, mixed embed source).
- Standard global chrome.

### 1.5 Cross-page observations

- **Three of four are structurally identical:** intro prose + flat stack of media embeds, no filtering. Only the embed provider differs — Mudawanat = SoundCloud (audio), Foundations + Mawred Talks = YouTube (video).
- **Research & Publications is the outlier:** filtered library over document records with detail pages; no intro prose.
- **Embeds carry their own titles/thumbnails** from the provider; the page adds no caption, date, or description per item. Ordering appears manual (publish order).
- Every page carries the **same global chrome** — that's scaffold, not page content, and is out of scope for these specs (it belongs to the global header/footer treatment).

---

## Part 2 — Structure spec (what we propose)

Four listing pages, backed by three structures: **Media Library**, **Series Listing**, and **Publication Detail**. The media pages keep their own URLs and nav entries but are instances of one shared listing structure.

### Structure A — Media Library (Research & Publications)

A filtered, browsable library of document records.

**Blocks, in order:**

1. **Page heading** — title + breadcrumb.
2. **(optional) Intro line** — one short descriptive sentence. _Not present today; offered as an available slot, not required. If the client wants the library to open with a line of context, it lives here; otherwise the page opens on the filter/grid as it does now._
3. **Filter bar** — the 6 facets, captured **as-is**: Author · Country · Theme · Language · Type · Year. Each facet is a value list driving the grid. RTL-aware (facet labels + values must mirror in Arabic).
4. **Results grid** — responsive card grid. Each card = cover thumbnail · linked title · language line. Card links to the item detail page. Empty/filtered states handled by the grid.

**Content requirements per record:** cover image · title · language(s) · the filter attributes it's tagged with (author, country, theme, type, year) · link to detail page.

**Notes / flags:**

- **Filters kept as-is.** One observation logged for later, not actioned now: the **Author** facet runs ~50 names — usable but heavy as a flat list; worth revisiting at wireframe/design stage (typeahead, collapse, or drop) if it proves unwieldy. Not a structure change; noted only.
- The **item detail page** each record links to is specced separately as **Structure C** below.

### Structure B — Series Listing (Mudawanat · Foundations · Mawred Talks · future series)

One reusable, **provider-agnostic** structure. Each series is an instance; a new series (audio or video) instantiates the same structure. A series page is title + description + listing, so a new series can spin up its own page without a bespoke spec.

**Blocks, in order:**

1. **Page heading** — series title + breadcrumb.
2. **Series intro** — descriptive prose (headline + text). Length flexes: one paragraph (Mawred Talks) to three (Foundations). Holds what the series is, who's behind it, partners, and any "follow on your platform of choice" line. May contain outbound links (program page, partner, playlist, contributor).
3. **Media embed listing** — a flat, ordered stack of embeds. **Provider-agnostic:** each item is a media embed that may be **audio (SoundCloud)** or **video (YouTube)**; the structure doesn't care which, so a future series of either type reuses it. No filtering (matches current + fits the flat scale). Ordering is manual/editorial.

**Content requirements per item:** the embed (provider + ID/URL). Optionally a per-item title/caption if the client ever wants captions beyond the provider's own — **not present today**, so defined as an _available_ per-item field, not required.

**Notes / flags:**

- **Mixed embed sources within one series are fine** — Mawred Talks already mixes playlist-linked and standalone YouTube embeds; the listing treats each item uniformly.
- **Provider-agnostic by design** — one structure spans audio and video series. If the client later wants audio and video to _look_ different, that's a wireframe treatment on one structure, not two structures.

### Structure C — Publication Detail (per record behind the Media Library)

The page a Research & Publications grid card links to. **Stays essentially as-is** — current fields captured — with **one addition: a Related publications section** at the end.

**Blocks, in order:**

1. **Page heading** — publication title + breadcrumb (Home › Research & Publications › {title}).
2. **Publication record** — the item's content as it exists today: cover image · title · the metadata it's tagged with (author, country, theme, type, language(s), year) · description/abstract prose where present · download/access link to the document itself.
3. **Related publications** _(new)_ — a short set of related records at the page end, shown as grid cards (reusing the Media Library card treatment: cover · title · language line, each linking to its detail page).

**Content requirements per record:** the same attributes shown in the library (author, country, theme, type, language, year) · description/abstract prose · document link · a set of related publications.

**Notes / flags:**

- How "related" is determined is left to the client/build — the structure just reserves the section.

---

## Part 3 — Open flag (not resolved here)

- **"Publications" nav parent holds two kinds of thing** — a document library + a set of media series. Whether the nav/landing should visually signal that split (or whether "Publications" is even the right umbrella label for video/audio series) is a **wireframe/labelling decision**, surfaced here, not settled. Ties loosely to the unresolved site-wide "Grants & Opportunities vs Programs" nav-label question — same class of call.

---

## Part 4 — Migration / QA flags (fix during build, not structure issues)

Consistent with the site-wide flags already logged from the program audits:

- **Empty Instagram footer embed** — the stray `-->` with no content appears in the global footer on all four Publications pages too. Confirms the earlier read: this is a **global-footer fix**, not per-page.
- **AR-only / bilingual parity** — pages have EN and AR versions; ensure every series intro + the library's facet labels/values have real EN and AR content (RTL-aware). No EN gaps spotted on these four, but confirm at build.
- **Editorial artifacts in live copy** — Mawred Talks has stray "." lines around the intro body (leftover placeholder punctuation). → copy-rewrite cleanup.
- **Mixed embed sources** — Mawred Talks mixes playlist-tied and standalone YouTube embeds; harmless, but normalize during migration so all items in a series listing are entered the same way.
- **Embed styling limits** — SoundCloud + YouTube embeds have limited styling control (same class of constraint already logged for the Home Data-Studio map and Abbara org map). Factor into the listing's visual treatment at wireframe stage.
