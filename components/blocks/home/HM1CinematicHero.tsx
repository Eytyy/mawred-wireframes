import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import {
  HOME_HERO_FRAMES,
  HOME_WAYFINDING,
} from "@/lib/pages/home";

type HM1CinematicHeroProps = {
  staticfb: boolean;
};

export function HM1CinematicHero({ staticfb }: HM1CinematicHeroProps) {
  return (
    <Block code="HM1" label="Cinematic hero — image sequence + positioning line">
      <div className="border border-black">
        <div className="flex h-[300px] flex-col items-start justify-between border-b border-black bg-neutral-200 p-3">
          <span className="text-xs text-neutral-500">
            {staticfb
              ? "single static image — motion fallback"
              : "full-bleed image frame — 1 of 5 — funded artist / work / organization"}
          </span>
          <span className="border border-black bg-white px-2 py-1 text-xs text-neutral-500">
            caption — artist · work · programme
          </span>
        </div>
        {!staticfb ? (
          <div className="flex items-center gap-2 border-b border-black px-3 py-2">
            {Array.from({ length: HOME_HERO_FRAMES }, (_, index) => (
              <span
                key={index}
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
          <strong className="text-sm">
            Positioning line — who Mawred is, in one sentence
          </strong>
          <Fill width={62} />
          <div className="mt-2.75">
            <Btn primary>{HOME_WAYFINDING[0].label}</Btn>{" "}
            <Btn>{HOME_WAYFINDING[1].label}</Btn>
          </div>
        </div>
      </div>
      <Hint>
        Full-bleed at build &mdash; drawn at content width here, since lo-fi shows
        order and hierarchy, not bleed. Auto-advance with frame markers, not
        scroll-driven (decision 35): a scroll-driven hero competes with HM2
        directly beneath it for the same gesture, and hover-advance fails on
        touch. Captions sit persistently in the frame, not on hover (decision 36)
        &mdash; naming the artist is what makes the imagery read as impact rather
        than decoration. Imagery comes from the same Network record source as
        HM2. The wayfinding label &ldquo;Grants &amp; Opportunities&rdquo; vs
        &ldquo;Programs&rdquo; is a <b>client call</b>. Toggle the static state
        for the no-motion fallback.
      </Hint>
    </Block>
  );
}
