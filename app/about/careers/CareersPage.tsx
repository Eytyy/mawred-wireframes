"use client";

import { AB6SectionIntro } from "@/components/blocks/about/AB6SectionIntro";
import { AB12OpenPositions } from "@/components/blocks/about/AB12OpenPositions";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { Hint } from "@/components/wireframe/Hint";
import { useWireframeState } from "@/lib/wireframe-state";

export function CareersPage() {
  const { state } = useWireframeState();

  return (
    <>
      <div>
        <PageHeaderBand />
        {state.slots ? <AB6SectionIntro optional /> : null}
      </div>
      <AB12OpenPositions
        onejob={state.onejob}
        nopositions={state.nopositions}
      />
      <Hint>
        Structurally the same family as the News and Publications listings, but
        spec&apos;d standalone — no shared block commitment. Whether this page
        has content to launch with is a <b>client call</b>; all three states are
        laid out so it can ship either way.
      </Hint>
    </>
  );
}
