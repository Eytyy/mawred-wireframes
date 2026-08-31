import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Badge, DirRow } from "@/components/wireframe/DirRow";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";
import { Tabs } from "@/components/wireframe/Tabs";
import { ENTITY_TABS, RECORD_HREF } from "@/lib/pages/network";

type MN5DirectoryListingProps = {
  empty: boolean;
  orgs: boolean;
  onTabSelect: (idx: number) => void;
};

export function MN5DirectoryListing({
  empty,
  orgs,
  onTabSelect,
}: MN5DirectoryListingProps) {
  const activeIdx = orgs ? 1 : 0;
  const nameLabel = orgs
    ? "Organization or initiative name"
    : "Person or group name";

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
          {Array.from({ length: 8 }, (_, index) => (
            <DirRow key={index} href={RECORD_HREF} name={nameLabel}>
              <span className="text-xs text-neutral-500">Country</span>
              <Badge>Involvement</Badge>
              <span className="text-xs text-neutral-500">Discipline</span>
            </DirRow>
          ))}
          <div className="mt-3.5 text-center">
            <Btn>Load 40 more</Btn>
          </div>
          <Hint>
            Two tabs, not stacked sections: each group runs to hundreds of rows,
            so stacking would bury the second one (decision 19). Row = name ·
            country · involvement · discipline (decision 22) → record detail.
            Load-more rather than a numbered pager (decision 23).
          </Hint>
        </>
      )}
    </Block>
  );
}
