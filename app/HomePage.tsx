"use client";

import { HM1CinematicHero } from "@/components/blocks/home/HM1CinematicHero";
import { HM2ImpactStrip } from "@/components/blocks/home/HM2ImpactStrip";
import { HM3OpenOpportunities } from "@/components/blocks/home/HM3OpenOpportunities";
import { HM4ProgrammesOverview } from "@/components/blocks/home/HM4ProgrammesOverview";
import { HM5FeaturedSpotlight } from "@/components/blocks/home/HM5FeaturedSpotlight";
import { HM6LatestNews } from "@/components/blocks/home/HM6LatestNews";
import { HM7LatestPublications } from "@/components/blocks/home/HM7LatestPublications";
import { HM8IdentityLeadIn } from "@/components/blocks/home/HM8IdentityLeadIn";
import { Hint } from "@/components/wireframe/Hint";
import {
  HOME_ALL_NEWS_HREF,
  HOME_ALL_PUBLICATIONS_HREF,
  HOME_FEATURE,
  HOME_FIGURES,
  HOME_HERO_FRAMES,
  HOME_IDENTITY_TEXT,
  HOME_MOSAIC,
  HOME_NEWS_POSTS,
  HOME_OPEN_CALLS,
  HOME_POSITIONING,
  HOME_PROGRAMMES,
  HOME_PUB_STRIP,
  HOME_WAYFINDING,
  HOME_WHO_WE_ARE_HREF,
} from "@/lib/pages/home";
import { useWireframeState } from "@/lib/wireframe-state";

export function HomePage() {
  const { state } = useWireframeState();

  return (
    <>
      <HM1CinematicHero
        staticfb={state.staticfb}
        positioning={HOME_POSITIONING}
        frames={HOME_HERO_FRAMES}
        wayfinding={HOME_WAYFINDING}
      />
      <HM2ImpactStrip
        staticfb={state.staticfb}
        figures={HOME_FIGURES}
        mosaic={HOME_MOSAIC}
      />
      <HM3OpenOpportunities nocalls={state.nocalls} calls={HOME_OPEN_CALLS} />
      <HM4ProgrammesOverview programmes={HOME_PROGRAMMES} />
      <HM5FeaturedSpotlight twentieth={state.twentieth} feature={HOME_FEATURE} />
      <HM6LatestNews posts={HOME_NEWS_POSTS} allHref={HOME_ALL_NEWS_HREF} />
      <HM7LatestPublications
        items={[...HOME_PUB_STRIP]}
        allHref={HOME_ALL_PUBLICATIONS_HREF}
      />
      <HM8IdentityLeadIn
        text={HOME_IDENTITY_TEXT}
        href={HOME_WHO_WE_ARE_HREF}
      />
      <Hint>
        Block I of the spec &mdash; newsletter · contact · social · footer
        &mdash; is the global chrome below, not a Home block, so it carries no
        code. Home has no breadcrumb and no H1 band: it opens on the hero
        (decision 33). Order follows the spec, impact (HM2) before
        opportunities (HM3) &mdash; the story earns the ask (decision 39).
        Every block here surfaces a page specced elsewhere; nothing on Home
        changes an inner spec.
      </Hint>
    </>
  );
}
