"use client";

import { AB6SectionIntro } from "@/components/blocks/about/AB6SectionIntro";
import { AB9InitiativeDirectory } from "@/components/blocks/about/AB9InitiativeDirectory";
import { Hint } from "@/components/wireframe/Hint";
import { useWireframeState } from "@/lib/wireframe-state";

export function PastInitiativesPage() {
  const { state } = useWireframeState();

  return (
    <>
      {state.slots ? <AB6SectionIntro optional /> : null}
      <AB9InitiativeDirectory />
      <Hint>
        Retired initiatives are confirmed <b>not</b> structurally like active
        programme pages — image + rich text, not the kit. Nothing here depends
        on the archived-programme template.
      </Hint>
    </>
  );
}
