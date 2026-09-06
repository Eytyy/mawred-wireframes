"use client";

import { useState } from "react";
import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";
import { Tabs } from "@/components/wireframe/Tabs";
import { C4ApplySteps, type ApplyStep } from "./C4ApplySteps";

export type ApplicationPath =
  | string
  | { label: string; steps?: ApplyStep[]; documents?: string[] };

const DEFAULT_STEPS: ApplyStep[] = [
  { label: "Step" },
  { label: "Step" },
  { label: "Step" },
];

type S5ApplicationPathsProps = {
  paths: ApplicationPath[];
  core?: string | string[];
  steps?: ApplyStep[];
};

function pathLabel(path: ApplicationPath): string {
  return typeof path === "string" ? path : path.label;
}

export function S5ApplicationPaths({
  paths,
  core,
  steps = DEFAULT_STEPS,
}: S5ApplicationPathsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = paths[activeIdx] ?? paths[0];
  const pathSteps =
    active === undefined
      ? steps
      : typeof active === "string"
        ? steps
        : (active.steps ?? steps);
  const documents =
    active === undefined || typeof active === "string"
      ? undefined
      : active.documents;

  return (
    <Block code="S5" label="Application paths" heading="Application paths">
      <strong>Shared core</strong>
      <Prose lines={3} text={core} />
      <Tabs
        items={paths.map((path) => ({ label: pathLabel(path) }))}
        activeIdx={activeIdx}
        onSelect={setActiveIdx}
      >
        {active ? (
          <C4ApplySteps steps={pathSteps} documents={documents} nested />
        ) : null}
      </Tabs>
    </Block>
  );
}
