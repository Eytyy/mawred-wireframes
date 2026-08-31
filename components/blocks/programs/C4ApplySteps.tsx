import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";

export type ApplyStep = {
  label: string;
  detail?: string;
};

type C4ApplyStepsProps = {
  steps: ApplyStep[];
  documents?: string[];
  note?: string;
  withRepeat?: boolean;
  nested?: boolean;
};

export function C4ApplySteps({
  steps,
  documents,
  note,
  withRepeat,
  nested,
}: C4ApplyStepsProps) {
  const inner = (
    <>
      <ol className="m-0 list-decimal pl-5">
        {steps.map((step, index) => (
          <li key={`${step.label}-${index}`} className="mb-2.5">
            {step.label}
            {step.detail ? (
              <div className="text-xs text-neutral-500">{step.detail}</div>
            ) : (
              <Fill width={70} />
            )}
          </li>
        ))}
      </ol>
      {documents ? (
        <>
          <span className="mt-2 block text-xs text-neutral-500">
            Documents to include
          </span>
          <ul className="m-0 mt-1 pl-5">
            {documents.map((doc) => (
              <li key={doc} className="mb-1.5 text-xs">
                {doc}
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {note ? <p className="mt-2 font-bold">{note}</p> : null}
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
