import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Badge, DirRow } from "@/components/wireframe/DirRow";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";
import { Tabs } from "@/components/wireframe/Tabs";
import { ENTITY_TABS, NETWORK_ROWS, RECORD_HREF } from "@/lib/pages/network";

type MN5DirectoryListingProps = {
  empty: boolean;
  filtered: boolean;
  orgs: boolean;
  onTabSelect: (idx: number) => void;
};

export function MN5DirectoryListing({
  empty,
  filtered,
  orgs,
  onTabSelect,
}: MN5DirectoryListingProps) {
  const activeIdx = orgs ? 1 : 0;
  const rows = filtered
    ? NETWORK_ROWS[activeIdx].slice(0, 1)
    : NETWORK_ROWS[activeIdx];

  return (
    <Block code="MN5" label="Directory listing — split by entity type">
      <Tabs items={ENTITY_TABS} activeIdx={activeIdx} onSelect={onTabSelect} />
      {empty ? (
        <>
          <EmptyState
            heading="No records match these filters"
            line="Remove a filter, or check the other tab — filters apply to one entity type at a time."
          />
          <Hint>
            Empty state sits inside the listing slot — tabs, count row and
            filter bank stay put.
          </Hint>
        </>
      ) : (
        <>
          {rows.map((row) => (
            <DirRow key={row.name} href={RECORD_HREF} name={row.name}>
              <span className="text-xs text-neutral-500">{row.countries}</span>
              {row.involvements.map((involvement) => (
                <Badge key={involvement}>{involvement}</Badge>
              ))}
              <span className="text-xs text-neutral-500">
                {row.disciplines}
              </span>
            </DirRow>
          ))}
          <div className="mt-3.5 text-center">
            <Btn>Load more records</Btn>
          </div>
          <Hint>
            Two tabs, not stacked sections: each group runs to hundreds of rows,
            so stacking would bury the second one (decision 19). Row = name ·
            country · involvement · discipline (decision 22) → record detail. A
            record carries one row per entity, not per engagement, so an
            organisation involved twice shows both badges. Load-more rather
            than a numbered pager (decision 23). Twelve records are sampled
            per tab; only Al Kasaba has a populated record page, so every row
            links there.
          </Hint>
        </>
      )}
    </Block>
  );
}
