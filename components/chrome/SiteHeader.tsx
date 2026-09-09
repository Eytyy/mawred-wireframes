'use client';

import { cn } from 'cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
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
      { href: '/about/past-initiatives', label: 'Past Initiatives' },
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
  return cn(
    'inline-block w-fit px-2 py-1 text-sm no-underline',
    active ? 'bg-black text-white' : 'hover:bg-black hover:text-white',
  );
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
        className={cn(
          navItemClass(isSectionActive),
          'cursor-pointer list-none group-open:bg-black group-open:text-white [&::-webkit-details-marker]:hidden',
        )}
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

function NavList({ pathname }: { pathname: string }) {
  return (
    <nav className="mt-15 flex flex-col gap-7">
      {NAV.map((item) => (
        <NavItem key={item.href} item={item} pathname={pathname} />
      ))}
    </nav>
  );
}

function BurgerIcon() {
  return (
    <>
      <span className="block h-px w-5 bg-current" />
      <span className="block h-px w-5 bg-current" />
      <span className="block h-px w-5 bg-current" />
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between gap-4 lg:block">
        <Link href="/" className="block w-40 font-bold no-underline lg:w-full">
          <Logo />
        </Link>
        <button
          type="button"
          className={cn(
            'inline-flex size-10 flex-col items-center justify-center gap-1 border border-black lg:hidden',
            open ? 'bg-black text-white' : 'bg-white text-black',
          )}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((current) => !current)}
        >
          <BurgerIcon />
        </button>
      </div>
      <div id={menuId} className={cn(open ? 'block' : 'hidden', 'lg:block')}>
        <div className="mt-10">
          <UtilityBar />
        </div>
        <NavList pathname={pathname} />
      </div>
    </header>
  );
}
