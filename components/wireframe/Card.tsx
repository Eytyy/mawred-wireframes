import { cn } from 'cn';
import Link from 'next/link';
import type { ReactNode } from 'react';

type CoverProps = {
  tall?: boolean;
  compact?: boolean;
  label?: string;
};

export function Cover({ tall, compact, label = 'cover' }: CoverProps) {
  return (
    <div
      className={cn(
        'flex aspect-3/4 items-center justify-center border border-black bg-neutral-200 text-xs text-neutral-500',
        compact ? 'w-24 shrink-0' : 'w-full',
        !tall && !compact && 'mb-2.25',
      )}
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

export function Card({
  href,
  title,
  subtitle,
  children,
  footer,
}: CardProps) {
  return (
    <Link href={href} className="block no-underline">
      {children ?? (footer != null ? null : <Cover />)}
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle ? (
        <small className="mt-1.25 block text-xs text-neutral-500">{subtitle}</small>
      ) : null}
      {footer}
    </Link>
  );
}

type CardGridProps = {
  children: ReactNode;
  cols?: 3 | 4;
  className?: string;
};

export function CardGrid({ children, cols = 4, className }: CardGridProps) {
  return (
    <div
      className={cn(
        'grid gap-5 xl:gap-10',
        cols === 3 ? 'grid-cols-3' : 'grid-cols-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
