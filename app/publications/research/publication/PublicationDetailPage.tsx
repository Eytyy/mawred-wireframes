import {
  PC1Abstract,
  PC1Cover,
  PC1Downloads,
  PC1Meta,
} from "@/components/blocks/publications/PC1PublicationRecord";
import { PC2RelatedPublications } from "@/components/blocks/publications/PC2RelatedPublications";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import {
  PUBLICATION_DETAIL_HREF,
  PUBLICATION_RECORD,
} from "@/lib/pages/publications";

export function PublicationDetailPage() {
  return (
    <PageWidth>
      <div>
        <PageHeaderBand hideTitle />
      </div>
      <div className="mt-6 grid grid-cols-1 items-start gap-4 md:mt-8 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-12">
        <div className="contents lg:sticky lg:top-10 lg:flex lg:flex-col lg:gap-4 lg:self-start">
          <div className="order-1 md:col-start-1 md:row-start-1">
            <PC1Cover flush />
          </div>
          <div className="order-3 md:col-span-2">
            <PC1Meta flush record={PUBLICATION_RECORD} />
          </div>
          <div className="order-5 md:col-span-2">
            <PC1Downloads flush record={PUBLICATION_RECORD} />
          </div>
        </div>
        <div className="contents lg:flex lg:flex-col lg:gap-4">
          <h1 className="order-2 min-w-0 text-5xl font-bold md:col-start-2 md:row-start-1">
            {PUBLICATION_RECORD.title}
          </h1>
          <div className="order-4 md:col-span-2">
            <PC1Abstract flush record={PUBLICATION_RECORD} />
          </div>
          <div className="order-6 md:col-span-2">
            <PC2RelatedPublications
              flush
              detailHref={PUBLICATION_DETAIL_HREF}
              records={PUBLICATION_RECORD.related}
            />
          </div>
        </div>
      </div>
      <Hint>
        Cover, meta, downloads, title, abstract and related are separate grid
        items. Mobile stacks cover, then title, then meta, then abstract,
        then downloads, then related. On tablet a compact portrait sits
        beside the title and the rest stay stacked. Desktop keeps the sticky
        identity column and the reading column. The cover stays portrait, not
        square &mdash; it is a publication, not a featured image.
      </Hint>
    </PageWidth>
  );
}
