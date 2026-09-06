import Link from 'next/link';
import Logo from '../Logo';
import { UtilityBar } from './UtilityBar';

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  href: string;
  label: string;
  optional?: boolean;
  dropdown?: NavLink[];
  groups?: { label: string; links: NavLink[] }[];
};

const NAV: NavGroup[] = [
  {
    href: '/about/who-we-are',
    label: 'About Us',
    dropdown: [
      { href: '/about/who-we-are', label: 'Who We Are' },
      { href: '/about/our-team', label: 'Our Team' },
      {
        href: '/about/supporters-partners',
        label: 'Supporters & Partners',
      },
      { href: '/about/past-initiatives', label: 'Past Initiatives' },
      { href: '/about/careers', label: 'Careers' },
    ],
  },
  {
    href: '/programs/production-awards',
    label: 'Grants & Opportunities',
    dropdown: [
      { href: '/programs/production-awards', label: 'Production Awards' },
      { href: '/programs/wijhat', label: 'Wijhat' },
      { href: '/programs/stand-for-art', label: 'Stand for Art' },
      { href: '/programs/abbara', label: 'Abbara' },
    ],
  },
  { href: '/network', label: 'Mawred Network' },
  {
    href: '/publications/research',
    label: 'Publications',
    groups: [
      {
        label: 'Library',
        links: [
          {
            href: '/publications/research',
            label: 'Research & Publications',
          },
        ],
      },
      {
        label: 'Series',
        links: [
          { href: '/publications/mudawanat', label: 'Mudawanat Podcast' },
          {
            href: '/publications/foundations-of-cultural-policies',
            label: 'Foundations of Cultural Policies',
          },
          { href: '/publications/mawred-talks', label: 'Mawred Talks' },
        ],
      },
    ],
  },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
  { href: '/mawreds-20th', label: "Mawred's 20th", optional: true },
];

function NavItem({ item }: { item: NavGroup }) {
  const triggerClass = item.optional
    ? 'block border border-dashed border-black px-1.5 py-0.5 text-sm no-underline'
    : 'block text-sm no-underline';
  const hasMenu = Boolean(item.dropdown || item.groups);

  if (!hasMenu) {
    return (
      <Link href={item.href} className={triggerClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <details name="site-nav">
      <summary
        className={`${triggerClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
      >
        {item.label} +
      </summary>
      <div className="mb-4">
        {item.dropdown?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-2.5 py-1.5 text-sm no-underline hover:bg-neutral-200"
          >
            {link.label}
          </Link>
        ))}
        {item.groups?.map((group) => (
          <div key={group.label}>
            <span className="block bg-neutral-200 px-2.5 py-1.5 text-xs tracking-widest text-neutral-500 uppercase">
              {group.label}
            </span>
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2.5 py-1.5 text-sm no-underline hover:bg-neutral-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4">
      <Link href="/" className="block font-bold no-underline">
        <Logo />
      </Link>
      <UtilityBar />
      <nav className="flex flex-col gap-2">
        {NAV.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </nav>
    </header>
  );
}
