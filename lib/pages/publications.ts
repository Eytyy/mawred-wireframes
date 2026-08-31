import type { Facet } from "@/components/wireframe/FilterBar";

export type LibraryRecord = {
  title: string;
  languages: string;
};

export type PublicationRecord = {
  title: string;
  abstract: string[];
  language: string;
  year: string;
  downloads: string[];
  related: LibraryRecord[];
};

function facet(name: string, values: string[]): Facet {
  return { n: name, v: values.length, values };
}

export const LIBRARY_FACETS: Facet[] = [
  facet("Author", [
    "Achraf Maher",
    "Alaa Younes",
    "Algeria National Cultural Policy Group",
    "Amira Elsebaai",
    "Ammar Kessab",
    "Ayman Masoud",
    "Basma Al Husseiny",
    "Bilel Aboudi",
    "Célia Hassani",
    "Dounia Benslimane",
    "Egypt National Cultural Policy Group",
    "Fatima Al Zahraa Al Chaabani",
    "Fatin Farhat",
    "Firas Farrah",
    "François Colbert",
    "Giep Hagoort",
    "Habiba Laloui",
    "Hadia Almoukadam",
    "Hamdy Reda",
    "Hanane Hajj Ali",
    "Hosam Athani",
    "Katarzyna Puzon",
    "Mahmoud Bilal",
    "Makhlouf Boukroh",
    "MAKKI Farah",
    "Marina Barham",
    "Meriem Mehadji",
    "Michael M. Kaiser",
    "Milena Dragićević Šesić",
    "Mona Merhi",
    "Mounha Al Batrawi",
    "Mourad El Kadri",
    "Nadia von Maltzahn",
    "Nawal Ali",
    "Nayla Geagea",
    "Nelly Abboud",
    "Nermine Khafaji",
    "Raed Ibrahim",
    "Rana Yaziji",
    "Rim Al Khatib",
    "Rita Azar",
    "Salama Alghayam",
    "Sally Abou Bakr",
    "Samah Al Hawaji",
    "Sanjin Dragojević",
    "Sherif Mekky",
    "Souhad Al Soukari",
    "Wael Kaddour",
    "Wafaa Belkasem",
    "Watfa Hamadi",
    "Wedad Salloum",
  ]),
  facet("Country", [
    "Algeria",
    "Arab Region",
    "Egypt",
    "Jordan",
    "KSA",
    "Lebanon",
    "Lybia",
    "Morocco",
    "Palestine",
    "Qatar",
    "Syria",
    "Tunisia",
    "UAE",
  ]),
  facet("Theme", ["Cultural Management", "Cultural Policies"]),
  facet("Language", ["Arabic", "English", "French"]),
  facet("Type", ["Exploratory Survey", "Publication", "Research/Study"]),
  facet("Year", [
    "2006",
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
    "2021",
    "2023",
    "2024",
  ]),
];

export const LIBRARY_RECORDS: LibraryRecord[] = [
  {
    title:
      "Mawred's Initiative: Lebanon Humanitarian Fund Through Cultural Organizations",
    languages: "Arabic, English",
  },
  {
    title: "Cultural Ecosystem in the Arab Region",
    languages: "Arabic, English, French",
  },
  {
    title: "New Voices in Cultural Policies",
    languages: "Arabic, English",
  },
  {
    title: "Project Management: A professional Approach to Events",
    languages: "Arabic",
  },
  {
    title: "Insights into Cultural Policies in Lebanon",
    languages: "Arabic, English, French",
  },
  {
    title: "Algeria Compendium Profile on Cultural Policy",
    languages: "Arabic, English",
  },
  {
    title: "Funding Guide for Culture and Arts in the Arab Region",
    languages: "Arabic",
  },
  {
    title:
      "Proposed amendments to the legislative environment for cultural and artistic work in Egypt",
    languages: "Arabic",
  },
  {
    title: "Study on the legal framework regulating cultural work in Jordan",
    languages: "Arabic",
  },
  {
    title: "Study on legislation governing the culture sector in Lebanon",
    languages: "Arabic",
  },
  {
    title:
      "Study on the development of general and private legal legislation for the cultural sector in Tunisia",
    languages: "Arabic",
  },
  {
    title: "A General Framework for Egyptian Cultural Policy",
    languages: "Arabic",
  },
  {
    title: "Cultural Policy Project for Algeria",
    languages: "Arabic",
  },
  {
    title: "Investors' Guide to Cultural Investment in Algeria",
    languages: "Arabic, French",
  },
  {
    title: "Legal economic research on applying lotteries in Tunisia",
    languages: "Arabic, English",
  },
  {
    title:
      "A comparative study on some aspects of cultural policy in Algeria, Tunisia, Morocco and Egypt",
    languages: "Arabic, French",
  },
  {
    title: "Legislation & Cultural Regulation in Algeria",
    languages: "Arabic, English, French",
  },
  {
    title: "Palestine Compendium Profile on Cultural Policy",
    languages: "Arabic",
  },
  {
    title: "Jordan Compendium Profile on Cultural Policy",
    languages: "Arabic",
  },
  {
    title: "Tunisia Compendium Profile on Cultural Policy",
    languages: "Arabic",
  },
  {
    title: "Morocco Compendium Profile on Cultural Policy",
    languages: "Arabic, English",
  },
  {
    title: "Egypt Compendium Profile on Cultural Policy",
    languages: "Arabic, English",
  },
  {
    title: "Syria Compendium Profile on Cultural Policy",
    languages: "Arabic, English",
  },
  {
    title: "This is What Happened",
    languages: "Arabic, English",
  },
  {
    title: "Marketing Culture and the Arts",
    languages: "Arabic",
  },
  {
    title: "Art Management Entrepreneurial Style",
    languages: "Arabic",
  },
  {
    title: "Lebanon Compendium Profile on Cultural Policy",
    languages: "Arabic, English",
  },
  {
    title: "25 January",
    languages: "Arabic",
  },
  {
    title: "Cultural Management Training Manual",
    languages: "Arabic",
  },
  {
    title: "An Introduction to Cultural Policies in the Arab Region",
    languages: "Arabic",
  },
  {
    title: "Guide to Cultural Management - Second Edition",
    languages: "Arabic",
  },
  {
    title: "Strategic planning in the Arts: A Practical Guide",
    languages: "Arabic",
  },
  {
    title: "Arts Management in Turbulent Time",
    languages: "Arabic",
  },
];

