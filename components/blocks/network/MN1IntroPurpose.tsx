import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

export function MN1IntroPurpose() {
  return (
    <Block code="MN1" label="Intro / purpose">
      <Fill width={38} />
      <Prose lines={3} />
      <div className="flex justify-between gap-3 border-b border-neutral-200 py-1.75">
        <span className="text-xs">
          To correct a profile — communications@mawred.org
        </span>
        <span />
      </div>
      <Hint>
        The responsible-data commitment (consent · privacy · ownership) is
        permanent, first-class prose here, not a footnote at the page tail. The
        live &ldquo;under development&rdquo; notice is retired — not drawn.
      </Hint>
    </Block>
  );
}
