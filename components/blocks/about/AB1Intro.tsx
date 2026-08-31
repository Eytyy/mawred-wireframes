import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

export function AB1Intro() {
  return (
    <Block code="AB1" label="Intro">
      <Prose lines={3} />
      <Hint>
        Stays prose — the anchor statement. Everything below it graduates out of
        prose into a styled treatment.
      </Hint>
    </Block>
  );
}
