import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type AB1IntroProps = {
  crumb: string;
  pageTitle: string;
  text: string[];
};

export function AB1Intro({ crumb, pageTitle, text }: AB1IntroProps) {
  return (
    <>
      <div
        className="mb-2 text-xs text-neutral-500"
        dangerouslySetInnerHTML={{ __html: crumb }}
      />
      <Block code="AB1" label="Intro">
        <h1
          className="inline-block py-2 text-4xl font-bold"
          dangerouslySetInnerHTML={{ __html: pageTitle }}
        />
        <Prose text={text} />
        <Hint>
          Stays prose — the anchor statement. Everything below it graduates out of
          prose into a styled treatment.
        </Hint>
      </Block>
    </>
  );
}
