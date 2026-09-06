"use client";

import { PB1SeriesIntro } from "@/components/blocks/publications/PB1SeriesIntro";
import { PB2MediaListing } from "@/components/blocks/publications/PB2MediaListing";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import type { SeriesConfig } from "@/lib/pages/publications";
import { useWireframeState } from "@/lib/wireframe-state";

export function SeriesPage({ config }: { config: SeriesConfig }) {
  const { state } = useWireframeState();

  return (
    <>
      <div>
        <PageHeaderBand />
        <PB1SeriesIntro text={config.text} links={config.links} />
      </div>
      <PB2MediaListing
        kind={config.kind}
        total={config.total}
        slots={state.slots}
      />
    </>
  );
}
