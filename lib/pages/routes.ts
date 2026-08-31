export type StatesKey =
  | "program"
  | "programRolling"
  | "programDirectory"
  | "library"
  | "series"
  | "detail"
  | "directory"
  | "record"
  | "newslanding"
  | "newsdetail"
  | "home"
  | "aboutwho"
  | "aboutteam"
  | "supporters"
  | "pastlisting"
  | "careers";

export type RouteEntry = {
  key: string;
  path: string;
  title: string;
  crumb: string;
  statesKey?: StatesKey;
  suppressPageHead?: boolean;
  stub?: boolean;
  stubMessage?: string;
  indexLabel?: string;
  indexSublabel?: string;
};

export const ROUTES: RouteEntry[] = [
  {
    key: "home",
    path: "/",
    title: "Home",
    crumb: "Home",
    statesKey: "home",
    suppressPageHead: true,
    indexLabel: "Home",
    indexSublabel: "Curated cross-page summary — wireframed",
  },
  {
    key: "index",
    path: "/wireframes",
    title: "Wireframe index",
    crumb: "Home",
    indexLabel: "Wireframe index",
    indexSublabel: "All wireframed screens",
  },
  {
    key: "pa",
    path: "/programs/production-awards",
    title: "Production Awards",
    crumb: "Home &rsaquo; Grants &amp; Opportunities &rsaquo; Production Awards",
    statesKey: "program",
    indexLabel: "Production Awards",
    indexSublabel: "Programme page — wireframed",
  },
  {
    key: "wijhat",
    path: "/programs/wijhat",
    title: "Wijhat",
    crumb: "Home &rsaquo; Grants &amp; Opportunities &rsaquo; Wijhat",
    statesKey: "program",
    indexLabel: "Wijhat",
    indexSublabel: "Programme page — wireframed",
  },
  {
    key: "sfa",
    path: "/programs/stand-for-art",
    title: "Stand for Art",
    crumb: "Home &rsaquo; Grants &amp; Opportunities &rsaquo; Stand for Art",
    statesKey: "programRolling",
    indexLabel: "Stand for Art",
    indexSublabel: "Programme page — wireframed",
  },
  {
    key: "abbara",
    path: "/programs/abbara",
    title: "Abbara",
    crumb: "Home &rsaquo; Grants &amp; Opportunities &rsaquo; Abbara",
    statesKey: "programDirectory",
    indexLabel: "Abbara",
    indexSublabel: "Programme page — wireframed",
  },
  {
    key: "pub-research",
    path: "/publications/research",
    title: "Research &amp; Publications",
    statesKey: "library",
    crumb: "Home &rsaquo; Publications &rsaquo; Research &amp; Publications",
    indexLabel: "Research &amp; Publications",
    indexSublabel: "Publications — Structure A (media library)",
  },
  {
    key: "pub-detail",
    path: "/publications/research/publication",
    title:
      "Mawred's Initiative: Lebanon Humanitarian Fund Through Cultural Organizations",
    statesKey: "detail",
    crumb:
      'Home &rsaquo; Publications &rsaquo; <a href="/publications/research">Research &amp; Publications</a> &rsaquo; Mawred\'s Initiative: Lebanon Humanitarian Fund Through Cultural Organizations',
    indexLabel: "Publication detail",
    indexSublabel: "Publications — Structure C",
  },
  {
    key: "pub-mudawanat",
    path: "/publications/mudawanat",
    title: "Mudawanat Podcast",
    statesKey: "series",
    crumb: "Home &rsaquo; Publications &rsaquo; Mudawanat Podcast",
    indexLabel: "Mudawanat Podcast",
    indexSublabel: "Publications — Structure B (audio)",
  },
  {
    key: "pub-foundations",
    path: "/publications/foundations-of-cultural-policies",
    title: "Foundations of Cultural Policies",
    statesKey: "series",
    crumb: "Home &rsaquo; Publications &rsaquo; Foundations of Cultural Policies",
    indexLabel: "Foundations of Cultural Policies",
    indexSublabel: "Publications — Structure B (video)",
  },
  {
    key: "pub-talks",
    path: "/publications/mawred-talks",
    title: "Mawred Talks",
    statesKey: "series",
    crumb: "Home &rsaquo; Publications &rsaquo; Mawred Talks",
    indexLabel: "Mawred Talks",
    indexSublabel: "Publications — Structure B (thin intro)",
  },
  {
    key: "network",
    path: "/network",
    title: "Mawred Network",
    statesKey: "directory",
    crumb: "Home &rsaquo; Mawred Network",
    indexLabel: "Mawred Network",
    indexSublabel: "Directory listing — filtered index, split by entity type",
  },
  {
    key: "network-record",
    path: "/network/record",
    title: "Record name",
    statesKey: "record",
    crumb:
      'Home &rsaquo; <a href="/network">Mawred Network</a> &rsaquo; Record name',
    indexLabel: "Network record",
    indexSublabel: "Mawred Network — record detail",
  },
  {
    key: "news",
    path: "/news",
    title: "News",
    statesKey: "newslanding",
    crumb: "Home &rsaquo; News",
    indexLabel: "News",
    indexSublabel: "News landing — feed with category tabs",
  },
  {
    key: "news-detail",
    path: "/news/post",
    title: "Post title",
    statesKey: "newsdetail",
    crumb: 'Home &rsaquo; <a href="/news">News</a> &rsaquo; Post title',
    indexLabel: "News post",
    indexSublabel: "News — post detail",
  },
  {
    key: "about-who",
    path: "/about/who-we-are",
    title: "Who We Are",
    statesKey: "aboutwho",
    crumb: "Home &rsaquo; About Us &rsaquo; Who We Are",
    indexLabel: "Who We Are",
    indexSublabel: "About — identity + history timeline",
  },
  {
    key: "about-team",
    path: "/about/our-team",
    title: "Our Team",
    statesKey: "aboutteam",
    crumb: "Home &rsaquo; About Us &rsaquo; Our Team",
    indexLabel: "Our Team",
    indexSublabel: "About — team · board · general assembly",
  },
  {
    key: "about-supporters",
    path: "/about/supporters-partners",
    title: "Supporters &amp; Partners",
    statesKey: "supporters",
    crumb: "Home &rsaquo; About Us &rsaquo; Supporters &amp; Partners",
    indexLabel: "Supporters &amp; Partners",
    indexSublabel: "About — three logo bands",
  },
  {
    key: "about-past",
    path: "/about/past-initiatives",
    title: "Past Initiatives",
    statesKey: "pastlisting",
    crumb: "Home &rsaquo; About Us &rsaquo; Past Initiatives",
    indexLabel: "Past Initiatives",
    indexSublabel: "About — initiative directory",
  },
  {
    key: "about-past-detail",
    path: "/about/past-initiatives/initiative",
    title: "Initiative title",
    crumb:
      'Home &rsaquo; About Us &rsaquo; <a href="/about/past-initiatives">Past Initiatives</a> &rsaquo; Initiative title',
    indexLabel: "Past initiative",
    indexSublabel: "About — initiative detail",
  },
  {
    key: "about-careers",
    path: "/about/careers",
    title: "Careers",
    statesKey: "careers",
    crumb: "Home &rsaquo; About Us &rsaquo; Careers",
    indexLabel: "Careers",
    indexSublabel: "About — open positions",
  },
  {
    key: "about-careers-detail",
    path: "/about/careers/position",
    title: "Position title",
    crumb:
      'Home &rsaquo; About Us &rsaquo; <a href="/about/careers">Careers</a> &rsaquo; Position title',
    indexLabel: "Position",
    indexSublabel: "About — position detail",
  },
  {
    key: "contact",
    path: "/contact",
    title: "Contact",
    crumb: "Home &rsaquo; Contact",
    stub: true,
    stubMessage: "Blocked — no structure spec yet",
    indexLabel: "Contact",
    indexSublabel: "Blocked — not yet specced",
  },
  {
    key: "twentieth",
    path: "/mawreds-20th",
    title: "Mawred's 20th",
    crumb: "Home &rsaquo; Mawred's 20th",
    stub: true,
    stubMessage: "Client call — permanent nav item vs temporary campaign",
    indexLabel: "Mawred's 20th",
    indexSublabel: "Client call — permanent nav item vs temporary campaign",
  },
];

export const ROUTES_BY_PATH = Object.fromEntries(
  ROUTES.map((route) => [route.path, route]),
) as Record<string, RouteEntry>;

export const ROUTES_BY_KEY = Object.fromEntries(
  ROUTES.map((route) => [route.key, route]),
) as Record<string, RouteEntry>;

export const INDEX_ROUTES = ROUTES.filter(
  (route) => route.indexLabel && route.key !== "index",
);

export function getRouteByPath(path: string): RouteEntry | undefined {
  return ROUTES_BY_PATH[path];
}
