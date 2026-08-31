import { Block } from "@/components/wireframe/Block";
import { Card, CardGrid } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";

type PC2RelatedPublicationsProps = {
  detailHref?: string;
};

export function PC2RelatedPublications({
  detailHref = "/publications/research/publication",
}: PC2RelatedPublicationsProps) {
  return (
    <Block code="PC2" label="Related publications">
      <CardGrid>
        {Array.from({ length: 3 }, (_, index) => (
          <Card
            key={index}
            href={detailHref}
            title="Publication title"
            subtitle="Arabic, English"
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
