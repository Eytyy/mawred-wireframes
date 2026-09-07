"use client";

import { AB6SectionIntro } from "@/components/blocks/about/AB6SectionIntro";
import { AB8LogoBand } from "@/components/blocks/about/AB8LogoBand";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Hint } from "@/components/wireframe/Hint";
import { LOGO_BANDS } from "@/lib/pages/about";
import { useWireframeState } from "@/lib/wireframe-state";

export function SupportersPage() {
  const { state } = useWireframeState();

  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
        {state.slots ? <AB6SectionIntro optional /> : null}
      </div>
      {LOGO_BANDS.map((band) => (
        <AB8LogoBand
          key={band.label}
          label={band.label}
          count={band.count}
          note={band.note}
        />
      ))}
      <Hint>
        Three bands drawn at their real relative weights — 5 donors, 1 supporter,
        ~25 partners (12 drawn). The single-logo band is the state worth
        checking: it holds its label and its grid rather than collapsing.
      </Hint>
    </PageWidth>
  );
}
