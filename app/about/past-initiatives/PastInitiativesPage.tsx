"use client";

import { AB6SectionIntro } from "@/components/blocks/about/AB6SectionIntro";
import { AB9InitiativeDirectory } from "@/components/blocks/about/AB9InitiativeDirectory";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import { useWireframeState } from "@/lib/wireframe-state";

export function PastInitiativesPage() {
  const { state } = useWireframeState();

  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
        {state.slots ? <AB6SectionIntro optional /> : null}
      </div>
      <AB9InitiativeDirectory />
      <Hint>
        Retired initiatives are confirmed <b>not</b> structurally like active
        programme pages — image + rich text, not the kit. Nothing here depends
        on the archived-programme template.
      </Hint>
    </PageWidth>
  );
}
