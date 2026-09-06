import { Block } from "@/components/wireframe/Block";
import { Cell, Cells } from "@/components/wireframe/Cells";
import { Fill } from "@/components/wireframe/Fill";

export type HeroCell =
  | string
  | { label: string; lead?: string; items: string[] };

type S4HeroSummaryProps = {
  cells: HeroCell[];
};

export function S4HeroSummary({ cells }: S4HeroSummaryProps) {
  return (
    <Block code="S4" label="Page-top summary">
      <Cells>
        {cells.map((cell) => {
          const label = typeof cell === "string" ? cell : cell.label;

          return (
            <Cell key={label}>
              <span className="mb-1.5 block text-xs text-neutral-500">{label}</span>
              {typeof cell === "string" ? (
                <Fill width={80} />
              ) : (
                <>
                  {cell.lead ? (
                    <p className="mb-1 text-xs font-bold">{cell.lead}</p>
                  ) : null}
                  <ul className="m-0 list-disc pl-5">
                    {cell.items.map((item) => (
                      <li key={item} className="mb-1.5 text-xs">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Cell>
          );
        })}
      </Cells>
    </Block>
  );
}
