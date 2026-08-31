import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";
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

export function S5ApplicationPaths({
  paths,
  core,
  steps = DEFAULT_STEPS,
}: S5ApplicationPathsProps) {
  return (
    <Block code="S5" label="Application paths">
      <strong>Shared core</strong>
      <Prose lines={3} text={core} />
      {paths.map((path) => {
        const label = typeof path === "string" ? path : path.label;
        const pathSteps =
          typeof path === "string" ? steps : (path.steps ?? steps);
        const documents = typeof path === "string" ? undefined : path.documents;

        return (
          <div key={label} className="mt-3 border-t border-black pt-3">
            <h4 className="mb-2 border-l-4 border-black pl-2 text-sm">{label}</h4>
            <C4ApplySteps steps={pathSteps} documents={documents} nested />
          </div>
        );
      })}
      <Hint>Stacked labelled sections, not tabs (decision 6).</Hint>
    </Block>
  );
}
