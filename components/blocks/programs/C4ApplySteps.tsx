import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Prose } from "@/components/wireframe/Prose";

export type ApplyStep = {
  label: string;
  detail?: string;
};

export type ApplyHighlight = {
  label: string;
  text?: string | string[];
};

type C4ApplyStepsProps = {
  steps: ApplyStep[];
  documents?: string[];
  note?: string;
  highlight?: ApplyHighlight;
  nested?: boolean;
};

export function C4ApplySteps({
  steps,
  documents,
  note,
  highlight,
  nested,
}: C4ApplyStepsProps) {
  const inner = (
    <>
      {highlight ? (
        <div className="mb-3 bg-neutral-200 p-3.5">
          <strong>{highlight.label}</strong>
          <Prose lines={2} text={highlight.text} />
        </div>
      ) : null}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-2.5">
        {steps.map((step, index) => (
          <div
            key={`${step.label}-${index}`}
            className="min-w-0 border border-black p-2.5"
          >
            <div className="mb-1 text-xl font-bold">{index + 1}</div>
            {step.label}
            {step.detail ? (
              <div className="mt-1 text-xs text-neutral-500">{step.detail}</div>
            ) : (
              <Fill width={70} />
            )}
          </div>
        ))}
      </div>
      {documents ? (
        <>
          <span className="mt-3 block text-xs text-neutral-500">
            Documents to include
          </span>
          <ul className="m-0 mt-1 list-disc pl-5">
            {documents.map((doc) => (
              <li key={doc} className="mb-1.5 text-xs">
                {doc}
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {note ? <p className="mt-3 font-bold">{note}</p> : null}
    </>
  );

  if (nested) {
    return inner;
  }

  return (
    <Block code="C4" label="How to apply — steps" heading="How to apply" headingAs="h3">
      {inner}
    </Block>
  );
}
