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
  const caption = frames[0]?.caption;

  return (
    <Block code="HM1" label="Cinematic hero — image sequence + positioning line">
      <div className="border border-black">
        <div className="flex h-[300px] flex-col items-start justify-between border-b border-black bg-neutral-200 p-3">
          <span className="text-xs text-neutral-500">
            {staticfb
              ? "single static image — motion fallback"
              : `full-bleed image frame — 1 of ${frames.length} — funded artist / work / organization`}
          </span>
          {caption ? (
            <span className="border border-black bg-white px-2 py-1 text-xs">
              {caption}
            </span>
          ) : null}
        </div>
        {!staticfb ? (
          <div className="flex items-center gap-2 border-b border-black px-3 py-2">
            {frames.map((frame, index) => (
              <span
                key={frame.caption}
                className={`inline-block h-[9px] w-[9px] border border-black ${
                  index === 0 ? "bg-black" : ""
                }`}
              />
            ))}
            <span className="text-xs text-neutral-500">
              auto-advance · click a marker to jump · pauses on interaction
            </span>
          </div>
        ) : null}
        <div className="px-3 py-3.5">
          <strong className="text-sm">{positioning}</strong>
          <div className="mt-2.75">
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
      </div>
      <Hint>
        Positioning line is the published identity sentence (Who We Are intro,
        first paragraph) tightened to hero length; graduating it stays a{" "}
        <b>copy call</b>. Five frames from the Production Awards 2026 roster
        (Alayham Ali, Sarah Zeryab, Karima Ahdad) and the Network sample (Al
        Kasaba, Nour Shantout), so the marker bar counts something real; frame
        1&rsquo;s caption renders. Imagery still comes from the same Network
        record source as HM2. The trailing headline Fill is gone &mdash; a
        leftover from the unpopulated kit (decisions 107/113). The wayfinding
        label &ldquo;Grants &amp; Opportunities&rdquo; vs &ldquo;Programs&rdquo;
        is a <b>client call</b>. Full-bleed at build &mdash; drawn at content
        width here, since lo-fi shows order and hierarchy, not bleed.
        Auto-advance with frame markers, not scroll-driven (decision 35);
        captions sit persistently in the frame, not on hover (decision 36).
        Toggle the static state for the no-motion fallback.
      </Hint>
    </Block>
  );
}
