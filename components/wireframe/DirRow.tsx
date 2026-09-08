import Link from 'next/link';
import type { ReactNode } from 'react';

type DirRowProps = {
  href: string;
  name: string;
  leading?: ReactNode;
  children?: ReactNode;
};

export function DirRow({ href, name, leading, children }: DirRowProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 border-b border-neutral-200 px-0.5 py-2.25 no-underline"
    >
      {leading}
      <span className="flex-1 text-2xl font-bold">{name}</span>
      {children}
    </Link>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block max-w-full border border-black px-1.75 py-0.5 text-xs">
      {children}
    </span>
  );
}
