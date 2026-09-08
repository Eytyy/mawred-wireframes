"use client";

import { PB1SeriesIntro } from "@/components/blocks/publications/PB1SeriesIntro";
import { PB2MediaListing } from "@/components/blocks/publications/PB2MediaListing";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import type { SeriesConfig } from "@/lib/pages/publications";
import { useWireframeState } from "@/lib/wireframe-state";

export function SeriesPage({ config }: { config: SeriesConfig }) {
  const { state } = useWireframeState();

  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
        <PB1SeriesIntro text={config.text} links={config.links} />
      </div>
      <PB2MediaListing
        kind={config.kind}
        layout={config.kind === "video" ? "grid" : "row"}
        total={config.total}
        slots={state.slots}
      />
    </PageWidth>
  );
}
