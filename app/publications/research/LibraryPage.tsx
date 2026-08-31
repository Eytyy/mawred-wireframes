"use client";

import { PA1IntroLine } from "@/components/blocks/publications/PA1IntroLine";
import { PA2FilterBar } from "@/components/blocks/publications/PA2FilterBar";
import { PA3CountRow } from "@/components/blocks/publications/PA3CountRow";
import { PA4ResultsGrid } from "@/components/blocks/publications/PA4ResultsGrid";
import {
  LIBRARY_FACETS,
  LIBRARY_RECORDS,
  PUBLICATION_DETAIL_HREF,
} from "@/lib/pages/publications";
import { useWireframeState } from "@/lib/wireframe-state";

export function LibraryPage() {
  const { state } = useWireframeState();

  return (
    <>
      <PA1IntroLine slots={state.slots} />
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
    </>
  );
}
