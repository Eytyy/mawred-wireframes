import type { StatesKey } from "./routes";

export type StateToggle = {
  key: string;
  label: string;
};

export type StateConfig = {
  list: StateToggle[];
  note: string;
};

export const STATES: Record<StatesKey, StateConfig> = {
  program: {
    list: [
      { key: "closed", label: "Applications closed" },
      { key: "offered", label: 'Show "offered" blocks' },
    ],
    note: "Closed state = open decision 5 (not yet confirmed).",
  },
  programRolling: {
    list: [],
    note:
      "Rolling intake — applications are always open, so there is no closed state. No past-beneficiaries listing either: naming beneficiaries would contradict the confidentiality the programme runs on.",
  },
  programDirectory: {
    list: [{ key: "closed", label: "Applications closed" }],
    note:
      "The beneficiary directory is published content on this programme, not an offered block, so there is nothing for the \u201coffered\u201d toggle to reveal.",
  },
  library: {
    list: [
      { key: "filtered", label: "Filters applied" },
      { key: "empty", label: "Filtered to no results" },
      { key: "slots", label: "Show available-but-unused slots" },
    ],
    note: "Slot = the optional intro line above the filters.",
  },
  series: {
    list: [{ key: "slots", label: "Show available-but-unused slots" }],
    note: "Slot = the optional per-item caption.",
  },
  detail: {
    list: [],
    note: "No page-specific states on this screen.",
  },
  directory: {
    list: [
      { key: "filtered", label: "Filters applied" },
      { key: "empty", label: "Filtered to no results" },
    ],
    note:
      "The entity tabs switch in the page itself — they are navigation, not a wireframe state.",
  },
  record: {
    list: [],
    note:
      "No toggle for missing optional fields: the populated record shows the omission natively — an organisation with no descriptor, and an engagement with a project title and no description.",
  },
  newslanding: {
    list: [
      { key: "filtered", label: "Programme filter applied" },
      { key: "empty", label: "Filtered to no results" },
      { key: "slots", label: "Show available-but-unused slots" },
    ],
    note:
      "Slot = the optional card excerpt. The category tabs switch in the page itself — navigation, not a state.",
  },
  home: {
    list: [
      { key: "nocalls", label: "No calls open (fallback)" },
      { key: "twentieth", label: "Feature slot = Mawred's 20th" },
      { key: "staticfb", label: "Static fallback (no motion)" },
    ],
    note:
      "nocalls is a template branch (spec §3C), not a reachable state — Stand for Art is open all year. twentieth keeps the campaign slot; no campaign copy is sourced and /mawreds-20th is still a stub. Static = hero and mosaic degraded to single images if motion is cut at build.",
  },
  aboutwho: {
    list: [],
    note: "No page-specific states — every block on this page is always present.",
  },
  aboutteam: {
    list: [],
    note:
      "Cards with and without a bio are drawn together in the grid — a mix, not a toggle. Expanding a bio happens in the page itself.",
  },
  supporters: {
    list: [{ key: "slots", label: "Show available-but-unused slots" }],
    note: "Slot = the optional one-line intro above the bands.",
  },
  pastlisting: {
    list: [{ key: "slots", label: "Show available-but-unused slots" }],
    note: "Slot = the optional one-line intro above the directory.",
  },
  careers: {
    list: [
      { key: "slots", label: "Show available-but-unused slots" },
      { key: "onejob", label: "Single open position" },
      { key: "nopositions", label: "No open positions" },
    ],
    note:
      "Careers content-readiness is a client call — laid out empty, single and multiple.",
  },
  newsdetail: {
    list: [
      { key: "byline", label: "Show author byline" },
      { key: "edge", label: "First post in the archive (no previous)" },
    ],
    note:
      "No structured toggle: the rosters and quotes are this post's published content, not a state. The archive edge is still a toggle — prev/next come from the whole 26-page archive, which the three-post sample can't reach.",
  },
  newseditorial: {
    list: [{ key: "byline", label: "Show author byline" }],
    note:
      "An event post is prose plus its one key detail — no roster, no schedule, no CTA. Byline is a client call, and every live post is authored \u201cMawred\u201d.",
  },
};
