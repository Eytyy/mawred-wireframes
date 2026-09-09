import { ROUTES_BY_KEY } from "./routes";

export type BlockCatalogKit =
  | "home"
  | "programmes"
  | "publications"
  | "network"
  | "news"
  | "about";

export type BlockCatalogUsage = {
  path: string;
  title: string;
};

export type BlockCatalogEntry = {
  code: string;
  label: string;
  kit: BlockCatalogKit;
  usedOn: BlockCatalogUsage[];
};

function usedOn(...keys: string[]): BlockCatalogUsage[] {
  return keys.map((key) => {
    const route = ROUTES_BY_KEY[key];
    if (!route) {
      throw new Error(`Unknown route key "${key}"`);
    }
    return {
      path: route.path,
      title: route.title.replaceAll("&amp;", "&"),
    };
  });
}

export const BLOCKS: BlockCatalogEntry[] = [
  // Home
  {
    code: "HM1",
    label: "Cinematic hero — image sequence + positioning line",
    kit: "home",
    usedOn: usedOn("home"),
  },
  {
    code: "HM2",
    label: "Impact stat strip",
    kit: "home",
    usedOn: usedOn("home"),
  },
  {
    code: "HM4",
    label: "Open grants & opportunities",
    kit: "home",
    usedOn: usedOn("home"),
  },
  {
    code: "HM5",
    label: "Featured / spotlight",
    kit: "home",
    usedOn: usedOn("home"),
  },
  {
    code: "HM6",
    label: "Latest news",
    kit: "home",
    usedOn: usedOn("home"),
  },

  // Programmes
  {
    code: "C1",
    label: "Overview",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "C2",
    label: "Impact figures",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "abbara"),
  },
  {
    code: "C4",
    label: "How to apply — steps",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "C5",
    label: "Forms of support",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "C6",
    label: "Highlighted note",
    kit: "programmes",
    usedOn: usedOn("wijhat", "abbara"),
  },
  {
    code: "C7",
    label: "Apply",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "C8",
    label: "Conditions / exclusions",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "C9",
    label: "How applicants are selected",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "C10",
    label: "Contract terms & obligations",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "abbara"),
  },
  {
    code: "C11",
    label: "FAQs",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "C12",
    label: "Contact",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "sfa", "abbara"),
  },
  {
    code: "S1",
    label: "Programme timeline",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "abbara"),
  },
  {
    code: "S2",
    label: "Downloadable forms / files",
    kit: "programmes",
    usedOn: usedOn("pa"),
  },
  {
    code: "S3",
    label: "Past beneficiaries",
    kit: "programmes",
    usedOn: usedOn("pa", "wijhat", "abbara"),
  },
  {
    code: "S4",
    label: "Page-top summary",
    kit: "programmes",
    usedOn: usedOn("wijhat", "abbara"),
  },
  {
    code: "S5",
    label: "Application paths",
    kit: "programmes",
    usedOn: usedOn("wijhat"),
  },
  {
    code: "S6",
    label: "Which round should I apply to?",
    kit: "programmes",
    usedOn: usedOn("wijhat"),
  },

  // Publications
  {
    code: "PA1",
    label: "Intro line — available slot",
    kit: "publications",
    usedOn: usedOn("pub-research"),
  },
  {
    code: "PA2",
    label: "Filter bar",
    kit: "publications",
    usedOn: usedOn("pub-research"),
  },
  {
    code: "PA3",
    label: "Result count / active filters",
    kit: "publications",
    usedOn: usedOn("pub-research"),
  },
  {
    code: "PA4",
    label: "Results grid",
    kit: "publications",
    usedOn: usedOn("pub-research"),
  },
  {
    code: "PB1",
    label: "Series intro",
    kit: "publications",
    usedOn: usedOn("pub-mudawanat", "pub-foundations", "pub-talks"),
  },
  {
    code: "PB2",
    label: "Media embed listing",
    kit: "publications",
    usedOn: usedOn("pub-mudawanat", "pub-foundations", "pub-talks"),
  },
  {
    code: "PC1",
    label: "Publication record",
    kit: "publications",
    usedOn: usedOn("pub-detail"),
  },
  {
    code: "PC2",
    label: "Related publications",
    kit: "publications",
    usedOn: usedOn("pub-detail"),
  },

  // Network
  {
    code: "MN1",
    label: "Intro / purpose",
    kit: "network",
    usedOn: usedOn("network"),
  },
  {
    code: "MN2",
    label: "Impact stat strip",
    kit: "network",
    usedOn: usedOn("network"),
  },
  {
    code: "MN3",
    label: "Filter bank",
    kit: "network",
    usedOn: usedOn("network"),
  },
  {
    code: "MN4",
    label: "Entity tabs / result count / active filters / sort",
    kit: "network",
    usedOn: usedOn("network"),
  },
  {
    code: "MN5",
    label: "Directory listing — split by entity type",
    kit: "network",
    usedOn: usedOn("network"),
  },
  {
    code: "MN6",
    label: "Record",
    kit: "network",
    usedOn: usedOn("network-record"),
  },

  // News
  {
    code: "N1",
    label: "Category filter",
    kit: "news",
    usedOn: usedOn("news"),
  },
  {
    code: "N2",
    label: "Result count / active filters",
    kit: "news",
    usedOn: usedOn("news"),
  },
  {
    code: "N3",
    label: "Post feed",
    kit: "news",
    usedOn: usedOn("news"),
  },
  {
    code: "N4",
    label: "Pagination",
    kit: "news",
    usedOn: usedOn("news"),
  },
  {
    code: "N6",
    label: "Featured image",
    kit: "news",
    usedOn: usedOn("news-detail", "news-editorial"),
  },
  {
    code: "N7",
    label: "Post meta strip",
    kit: "news",
    usedOn: usedOn("news-detail", "news-editorial"),
  },
  {
    code: "N9",
    label: "Body",
    kit: "news",
    usedOn: usedOn("news-detail", "news-editorial"),
  },
  {
    code: "N10",
    label: "Schedule / programme",
    kit: "news",
    usedOn: [],
  },
  {
    code: "N11",
    label: "CTA",
    kit: "news",
    usedOn: [],
  },
  {
    code: "N13",
    label: "Related posts",
    kit: "news",
    usedOn: usedOn("news-detail"),
  },
  {
    code: "N14",
    label: "Roster",
    kit: "news",
    usedOn: usedOn("news-detail"),
  },
  {
    code: "N15",
    label: "Quotes",
    kit: "news",
    usedOn: usedOn("news-detail"),
  },

  // About
  {
    code: "AB1",
    label: "Intro",
    kit: "about",
    usedOn: usedOn("about-who"),
  },
  {
    code: "AB2",
    label: "Our Vision",
    kit: "about",
    usedOn: usedOn("about-who"),
  },
  {
    code: "AB3",
    label: "Mission",
    kit: "about",
    usedOn: usedOn("about-who"),
  },
  {
    code: "AB4",
    label: "Values",
    kit: "about",
    usedOn: usedOn("about-who"),
  },
  {
    code: "AB5",
    label: "History timeline",
    kit: "about",
    usedOn: usedOn("about-who"),
  },
  {
    code: "AB6",
    label: "Section intro",
    kit: "about",
    usedOn: usedOn("about-supporters", "about-past", "about-careers"),
  },
  {
    code: "AB7",
    label: "People group",
    kit: "about",
    usedOn: usedOn("about-team"),
  },
  {
    code: "AB8",
    label: "Logo band",
    kit: "about",
    usedOn: usedOn("about-supporters"),
  },
  {
    code: "AB9",
    label: "Initiative directory",
    kit: "about",
    usedOn: usedOn("about-past"),
  },
  {
    code: "AB10",
    label: "Initiative record",
    kit: "about",
    usedOn: usedOn("about-past-detail"),
  },
  {
    code: "AB11",
    label: "Other past initiatives",
    kit: "about",
    usedOn: usedOn("about-past-detail"),
  },
  {
    code: "AB12",
    label: "Open positions",
    kit: "about",
    usedOn: usedOn("about-careers"),
  },
  {
    code: "AB13",
    label: "Position",
    kit: "about",
    usedOn: usedOn("about-careers-detail"),
  },
];

export const BLOCKS_BY_CODE = Object.fromEntries(
  BLOCKS.map((block) => [block.code, block]),
) as Record<string, BlockCatalogEntry>;
