'use client';

import { usePathname } from 'next/navigation';
import { getRouteByPath } from '@/lib/pages/routes';

export function PageHeaderBand() {
  const pathname = usePathname();
  const route = getRouteByPath(pathname);

  if (!route || route.suppressPageHead) {
    return null;
  }

  return (
    <div className="border-black py-[18px]">
      <div className="mx-auto max-w-[1040px] px-4">
        <div
          className="mb-2 text-xs text-neutral-500"
          dangerouslySetInnerHTML={{ __html: route.crumb }}
        />
        <h1
          className="inline-block py-2 text-4xl font-bold"
          dangerouslySetInnerHTML={{ __html: route.title }}
        />
      </div>
    </div>
  );
}
