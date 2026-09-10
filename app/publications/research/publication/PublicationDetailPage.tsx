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
      <div className="mt-6 grid grid-cols-1 items-start gap-4 md:mt-8 md:max-wide:grid-cols-[6rem_minmax(0,1fr)] md:max-wide:gap-6 wide:grid-cols-2 wide:gap-12">
        <div className="contents wide:sticky wide:top-10 wide:flex wide:flex-col wide:gap-4 wide:self-start">
          <div className="order-1 md:col-start-1 md:row-start-1">
            <PC1Cover flush />
          </div>
        </div>
        <div className="contents wide:flex wide:flex-col wide:gap-4">
          <h1 className="order-2 min-w-0 text-5xl font-bold md:col-start-2 md:row-start-1">
            {PUBLICATION_RECORD.title}
          </h1>
          <div className="order-3 md:col-span-2">
            <PC1Meta flush record={PUBLICATION_RECORD} />
          </div>
          <div className="order-4 md:col-span-2">
            <PC1Abstract flush record={PUBLICATION_RECORD} />
          </div>
          <div className="order-5 md:col-span-2">
            <PC1Downloads flush record={PUBLICATION_RECORD} />
          </div>
        </div>
        <div className="order-6 md:col-span-2 wide:col-span-2">
          <PC2RelatedPublications
            flush
            detailHref={PUBLICATION_DETAIL_HREF}
            records={PUBLICATION_RECORD.related}
          />
        </div>
      </div>
      <Hint>
        Cover, meta, downloads, title, abstract and related are separate grid
        items. Mobile stacks cover, then title, then meta, then abstract,
        then downloads, then related. From <code>md</code> a compact
        portrait sits beside the title and the rest stay stacked. From
        <code>wide</code> (1440) the sticky cover sits left; title, meta,
        abstract and downloads are the reading column; related is a
        full-span row under that split. The cover stays portrait, not
        square &mdash; it is a publication, not a featured image.
      </Hint>
    </PageWidth>
  );
}
