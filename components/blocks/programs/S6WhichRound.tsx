import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";

export function S6WhichRound() {
  return (
    <Block code="S6" label="Which round should I apply to?">
      <KV label="If your travel is before [date]" />
      <KV label="If your travel is before [date]" />
      <KV label="If your travel is after [date]" />
      <Hint>Static guide, not an interactive date picker (decision 7).</Hint>
    </Block>
  );
}
