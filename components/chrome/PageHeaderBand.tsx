'use client';

import { usePathname } from 'next/navigation';
import { getRouteByPath } from '@/lib/pages/routes';

type PageHeaderBandProps = {
  hideTitle?: boolean;
};

export function PageHeaderBand({ hideTitle = false }: PageHeaderBandProps) {
  const pathname = usePathname();
  const route = getRouteByPath(pathname);

  if (!route) {
    return null;
  }

  return (
    <div>
      <div
        className="mb-2 text-xs text-neutral-500"
        dangerouslySetInnerHTML={{ __html: route.crumb }}
      />
      {hideTitle ? null : (
        <h1
          className="inline-block py-2 text-5xl font-bold"
          dangerouslySetInnerHTML={{ __html: route.title }}
        />
      )}
    </div>
  );
}
