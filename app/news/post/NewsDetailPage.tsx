"use client";

import Link from "next/link";
import { N14Roster } from "@/components/blocks/news/N14Roster";
import { N15Quotes } from "@/components/blocks/news/N15Quotes";
import { N6FeaturedImage } from "@/components/blocks/news/N6FeaturedImage";
import { N7PostMeta } from "@/components/blocks/news/N7PostMeta";
import { N9Body } from "@/components/blocks/news/N9Body";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import {
  NEWS_EDITORIAL_HREF,
  PRODUCTION_AWARDS_RESULTS as POST,
} from "@/lib/pages/news";
import { useWireframeState } from "@/lib/wireframe-state";

export function NewsDetailPage() {
  const { state } = useWireframeState();
  const rosters = POST.rosters ?? [];

  return (
    <>
      <PageWidth>
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
      </PageWidth>
      {rosters.map((group, index) => (
        <section
          key={group.discipline}
          className={
            index < rosters.length - 1 ? "border-b border-black py-8" : "py-8"
          }
        >
          <PageWidth>
            <h2 className="block-heading mb-4 font-bold text-3xl">
              {group.discipline}
            </h2>
            <N14Roster
              label={`${group.discipline} — grantees`}
              heading="Grantees"
              records={group.grantees}
              flushTop
            />
            <N14Roster
              label={`${group.discipline} — jury`}
              heading="Jury"
              records={group.jury}
              overflow={group.overflow}
              tightBelow={Boolean(group.quotes)}
            />
            {group.quotes ? (
              <N15Quotes
                label={`${group.discipline} — jury quotes`}
                quotes={group.quotes}
              />
            ) : null}
          </PageWidth>
        </section>
      ))}
      <PageWidth>
        <Hint>
          An announcement post: the same sticky two-column as the editorial
          post — image left; category, H1, date and body right — then the
          rosters and quotes the results of a round consist of. Each discipline
          is a full-width section; a content-column rule sits between them.
          Grantees and Jury are h3s under the discipline h2; quotes sit in the
          jury section with no heading of their own. Cinema is populated in
          full and literature carries its roster without quotes, so the
          repetition is visible and quotes read as per-discipline rather than
          per-post; the remaining three disciplines resolve to the overflow
          line. Dashed because a post may carry no roster at all &mdash; but
          these are this post&rsquo;s published content, so there is no toggle
          over them. Prev / next close the page. The schedule and CTA inserts
          want a multi-date programme and a registration form; neither sampled
          post has either.
        </Hint>
        <nav className="flex justify-between pt-8">
          <Link href={NEWS_EDITORIAL_HREF} className="no-underline">
            ← prev
          </Link>
          <Link href={NEWS_EDITORIAL_HREF} className="no-underline">
            next →
          </Link>
        </nav>
      </PageWidth>
    </>
  );
}
