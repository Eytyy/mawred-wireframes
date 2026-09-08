import { Block } from '@/components/wireframe/Block';
import { Hint } from '@/components/wireframe/Hint';

export function AB2Vision({ text }: { text: string }) {
  return (
    <Block code="AB2" label="Our Vision" heading="Our Vision">
      <p className="text-xl xl:text-6xl">{text}</p>
      <Hint>
        Headline and sentence, same Block.heading as Mission and Values. No grey fill and no grid —
        one statement.
      </Hint>
    </Block>
  );
}
