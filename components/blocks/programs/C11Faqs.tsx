import { Block } from "@/components/wireframe/Block";
import { Accordion } from "@/components/wireframe/Accordion";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type C11FaqsProps = {
  count?: number;
};

export function C11Faqs({ count = 4 }: C11FaqsProps) {
  return (
    <Block code="C11" label="FAQs">
      <Accordion
        items={Array.from({ length: count }, (_, index) => ({
          title: `Question ${index + 1}`,
          content: <Prose lines={2} />,
        }))}
      />
      <Hint>
        All collapsed by default. English FAQ content is a client call (spec
        Part 4.1).
      </Hint>
    </Block>
  );
}
