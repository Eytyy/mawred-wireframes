import type { RosterRecord } from "@/components/blocks/news/N14Roster";
import type { PostQuote } from "@/components/blocks/news/N15Quotes";
import type { Facet } from "@/components/wireframe/FilterBar";

export type NewsCategory = "Announcements" | "News & Events";

export type NewsPost = {
  title: string;
  date: string;
  category: NewsCategory;
  programme?: string;
  href: string;
};

export const NEWS_CATEGORY_FACET: Facet = {
  n: "Category",
  v: 2,
  values: ["Announcements", "News & Events"],
};

export const NEWS_PROGRAMME_FACET: Facet = {
  n: "Programme",
  v: 4,
  values: ["Production Awards", "Wijhat", "Stand for Art", "Abbara"],
};

export const NEWS_POSTS: NewsPost[] = [
  {
    title: "Opening of Made With Your Magic Exhibition in Beirut",
    date: "27 July 2026",
    category: "News & Events",
    href: "/news/editorial-post",
  },
  {
    title: "Grantees of the Second Round of Wijhat 2026",
    date: "20 July 2026",
    category: "Announcements",
    programme: "Wijhat",
    href: "/news/post",
  },
  {
    title: "Results of Production Awards 2026",
    date: "6 May 2026",
    category: "Announcements",
    programme: "Production Awards",
    href: "/news/post",
  },
];

export const NEWS_PAGE_SIZE = 9;
export const NEWS_TOTAL_PAGES = 26;

export const NEWS_LANDING_HREF = "/news";
export const NEWS_DETAIL_HREF = "/news/post";
export const NEWS_EDITORIAL_HREF = "/news/editorial-post";

export function relatedNewsPosts(title: string): NewsPost[] {
  return NEWS_POSTS.filter((post) => post.title !== title);
}

export type RosterSection = {
  label: string;
  records: RosterRecord[];
  overflow?: string;
  quotesLabel?: string;
  quotes?: PostQuote[];
};

export type NewsPostDetail = {
  title: string;
  date: string;
  category: NewsCategory;
  byline: string;
  imageCaption?: string;
  body: string[];
  rosters?: RosterSection[];
};

