import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C9SelectionProps = {
  label: string;
};

export function C9Selection({ label }: C9SelectionProps) {
  return (
    <Block code="C9" label="How applicants are selected">
      <strong>{label}</strong>
      <Prose lines={3} />
    </Block>
  );
}
