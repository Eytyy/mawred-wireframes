import type { Facet } from "@/components/wireframe/FilterBar";

export const NETWORK_FACETS: Facet[] = [
  { n: "Type of Involvement", v: 8 },
  { n: "Programme", v: 38 },
  { n: "Discipline", v: 22 },
  { n: "Country", v: 55 },
  { n: "Year", v: 22 },
];

export const NETWORK_FIGURES = [
  "records in the network",
  "countries",
  "programmes & initiatives",
  "years, 2004–2025",
];

export const ENTITY_TABS = [
  { label: "Individuals & Groups", count: 318 },
  { label: "Organizations & Initiatives", count: 94 },
];

export const NETWORK_PAGE_SIZE = 40;
export const NETWORK_FILTERED_COUNT = 12;

export const DIRECTORY_HREF = "/network";
export const RECORD_HREF = "/network/record";
