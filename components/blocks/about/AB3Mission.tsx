import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

export function AB3Mission({ points }: { points: number }) {
  return (
    <Block code="AB3" label="Mission">
      <div className="flex flex-wrap">
        {Array.from({ length: points }, (_, index) => (
          <div
            key={index}
            className="-mb-px -mr-px flex-[1_1_140px] border border-black p-2.5"
          >
            <span className="mb-1.5 block text-xs text-neutral-500">
              {`0${index + 1}`}
            </span>
            <Fill width={92} />
            <Fill width={64} />
          </div>
        ))}
      </div>
      <Hint>
        Four points as a compact cell row — the HM4 treatment (decision 40)
        reused rather than reinvented. Lighter than the values grid below,
        because mission points are short and carry no labels of their own.
      </Hint>
    </Block>
  );
}
