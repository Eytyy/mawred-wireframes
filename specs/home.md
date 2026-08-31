> **Design-judgment track (Home).** Curated cross-page summary + the two parked calls (open-calls module; map/stats), plus the engagement/interactivity brief. **Reads from** every completed inner spec (Programs kit, Publications, Mawred Network, News, About) — Home _surfaces_ those; it does not restructure them and writes back to none of them.

## 0. Two settled calls

- **Open-calls / opportunities module → curated homepage block.** NOT a live query into structured program fields, so it **does not reopen or add any requirement to the finished program kit**. Draws on the same shared source News announcements use (program call-status/results); logged as a _shared-source relationship_, not a live feed. Three-way shared source: program pages ↔ News announcements ↔ Home open-calls. Kit stays closed.
- **Map/stats → native impact stat strip + a custom-designed impact visual (not an embed).** The Home Data-Studio map is dropped here, consistent with every other page (Network, Abbara). Impact carried by native numbers + a designed visual. Map parked as a client-revisit option only.

## 1. Current Home — inventory (what exists now)

From the live site (AR render). The current Home is a **stacked set of "latest-of" strips** pulling from inner sections:

1. **News / announcements strip** — ~5 latest posts (PA 2027 call open, exhibition opening, Wijhat round-2 results, transition notice, PA 2026 results).
2. **"Currently available opportunities"** — 3 open programs, each a one-line descriptor + call-status (Wijhat _open all year_, Stand for Art _open all year_, Production Awards _deadline 19 Oct 2026_).
3. **Podcast** — one latest Mudawanat episode (SoundCloud embed).
4. **Research & Publications** — 3 latest publications, teaser + "read more" link-out.
5. **About blurb** — one-paragraph identity ("regional non-profit founded 2003…") + Contact CTA.
6. **Footer** — newsletter signup, social row, copyright.
7. **Nav** — includes "عشرون المورد / Mawred's 20th" as a top-level item.

Observations (what's true now, not problems to fix here):

- Home today is **purely a "latest-of" aggregator** — reverse-chron freshness, no curation, no identity-first framing, no impact figures, no imagery-led hero. Functional, not engaging — exactly the gap the client's "more impactful / engaging / interactive" brief points at.
- No stats. No map currently rendering (the Data-Studio map is the parked embed, not live in this render).
- No hero image. First thing on the page is a text news strip.

## 2. The engagement brief — reference read

Client wants Home **more impactful, more engaging, a little interactive**, and cited the large-image transition on yaghmourarchitects.com.

What that reference does, and what transplants:

- **Cinematic full-bleed image sequence** as the hero — large photographs that transition, minimal chrome, editorial type. The _motion of big imagery_ is the hook.
- Transplant: Mawred's equivalent of "portfolio photographs" is **the people and work it has funded** — artists, performances, exhibitions, cultural organizations. The hero sequence isn't decorative stock; it's **the impact story told in faces and work** — the same job the dropped map was doing (reach/impact), told better.
- Below the hero the reference goes quiet: restrained prose. Same move — after an imagery-led, slightly interactive top, the rest of Home settles into calm, scannable curated strips. Engagement concentrated at the top; substance below.

Gives Home a spine the current version lacks: **identity + impact up top (imagery-led, interactive), utility below (curated strips).**

## 3. Proposed Home structure

Ordered top → bottom. Each block notes what it surfaces and where it reads from. Recommendation to review — for Home especially, several are easier to finalize at wireframe level (flagged inline).

### A. Cinematic hero — faces-of-impact mosaic + positioning line _(engagement centerpiece)_

- Full-bleed large-image sequence (the yaghmour-style transition), imagery = **funded artists / work / organizations** — the faces-of-impact material.
- Over it: a short **positioning line** (who Mawred is, in one confident sentence — graduates the dry "regional non-profit founded 2003" into something with intent) + minimal nav.
- 1–2 primary wayfinding links beneath the line (e.g. _Grants & Opportunities_ · _Network_).
- **Interactivity lives here** — the image transition (auto-advancing and/or scroll-driven). Exact behaviour = wireframe/build call; the structural decision is _"hero is an imagery-led sequence, not a static banner."_
- **Continuous with block B** — hero and impact visual are _one idea, not two_: the faces transitioning in the hero are the same material that settles into the mosaic wall in B on scroll. Chosen direction = **faces-of-impact mosaic** precisely because it can be the hero's material _and_ the impact device.
- _Wireframe flags:_ auto-advance vs scroll-driven vs hover; frame count; captions naming the artist/work (recommended); RTL transition direction; the hero→mosaic handoff.

### B. Impact stat strip + faces-of-impact mosaic wall _(replaces the map)_

- **Native stat strip** from real figures the site owns — same move as Network (55 countries · 38 programs · 22 years) and Abbara (87/60/27). Home's version = the _widest_ cut: e.g. _~400 grants since 2004 · 55 countries · 22 years · N organizations supported_ (confirm against Network's counts at build). Figures **count up on scroll**.
- **Faces-of-impact mosaic wall** in place of the map. A grid of funded artists & work that subtly animates (slow fade-swaps / scroll reveals); _same material_ as the hero, settled into a scannable wall. Carries "impact" through people rather than a data-viz map; the stat strip carries the numbers over/beside it.
- Reads from: **Mawred Network record source** (the shared directory that also backs program past-beneficiaries) — so both the numbers _and_ the mosaic imagery derive from real funded records, not hand-typed trivia or stock.
- _Placement:_ directly under the hero, so impact reads at top-of-scan — consistent with the program-scaffold reasoning that put the stat strip high.
- _Wireframe flags:_ mosaic density/rhythm; continuous-with-hero (dissolve) vs distinct block; caption-on-hover; how stat figures sit relative to the wall (overlaid vs adjacent band).

