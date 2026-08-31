"use client";

import { N10Schedule } from "@/components/blocks/news/N10Schedule";
import { N11Cta } from "@/components/blocks/news/N11Cta";
import { N12Share } from "@/components/blocks/news/N12Share";
import { N13RelatedPosts } from "@/components/blocks/news/N13RelatedPosts";
import { N5PrevNext } from "@/components/blocks/news/N5PrevNext";
import { N6FeaturedImage } from "@/components/blocks/news/N6FeaturedImage";
import { N7PostMeta } from "@/components/blocks/news/N7PostMeta";
import { N8KeyDetail } from "@/components/blocks/news/N8KeyDetail";
import { N9Body } from "@/components/blocks/news/N9Body";
import { Hint } from "@/components/wireframe/Hint";
import { useWireframeState } from "@/lib/wireframe-state";

export function NewsDetailPage() {
  const { state } = useWireframeState();

  return (
    <>
      <N5PrevNext edge={state.edge} />
      <N6FeaturedImage />
      <N7PostMeta byline={state.byline} />
      {state.structured ? <N8KeyDetail /> : null}
      <N9Body />
      {state.structured ? (
        <>
          <N10Schedule />
          <N11Cta />
        </>
      ) : null}
      <N12Share />
      <N13RelatedPosts />
      <Hint>
        Body shape flexes by post kind: editorial posts are prose only (the
        default here), announcement and event posts opt into the structured
        inserts. Nothing is forced &mdash; toggle the announcement state to see
        all three.
      </Hint>
    </>
  );
}
