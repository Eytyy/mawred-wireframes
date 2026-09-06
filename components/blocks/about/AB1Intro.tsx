import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type AB1IntroProps = {
  text: string[];
};

export function AB1Intro({ text }: AB1IntroProps) {
  return (
    <Block code="AB1" label="Intro">
      <Prose text={text} />
      <Hint>
        Stays prose — the anchor statement. Everything below it graduates out of
        prose into a styled treatment.
      </Hint>
    </Block>
  );
}
