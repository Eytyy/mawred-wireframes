import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

export function AB2Vision() {
  return (
    <Block code="AB2" label="Vision">
      <div className="border-[3px] border-black px-4.5 py-4">
        <Fill width={88} />
        <Fill width={46} />
      </div>
      <Hint>
        One sentence set apart as an emphasised band, rather than a heading with
        a line of body text beneath it.
      </Hint>
    </Block>
  );
}
