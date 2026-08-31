import { Block } from "@/components/wireframe/Block";
import { Card, CardGrid } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import type { LibraryRecord } from "@/lib/pages/publications";

type PC2RelatedPublicationsProps = {
  detailHref?: string;
  records?: LibraryRecord[];
};

const PLACEHOLDERS: LibraryRecord[] = Array.from({ length: 3 }, () => ({
  title: "Publication title",
  languages: "Arabic, English",
}));

export function PC2RelatedPublications({
  detailHref = "/publications/research/publication",
  records = PLACEHOLDERS,
}: PC2RelatedPublicationsProps) {
  return (
    <Block code="PC2" label="Related publications">
      <CardGrid>
        {records.map((record, index) => (
          <Card
            key={`${record.title}-${index}`}
            href={detailHref}
            title={record.title}
            subtitle={record.languages}
          />
        ))}
      </CardGrid>
      <Hint>
        Reuses the library card exactly. Which records count as related is a
        client/build call — the structure reserves the slot.
      </Hint>
    </Block>
  );
}
