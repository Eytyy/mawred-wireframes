export type SupportRecordConfig = {
  label: string;
  amt?: boolean;
};

export type TimelineStageConfig = {
  n: string;
  d: string;
};

export type DownloadFileConfig = {
  n: string;
  t: string;
};

export type ProgramBlockConfig =
  | { type: "C3flat"; rows: string[] }
  | { type: "C3rounds"; groups: string[] }
  | { type: "C4"; steps: string[]; withRepeat?: boolean }
  | { type: "C5"; records: SupportRecordConfig[] }
  | { type: "C6"; label: string }
  | { type: "C8" }
  | { type: "C9"; label: string }
  | { type: "C10"; lines: number }
  | { type: "S1"; stages: TimelineStageConfig[] }
  | { type: "S2"; files: DownloadFileConfig[] }
  | { type: "S3"; groups: string[]; offered?: boolean; offeredOnly?: boolean }
  | { type: "S5"; paths: string[] }
  | { type: "S6" };

export type ProgramConfig = {
  hero?: string[];
  figs?: string[] | null;
  dest: string;
  blocks: ProgramBlockConfig[];
};

export const PRODUCTION_AWARDS: ProgramConfig = {
  figs: ["grants awarded", "countries", "years running"],
  dest: "online application portal",
  blocks: [
    {
      type: "C3flat",
      rows: ["Deadline", "Eligibility", "Disciplines covered", "Grant period"],
    },
    {
      type: "C4",
      steps: [
        "Create an account",
        "Complete the form",
        "Attach the required files",
        "Submit before the deadline",
      ],
      withRepeat: true,
    },
    {
      type: "C5",
      records: [
        { label: "Discipline", amt: true },
        { label: "Discipline", amt: true },
        { label: "Discipline", amt: true },
        { label: "Discipline", amt: true },
      ],
    },
    { type: "C8" },
    { type: "C9", label: "Jury" },
    { type: "C10", lines: 5 },
    {
      type: "S2",
      files: [
        { n: "Application form", t: "DOCX" },
        { n: "Budget template", t: "XLSX" },
      ],
    },
    {
      type: "S3",
      groups: ["Round 03", "Round 02", "Round 01"],
      offered: true,
      offeredOnly: true,
    },
  ],
};

export const WIJHAT: ProgramConfig = {
  hero: ["Who", "What", "Where", "Support"],
  figs: ["travel grants", "countries", "years running"],
  dest: "online application portal",
  blocks: [
    { type: "C3rounds", groups: ["Round 1", "Round 2", "Round 3"] },
    { type: "S6" },
    { type: "S5", paths: ["Individual", "Group"] },
    { type: "C8" },
    { type: "C9", label: "Jury" },
    { type: "C10", lines: 5 },
    {
      type: "S3",
      groups: ["2025", "2024", "2023"],
      offered: true,
      offeredOnly: true,
    },
  ],
};

export const STAND_FOR_ART: ProgramConfig = {
  figs: null,
  dest: "private encrypted form (not the public portal)",
  blocks: [
    { type: "C6", label: "Your request is confidential" },
    {
      type: "C4",
      steps: [
        "Contact us through the secure form",
        "A committee reviews the case",
        "You are contacted directly",
      ],
      withRepeat: true,
    },
    {
      type: "C5",
      records: [
        { label: "Emergency fund", amt: true },
        { label: "Referral to a partner organisation" },
      ],
    },
    { type: "C8" },
    { type: "C9", label: "Committee — also decides the level of support" },
  ],
};

export const ABBARA: ProgramConfig = {
  hero: ["Who", "What", "Where", "Support"],
  figs: [
    "organisations supported",
    "still active",
    "ceased operating",
    "countries",
  ],
  dest: "online application portal",
  blocks: [
    {
      type: "C3flat",
      rows: [
        "Annual budget band",
        "Years operating",
        "Registration status",
        "Country of operation",
      ],
    },
    {
      type: "S1",
      stages: [
        { n: "Call opens", d: "date" },
        { n: "Deadline", d: "date" },
        { n: "Shortlisting", d: "date" },
        { n: "Interviews", d: "date" },
        { n: "Selection", d: "date" },
        { n: "Year 1 support", d: "12 months" },
        { n: "Review", d: "date" },
        { n: "Year 2 support", d: "12 months" },
      ],
    },
    {
      type: "C4",
      steps: ["Check eligibility", "Complete the form", "Submit"],
      withRepeat: true,
    },
    {
      type: "C5",
      records: [
        { label: "Core funding", amt: true },
        { label: "Training" },
        { label: "Technical assistance" },
        { label: "Networking" },
      ],
    },
    { type: "C6", label: "What the funding does and does not cover" },
    { type: "C8" },
    { type: "C9", label: "Jury" },
    { type: "C10", lines: 2 },
    { type: "S3", groups: ["Cohort 03", "Cohort 02", "Cohort 01"] },
  ],
};
