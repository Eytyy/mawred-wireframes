import type { ReactNode } from 'react';

type PageWidthProps = {
  children: ReactNode;
  className?: string;
};

export function PageWidth({ children, className }: PageWidthProps) {
  return (
    <div className={`page-width mx-auto max-w-300 px-4 lg:px-10${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
