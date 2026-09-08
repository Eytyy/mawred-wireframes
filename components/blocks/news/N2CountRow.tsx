import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Chip } from "@/components/wireframe/Chip";
import { CountRow } from "@/components/wireframe/CountRow";
import { Hint } from "@/components/wireframe/Hint";

type N2CountRowProps = {
  empty: boolean;
  filtered: boolean;
  shown: number;
};

export function N2CountRow({ empty, filtered, shown }: N2CountRowProps) {
  return (
    <Block code="N2" label="Result count / active filters">
      <CountRow
        count={
          <strong>
            Showing {shown} post{shown === 1 ? "" : "s"}
          </strong>
        }
        actions={
          filtered || empty ? (
            <>
              <Chip>Programme: Wijhat ×</Chip>
              <Btn compact>Clear all</Btn>
            </>
          ) : (
            <span className="text-neutral-500">no filters applied</span>
          )
        }
      />
      <Hint>
        Count row per decision 13. No sort control &mdash;
        reverse-chronological is the only meaningful order for a dated feed
        (decision 28). Category and Programme both chip when applied; there is
        no tab to exclude. No denominator: the live site publishes no post
        total.
      </Hint>
    </Block>
  );
}
