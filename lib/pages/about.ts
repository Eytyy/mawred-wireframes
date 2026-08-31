export type PersonRecord = {
  key: string;
  role?: boolean;
  bio?: boolean;
  noimg?: boolean;
};

export type PeopleGroup = {
  label: string;
  people: PersonRecord[];
  total?: number;
  cardNote?: boolean;
};

export const MISSION_POINTS = 4;
export const VALUE_COUNT = 6;

export const HISTORY_ENTRIES = [
  { year: "2003", milestone: "Founding" },
  { year: "2004", milestone: "First programmes" },
  { year: "2005", milestone: "Training programme and venue" },
  { year: "2006", milestone: "AFAC spin-off" },
  { year: "2009", milestone: "Cultural policy programme" },
  { year: "2011–12", milestone: "Abbara" },
  { year: "2013", milestone: "Action for Hope" },
  { year: "2016–17", milestone: "Cairo → Beirut" },
  { year: "2018+", milestone: "Later milestones" },
];

const TEAM: PersonRecord[] = [
  { key: "team-1", role: true, bio: true },
  { key: "team-2", role: true, bio: true },
  { key: "team-3", role: true },
  { key: "team-4", role: true, noimg: true },
];

const BOARD: PersonRecord[] = [
  { key: "board-1", role: true, bio: true },
  { key: "board-2", role: true, bio: true },
  { key: "board-3", role: true, bio: true },
  { key: "board-4", role: true },
  { key: "board-5", role: true, bio: true },
  { key: "board-6", role: true },
  { key: "board-7", role: true, bio: true, noimg: true },
];

const ASSEMBLY: PersonRecord[] = [
  { key: "assembly-1", bio: true },
  { key: "assembly-2" },
  { key: "assembly-3" },
  { key: "assembly-4", bio: true },
  { key: "assembly-5", noimg: true },
  { key: "assembly-6" },
  { key: "assembly-7", bio: true },
  { key: "assembly-8", noimg: true },
];

export const PEOPLE_GROUPS: PeopleGroup[] = [
  { label: "Team", people: TEAM, cardNote: true },
  { label: "Artistic Board", people: BOARD },
  { label: "General Assembly", people: ASSEMBLY, total: 35 },
];

export type LogoBand = {
  label: string;
  count: number;
  note?: boolean;
};

export const LOGO_BANDS: LogoBand[] = [
  { label: "Donors", count: 5, note: true },
  { label: "Supporters", count: 1 },
  { label: "Partners", count: 12 },
];

export const PAST_INITIATIVE_DETAIL_HREF = "/about/past-initiatives/initiative";
export const CAREERS_POSITION_HREF = "/about/careers/position";
