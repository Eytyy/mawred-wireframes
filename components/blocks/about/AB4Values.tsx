import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import type { ValueRecord } from "@/lib/pages/about";

export function AB4Values({ values }: { values: ValueRecord[] }) {
  return (
    <Block code="AB4" label="Values" heading="Values">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-2.5">
        {values.map((value) => (
          <div key={value.label} className="border border-black p-2.75">
            <strong className="mb-1.5 block text-sm">{value.label}</strong>
            {value.text}
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
