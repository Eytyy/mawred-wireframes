"use client";

import { Fragment } from "react";
import { N13RelatedPosts } from "@/components/blocks/news/N13RelatedPosts";
import { N14Roster } from "@/components/blocks/news/N14Roster";
import { N15Quotes } from "@/components/blocks/news/N15Quotes";
import { N6FeaturedImage } from "@/components/blocks/news/N6FeaturedImage";
import { N7PostMeta } from "@/components/blocks/news/N7PostMeta";
import { N9Body } from "@/components/blocks/news/N9Body";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import {
  PRODUCTION_AWARDS_RESULTS as POST,
  relatedNewsPosts,
} from "@/lib/pages/news";
import { useWireframeState } from "@/lib/wireframe-state";

export function NewsDetailPage() {
  const { state } = useWireframeState();

  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
      </div>
      <N6FeaturedImage caption={POST.imageCaption} />
      <N7PostMeta
        byline={state.byline}
        date={POST.date}
        category={POST.category}
        author={POST.byline}
      />
      <N9Body text={POST.body} />
      {POST.rosters?.map((section) => (
        <Fragment key={section.label}>
          <N14Roster
            label={section.label}
            records={section.records}
            overflow={section.overflow}
          />
          {section.quotes ? (
            <N15Quotes label={section.quotesLabel} quotes={section.quotes} />
          ) : null}
        </Fragment>
      ))}
      <N13RelatedPosts posts={relatedNewsPosts(POST.title)} />
      <Hint>
        An announcement post: prose, then the rosters and quotes the results of
        a round consist of. Cinema is populated in full and literature carries
        its roster without quotes, so the repetition is visible and quotes read
        as per-discipline rather than per-post; the remaining three disciplines
        resolve to the overflow line. Dashed because a post may carry no roster
        at all &mdash; but these are this post&rsquo;s published content, so
        there is no toggle over them. The schedule and CTA inserts want a
        multi-date programme and a registration form; neither sampled post has
        either.
      </Hint>
    </PageWidth>
  );
}
