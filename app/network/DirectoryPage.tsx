"use client";

import { useState } from "react";
import { MN1IntroPurpose } from "@/components/blocks/network/MN1IntroPurpose";
import { MN2ImpactStrip } from "@/components/blocks/network/MN2ImpactStrip";
import { MN3FilterBank } from "@/components/blocks/network/MN3FilterBank";
import { MN4CountRow } from "@/components/blocks/network/MN4CountRow";
import { MN5DirectoryListing } from "@/components/blocks/network/MN5DirectoryListing";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import {
  NETWORK_CORRECTION_CONTACT,
  NETWORK_INTRO,
} from "@/lib/pages/network";
import { useWireframeState } from "@/lib/wireframe-state";

export function DirectoryPage() {
  const { state } = useWireframeState();
  const [orgs, setOrgs] = useState(false);

  function handleTabSelect(idx: number) {
    setOrgs(idx === 1);
  }

  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
        <MN1IntroPurpose
          text={NETWORK_INTRO}
          contact={NETWORK_CORRECTION_CONTACT}
        />
      </div>
      <MN2ImpactStrip />
      <MN3FilterBank />
      <MN4CountRow
        empty={state.empty}
        filtered={state.filtered}
        orgs={orgs}
      />
      <MN5DirectoryListing
        empty={state.empty}
        filtered={state.filtered}
        orgs={orgs}
        onTabSelect={handleTabSelect}
      />
    </PageWidth>
  );
}