export const PRODUCTION_AWARDS_RESULTS: NewsPostDetail = {
  title: "Results of Production Awards 2026",
  date: "6 May 2026",
  category: "Announcements",
  byline: "Mawred",
  imageCaption:
    'Image from the documentary film "House Number 7" by Rama Abdi (Syria), supported by the Production Awards program 2024.',
  body: [
    "Culture Resource is pleased to announce the grantees of the 2026 round of the Production Awards, which supports the first creative projects of a new generation of artists and writers from the Arab region in cinema, literature, music, performing arts and visual arts.",
    "The programme team received 548 applications, of which the jury selected 29 on the project's quality, originality, relevance to the social and political context, feasibility and budget practicability, while taking the grantees' geographic diversity into account.",
    "The selected grantees are distributed across the region as follows: Egypt (3), Syria (4), Lebanon (3), Palestine (4), Yemen (1), Oman (1), Iraq (2), Morocco (2), Tunisia (6), Algeria (1) and Sudan (2).",
  ],
  rosters: [
    {
      label: "Cinema — grantees",
      records: [
        {
          name: "Alayham Ali",
          country: "Syria",
          role: "Film director",
          project:
            'Post-production of "After Three Years of Green" (working title), a full-length documentary',
          description:
            "Two filmmakers navigate questions of family, identity, belonging and the body amid the ruins of a fractured city.",
        },
        {
          name: "Ibrahim Ahmed (Snoopy)",
          country: "Sudan",
          role: "Film director",
          project:
            'Production of "Where Do I Belong?", a full-length documentary',
          description:
            "An exiled filmmaker returns to war-torn Sudan to reunite with his trapped parents, confronting a lifetime of displacement and the generational cost of migration.",
        },
        {
          name: "Mahmoud Ibrahim",
          country: "Egypt",
          role: "Film director",
          project:
            'Production of "Kafr El Dawar – Athens", a short narrative film',
          description:
            "In a forgotten industrial city on Egypt's edge, Ahmed prepares to risk everything for a new life in Greece while his older brother clings to a vanishing past.",
        },
        {
          name: "Samia Dzair",
          country: "Algeria",
          role: "Film director",
          project:
            'Production and post-production of "Threads of Exile", an experimental hybrid animated film',
          description:
            "The artist's family journey from Algeria to France, examining how migration reshapes craft and identity while building a living archive of ancestral knowledge.",
        },
        {
          name: "Sarah Zeryab",
          country: "Palestine",
          role: "Film director",
          project:
            'Post-production of "Notes on Camp" (working title), an experimental film',
          description:
            "An essay film tracing interweaving notions of return through a series of vignettes: a return to a refugee camp, to revolutionary memory, of the dead.",
        },
      ],
    },
    {
      label: "Cinema — jury",
      records: [
        {
          name: "Halah Alabdalla",
          country: "Syria",
          role: "Director, producer and trainer",
        },
        {
          name: "Mohamed Ismail Louati",
          country: "Tunisia",
          role: "Filmmaker, visual artist and writer",
        },
        {
          name: "Mostafa Youssef",
          country: "Egypt",
          role: "Director and producer",
        },
      ],
      quotesLabel: "Cinema — jury quotes",
      quotes: [
        {
          text: [
            "Reviewing the submissions confirmed the vitality and diversity of artistic production in times of uncertainty, in a region under both internal and external pressure, where cinema continues to serve as a vessel for dreams and a form of resistance.",
            "A significant number of the projects revisited the past and sought to reinterpret it, while others turned to family and personal relationships. Despite the overall quality, two issues are worth noting: the use of artificial intelligence in certain cases, and the failure to follow the application guidelines.",
          ],
          attribution: "Mohamed Ismail Louati",
        },
        {
          text: [
            "In the most compelling submissions I saw the ability to turn individual experience into collective testimony, and to craft a sincere visual language rooted in a genuine relationship with the community and the characters rather than in a desire to create a visual mood.",
            "Given the scarcity of resources, we based our selections on the submitted texts and screenplays, choosing the works that were most artistically ambitious, most honest and most impactful. Good films will find their way, with or without grants, because for their makers cinema is a necessity, not a luxury.",
          ],
          attribution: "Mostafa Youssef",
        },
      ],
    },
    {
      label: "Literature — grantees",
      records: [
        {
          name: "Ahmed Nageeb",
          country: "Egypt",
          role: "Writer",
          project: '"My father doesn\'t smile", an autobiography',
          description:
            "Manhood explored through the inherited silence between fathers and sons, blending confession with sarcasm.",
        },
        {
          name: "Amal Alsaeedi",
          country: "Oman",
          role: "Writer",
          project:
            '"The Cultural History of the Grocery Store", an autobiography',
          description:
            "Autobiography and collective memory in Oman, tracing the grocery store from a symbol of consumption into a space of fracture and confession.",
        },
        {
          name: "Aya Mansour Hasan",
          country: "Iraq",
          role: "Writer",
          project: '"Women of the Long River", an oral history book',
          description:
            "Dozens of testimonies documenting women's stories from three decades of war in Iraq, 1980 to 2010, in their own voices.",
        },
        {
          name: "Karima Ahdad",
          country: "Morocco",
          role: "Writer",
          project: '"The Partridge of the Barren Land", a novel',
          description:
            "Two women from different eras whose destinies intertwine to reflect the history and struggles of the city of Al Hoceima.",
        },
        {
          name: "Kinda Youssef",
          country: "Syria",
          role: "Writer",
          project:
            '"The Adventure of Ward" (working title), an illustrated poetic story',
          description:
            "An eleven-chapter illustrated tale in which a brave young girl and the mythical Phoenix set out to save a dying forest.",
        },
        {
          name: "Shahad Mohammed Qays",
          country: "Iraq",
          role: "Writer",
          project:
            '"Was a Conscript: Stories of Mandatory Military Service in Syria (2011–2024)", a journalistic and documentary literature book',
          description:
            "Journalistic testimonies from former conscripts in the Syrian army, told with a literary narrative approach.",
        },
      ],
    },
    {
      label: "Literature — jury",
      records: [
        {
          name: "Asmaa Azaizeh",
          country: "Palestine",
          role: "Poet, writer and editor",
        },
        { name: "Hammour Ziada", country: "Sudan", role: "Novelist" },
        { name: "Jokha Alharthi", country: "Oman", role: "Writer and academic" },
      ],
      overflow:
        "… Music, performing arts and visual arts follow in the same shape, each with six grantees and a three-member jury — 29 grantees across five disciplines",
    },
  ],
};

export const MADE_WITH_YOUR_MAGIC: NewsPostDetail = {
  title: "Opening of Made With Your Magic Exhibition in Beirut",
  date: "27 July 2026",
  category: "News & Events",
  byline: "Mawred",
  body: [
    "Mawred and Beirut Art Center are pleased to announce the opening of Made With Your Magic – Beirut, curated by Tarek Abou El Fetouh.",
    "The exhibition is one chapter of an ongoing artistic project unfolding across several Arab cities. The first launched in Tunis in the autumn of 2025 with Dream City, the festival organised by L'Art Rue; Beirut now follows with an exhibition and a public programme developed for the city, before new chapters in Damascus (with Ettijahat – Independent Culture), Jeddah (with Art Jameel) and Baghdad.",
    "The title borrows a mnemonic phrase traditionally used to memorise the eight principal Arabic maqāms — Saba, Nahawand, 'Ajam, Bayati, Sika, Hijaz, Rast and Kurd. More than musical scales, the maqāms are aesthetic structures that have shaped musical traditions across the Arab region and neighbouring geographies for centuries.",
    "The project draws on what the histories of the maqāms carry beyond their sonic forms, and reads them against the contemporary moment of the region they emerged from. Amid the geopolitical upheavals it is witnessing, the exhibition revisits questions of identity and territory from within the sphere of art: minorities and identities, art and authority, and connections to land and other beings.",
    "The Beirut exhibition brings together 22 artists, presenting works commissioned specifically for the project across its chapters — seven produced for last year's Tunis exhibition alongside seven new commissions for the Beirut and Damascus chapters, supported by Mawred.",
  ],
};

export function filterNewsPosts(
  posts: NewsPost[],
  filtered: boolean,
  empty: boolean,
): NewsPost[] {
  if (empty) {
    return [];
  }

  if (filtered) {
    return posts.filter((post) => post.programme === "Wijhat");
  }

  return posts;
}
