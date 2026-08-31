import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

export function AB4Values({ count }: { count: number }) {
  return (
    <Block code="AB4" label="Values">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-2.5">
        {Array.from({ length: count }, (_, index) => (
          <div key={index} className="border border-black p-2.75">
            <strong className="mb-1.5 block text-sm">Value label</strong>
            <Fill width={96} />
            <Fill width={72} />
          </div>
        ))}
      </div>
      <Hint>
        Six label + description pairs as a scannable grid, not bullets. A
        heavier treatment than the mission points because each value carries a
        label of its own.
      </Hint>
    </Block>
  );
}
