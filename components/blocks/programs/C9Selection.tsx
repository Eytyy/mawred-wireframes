import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C9SelectionProps = {
  label: string;
  text?: string | string[];
  process?: string[];
  criteria?: string[];
};

export function C9Selection({
  label,
  text,
  process,
  criteria,
}: C9SelectionProps) {
  return (
    <Block code="C9" label="How applicants are selected">
      <strong>{label}</strong>
      <Prose lines={3} text={text} />
      {process ? (
        <ol className="m-0 list-decimal pl-5">
          {process.map((step) => (
            <li key={step} className="mb-1.5">
              {step}
            </li>
          ))}
        </ol>
      ) : null}
      {criteria ? (
        <ul className="m-0 pl-5">
          {criteria.map((criterion) => (
            <li key={criterion} className="mb-1.5">
              {criterion}
            </li>
          ))}
        </ul>
      ) : null}
    </Block>
  );
}
