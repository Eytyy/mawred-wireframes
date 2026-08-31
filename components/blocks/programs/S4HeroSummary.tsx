import { Block } from "@/components/wireframe/Block";
import { Cell, Cells } from "@/components/wireframe/Cells";
import { Fill } from "@/components/wireframe/Fill";

type S4HeroSummaryProps = {
  cells: string[];
};

export function S4HeroSummary({ cells }: S4HeroSummaryProps) {
  return (
    <Block code="S4" label="Page-top summary">
      <Cells>
        {cells.map((cell) => (
          <Cell key={cell}>
            <span className="mb-1.5 block text-xs text-neutral-500">{cell}</span>
            <Fill width={80} />
          </Cell>
        ))}
      </Cells>
    </Block>
  );
}
