import Link from "next/link";
import type { ReactNode } from "react";

type CoverProps = {
  tall?: boolean;
  label?: string;
};

export function Cover({ tall, label = "cover" }: CoverProps) {
  return (
    <div
      className={`flex aspect-3/4 w-full items-center justify-center border border-black bg-neutral-200 text-xs text-neutral-500 ${
        tall ? "" : "mb-2.25"
      }`}
    >
      {label}
    </div>
  );
}

type CardProps = {
  href: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export function Card({ href, title, subtitle, children, footer }: CardProps) {
  return (
    <Link href={href} className="block border border-black p-2.5 no-underline">
      {children ?? <Cover />}
      <strong className="text-sm">{title}</strong>
      {subtitle ? (
        <small className="mt-1.25 block text-xs text-neutral-500">{subtitle}</small>
      ) : null}
      {footer}
    </Link>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {children}
    </div>
  );
}
