import { AB1Intro } from "@/components/blocks/about/AB1Intro";
import { AB2Vision } from "@/components/blocks/about/AB2Vision";
import { AB3Mission } from "@/components/blocks/about/AB3Mission";
import { AB4Values } from "@/components/blocks/about/AB4Values";
import { AB5HistoryTimeline } from "@/components/blocks/about/AB5HistoryTimeline";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import {
  HISTORY_ENTRIES,
  HISTORY_LEAD,
  MISSION_POINTS,
  VALUES,
  VISION,
  WHO_WE_ARE_INTRO,
} from "@/lib/pages/about";

export function WhoWeArePage() {
  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
        <AB1Intro text={WHO_WE_ARE_INTRO} />
      </div>
      <AB2Vision text={VISION} />
      <AB3Mission points={MISSION_POINTS} />
      <AB4Values values={VALUES} />
      <AB5HistoryTimeline lead={HISTORY_LEAD} entries={HISTORY_ENTRIES} />
      <Hint>
        Who We Are and History merged into one page (spec §3.1): identity first,
        origin story below it. About is its own visual world — the AB blocks are
        not the programme kit and share nothing with it (decision 45). No About
        landing page: the dropdown links straight to the five sub-pages and
        Home&rsquo;s identity lead-in routes here (decision 54).
      </Hint>
    </PageWidth>
  );
}
