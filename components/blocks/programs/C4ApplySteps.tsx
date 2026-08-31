import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";

type C4ApplyStepsProps = {
  steps: string[];
  withRepeat?: boolean;
  nested?: boolean;
};

export function C4ApplySteps({ steps, withRepeat, nested }: C4ApplyStepsProps) {
  const inner = (
    <>
      <ol className="m-0 list-decimal pl-5">
        {steps.map((step) => (
          <li key={step} className="mb-2.5">
            {step}
            <Fill width={70} />
          </li>
        ))}
      </ol>
      {withRepeat ? (
        <Btn primary className="mt-2">
          Apply now
        </Btn>
      ) : null}
    </>
  );

  if (nested) {
    return inner;
  }

  return (
    <Block code="C4" label="How to apply — steps">
      {inner}
    </Block>
  );
}
