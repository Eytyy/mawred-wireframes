import { PC1PublicationRecord } from "@/components/blocks/publications/PC1PublicationRecord";
import { PC2RelatedPublications } from "@/components/blocks/publications/PC2RelatedPublications";
import { PUBLICATION_DETAIL_HREF } from "@/lib/pages/publications";

export function PublicationDetailPage() {
  return (
    <>
      <PC1PublicationRecord />
      <PC2RelatedPublications detailHref={PUBLICATION_DETAIL_HREF} />
    </>
  );
}
