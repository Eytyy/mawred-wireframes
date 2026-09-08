import { cn } from 'cn';
import type { ReactNode } from 'react';

type BlockProps = {
  code: string;
  label: string;
  children: ReactNode;
  optional?: boolean;
  heading?: string;
  headingAs?: 'h2' | 'h3';
  flush?: boolean;
  flushTop?: boolean;
  tightBelow?: boolean;
  looseAbove?: boolean;
};

export function Block({
  code,
  label,
  children,
  optional,
  heading,
  headingAs: HeadingTag = 'h2',
  flush,
  flushTop,
  tightBelow,
  looseAbove,
}: BlockProps) {
  const borderClass = optional ? 'border border-dashed border-black' : 'border border-black';
  const gapClass = flush
    ? 'block-flush'
    : flushTop
      ? 'block-flush-top my-3.5'
      : tightBelow
        ? 'block-tight-below my-3.5'
        : looseAbove
          ? 'block-loose-above my-10'
          : 'my-3.5';

  return (
    <section className={cn('p-3.5', gapClass, borderClass, 'block-frame')}>
      <div className="block-label mb-2.5 flex items-center gap-2">
        <span className="code border border-black px-1 py-0.5 font-mono text-xs">{code}</span>
        <span className="text-xs uppercase tracking-widest">{label}</span>
      </div>
      {heading ? (
        <HeadingTag
          className={cn(
            'block-heading mb-4 font-bold',
            HeadingTag === 'h3' ? 'text-2xl' : 'text-3xl',
          )}
        >
          {heading}
        </HeadingTag>
      ) : null}
      {children}
    </section>
  );
}