### C. Currently open opportunities _(curated block — call §0)_

- The one genuinely time-sensitive, action-driving module. Card per open program: name · one-line descriptor · **call-status** (rolling / deadline date / round) · link to the program page.
- Curated homepage block; shared source with News announcements + program call-status (noted, not a live query).
- Handles empty gracefully — if nothing's open, show next-round timing or fall back to a programs-overview link rather than an empty slot.
- _Wireframe flag:_ above or below the impact strip? Lean: impact strip first (story earns the ask), opportunities immediately after. Easy to flip.

### D. Programs overview _(NEW vs current Home)_

- Current Home only shows _open_ programs. Add a compact **all-four-programs** overview (PA · Wijhat · Stand for Art · Abbara), each name + one-liner + link — so Home introduces the full offer, not just what's open today.
- Reads from: the four program pages (name + descriptor only; no kit dependency).
- The "what to _add_" design-judgment call — the current aggregator never presents the programs as a set.

### E. Featured / spotlight strip _(curated, flexible)_

- One editorially-chosen highlight — a beneficiary story, new publication, exhibition, milestone. Big image + title + short line + link.
- The homepage's "curation" lever (vs pure latest-of). Client picks what leads.
- Doubles as the **"Mawred's 20th"** feature slot when active (see §4).

### F. Latest news _(surfaces News)_

- 3–4 latest posts as cards (image · title · date · category tag), link to News landing.
- Reads from: News landing feed. Keeps the current freshness, curated to a few and upgraded to cards.

### G. Publications / media taste _(surfaces Publications)_

- A small surfacing — a few latest covers (Research & Publications) and/or one latest media episode. Link-out to Publications.
- Reads from: Publications (Media Library + Series Listing).
- _Wireframe flag:_ one combined "latest from Publications" strip vs two mini-strips (documents + media). Lean: one combined, to keep Home from sprawling.

### H. Identity / about lead-in _(surfaces About)_

- Short identity block — a tightened version of the current about blurb — linking into the merged Who We Are page. One paragraph; Home introduces, About tells.
- Reads from: About (Who We Are).
- _Note:_ if the hero positioning line (A) already carries identity hard enough, this can go very light or fold into the footer region. Wireframe call.

