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
