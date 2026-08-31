import { Block } from "@/components/wireframe/Block";
import { Embed } from "@/components/wireframe/Embed";
import { Hint } from "@/components/wireframe/Hint";

type PB2MediaListingProps = {
  kind: "audio" | "video";
  total: number;
  slots?: boolean;
};

export function PB2MediaListing({ kind, total, slots = false }: PB2MediaListingProps) {
  return (
    <Block code="PB2" label="Media embed listing">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="my-3">
          <Embed kind={kind} />
          {slots ? (
            <div className="mt-1.5 border border-dashed border-black px-2 py-1.5 text-xs text-neutral-500">
              optional per-item caption — available field, unused today
            </div>
          ) : null}
        </div>
      ))}
      <div className="text-xs italic text-neutral-500">
        … {total} items in this series, manual order, no filtering.
      </div>
      <Hint>
        One embed per row at content width (decision 14). Audio and video differ
        only in embed footprint — no bespoke wrapper, since styling control over
        the provider chrome is limited.
      </Hint>
    </Block>
  );
}
