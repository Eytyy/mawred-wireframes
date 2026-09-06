import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";

export type C3Row = {
  label: string;
  value?: string;
};

type C3AtAGlanceProps = {
  rows: C3Row[];
};

function FactValue({ value }: { value?: string }) {
  return value !== undefined ? <>{value}</> : <Fill />;
}

export function C3AtAGlance({ rows }: C3AtAGlanceProps) {
  return (
    <Block code="C3" label="At-a-glance facts" heading="At-a-glance facts" headingAs="h3">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-2.5">
        {rows.map((row) => (
          <div key={row.label} className="min-w-0 border border-black p-2.5">
            <div className="mb-1 text-xs text-neutral-500">{row.label}</div>
            <FactValue value={row.value} />
          </div>
        ))}
      </div>
    </Block>
  );
}
