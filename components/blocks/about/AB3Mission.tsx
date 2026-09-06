import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

export function AB3Mission({ points }: { points: string[] }) {
  return (
    <Block code="AB3" label="Mission" heading="Mission">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-2.5">
        {points.map((point, index) => (
          <div key={point} className="border border-black p-2.75">
            <span className="mb-1.5 block text-xs text-neutral-500">
              {`0${index + 1}`}
            </span>
            {point}
          </div>
        ))}
      </div>
      <Hint>
        Four numbered cards with gap, matching the values grid below. The 01–04
        eyebrow stays so four short points read as one set. HM4 stays a tight
        shared-border row; S4 left Cells (decision 160).
      </Hint>
    </Block>
  );
}
