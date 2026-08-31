import Link from "next/link";
import type { ReactNode } from "react";

type DirRowProps = {
  href: string;
  name: string;
  children?: ReactNode;
};

export function DirRow({ href, name, children }: DirRowProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 border-b border-neutral-200 px-0.5 py-2.25 no-underline"
    >
      <span className="flex-1 text-sm font-bold">{name}</span>
      {children}
    </Link>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="border border-black px-1.75 py-0.5 text-xs">{children}</span>
  );
}
