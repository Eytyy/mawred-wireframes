import { Block } from '@/components/wireframe/Block';

export type HeroCell = {
  label: string;
  lead?: string;
  items: string[];
};

type S4HeroSummaryProps = {
  cells: HeroCell[];
};

export function S4HeroSummary({ cells }: S4HeroSummaryProps) {
  return (
    <Block code="S4" label="Page-top summary">
      <div className="flex flex-col gap-8">
        {cells.map((cell) => (
          <div key={cell.label}>
            <h3 className="mb-2.5 text-lg font-bold">{cell.label}</h3>
            {cell.lead ? <p className="mb-2.5 font-bold">{cell.lead}</p> : null}
            <div className="flex flex-wrap gap-2.5">
              {cell.items.map((item) => (
                <div key={item} className="w-fit max-w-full shrink-0 border border-black p-2.5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
}
