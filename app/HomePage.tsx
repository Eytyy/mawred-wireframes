"use client";

import { HM1CinematicHero } from "@/components/blocks/home/HM1CinematicHero";
import { HM2ImpactStrip } from "@/components/blocks/home/HM2ImpactStrip";
import { HM4OpenOpportunities } from "@/components/blocks/home/HM4OpenOpportunities";
import { HM5FeaturedSpotlight } from "@/components/blocks/home/HM5FeaturedSpotlight";
import { HM6LatestNews } from "@/components/blocks/home/HM6LatestNews";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import {
  HOME_ALL_NEWS_HREF,
  HOME_FIGURES,
  HOME_HERO_FRAMES,
  HOME_NEWS_POSTS,
  HOME_OPPORTUNITIES,
  HOME_POSITIONING,
  HOME_SPOTLIGHT,
} from "@/lib/pages/home";
import { useWireframeState } from "@/lib/wireframe-state";

export function HomePage() {
  const { state } = useWireframeState();

  return (
    <>
      <div className="-mt-4 lg:-mt-10">
        <HM1CinematicHero
          staticfb={state.staticfb}
          positioning={HOME_POSITIONING}
          frames={HOME_HERO_FRAMES}
        />
      </div>
      <PageWidth>
        <HM2ImpactStrip figures={HOME_FIGURES} />
        <HM4OpenOpportunities opportunities={HOME_OPPORTUNITIES} />
        <HM5FeaturedSpotlight spotlight={HOME_SPOTLIGHT} />
        <HM6LatestNews posts={HOME_NEWS_POSTS} allHref={HOME_ALL_NEWS_HREF} />
        <Hint>
          Block I of the spec &mdash; newsletter · contact · social · footer
          &mdash; is the global chrome below, not a Home block, so it carries no
          code. Home has no breadcrumb and no H1 band: it opens on the hero
          (decision 33). Order follows the spec, impact (HM2) before open grants
          (HM4) &mdash; the story earns the ask (decision 39). HM3 is gone; HM4
          is the open-calls strip, not the all-four overview, and the HM3 code
          is not reused (decision 40 revised). HM7 is gone &mdash; Publications
          has no Home surface; the library and series stay reachable from the
          rail (decision 41 revised). HM8&rsquo;s identity lead-in is gone
          &mdash; the hero states the identity and carries the three routes
          in the positioning line (decision 186); the HM8 code is not reused.
          Spec &sect;5&rsquo;s claim that every inner section is represented on
          Home no longer holds.
        </Hint>
      </PageWidth>
    </>
  );
}
