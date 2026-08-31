import { Block } from "@/components/wireframe/Block";
import { Cell, Cells } from "@/components/wireframe/Cells";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

export function AB3Mission({ points }: { points: number }) {
  return (
    <Block code="AB3" label="Mission">
      <Cells>
        {Array.from({ length: points }, (_, index) => (
          <Cell key={index}>
            <span className="mb-1.5 block text-xs text-neutral-500">
              {`0${index + 1}`}
            </span>
            <Fill width={92} />
            <Fill width={64} />
          </Cell>
        ))}
      </Cells>
      <Hint>
        Four points as a compact cell row — the HM4 treatment (decision 40)
        reused rather than reinvented. Lighter than the values grid below,
        because mission points are short and carry no labels of their own.
      </Hint>
    </Block>
  );
}
