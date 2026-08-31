import { Block } from "@/components/wireframe/Block";
import { KV } from "@/components/wireframe/KV";

export type C3Row = {
  label: string;
  value?: string;
};

export type C3RoundGroup = {
  title: string;
  deadline?: string;
  results?: string;
};

type C3AtAGlanceProps =
  | { mode: "flat"; rows: C3Row[] }
  | { mode: "rounds"; groups: C3RoundGroup[] };

export function C3AtAGlance(props: C3AtAGlanceProps) {
  if (props.mode === "flat") {
    return (
      <Block code="C3" label="At-a-glance facts">
        {props.rows.map((row) => (
          <KV key={row.label} label={row.label} value={row.value} />
        ))}
      </Block>
    );
  }

  return (
    <Block code="C3" label="At-a-glance facts — rounds">
      {props.groups.map((group) => (
        <div key={group.title} className="my-2 border border-neutral-200 p-2.5">
          <h4 className="mb-1.5 text-xs">{group.title}</h4>
          <KV label="Deadline" value={group.deadline} />
          <KV label="Results" value={group.results} />
        </div>
      ))}
    </Block>
  );
}
