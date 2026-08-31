import type { Facet } from "@/components/wireframe/FilterBar";

export const NEWS_CATEGORIES = [
  { label: "All", count: 231 },
  { label: "Announcements", count: 128 },
  { label: "News & Events", count: 103 },
];

export const NEWS_PROGRAMME_FACET: Facet = { n: "Programme", v: 4 };

export const NEWS_PAGE_SIZE = 9;
export const NEWS_TOTAL_PAGES = 26;

export const NEWS_LANDING_HREF = "/news";
export const NEWS_DETAIL_HREF = "/news/post";

export const NEWS_SHARE_TARGETS = 4;
export const NEWS_RELATED_COUNT = 3;
