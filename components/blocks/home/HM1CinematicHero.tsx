import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Hint } from "@/components/wireframe/Hint";
import type { HeroFrame } from "@/lib/pages/home";

type WayfindingLink = { label: string; href: string };

type HM1CinematicHeroProps = {
  staticfb: boolean;
  positioning: string;
  frames: HeroFrame[];
  wayfinding: readonly WayfindingLink[];
};

export function HM1CinematicHero({
  staticfb,
  positioning,
  frames,
  wayfinding,
}: HM1CinematicHeroProps) {
  return (
    <Block code="HM1" label="Cinematic hero — image sequence + positioning line">
      <div className="border border-black">
        <div className="flex aspect-[16/9] min-h-[360px] flex-col items-start justify-between border-b border-black bg-neutral-200 p-3">
          <span className="text-xs text-neutral-500">
            {staticfb
              ? "single static image — motion fallback"
              : `full-bleed image frame — 1 of ${frames.length} — funded artist / work / organization`}
          </span>
          <strong className="max-w-[46rem] border border-black bg-white px-2 py-1 text-2xl font-bold">
            {positioning}
          </strong>
        </div>
        <div className="px-3 py-3.5">
          {wayfinding.map((item, index) => (
            <span key={item.href}>
              {index > 0 ? " " : null}
              <Btn primary={index === 0} href={item.href}>
                {item.label}
              </Btn>
            </span>
          ))}
        </div>
      </div>
      <Hint>
        Positioning line is the published identity sentence (Who We Are intro,
        first paragraph) tightened to hero length; graduating it stays a{" "}
        <b>copy call</b>. It sits inside the frame at the largest type on the
        page, so the hero states who Mawred is rather than only showing work
        &mdash; HM8&rsquo;s identity lead-in retires into it (decision 42
        revised). Five frames stay sourced from the Production Awards 2026
        roster (Alayham Ali, Sarah Zeryab, Karima Ahdad) and the Network sample
        (Al Kasaba, Nour Shantout), so the frame count counts something real,
        but <b>no caption renders</b> &mdash; the frame is the imagery and the
        line, nothing else (decision 36 revised). Whether a work is credited in
        the frame, under it, or not at all is left open. Imagery still comes
        from the Network record source; HM2 no longer shares it (decision 38
        revised). The frame-count note
        top-left is a label for what the box stands for, not a control: the
        marker bar is gone, so the sequence is a slow cross-fade with nothing to
        click (decision 35 revised). The wayfinding label &ldquo;Grants &amp;
        Opportunities&rdquo; vs &ldquo;Programs&rdquo; is a <b>client call</b>;
        &ldquo;Who we are&rdquo; is the route into About that HM8 used to carry.
        Full-bleed at build &mdash; drawn at content width here, since lo-fi
        shows order and hierarchy, not bleed. Toggle the static state for the
        no-motion fallback.
      </Hint>
    </Block>
  );
}
