import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

type N8KeyDetailProps = {
  detail?: string;
  aside?: string;
};

export function N8KeyDetail({
  detail = "Deadline — 19 October 2026",
  aside = "results announced December 2026",
}: N8KeyDetailProps) {
  return (
    <Block code="N8" label="Key-detail line" optional>
      <div className="flex flex-wrap justify-between gap-3 border-[3px] border-black px-3 py-2.75">
        <strong>{detail}</strong>
        <span className="text-neutral-500">{aside}</span>
      </div>
      <Hint>
        Optional insert, fixed to the top of the body (decision 29): the one
        fact a reader arrives for should never sit below the fold. Specced as an
        announcement insert &mdash; in practice it is the event post that has
        the harder single fact, an opening night with a time and a venue.
      </Hint>
    </Block>
  );
}
