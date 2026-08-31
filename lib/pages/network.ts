import type { Facet } from "@/components/wireframe/FilterBar";
import type { FigItem } from "@/components/wireframe/Figs";

function facet(name: string, values: string[]): Facet {
  return { n: name, v: values.length, values };
}

export const NETWORK_FACETS: Facet[] = [
  facet("Type of Involvement", [
    "Commissioned Artist",
    "Expert",
    "Featured Artist",
    "Grantee",
    "Juror",
    "Participant",
    "Researcher",
    "Student",
  ]),
  facet("Programme", [
    "Abbara",
    "All Around Culture",
    "Arab Fund for Arts and Culture / AFAC — Steering Committee",
    "Artistic Tours",
    "Beirut Won't Cry",
    "Circairo",
    "Cultural Journalism Workshop",
    "Cultural Management Program",
    "Cultural Policies and Research",
    "Culture 3.0",
    "Ecosystem Strengthening Pilot in the Arab Region",
    "Egypt Spaces Initiative",
    "El Geneina Theater",
    "Exceptional Grants for Supporting Artists & Writers",
    "Imkan",
    "Injazz",
    "Jazz Factory",
    "Lebanon Solidarity Fund",
    "Madad",
    "Maraheb Program to Support Artistic Residencies in the Arab region",
    "Master Of Cultural Policy and Cultural Management",
    "Mawa3eed",
    "Mudawanat",
    "No Commission",
    "Production Awards",
    "Read And Write Now",
    "Reclaiming Our Commons",
    "RedZone",
    "Sama3na",
    "Spring Festival",
    "Stand for Art",
    "Tajwaal",
    "Takatuf",
    "Tandem Shaml",
    "Tunis Balad Al Fan",
    "WASL",
    "Wijhat",
    "Youth Platforms",
  ]),
  facet("Discipline", [
    "Architecture",
    "Archiving",
    "Audio Production",
    "Cinema",
    "Cultural Heritage",
    "Cultural Management",
    "Cultural Policies",
    "Design",
    "Education",
    "Entrepeneurship",
    "Environment",
    "Human Rights",
    "Journalism",
    "Knowledge Production and Research",
    "Literature",
    "Music",
    "Performing Arts",
    "Publishing",
    "Sociology",
    "Technology",
    "Urbanism",
    "Visual Arts",
  ]),
  facet("Country", [
    "Afghanistan",
    "Algeria",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Belgium",
    "Brazil",
    "Bulgaria",
    "Canada",
    "Central African Republic",
    "Colombia",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Iran",
    "Iraq",
    "Ireland",
    "Italy",
    "Jordan",
    "Kuwait",
    "Latvia",
    "Lebanon",
    "Libya",
    "Mauritania",
    "Mexico",
    "Monaco",
    "Morocco",
    "Netherlands",
    "Norway",
    "Oman",
    "Palestine",
    "Qatar",
    "Saudi Arabia",
    "Serbia",
    "Spain",
    "Sudan",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uzbekistan",
    "Yemen",
  ]),
  facet("Year", [
    "2004",
    "2005",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
  ]),
];

export const NETWORK_FIGURES: FigItem[] = [
  { label: "records in the network" },
  { label: "countries", value: "55" },
  { label: "programmes & initiatives", value: "38" },
  { label: "years tagged, 2004–2025", value: "21" },
];

export const NETWORK_INTRO = [
  "The Mawred Network is a directory of everyone Culture Resource has worked with since 2004 — individuals, groups, organisations and initiatives — filterable by kind of involvement, programme, discipline, country and year. Every entry links to its own record.",
  "The database, and any data shared from it, follows responsible-data practices: consent, privacy, security and ownership, so that everything shared with Culture Resource is handled ethically.",
];

export const NETWORK_CORRECTION_CONTACT = "communications@mawred.org";

export type NetworkRow = {
  name: string;
  countries: string;
  involvements: string[];
  disciplines: string;
};

export const ENTITY_TABS = [
  { label: "Individuals & Groups" },
  { label: "Organizations & Initiatives" },
];

export const NETWORK_ROWS: NetworkRow[][] = [
  [
    {
      name: "Hiba Taim",
      countries: "Morocco",
      involvements: ["Student"],
      disciplines: "Visual Arts",
    },
    {
      name: "Nour Shantout",
      countries: "Syria, Austria",
      involvements: ["Grantee"],
      disciplines: "Visual Arts",
    },
  ],
  [
    {
      name: "Al Kasaba Theatre and Cinematheque",
      countries: "Palestine",
      involvements: ["Participant", "Grantee"],
      disciplines: "Performing Arts, Cinema",
    },
    {
      name: "Editions Motifs",
      countries: "Algeria",
      involvements: ["Participant", "Grantee"],
      disciplines: "Literature",
    },
  ],
];

export const NETWORK_SAMPLE_FILTERS: string[][] = [
  ["Involvement: Student", "Country: Morocco"],
  ["Programme: All Around Culture", "Country: Palestine"],
];

export type NetworkEngagement = {
  involvement: string;
  programme: string;
  track?: string;
  year: string;
  title: string;
  description?: string[];
};

export type NetworkRecord = {
  descriptor?: string;
  countries: string;
  disciplines: string;
  body?: string[];
  engagements: NetworkEngagement[];
};

export const NETWORK_RECORD: NetworkRecord = {
  countries: "Palestine",
  disciplines: "Performing Arts, Cinema",
  body: [
    "Al Kasaba Theatre was established in Jerusalem in 1970 and moved to Ramallah in 2000. It is one of the largest cultural organisations in Palestine, and its fully equipped theatre and cinematheque host theatrical, musical and cinematic programmes.",
    "It has produced dozens of Palestinian plays that have travelled to international festivals and screenings, hosted thousands of local, regional and international screenings, and established the first Palestinian cultural incubator, which supports, trains and finances young artists.",
  ],
  engagements: [
    {
      involvement: "Participant",
      programme: "All Around Culture",
      track: "Cultural Alliances — Regional Workshop",
      year: "2021",
      title:
        "Creative Industry in Marginalized Areas — an alliance between Al Kasaba Theatre and Cinematheque, Assirk Assaghir and Inad Center for Theater and Arts",
    },
    {
      involvement: "Grantee",
      programme: "All Around Culture",
      track: "Cultural Alliances — Alliance Support",
      year: "2021",
      title:
        "Creative Industry in Marginalized Areas — an alliance between Al Kasaba Theatre and Cinematheque, Assirk Assaghir and Inad Center for Theater and Arts",
      description: [
        "The three partners set out to develop their cultural activities and productions by adopting creative industries in their strategies and reaching wider audiences, with capacity-building shaped around their financial and administrative systems.",
        "Over the project the alliance widens to take in more individual artists, cultural organisations and social and cultural groups, and a survey covers the systems already active in the partners' working areas.",
      ],
    },
  ],
};

export const DIRECTORY_HREF = "/network";
export const RECORD_HREF = "/network/record";
