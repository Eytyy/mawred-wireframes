"use client";

import { useState } from "react";
import { N1CategoryFilter } from "@/components/blocks/news/N1CategoryFilter";
import { N2CountRow } from "@/components/blocks/news/N2CountRow";
import { N3PostFeed } from "@/components/blocks/news/N3PostFeed";
import { N4Pagination } from "@/components/blocks/news/N4Pagination";
import { Hint } from "@/components/wireframe/Hint";
import { useWireframeState } from "@/lib/wireframe-state";

export function NewsLandingPage() {
  const { state } = useWireframeState();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <N1CategoryFilter activeIdx={activeIdx} onSelect={setActiveIdx} />
      <N2CountRow
        activeIdx={activeIdx}
        empty={state.empty}
        filtered={state.filtered}
      />
      <N3PostFeed empty={state.empty} slots={state.slots} />
      {!state.empty ? <N4Pagination /> : null}
      <Hint>
        Landing and post detail are two views of one content type &mdash; the
        feed is the index, the post is the entry. The Announcements category
        carries the same information the programme pages show as call-status
        and results, and that Home surfaces as open opportunities: one shared
        source, three surfaces (noted, not designed).
      </Hint>
    </>
  );
}
