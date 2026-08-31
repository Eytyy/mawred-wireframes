import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C10ContractTermsProps = {
  lines: number;
};

export function C10ContractTerms({ lines }: C10ContractTermsProps) {
  return (
    <Block code="C10" label="Contract terms & obligations">
      <Prose lines={lines} />
    </Block>
  );
}
