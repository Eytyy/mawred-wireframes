"use client";

import { usePathname } from "next/navigation";
import { getRouteByPath } from "@/lib/pages/routes";

export function PageHeaderBand() {
  const pathname = usePathname();
  const route = getRouteByPath(pathname);

  if (!route || route.suppressPageHead) {
    return null;
  }

  return (
    <div className="border-b border-black py-[18px]">
      <div className="mx-auto max-w-[1040px] px-4">
        <div
          className="mb-2 text-xs text-neutral-500"
          dangerouslySetInnerHTML={{ __html: route.crumb }}
        />
        <h1
          className="inline-block border border-black px-3.5 py-2 text-2xl"
          dangerouslySetInnerHTML={{ __html: route.title }}
        />
      </div>
    </div>
  );
}
