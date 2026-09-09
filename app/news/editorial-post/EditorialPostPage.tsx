"use client";

import Link from "next/link";
import { N6FeaturedImage } from "@/components/blocks/news/N6FeaturedImage";
import { N7PostMeta } from "@/components/blocks/news/N7PostMeta";
import { N9Body } from "@/components/blocks/news/N9Body";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import {
  MADE_WITH_YOUR_MAGIC as POST,
  NEWS_DETAIL_HREF,
} from "@/lib/pages/news";
import { useWireframeState } from "@/lib/wireframe-state";

export function EditorialPostPage() {
  const { state } = useWireframeState();

  return (
    <PageWidth className="flex min-h-[calc(100dvh-2rem)] flex-col lg:min-h-[calc(100dvh-5rem)]">
      <div>
        <PageHeaderBand hideTitle />
      </div>
      <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:mt-8 lg:grid-cols-2 lg:gap-12">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <N6FeaturedImage flush square caption={POST.imageCaption} />
        </div>
        <div className="flex flex-col gap-4">
          <N7PostMeta
            flush
            byline={state.byline}
            date={POST.date}
            category={POST.category}
            author={POST.byline}
          >
            <h1 className="text-5xl font-bold">{POST.title}</h1>
          </N7PostMeta>
          <N9Body flushTop text={POST.body} />
        </div>
      </div>
      <Hint>
        The other post kind: an event post. Crumb in the band; sticky left
        column of image; category, H1, date and body in the scrolling column.
        Prev / next close the page and sit at the bottom of the column. No
        related strip, no roster, no quotes, no schedule rows and no
        registration CTA. The featured image carries no credit, so
        N6&rsquo;s caption renders by omission.
      </Hint>
      <nav className="mt-auto flex justify-between pt-8">
        <Link href={NEWS_DETAIL_HREF} className="no-underline">
          ← prev
        </Link>
        <Link href={NEWS_DETAIL_HREF} className="no-underline">
          next →
        </Link>
      </nav>
    </PageWidth>
  );
}
