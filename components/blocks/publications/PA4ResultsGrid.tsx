import { Block } from "@/components/wireframe/Block";
import { Card, CardGrid } from "@/components/wireframe/Card";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";

type PA4ResultsGridProps = {
  empty: boolean;
  detailHref?: string;
};

export function PA4ResultsGrid({
  empty,
  detailHref = "/publications/research/publication",
}: PA4ResultsGridProps) {
  return (
    <Block code="PA4" label="Results grid">
      {empty ? (
        <>
          <EmptyState
            heading="No publications match these filters"
            line="Remove a filter to widen the search."
          />
          <Hint>
            Empty state sits inside the grid slot — filter bar and count row
            stay put.
          </Hint>
        </>
      ) : (
        <>
          <CardGrid>
            {Array.from({ length: 9 }, (_, index) => (
              <Card
                key={index}
                href={detailHref}
                title="Publication title"
                subtitle="Arabic, English"
              />
            ))}
          </CardGrid>
          <Hint>
            Card = cover · title · language line → publication detail. Reflows;
            no fixed column count.
          </Hint>
        </>
      )}
    </Block>
  );
}
