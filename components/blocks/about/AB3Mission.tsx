import { Block } from '@/components/wireframe/Block';
import { Hint } from '@/components/wireframe/Hint';

export function AB3Mission({ points }: { points: string[] }) {
  return (
    <Block code="AB3" label="Mission" heading="Mission">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map((point, index) => (
          <div key={point} className="border border-black p-2.75">
            <span className="mb-1.5 block text-xl xl:text-2xl text-neutral-500">{`0${index + 1}`}</span>
            {point}
          </div>
        ))}
      </div>
      <Hint>
        Four numbered cards with gap, matching the values grid below. The 01–04 eyebrow stays so
        four short points read as one set. Shared <code>Cells</code> is gone &mdash; HM4 left it for
        a card grid (decision 80 revised).
      </Hint>
    </Block>
  );
}
