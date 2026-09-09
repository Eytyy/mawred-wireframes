import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type N9BodyProps = {
  text?: string[];
  flushTop?: boolean;
};

export function N9Body({ text, flushTop }: N9BodyProps) {
  return (
    <Block code="N9" label="Body" flushTop={flushTop}>
      {text ? <Prose text={text} /> : <Prose lines={6} />}
      <Hint>
        Free prose by default &mdash; most posts are prose only. The inserts
        around it (roster &middot; quotes &middot; schedule &middot; CTA) are
        available, never forced: each post carries the ones its content has. The
        lightweight analogue of the programme kit.
      </Hint>
    </Block>
  );
}
