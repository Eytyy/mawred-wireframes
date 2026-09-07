'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import { UtilityBar } from './UtilityBar';

type NavLink = {
  href: string;
  label: string;
};

type NavGroup = {
  href: string;
  label: string;
  dropdown?: NavLink[];
};

const NAV: NavGroup[] = [
  {
    href: '/about/who-we-are',
    label: 'About',
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
    dropdown: [
      { href: '/publications/research', label: 'Research & Publications' },
      { href: '/publications/mudawanat', label: 'Mudawanat Podcast' },
      {
        href: '/publications/foundations-of-cultural-policies',
        label: 'Foundations of Cultural Policies',
      },
      { href: '/publications/mawred-talks', label: 'Mawred Talks' },
    ],
  },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

function pathMatches(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function childHrefs(item: NavGroup): string[] {
  return item.dropdown?.map((link) => link.href) ?? [];
}

function navItemClass(active: boolean) {
  return [
    'inline-block w-fit px-2 py-1 text-sm no-underline',
    active ? 'bg-black text-white' : 'hover:bg-black hover:text-white',
  ].join(' ');
}

function NavItem({ item, pathname }: { item: NavGroup; pathname: string }) {
  const hrefs = [item.href, ...childHrefs(item)];
  const isSectionActive = hrefs.some((href) => pathMatches(pathname, href));
  const hasMenu = Boolean(item.dropdown);

  if (!hasMenu) {
    return (
      <Link href={item.href} className={navItemClass(isSectionActive)}>
        {item.label}
      </Link>
    );
  }

  return (
    <details className="group" name="site-nav">
      <summary
        className={`${navItemClass(isSectionActive)} cursor-pointer list-none group-open:bg-black group-open:text-white [&::-webkit-details-marker]:hidden`}
      >
        <span className="font-bold group-open:hidden">+ </span>
        <span className="hidden font-bold group-open:inline">- </span>
        {item.label}
      </summary>
      <div className="mt-4.5 flex flex-col gap-3 pl-4">
        {item.dropdown?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={navItemClass(pathMatches(pathname, link.href))}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex flex-col">
      <Link href="/" className="block font-bold no-underline">
        <Logo />
      </Link>
      <div className="mt-10">
        <UtilityBar />
      </div>
      <nav className="mt-15 flex flex-col gap-7">
        {NAV.map((item) => (
          <NavItem key={item.href} item={item} pathname={pathname} />
        ))}
      </nav>
    </header>
  );
}
