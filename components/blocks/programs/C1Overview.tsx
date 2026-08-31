import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Prose } from "@/components/wireframe/Prose";

export function C1Overview() {
  return (
    <Block code="C1" label="Overview">
      <Fill width={30} />
      <Prose lines={4} />
    </Block>
  );
}
