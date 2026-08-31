"use client";

import { MN6Record } from "@/components/blocks/network/MN6Record";
import { useWireframeState } from "@/lib/wireframe-state";

export function NetworkRecordPage() {
  const { state } = useWireframeState();

  return <MN6Record sparse={state.sparse} />;
}
