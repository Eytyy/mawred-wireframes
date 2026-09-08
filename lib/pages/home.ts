import type { FigItem } from '@/components/wireframe/Figs';
import { NEWS_POSTS, type NewsPost } from '@/lib/pages/news';

export type PositioningPart = {
  text: string;
  href?: string;
};

export const HOME_POSITIONING: PositioningPart[] = [
  {
    text: 'Culture Resource (Al-Mawred Al-Thaqafy) is a regional, non-profit organization founded in 2003. We ',
  },
  { text: 'support artistic creativity', href: '/programs/production-awards' },
  { text: ' in the Arab region and ' },
  { text: 'encourage cultural exchange', href: '/network' },
  { text: ' within it and beyond. ' },
  { text: 'More about us →', href: '/about/who-we-are' },
];

export type HeroFrame = {
  caption: string;
};

export const HOME_HERO_FRAMES: HeroFrame[] = [
  {
    caption: 'Alayham Ali, Syria · After Three Years of Green · Production Awards 2026',
  },
  {
    caption: 'Sarah Zeryab, Palestine · Notes on Camp · Production Awards 2026',
  },
  {
    caption: 'Karima Ahdad, Morocco · The Partridge of the Barren Land · Production Awards 2026',
  },
  {
    caption:
      'Al Kasaba Theatre and Cinematheque, Palestine · Creative Industry in Marginalized Areas · All Around Culture',
  },
  {
    caption: 'Nour Shantout, Syria and Austria · Visual Arts · Mawred Network',
  },
];

export const HOME_FIGURES: FigItem[] = [
  { label: 'grants awarded since 2003', value: '>1,200' },
  { label: 'countries', value: '55' },
  { label: 'programmes & initiatives', value: '38' },
];

export type HomeOpportunity = {
  name: string;
  descriptor: string;
  href: string;
  status: string;
};

export const HOME_OPPORTUNITIES: HomeOpportunity[] = [
  {
    name: 'Production Awards',
    descriptor:
      'Production grants for artists and writers of Arab origin under 35, across five disciplines.',
    href: '/programs/production-awards',
    status: 'Deadline · 19 Oct 2026, 16:00 Beirut',
  },
  {
    name: 'Wijhat',
    descriptor:
      'Travel grants of up to €7,000 for artists and cultural actors moving within the region and beyond it.',
    href: '/programs/wijhat',
    status: 'Open all year',
  },
  {
    name: 'Stand for Art',
    descriptor:
      'Temporary support for artists and cultural actors from the Arab region whose safety is at risk.',
    href: '/programs/stand-for-art',
    status: 'Open all year',
  },
];

export type HomeSpotlight = {
  title: string;
  href: string;
};

export const HOME_SPOTLIGHT: HomeSpotlight = {
  title: "Mawred's 20th",
  href: '/mawreds-20th',
};

export const HOME_NEWS_POSTS: NewsPost[] = NEWS_POSTS;

export const HOME_NEWS_COUNT = HOME_NEWS_POSTS.length;

export const HOME_ALL_NEWS_HREF = '/news';
