import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

export function HM8IdentityLeadIn() {
  return (
    <Block code="HM8" label="Identity lead-in">
      <Fill width={30} />
      <Prose lines={3} />
      <div className="mt-2.5">
        <Btn>Who we are</Btn>
      </div>
      <Hint>
        Kept light (decision 42): one paragraph and a route into the merged Who We
        Are page. The hero already carries identity as a positioning line, so this
        is the editorial hand-off, not a second identity statement. Set aside:
        folding it into the footer, which leaves Home with no editorial route into
        About.
      </Hint>
    </Block>
  );
}
