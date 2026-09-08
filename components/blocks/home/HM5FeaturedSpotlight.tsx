import { Block } from '@/components/wireframe/Block';
import { Banner } from '@/components/wireframe/Banner';
import { Btn } from '@/components/wireframe/Btn';
import { Fill } from '@/components/wireframe/Fill';
import { Hint } from '@/components/wireframe/Hint';
import { SectionHeading } from '@/components/wireframe/SectionHeading';
import type { HomeSpotlight } from '@/lib/pages/home';

type HM5FeaturedSpotlightProps = {
  spotlight: HomeSpotlight;
};

export function HM5FeaturedSpotlight({ spotlight }: HM5FeaturedSpotlightProps) {
  return (
    <Block code="HM5" label="Featured / spotlight" looseAbove>
      <div className="flex flex-wrap gap-5 xl:gap-10">
        <div className="min-w-[320px] flex-[2_1_320px]">
          <Banner label="feature image" />
        </div>
        <div className="flex min-w-60 flex-[1_1_240px] flex-col gap-6">
          <SectionHeading className="mb-0">{spotlight.title}</SectionHeading>
          <div>
            <Fill width={94} />
            <Fill width={70} />
          </div>
          <Btn primary href={spotlight.href} className="self-start">
            Read more
          </Btn>
        </div>
      </div>
      <Hint>
        The homepage&rsquo;s one curation lever: an editor chooses what leads. This slot&rsquo;s
        current occupant is Mawred&rsquo;s 20th, linking to <code>/mawreds-20th</code>. The slot is
        still one block; swapping later is a config change on <code>HOME_SPOTLIGHT</code>, not a
        state (decision 44 / 133 revised). Campaign body is fill bars &mdash; no campaign copy is
        sourced, so that is a <b>gap</b>, not unpublished copy. <code>/mawreds-20th</code> remains a
        stub. Whether the 20th is a temporary campaign or something else is still a{' '}
        <b>client call</b>; the structure no longer depends on the answer.
      </Hint>
    </Block>
  );
}
