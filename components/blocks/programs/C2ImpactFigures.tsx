import { Block } from "@/components/wireframe/Block";
import { Figs, type FigItem } from "@/components/wireframe/Figs";

type C2ImpactFiguresProps = {
  labels: readonly FigItem[];
};

export function C2ImpactFigures({ labels }: C2ImpactFiguresProps) {
  return (
    <Block code="C2" label="Impact figures">
      <Figs labels={labels} wide />
    </Block>
  );
}
