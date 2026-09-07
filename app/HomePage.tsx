"use client";

import { HM1CinematicHero } from "@/components/blocks/home/HM1CinematicHero";
import { HM2ImpactStrip } from "@/components/blocks/home/HM2ImpactStrip";
import { HM4ProgrammesOverview } from "@/components/blocks/home/HM4ProgrammesOverview";
import { HM5FeaturedSpotlight } from "@/components/blocks/home/HM5FeaturedSpotlight";
import { HM6LatestNews } from "@/components/blocks/home/HM6LatestNews";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import {
  HOME_ALL_NEWS_HREF,
  HOME_FEATURE,
  HOME_FIGURES,
  HOME_HERO_FRAMES,
  HOME_NEWS_POSTS,
  HOME_POSITIONING,
  HOME_PROGRAMMES,
  HOME_WAYFINDING,
} from "@/lib/pages/home";
import { useWireframeState } from "@/lib/wireframe-state";

export function HomePage() {
  const { state } = useWireframeState();

  return (
    <PageWidth>
      <HM1CinematicHero
        staticfb={state.staticfb}
        positioning={HOME_POSITIONING}
        frames={HOME_HERO_FRAMES}
        wayfinding={HOME_WAYFINDING}
      />
      <HM2ImpactStrip figures={HOME_FIGURES} />
      <HM4ProgrammesOverview programmes={HOME_PROGRAMMES} />
      <HM5FeaturedSpotlight twentieth={state.twentieth} feature={HOME_FEATURE} />
      <HM6LatestNews posts={HOME_NEWS_POSTS} allHref={HOME_ALL_NEWS_HREF} />
      <Hint>
        Block I of the spec &mdash; newsletter · contact · social · footer
        &mdash; is the global chrome below, not a Home block, so it carries no
        code. Home has no breadcrumb and no H1 band: it opens on the hero
        (decision 33). Order follows the spec, impact (HM2) before programmes
        (HM4) &mdash; the story earns the ask (decision 39). HM3 is gone
        &mdash; its cards live on HM4, and the HM3 code is not reused (decision
        40 revised). HM7 is gone &mdash; Publications has no Home surface;
        the library and series stay reachable from the rail (decision 41
        revised). HM8&rsquo;s identity lead-in is gone &mdash; the hero states
        the identity and carries the route into About (decision 42 revised);
        the HM8 code is not reused. Spec &sect;5&rsquo;s claim that every
        inner section is represented on Home no longer holds.
      </Hint>
    </PageWidth>
  );
}
