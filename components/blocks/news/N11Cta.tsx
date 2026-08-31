import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Hint } from "@/components/wireframe/Hint";

export function N11Cta() {
  return (
    <Block code="N11" label="CTA" optional>
      <Btn primary>Register</Btn> <Btn>Detailed programme</Btn>
      <Hint>
        One or more actions &mdash; registration form, detailed-programme
        link, apply-portal link. Last in the body (decision 29): the action
        follows the explanation.
      </Hint>
    </Block>
  );
}
