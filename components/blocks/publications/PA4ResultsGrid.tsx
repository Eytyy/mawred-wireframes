import { Block } from "@/components/wireframe/Block";
import { Card, CardGrid } from "@/components/wireframe/Card";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";
import type { LibraryRecord } from "@/lib/pages/publications";

type PA4ResultsGridProps = {
  empty: boolean;
  detailHref?: string;
  records?: LibraryRecord[];
};

const SAMPLE = 9;

const PLACEHOLDERS: LibraryRecord[] = Array.from({ length: SAMPLE }, () => ({
  title: "Publication title",
  languages: "Arabic, English",
}));

export function PA4ResultsGrid({
  empty,
  detailHref = "/publications/research/publication",
  records,
}: PA4ResultsGridProps) {
  const sampled = (records ?? PLACEHOLDERS).slice(0, SAMPLE);
  const total = records?.length;

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
            {sampled.map((record, index) => (
              <Card
                key={records ? record.title : index}
                href={detailHref}
                title={record.title}
                subtitle={record.languages}
              />
            ))}
          </CardGrid>
          {total !== undefined ? (
            <div className="text-xs italic text-neutral-500">
              … {total} items in the grid
            </div>
          ) : null}
          <Hint>
            Card = cover · title · language line → publication detail. Four
            columns (decision 167). Nine sampled cards; the overflow line is the
            rest of the library.
          </Hint>
        </>
      )}
    </Block>
  );
}
