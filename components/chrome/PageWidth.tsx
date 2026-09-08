import { cn } from 'cn';
import type { ReactNode } from 'react';

type PageWidthProps = {
  children: ReactNode;
  className?: string;
};

export function PageWidth({ children, className }: PageWidthProps) {
  return <div className={cn('page-width mx-auto max-w-300 px-10', className)}>{children}</div>;
}
