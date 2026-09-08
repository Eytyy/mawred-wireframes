import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Chip } from "@/components/wireframe/Chip";
import { CountRow } from "@/components/wireframe/CountRow";
import { Hint } from "@/components/wireframe/Hint";

type PA3CountRowProps = {
  empty: boolean;
  filtered: boolean;
  total?: number;
};

export function PA3CountRow({
  empty,
  filtered,
  total = 33,
}: PA3CountRowProps) {
  const shown = empty ? 0 : filtered ? 6 : total;

  return (
    <Block code="PA3" label="Result count / active filters">
      <CountRow
        count={
          <>
            <strong>Showing {shown}</strong> of {total} publications
          </>
        }
        actions={
          filtered || empty ? (
            <>
              <Chip>Language: Arabic ×</Chip>
              <Chip>Year: 2016 ×</Chip>
              <Btn compact>Clear all</Btn>
            </>
          ) : (
            <span className="text-neutral-500">no filters applied</span>
          )
        }
      />
      <Hint>
        Count always present; active filters render as removable chips on the
        same row (decision 13).
      </Hint>
    </Block>
  );
}
