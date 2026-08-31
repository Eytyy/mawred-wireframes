import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Chip } from "@/components/wireframe/Chip";
import { CountRow } from "@/components/wireframe/CountRow";
import { Hint } from "@/components/wireframe/Hint";
import {
  ENTITY_TABS,
  NETWORK_FILTERED_COUNT,
  NETWORK_PAGE_SIZE,
} from "@/lib/pages/network";

type MN4CountRowProps = {
  empty: boolean;
  filtered: boolean;
  orgs: boolean;
};

export function MN4CountRow({ empty, filtered, orgs }: MN4CountRowProps) {
  const shown = empty ? 0 : filtered ? NETWORK_FILTERED_COUNT : NETWORK_PAGE_SIZE;
  const tabLabel = orgs
    ? ENTITY_TABS[1].label.toLowerCase()
    : ENTITY_TABS[0].label.toLowerCase();
  const tabCount = orgs ? ENTITY_TABS[1].count : ENTITY_TABS[0].count;

  return (
    <Block code="MN4" label="Result count / active filters / sort">
      <CountRow
        count={
          <>
            <strong>Showing {shown}</strong> of {tabCount} {tabLabel}
          </>
        }
        actions={
          <>
            {filtered || empty ? (
              <>
                <Chip>Programme: Wijhat ×</Chip>
                <Chip>Country: Egypt ×</Chip>
                <Btn>Clear all</Btn>
              </>
            ) : (
              <span className="text-neutral-500">no filters applied</span>
            )}
            <Btn>Sort: Name A–Z ▾</Btn>
          </>
        }
      />
      <Hint>
        Count is always present and is scoped to the open tab; active filters
        render as removable chips on the same row (decision 13). Filters stay
        applied when the tab is switched. Sort sits on the same row (name / year
        / country).
      </Hint>
    </Block>
  );
}
