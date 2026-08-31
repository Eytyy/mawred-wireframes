# Tracker

Records what's been done. Task definitions are not kept here — a task is given as a brief in plan mode, planned, then executed. This file records the outcome.

---

**Task 1 — Port the wireframes to next js ← current**

- [x] Chrome + state panel + app shell
- [ ] Programs — block kit
- [ ] Programs — Production Awards
- [ ] Programs — Wijhat
- [ ] Programs — Stand for Art
- [ ] Programs — Abbara
- [ ] Publications
- [ ] Mawred Network
- [ ] News
- [ ] About
- [ ] Home

**Task 2 — Populate the wireframes with real content**

- [ ] Programs — Production Awards
- [ ] Programs — Wijhat
- [ ] Programs — Stand for Art
- [ ] Programs — Abbara
- [ ] Publications
- [ ] Mawred Network
- [ ] News
- [ ] About
- [ ] Home

---

## Log

Newest first. One entry per page-type completed: what was done, what was left as a gap, decisions taken, anything flagged.

### Chrome + state panel + app shell (2026-08-31)

**Done:** Next.js app shell with global chrome (utility bar, header nav with CSS-only dropdowns, page-header band, newsletter, footer), wireframe primitives (`Fill`, `Prose`, `Block`, `Hint`, `Stub`, `Btn`, `Chip`, `Field`), state panel with per-route toggle map, route registry for all 23 legacy screens, `/wireframes` index, catch-all stub routes, Home at `/` with page-header suppressed.

**Left undone:** All page bodies remain stubs until their page-type units. Block-level primitives (`KV`, `Card`, `Tabs`, etc.) deferred to the unit that first needs them.

**Decisions:** 55 (state provider + static map), 56 (nested URLs, `/` = Home), 57 (legacy border weights), 58 (type scale collapse). Logged in wireframe-passes.

**Flagged:** `docs/`, `references/`, `specs/`, and `content/` were not present in the repo after the Next.js scaffold — only AGENTS.md survived from the pre-scaffold tree. Restoring those directories is a separate task.

---

## Completed tasks

_Nothing yet._
