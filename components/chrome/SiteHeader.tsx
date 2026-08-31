import Link from "next/link";

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
    href: "/about/who-we-are",
    label: "About Us",
    dropdown: [
      { href: "/about/who-we-are", label: "Who We Are" },
      { href: "/about/our-team", label: "Our Team" },
      {
        href: "/about/supporters-partners",
        label: "Supporters & Partners",
      },
      { href: "/about/past-initiatives", label: "Past Initiatives" },
      { href: "/about/careers", label: "Careers" },
    ],
  },
  {
    href: "/programs/production-awards",
    label: "Grants & Opportunities",
    dropdown: [
      { href: "/programs/production-awards", label: "Production Awards" },
      { href: "/programs/wijhat", label: "Wijhat" },
      { href: "/programs/stand-for-art", label: "Stand for Art" },
      { href: "/programs/abbara", label: "Abbara" },
    ],
  },
  { href: "/network", label: "Mawred Network" },
  {
    href: "/publications/research",
    label: "Publications",
    groups: [
      {
        label: "Library",
        links: [
          {
            href: "/publications/research",
            label: "Research & Publications",
          },
        ],
      },
      {
        label: "Series",
        links: [
          { href: "/publications/mudawanat", label: "Mudawanat Podcast" },
          {
            href: "/publications/foundations-of-cultural-policies",
            label: "Foundations of Cultural Policies",
          },
          { href: "/publications/mawred-talks", label: "Mawred Talks" },
        ],
      },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/mawreds-20th", label: "Mawred's 20th", optional: true },
];

function NavItem({ item }: { item: NavGroup }) {
  const triggerClass = item.optional
    ? "block border border-dashed border-black bg-white px-2.5 py-1.5 text-sm no-underline"
    : "block border border-black bg-white px-2.5 py-1.5 text-sm no-underline";

  return (
    <div className="group relative">
      <Link href={item.href} className={triggerClass}>
        {item.label} {item.dropdown || item.groups ? "▾" : ""}
      </Link>
      {(item.dropdown || item.groups) && (
        <div className="absolute left-0 top-full z-20 hidden min-w-[200px] border border-black bg-white group-focus-within:block group-hover:block">
          {item.dropdown?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border-b border-neutral-200 px-2.5 py-1.5 text-sm no-underline last:border-b-0 hover:bg-neutral-200"
            >
              {link.label}
            </Link>
          ))}
          {item.groups?.map((group) => (
            <div key={group.label}>
              <span className="block border-b border-neutral-200 bg-neutral-200 px-2.5 py-1.5 text-xs uppercase tracking-widest text-neutral-500">
                {group.label}
              </span>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-neutral-200 px-2.5 py-1.5 text-sm no-underline last:border-b-0 hover:bg-neutral-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b-2 border-black">
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-center gap-4 px-4 py-3">
        <Link
          href="/wireframes"
          className="border border-black px-3.5 py-2 font-bold no-underline"
        >
          MAWRED
        </Link>
        <nav className="ml-auto flex flex-wrap gap-1.5">
          {NAV.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
