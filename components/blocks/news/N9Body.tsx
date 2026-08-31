import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

export function N9Body() {
  return (
    <Block code="N9" label="Body">
      <Prose lines={6} />
      <Hint>
        Free prose by default &mdash; most posts are prose only. The three
        structured inserts (key-detail &middot; schedule &middot; CTA) are
        available, never forced: toggle the announcement state to see them. The
        lightweight analogue of the programme kit.
      </Hint>
    </Block>
  );
}
