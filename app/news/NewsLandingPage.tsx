"use client";

import { N1CategoryFilter } from "@/components/blocks/news/N1CategoryFilter";
import { N2CountRow } from "@/components/blocks/news/N2CountRow";
import { N3PostFeed } from "@/components/blocks/news/N3PostFeed";
import { N4Pagination } from "@/components/blocks/news/N4Pagination";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import { filterNewsPosts, NEWS_POSTS } from "@/lib/pages/news";
import { useWireframeState } from "@/lib/wireframe-state";

export function NewsLandingPage() {
  const { state } = useWireframeState();

  const visiblePosts = filterNewsPosts(
    NEWS_POSTS,
    state.filtered,
    state.empty,
  );
  const noResults = visiblePosts.length === 0;

  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
      </div>
      <N1CategoryFilter />
      <N2CountRow
        empty={noResults}
        filtered={state.filtered}
        shown={visiblePosts.length}
      />
      <N3PostFeed empty={noResults} slots={state.slots} posts={visiblePosts} />
      {!noResults ? <N4Pagination /> : null}
      <Hint>
        Landing and post detail are two views of one content type &mdash; the
        feed is the index, the post is the entry. The Announcements category
        carries the same information the programme pages show as call-status
        and results, and that Home surfaces as open opportunities: one shared
        source, three surfaces (noted, not designed).
      </Hint>
    </PageWidth>
  );
}