export const PUBLICATION_RECORD: PublicationRecord = {
  title:
    "Mawred's Initiative: Lebanon Humanitarian Fund Through Cultural Organizations",
  abstract: [
    "This report documents the experiences of six cultural initiatives in Lebanon that took on humanitarian and art-relief work during Israel's escalated war in the fall of 2024, and received Mawred's Lebanon Humanitarian Fund. Based on interviews, group meetings and field visits, it follows how these actors mobilised, adjusted and sustained their work with displaced populations amid bombardment and an abrupt ceasefire.",
    "It highlights the practical challenges, emotional toll, ethical considerations and forms of solidarity that shaped their response, and situates cultural relief not as a temporary deviation but as a practice anchored in long-standing social engagement — and as a possible infrastructural and ethical component of cultural work in recurrent crisis.",
  ],
  language: "Arabic, English",
  year: "2026",
  downloads: ["English", "Arabic"],
  related: [
    {
      title: "Insights into Cultural Policies in Lebanon",
      languages: "Arabic, English, French",
    },
    {
      title: "Study on legislation governing the culture sector in Lebanon",
      languages: "Arabic",
    },
    {
      title: "Cultural Ecosystem in the Arab Region",
      languages: "Arabic, English, French",
    },
  ],
};

export const PUBLICATION_DETAIL_HREF = "/publications/research/publication";

export type SeriesConfig = {
  paras?: number;
  text: string[];
  links: string[];
  kind: "audio" | "video";
  total: number;
};

export const MUDAWANAT: SeriesConfig = {
  text: [
    "Mudawanat is a living archive of contributions documenting the contemporary culture scene in the Arab region, launched by Culture Resource in partnership with the British Council to support Arabic-language audio content on arts and culture.",
    "The podcast is the outcome of two project rounds launched in 2020, made by contributors from across the Arab region with diverse backgrounds in arts and culture.",
    "Follow Mudawanat on your preferred podcast platform or on Culture Resource's SoundCloud.",
  ],
  links: ["Mudawanat programme page", "British Council", "SoundCloud"],
  kind: "audio",
  total: 7,
};

export const FOUNDATIONS: SeriesConfig = {
  text: [
    "Culture Resource presents Foundations of Cultural Policies as part of its Cultural Policies programme, launched in 2009 in response to growing interest among cultural actors and researchers. After more than ten years of activities, publications, studies and compendiums, there is still more work to do to develop cultural-policy forms and instruments amid the changes sweeping the Arab region.",
    "The series is short interview videos with cultural actors, experts and researchers, introducing cultural-policy concepts, origins, schools of thought and models — theoretical foundations and practical applications, with the realities and recent experiences of the Arab region.",
    "Nine episodes, published successively. Content by Marwa Helmy, cultural-policies expert and member of the Artistic Board. Each episode links to the studies it references and ends with a detailed summary.",
  ],
  links: ["Cultural Policies programme", "YouTube playlist", "Artistic Board"],
  kind: "video",
  total: 9,
};

export const MAWRED_TALKS: SeriesConfig = {
  text: [
    "Mawred Talks is a series launched in 2021 that addresses questions about artistic and literary production with artists and writers from the Arab region. It makes space to discuss projects, approaches and artistic value, to draw on Culture Resource's network, and to foster critical thinking in arts and culture in the region.",
  ],
  links: [],
  kind: "video",
  total: 13,
};