### I. Newsletter + contact + footer _(utility tail)_

- Newsletter signup (exists today) · contact CTA · social row · standard global footer.
- Global-footer migration flags (empty IG embed, etc.) already in decision-log D — inherited, not re-litigated here.

## 4. "Mawred's 20th" (عشرون المورد)

- Lives in nav today; decision-log carries the open client question _permanent nav vs temporary campaign_.
- **Structural proposal:** don't hard-wire it as its own fixed block. Treat the **Featured/spotlight strip (E) as a flexible feature slot** that hosts the 20th campaign when active, then reverts to other highlights — Home supports a campaign presence without baking a temporary thing into permanent structure.
- Client question (permanent vs temporary) stays theirs — this just makes Home _able_ to feature it either way.

## 5. What Home surfaces — at a glance

| Inner section      | Surfaced on Home as                                             | Block |
| ------------------ | --------------------------------------------------------------- | ----- |
| Programs (4)       | Open-opportunities cards + all-four overview                    | C, D  |
| Mawred Network     | Impact stat strip + mosaic (figures + imagery from its records) | B     |
| News               | Latest-news card strip                                          | F     |
| Publications       | Latest covers / media episode                                   | G     |
| About (Who We Are) | Positioning line + identity lead-in                             | A, H  |
| (curatorial)       | Featured/spotlight + 20th slot                                  | E     |

Every inner page is represented; nothing on Home requires changing an inner spec.

## 6. Custom impact visual — chosen direction

The map's real job was _impact / reach_. Chosen replacement:

**→ Faces-of-impact mosaic wall, paired with count-up stat figures.** A grid of funded artists & work that subtly animates (slow fade-swaps / scroll reveals), carrying impact through _people_ rather than a data-viz map; stat figures count up on scroll alongside it. Chosen because it's the one option that can be **both the hero's material and the impact device** — hero (A) and impact block (B) become one continuous visual idea, the strongest fit for the yaghmour reference and the "engaging, human" brief. Sourced from real funded records (via the Network record source), so it's genuine impact, not stock. Degrades to a static image if build budget is tight.

_Alternatives considered and set aside (kept for the wireframe conversation, not live options):_

- **Reach constellation** — countries/grantees as connected points; the _idea_ of a region-wide network as an abstract shape. Set aside as less human than the mosaic, though it remains the natural fallback if the client specifically wants "reach" legible as a geography-like shape.
- **Flowing timeline ribbon (22 years)** — milestones since 2003; ties to the About/History timeline graduation. Set aside as a _longevity_ device rather than an _impact_ one — better suited to About.
- **Standalone counter strip** — not set aside; **folded into the chosen direction** as the count-up behaviour on the stat figures.

Remaining creative decisions on the mosaic (density, hero→wall handoff, captioning) are wireframe-stage, not open structural questions.

## 7. Open threads

**Ours, settled (this doc):** open-calls = curated (kit stays closed); map dropped for native stats + custom visual; 20th handled via a flexible feature slot; Home surfaces all inner sections without touching their specs.

**→ Wireframe-stage:**

- Hero interaction behaviour (auto vs scroll vs hover; frame count; captioning; RTL transition direction).
- Order of impact-strip (B) vs open-opportunities (C).
- Publications surfacing: one combined strip vs documents+media split.
- How light the identity lead-in (H) goes if the hero already carries identity.
- Mosaic execution: density/rhythm, hero→wall handoff (dissolve vs distinct), caption-on-hover, stat-figure placement relative to the wall. _(Direction chosen — mosaic; these are execution details.)_

**→ Client:**

- Home map/stats: confirm native-numbers direction (map kept only as revisit). _(decision-log C)_
- "Mawred's 20th": permanent nav vs temporary campaign — informs whether the feature slot leads with it. _(decision-log C)_
- Nav label "Grants & Opportunities" vs "Programs" — surfaces on Home's primary wayfinding. _(decision-log C, unchanged — not ours)_
- Confirm the headline impact figures to display.
