import { Block } from "@/components/wireframe/Block";
import { Caption } from "@/components/wireframe/Caption";
import { Embed } from "@/components/wireframe/Embed";
import { Hint } from "@/components/wireframe/Hint";

type PB2MediaListingProps = {
  kind: "audio" | "video";
  layout: "row" | "grid";
  total: number;
  slots?: boolean;
};

export function PB2MediaListing({
  kind,
  layout,
  total,
  slots = false,
}: PB2MediaListingProps) {
  const sample = layout === "grid" ? 8 : 4;
  const items = Array.from({ length: sample }, (_, index) => (
    <div key={index} className={layout === "row" ? "my-3" : undefined}>
      <Embed kind={kind} />
      {slots ? (
        <Caption>optional per-item caption — available field, unused today</Caption>
      ) : null}
    </div>
  ));

  return (
    <Block code="PB2" label="Media embed listing">
      {layout === "grid" ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-10">
          {items}
        </div>
      ) : (
        items
      )}
      <div className="text-xs italic text-neutral-500">
        … {total} items in this series, manual order, no filtering.
      </div>
      <Hint>
        Audio is one embed per row; video is a two-column grid (one column
        on mobile) of eight sampled embeds (decision 182). No bespoke
        wrapper — styling control over the provider chrome is limited
        (decision 14).
      </Hint>
    </Block>
  );
}
