import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

export function N8KeyDetail() {
  return (
    <Block code="N8" label="Key-detail line" optional>
      <div className="flex flex-wrap justify-between gap-3 border-[3px] border-black px-3 py-2.75">
        <strong>Deadline — 19 October 2026</strong>
        <span className="text-neutral-500">results announced December 2026</span>
      </div>
      <Hint>
        Optional insert, fixed to the top of the body (decision 29): the one
        fact an announcement reader arrives for should never sit below the fold.
      </Hint>
    </Block>
  );
}
