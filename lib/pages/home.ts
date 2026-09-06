import type { FigItem } from "@/components/wireframe/Figs";
import {
  MADE_WITH_YOUR_MAGIC,
  NEWS_EDITORIAL_HREF,
  NEWS_POSTS,
  type NewsPost,
} from "@/lib/pages/news";

export const HOME_POSITIONING =
  "Culture Resource is a regional organisation founded in 2003 to support artistic creativity in the Arab region, cultural exchange within it and beyond, and artists' right to freedom of expression.";

export type HeroFrame = {
  caption: string;
};

export const HOME_HERO_FRAMES: HeroFrame[] = [
  {
    caption:
      "Alayham Ali, Syria · After Three Years of Green · Production Awards 2026",
  },
  {
    caption: "Sarah Zeryab, Palestine · Notes on Camp · Production Awards 2026",
  },
  {
    caption:
      "Karima Ahdad, Morocco · The Partridge of the Barren Land · Production Awards 2026",
  },
  {
    caption:
      "Al Kasaba Theatre and Cinematheque, Palestine · Creative Industry in Marginalized Areas · All Around Culture",
  },
  {
    caption: "Nour Shantout, Syria and Austria · Visual Arts · Mawred Network",
  },
];

export const HOME_WAYFINDING = [
  { label: "Grants & Opportunities", href: "/programs/production-awards" },
  { label: "Mawred Network", href: "/network" },
  { label: "Who we are", href: "/about/who-we-are" },
] as const;

export const HOME_FIGURES: FigItem[] = [
  { label: "countries", value: "55" },
  { label: "programmes & initiatives", value: "38" },
  { label: "years since 2003", value: "23" },
  { label: "grants awarded since 2003" },
];

export type ProgrammeOverview = {
  name: string;
  descriptor: string;
  href: string;
  status?: string;
};

export const HOME_PROGRAMMES: ProgrammeOverview[] = [
  {
    name: "Production Awards",
    descriptor:
      "Production grants for artists and writers of Arab origin under 35, across five disciplines.",
    href: "/programs/production-awards",
    status: "Deadline · 19 Oct 2026, 16:00 Beirut",
  },
  {
    name: "Wijhat",
    descriptor:
      "Travel grants of up to €7,000 for artists and cultural actors moving within the region and beyond it.",
    href: "/programs/wijhat",
    status: "Applications year-round · decided in three rounds",
  },
  {
    name: "Stand for Art",
    descriptor:
      "Temporary support for artists and cultural actors from the Arab region whose safety is at risk.",
    href: "/programs/stand-for-art",
    status: "Open all year · no rounds, no deadlines",
  },
  {
    name: "Abbara",
    descriptor:
      "Capacity-building for independent cultural organisations and initiatives, so they can sustain themselves and evolve independently.",
    href: "/programs/abbara",
  },
];

export type HomeFeature = {
  title: string;
  text: string;
  href: string;
};

export const HOME_FEATURE: HomeFeature = {
  title: MADE_WITH_YOUR_MAGIC.title,
  text: "Mawred and Beirut Art Center open Made With Your Magic – Beirut, curated by Tarek Abou El Fetouh — one chapter of a project unfolding across Tunis, Beirut, Damascus, Jeddah and Baghdad. The Beirut exhibition brings together 22 artists, presenting works commissioned for the project across its chapters.",
  href: NEWS_EDITORIAL_HREF,
};

export const HOME_NEWS_POSTS: NewsPost[] = NEWS_POSTS;

export const HOME_NEWS_COUNT = HOME_NEWS_POSTS.length;

export const HOME_ALL_NEWS_HREF = "/news";
