import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

type AB8LogoBandProps = {
  label: string;
  count: number;
  note?: boolean;
};

export function AB8LogoBand({ label, count, note }: AB8LogoBandProps) {
  return (
    <Block code="AB8" label={`Logo band — ${label}`}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5">
        {Array.from({ length: count }, (_, index) => (
          <div
            key={index}
            className="flex h-16 items-center justify-center border border-black bg-neutral-200 text-xs text-neutral-500"
          >
            logo →
          </div>
        ))}
      </div>
      {note ? (
        <Hint>
          One treatment, three labelled bands (decision 51) — the tier is the
          only thing that distinguishes them, and it signals relationship type.
          Every tile links out; no per-logo description. A band with a single
          logo renders as one tile in the same grid, not as a special case.
        </Hint>
      ) : null}
    </Block>
  );
}
