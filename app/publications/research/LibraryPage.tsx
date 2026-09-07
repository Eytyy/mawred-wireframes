"use client";

import { PA1IntroLine } from "@/components/blocks/publications/PA1IntroLine";
import { PA2FilterBar } from "@/components/blocks/publications/PA2FilterBar";
import { PA3CountRow } from "@/components/blocks/publications/PA3CountRow";
import { PA4ResultsGrid } from "@/components/blocks/publications/PA4ResultsGrid";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import {
  LIBRARY_FACETS,
  LIBRARY_RECORDS,
  PUBLICATION_DETAIL_HREF,
} from "@/lib/pages/publications";
import { useWireframeState } from "@/lib/wireframe-state";

export function LibraryPage() {
  const { state } = useWireframeState();

  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
        <PA1IntroLine slots={state.slots} />
      </div>
      <PA2FilterBar facets={LIBRARY_FACETS} />
      <PA3CountRow
        empty={state.empty}
        filtered={state.filtered}
        total={LIBRARY_RECORDS.length}
      />
      <PA4ResultsGrid
        empty={state.empty}
        detailHref={PUBLICATION_DETAIL_HREF}
        records={LIBRARY_RECORDS}
      />
    </PageWidth>
  );
}
