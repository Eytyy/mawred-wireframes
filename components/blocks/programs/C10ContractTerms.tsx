import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C10ContractTermsProps = {
  lines?: number;
  items?: string[];
};

export function C10ContractTerms({ lines = 5, items }: C10ContractTermsProps) {
  return (
    <Block
      code="C10"
      label="Contract terms & obligations"
      heading="Contract terms & obligations"
    >
      {items ? (
        <ul className="m-0 list-disc pl-5">
          {items.map((item) => (
            <li key={item} className="mb-1.5">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <Prose lines={lines} />
      )}
    </Block>
  );
}
