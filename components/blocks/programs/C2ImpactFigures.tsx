import { Block } from "@/components/wireframe/Block";
import { Figs } from "@/components/wireframe/Figs";

type C2ImpactFiguresProps = {
  labels: string[];
};

export function C2ImpactFigures({ labels }: C2ImpactFiguresProps) {
  return (
    <Block code="C2" label="Impact figures">
      <Figs labels={labels} />
    </Block>
  );
}
