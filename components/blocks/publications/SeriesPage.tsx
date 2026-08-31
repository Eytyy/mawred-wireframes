"use client";

import { PB1SeriesIntro } from "@/components/blocks/publications/PB1SeriesIntro";
import { PB2MediaListing } from "@/components/blocks/publications/PB2MediaListing";
import type { SeriesConfig } from "@/lib/pages/publications";
import { useWireframeState } from "@/lib/wireframe-state";

export function SeriesPage({ config }: { config: SeriesConfig }) {
  const { state } = useWireframeState();

  return (
    <>
      <PB1SeriesIntro paras={config.paras} links={config.links} />
      <PB2MediaListing
        kind={config.kind}
        total={config.total}
        slots={state.slots}
      />
    </>
  );
}
