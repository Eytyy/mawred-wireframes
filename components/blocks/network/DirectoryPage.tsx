"use client";

import { useState } from "react";
import { MN1IntroPurpose } from "@/components/blocks/network/MN1IntroPurpose";
import { MN2ImpactStrip } from "@/components/blocks/network/MN2ImpactStrip";
import { MN3FilterBank } from "@/components/blocks/network/MN3FilterBank";
import { MN4CountRow } from "@/components/blocks/network/MN4CountRow";
import { MN5DirectoryListing } from "@/components/blocks/network/MN5DirectoryListing";
import { useWireframeState } from "@/lib/wireframe-state";

export function DirectoryPage() {
  const { state } = useWireframeState();
  const [orgs, setOrgs] = useState(false);

  function handleTabSelect(idx: number) {
    setOrgs(idx === 1);
  }

  return (
    <>
      <MN1IntroPurpose />
      <MN2ImpactStrip />
      <MN3FilterBank />
      <MN4CountRow
        empty={state.empty}
        filtered={state.filtered}
        orgs={orgs}
      />
      <MN5DirectoryListing
        empty={state.empty}
        orgs={orgs}
        onTabSelect={handleTabSelect}
      />
    </>
  );
}
