import { Block } from "@/components/wireframe/Block";
import { Accordion } from "@/components/wireframe/Accordion";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

export type FaqItem = {
  q: string;
  a: string | string[];
};

type C11FaqsProps = {
  count?: number;
  items?: FaqItem[];
};

export function C11Faqs({ count = 4, items }: C11FaqsProps) {
  if (items) {
    return (
      <Block code="C11" label="FAQs" heading="FAQs">
        <Accordion
          plain
          items={items.map((item) => ({
            title: item.q,
            content: <Prose text={item.a} />,
          }))}
        />
        <Hint>
          All collapsed by default. These are the {items.length} Q&amp;As the
          live FAQ tab carries in English.
        </Hint>
      </Block>
    );
  }

  return (
    <Block code="C11" label="FAQs" heading="FAQs">
      <Accordion
        plain
        items={Array.from({ length: count }, (_, index) => ({
          title: `Question ${index + 1}`,
          content: <Prose lines={2} />,
        }))}
      />
      <Hint>
        All collapsed by default. Fill bars stand for questions that don&rsquo;t
        exist in English — the live FAQ tab carries only a pointer to the Arabic
        page, so there is no English content to populate. Supplying it is a
        client call (spec Part 4.1).
      </Hint>
    </Block>
  );
}
