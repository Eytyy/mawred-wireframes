'use client';

import { usePathname } from 'next/navigation';
import { getRouteByPath } from '@/lib/pages/routes';

export function PageHeaderBand() {
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
      <h1
        className="inline-block py-2 text-5xl font-bold"
        dangerouslySetInnerHTML={{ __html: route.title }}
      />
    </div>
  );
}
