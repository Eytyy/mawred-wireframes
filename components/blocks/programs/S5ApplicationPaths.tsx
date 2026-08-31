import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";
import { C4ApplySteps } from "./C4ApplySteps";

type S5ApplicationPathsProps = {
  paths: string[];
  steps?: string[];
};

export function S5ApplicationPaths({
  paths,
  steps = ["Step", "Step", "Step"],
}: S5ApplicationPathsProps) {
  return (
    <Block code="S5" label="Application paths">
      <strong>Shared core</strong>
      <Prose lines={3} />
      {paths.map((path) => (
        <div key={path} className="mt-3 border-t border-black pt-3">
          <h4 className="mb-2 border-l-4 border-black pl-2 text-sm">{path}</h4>
          <C4ApplySteps steps={steps} nested />
        </div>
      ))}
      <Hint>Stacked labelled sections, not tabs (decision 6).</Hint>
    </Block>
  );
}
