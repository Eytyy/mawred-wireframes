import { cn } from 'cn';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn('block-heading mb-2.5 text-4xl font-bold', className)}>{children}</h2>
  );
}
