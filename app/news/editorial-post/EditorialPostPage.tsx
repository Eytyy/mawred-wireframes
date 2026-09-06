"use client";

import { N12Share } from "@/components/blocks/news/N12Share";
import { N13RelatedPosts } from "@/components/blocks/news/N13RelatedPosts";
import { N5PrevNext } from "@/components/blocks/news/N5PrevNext";
import { N6FeaturedImage } from "@/components/blocks/news/N6FeaturedImage";
import { N7PostMeta } from "@/components/blocks/news/N7PostMeta";
import { N8KeyDetail } from "@/components/blocks/news/N8KeyDetail";
import { N9Body } from "@/components/blocks/news/N9Body";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { Hint } from "@/components/wireframe/Hint";
import {
  MADE_WITH_YOUR_MAGIC as POST,
  relatedNewsPosts,
} from "@/lib/pages/news";
import { useWireframeState } from "@/lib/wireframe-state";

export function EditorialPostPage() {
  const { state } = useWireframeState();

  return (
    <>
      <div>
        <PageHeaderBand />
      </div>
      <N5PrevNext edge={false} />
      <N6FeaturedImage caption={POST.imageCaption} />
      <N7PostMeta
        byline={state.byline}
        date={POST.date}
        category={POST.category}
        author={POST.byline}
      />
      {POST.keyDetail ? (
        <N8KeyDetail
          detail={POST.keyDetail.detail}
          aside={POST.keyDetail.aside}
        />
      ) : null}
      <N9Body text={POST.body} />
      <N12Share />
      <N13RelatedPosts posts={relatedNewsPosts(POST.title)} />
      <Hint>
        The other post kind: an event post, prose apart from the one hard fact
        the opening night carries. No roster, no quotes, no schedule rows and no
        registration CTA &mdash; and N8, specced as an announcement insert, is
        here because it is the <em>event</em> post that has the harder single
        fact. The featured image carries no credit, so N6&rsquo;s caption
        renders by omission.
      </Hint>
    </>
  );
}
