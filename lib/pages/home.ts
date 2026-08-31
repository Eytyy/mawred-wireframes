import { PUBLICATION_DETAIL_HREF } from "@/lib/pages/publications";

export const HOME_HERO_FRAMES = 5;

export const HOME_WAYFINDING = [
  { label: "Grants & Opportunities", href: "/programs/production-awards" },
  { label: "Mawred Network", href: "/network" },
] as const;

export const HOME_FIGURES = [
  "grants since 2004",
  "countries",
  "years",
  "organizations supported",
] as const;

export type MosaicTile = {
  key: string;
  wide?: boolean;
};

export const HOME_MOSAIC: MosaicTile[] = [
  { key: "tile-1", wide: true },
  { key: "tile-2" },
  { key: "tile-3" },
  { key: "tile-4" },
  { key: "tile-5" },
  { key: "tile-6", wide: true },
  { key: "tile-7" },
  { key: "tile-8" },
];

export type OpenCall = {
  status: string;
  programme: string;
  href: string;
};

export const HOME_OPEN_CALLS: OpenCall[] = [
  {
    status: "Open all year",
    programme: "Wijhat",
    href: "/programs/wijhat",
  },
  {
    status: "Open all year",
    programme: "Stand for Art",
    href: "/programs/stand-for-art",
  },
  {
    status: "Deadline · 19 Oct 2026",
    programme: "Production Awards",
    href: "/programs/production-awards",
  },
];

export type ProgrammeOverview = {
  name: string;
  href: string;
};

export const HOME_PROGRAMMES: ProgrammeOverview[] = [
  { name: "Production Awards", href: "/programs/production-awards" },
  { name: "Wijhat", href: "/programs/wijhat" },
  { name: "Stand for Art", href: "/programs/stand-for-art" },
  { name: "Abbara", href: "/programs/abbara" },
];

export const HOME_NEWS_COUNT = 4;

export type PubStripItem = {
  kind: "Publication" | "Episode";
  href: string;
};

export const HOME_PUB_STRIP: PubStripItem[] = [
  { kind: "Publication", href: PUBLICATION_DETAIL_HREF },
  { kind: "Publication", href: PUBLICATION_DETAIL_HREF },
  { kind: "Publication", href: PUBLICATION_DETAIL_HREF },
  { kind: "Episode", href: "/publications/mudawanat" },
];

export const HOME_ALL_NEWS_HREF = "/news";
export const HOME_ALL_PUBLICATIONS_HREF = "/publications/research";
export const HOME_WHO_WE_ARE_HREF = "/about/who-we-are";
