import { Block } from '@/components/wireframe/Block';
import { Hint } from '@/components/wireframe/Hint';
import type { HeroFrame, PositioningPart } from '@/lib/pages/home';
import Link from 'next/link';

type HM1CinematicHeroProps = {
  staticfb: boolean;
  positioning: PositioningPart[];
  frames: HeroFrame[];
};

export function HM1CinematicHero({ staticfb, positioning, frames }: HM1CinematicHeroProps) {
  return (
    <Block code="HM1" label="Cinematic hero — image sequence + positioning line" flushTop>
      <div className="flex aspect-[16/9] min-h-[360px] w-full flex-col items-start justify-between border border-black bg-neutral-200 p-5 lg:p-10">
        <span className="text-xs text-neutral-500">
          {staticfb
            ? 'single static image — motion fallback'
            : `full-bleed image frame — 1 of ${frames.length} — funded artist / work / organization`}
        </span>
        <div className="max-w-200 border border-black bg-white p-5 lg:p-10">
          <p className="text-4xl font-bold">
            {positioning.map((part) =>
              part.href ? (
                <Link
                  key={part.href}
                  href={part.href}
                  className="border-b-2 border-black no-underline"
                >
                  {part.text}
                </Link>
              ) : (
                <span key={part.text}>{part.text}</span>
              ),
            )}
          </p>
        </div>
      </div>
      <Hint>
        Positioning line is the identity copy as supplied: two sentences plus More about us &rarr;.
        The linked phrases are support artistic creativity (Production Awards), encourage cultural
        exchange (Network), and More about us (Who We Are), each a 2px underline (decision 186
        revised). The published Who We Are intro&rsquo;s freedom-of-expression clause is not in this
        cut. It sits inside the frame at the largest type on the page, so the hero states who Mawred
        is rather than only showing work &mdash; HM8&rsquo;s identity lead-in retires into it
        (decision 42 revised). Five frames stay sourced from the Production Awards 2026 roster
        (Alayham Ali, Sarah Zeryab, Karima Ahdad) and the Network sample (Al Kasaba, Nour Shantout),
        so the frame count counts something real, but <b>no caption renders</b> &mdash; the frame is
        the imagery, the line and the routes, nothing else (decision 36 revised). Whether a work is
        credited in the frame, under it, or not at all is left open. Imagery still comes from the
        Network record source; HM2 no longer shares it (decision 38 revised). The frame-count note
        top-left is a label for what the box stands for, not a control: the marker bar is gone, so
        the sequence is a slow cross-fade with nothing to click (decision 35 revised). The frame is
        full-bleed to the content column (decision 185). Toggle the static state for the no-motion
        fallback.
      </Hint>
    </Block>
  );
}
