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

export const WHO_WE_ARE_INTRO = [
  "Culture Resource (Al-Mawred Al-Thaqafy) is a regional, non-profit organization founded in 2003 to support artistic creativity in the Arab region and to encourage cultural exchange within the region and beyond. Its work rests on an appreciation of the region's diverse cultural heritage, and on a belief in the role of culture in building civil society, in access to culture for all, and in the right of artists to freedom of expression.",
  "That mission is pursued through a range of services and programmes: support for independent artists to create new work and to tour it, capacity building and training, Arabic-language publications for cultural managers and organizations, cultural policy research, support for artists at risk, and work on the sustainability of cultural industries — without undermining the value of culture as a public good and a basic human right.",
  "Culture Resource is led by a staff of diverse backgrounds, experiences and skill sets, under the governance of a general assembly of 35 cultural leaders from the Arab region and Belgium, and a seven-member artistic board. Its work is characterized by deep knowledge of the region's cultural life and history, institutional expertise and integrity, and by the representation of the region's diversity across its beneficiaries, staff and governing bodies.",
];

export const VISION =
  "An Arab region where cultural diversity is celebrated, and creativity, inclusivity, and equity are fostered.";

export const MISSION_POINTS = [
  "To empower, engage and unite communities through support for creative and artistic production, capacity building and shared cultural knowledge.",
  "To inspire artistic expression, support creative talents and enhance cultural management skills.",
  "To celebrate and promote a rich, diverse and creative heritage in the Arab region.",
  "To promote innovation and creativity for the development of a diverse and open cultural landscape.",
];

export type ValueRecord = {
  label: string;
  text: string;
};

export const VALUES: ValueRecord[] = [
  {
    label: "Community engagement and inclusiveness",
    text: "Creating, performing and experiencing art should be inclusive and accessible to all, and culture should foster solidarity, belonging and self-expression while connecting communities.",
  },
  {
    label: "Collaboration",
    text: "Our success is tied to that of our stakeholders, and is built through effective partnerships with individuals, organizations and others working towards shared goals.",
  },
  {
    label: "Trust",
    text: "We aspire to be a trusted partner for emerging and established artists and cultural institutions, and for local, regional and international donors and organizations.",
  },
  {
    label: "Diversity",
    text: "We value and celebrate the diverse histories, identities and cultures within the region, and respect all forms of expression regardless of religion, race, gender, ethnicity, social class or language.",
  },
  {
    label: "Transparency",
    text: "Access to and distribution of funds and services must be fair and transparent, inclusive of economically and politically underprivileged communities, and representative of the region's diversity.",
  },
  {
    label: "Support and preservation",
    text: "The development, preservation and care of the region's artistic ecosystem, artists and cultural organizations alike, is central to its social, educational and economic growth.",
  },
];

export const HISTORY_LEAD = [
  "The history is a sequence of programmes launched, institutions co-founded and then spun off, and an administrative base that moved from Cairo to Beirut. The rail below carries the dated milestones.",
  "Alongside its own programmes, Culture Resource runs joint initiatives with international partners that sit on no single year: Tunisia Balad El Fann with the Tunisian Ministry of Culture, Tandem Shaml with the European Cultural Foundation and MitOst, and the Redzone Festival with KKV in Norway.",
];

export type HistoryEntry = {
  year: string;
  milestone: string;
  text?: string;
};

export const HISTORY_ENTRIES: HistoryEntry[] = [
  {
    year: "2003",
    milestone: "Founded, and registered in Belgium",
    text: "Basma El Husseiny convened a small group of Arab cultural activists and artists in the summer of 2003; the constituent meetings that followed set three areas of activity — supporting young and emergent artists, opening dialogue with peers in countries of the South, and bringing non-mainstream work to wider Arab audiences. Culture Resource was founded at the end of the year and registered in Belgium, with its administrative base in Egypt.",
  },
  {
    year: "2004",
    milestone: "Awwal Rabie, Production Awards, Youth Platforms",
    text: "The Awwal Rabie festival opened in Cairo in April and grew into the biannual Spring Festival held concurrently in Cairo and Beirut. Production Awards began as small grants for artists under 35, followed in the same year by the Youth Platforms workshops in music, literature and theatre.",
  },
  {
    year: "2005",
    milestone: "Mawa3eed, El Genaina Theater, Cultural Management Training",
    text: "Mawa3eed added mobility support and linked the three programmes into one path — a creativity platform to develop the work, a Production Award to make it, travel support to tour it. El Genaina Theater opened in Al-Azhar Park with the Aga Khan Foundation, and Cultural Management Training launched with the European Cultural Foundation, training trainers and building an Arabic-language resource library.",
  },
  {
    year: "2006",
    milestone: "AFAC co-founded, co-directed to 2009",
    text: "Research into an independent Arab fund for culture led to the Arab Fund for Arts and Culture, which Culture Resource co-founded in 2006 and co-directed until 2009.",
  },
  {
    year: "2009",
    milestone: "Cultural Policy Research",
    text: "The first survey of existing cultural policies across nine Arab countries was published in book form. The programme grew into national working groups in ten countries, further research, and the Arab Cultural Policy website.",
  },
  {
    year: "2010",
    milestone: "Music education pilot at DAAS",
    text: "A pilot programme in Al-Darb Al-Ahmar, near El Genaina Theater, teaching percussion, brass instruments and circus arts to school-age children at the Al-Darb Al-Ahmar Arts School.",
  },
  {
    year: "2012",
    milestone: "Abbara, and Imkan added to training",
    text: "Abbara launched to help young Arab cultural organizations reach stability and sustainability, opening to organizations from Egypt, Tunisia, Yemen, Syria and Libya and later to all Arab countries. Imkan joined the training programme in the same year with regional forums for young cultural leaders.",
  },
  {
    year: "2013",
    milestone: "Action for Hope incubated, separate since 2015",
    text: "The Action for Hope cultural relief initiative began as a pilot inside Culture Resource and has been an independent organization since 2015.",
  },
  {
    year: "2013–14",
    milestone: "Master's feasibility study; first class October 2018",
    text: "A feasibility study identified the Arab country best suited to host the region's first master's programme in cultural policy and cultural management, and mapped partner universities and course content. The programme was designed with Hassan II University in Morocco and Hildesheim University in Germany, and the first class of ten students began in October 2018.",
  },
  {
    year: "2016–17",
    milestone: "Egypt programmes spun off, base moves to Beirut",
    text: "As the environment for cultural work in Egypt deteriorated, El Genaina Theater and the Al-Darb Al-Ahmar Arts School became independent Egyptian companies by the end of 2016. Culture Resource has operated from Beirut since June 2017.",
  },
  {
    year: "2017",
    milestone: "Kon Ma' Al-Fann, and mobility beyond the region",
    text: "Kon Ma' Al-Fann began offering short-term financial support to artists forced to leave their homeland, and the mobility grants programme widened to cover travel to platforms and events outside the Arab region.",
  },
  {
    year: "2018–2026",
    milestone: "Not covered by the published history",
  },
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
