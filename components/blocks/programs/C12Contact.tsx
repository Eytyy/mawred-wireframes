import { Block } from "@/components/wireframe/Block";
import { KV } from "@/components/wireframe/KV";

type C12ContactProps = {
  contact?: string;
};

export function C12Contact({ contact }: C12ContactProps) {
  return (
    <Block code="C12" label="Contact">
      <KV label="Programme contact" value={contact} />
    </Block>
  );
}
