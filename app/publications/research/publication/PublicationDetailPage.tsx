import { PC1PublicationRecord } from "@/components/blocks/publications/PC1PublicationRecord";
import { PC2RelatedPublications } from "@/components/blocks/publications/PC2RelatedPublications";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import {
  PUBLICATION_DETAIL_HREF,
  PUBLICATION_RECORD,
} from "@/lib/pages/publications";

export function PublicationDetailPage() {
  return (
    <>
      <div>
        <PageHeaderBand />
      </div>
      <PC1PublicationRecord record={PUBLICATION_RECORD} />
      <PC2RelatedPublications
        detailHref={PUBLICATION_DETAIL_HREF}
        records={PUBLICATION_RECORD.related}
      />
    </>
  );
}
