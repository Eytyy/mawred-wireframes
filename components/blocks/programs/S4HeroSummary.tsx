import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";

type S4HeroSummaryProps = {
  cells: string[];
};

export function S4HeroSummary({ cells }: S4HeroSummaryProps) {
  return (
    <Block code="S4" label="Page-top summary">
      <div className="flex flex-wrap">
        {cells.map((cell) => (
          <div
            key={cell}
            className="-mb-px -mr-px flex-[1_1_140px] border border-black p-2.5"
          >
            <span className="mb-1.5 block text-xs text-neutral-500">{cell}</span>
            <Fill width={80} />
          </div>
        ))}
      </div>
    </Block>
  );
}
