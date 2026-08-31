import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Chip } from "@/components/wireframe/Chip";
import { CountRow } from "@/components/wireframe/CountRow";
import { Hint } from "@/components/wireframe/Hint";
import {
  ENTITY_TABS,
  NETWORK_ROWS,
  NETWORK_SAMPLE_FILTERS,
} from "@/lib/pages/network";

type MN4CountRowProps = {
  empty: boolean;
  filtered: boolean;
  orgs: boolean;
};

export function MN4CountRow({ empty, filtered, orgs }: MN4CountRowProps) {
  const tabIdx = orgs ? 1 : 0;
  const shown = empty ? 0 : filtered ? 1 : NETWORK_ROWS[tabIdx].length;

  return (
    <Block code="MN4" label="Result count / active filters / sort">
      <CountRow
        count={
          <>
            <strong>
              Showing {shown} record{shown === 1 ? "" : "s"}
            </strong>{" "}
            in {ENTITY_TABS[tabIdx].label}
          </>
        }
        actions={
          <>
            {filtered || empty ? (
              <>
                {NETWORK_SAMPLE_FILTERS[tabIdx].map((chip) => (
                  <Chip key={chip}>{chip} ×</Chip>
                ))}
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
        / country). The count reads as
        &ldquo;showing N&rdquo; with no &ldquo;of N&rdquo; total: the live
        listing publishes no record count for the network or for either entity
        type, so the denominator is a gap for Mawred to supply, not a number to
        estimate.
      </Hint>
    </Block>
  );
}
