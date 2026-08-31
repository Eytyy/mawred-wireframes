import type { Facet } from "@/components/wireframe/FilterBar";

export const LIBRARY_FACETS: Facet[] = [
  { n: "Author", v: 50 },
  { n: "Country", v: 13 },
  { n: "Theme", v: 2 },
  { n: "Language", v: 3 },
  { n: "Type", v: 3 },
  { n: "Year", v: 14 },
];

export const PUBLICATION_DETAIL_HREF = "/publications/research/publication";

export type SeriesConfig = {
  paras: number;
  links: string[];
  kind: "audio" | "video";
  total: number;
};

export const MUDAWANAT: SeriesConfig = {
  paras: 3,
  links: ["Mudawanat programme page", "British Council", "SoundCloud"],
  kind: "audio",
  total: 7,
};

export const FOUNDATIONS: SeriesConfig = {
  paras: 3,
  links: ["Cultural Policies programme", "YouTube playlist", "Artistic Board"],
  kind: "video",
  total: 9,
};

export const MAWRED_TALKS: SeriesConfig = {
  paras: 1,
  links: [],
  kind: "video",
  total: 13,
};
