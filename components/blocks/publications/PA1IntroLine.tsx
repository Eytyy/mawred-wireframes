import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

type PA1IntroLineProps = {
  slots: boolean;
};

export function PA1IntroLine({ slots }: PA1IntroLineProps) {
  if (!slots) {
    return null;
  }

  return (
    <Block code="PA1" label="Intro line — available slot" optional>
      <Fill width={72} />
      <Hint>
        Not present today. Available slot if the library should open with a line
        of context.
      </Hint>
    </Block>
  );
}
