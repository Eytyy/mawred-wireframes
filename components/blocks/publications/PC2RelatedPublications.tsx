import { LibraryRow } from "@/components/blocks/publications/PA4ResultsGrid";
import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import type { LibraryRecord } from "@/lib/pages/publications";

type PC2RelatedPublicationsProps = {
  detailHref?: string;
  records?: LibraryRecord[];
  flush?: boolean;
};

const PLACEHOLDERS: LibraryRecord[] = Array.from({ length: 3 }, () => ({
  title: "Publication title",
  languages: "Arabic, English",
}));

export function PC2RelatedPublications({
  detailHref = "/publications/research/publication",
  records = PLACEHOLDERS,
  flush,
}: PC2RelatedPublicationsProps) {
  return (
    <Block
      code="PC2"
      label="Related publications"
      heading="Related publications"
      flush={flush}
    >
      <div>
        {records.map((record, index) => (
          <LibraryRow
            key={`${record.title}-${index}`}
            href={detailHref}
            title={record.title}
            languages={record.languages}
            author={record.author}
            cover={false}
          />
        ))}
      </div>
      <Hint>
        Same library row, without the compact Cover (decision 204). From
        <code>wide</code> the strip is a full-span row under the record
        (decision 218). Which records count as related is a client/build
        call — the structure reserves the slot.
      </Hint>
    </Block>
  );
}
