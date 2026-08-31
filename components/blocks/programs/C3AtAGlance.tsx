import { Block } from "@/components/wireframe/Block";
import { KV } from "@/components/wireframe/KV";

type C3AtAGlanceProps =
  | { mode: "flat"; rows: string[] }
  | { mode: "rounds"; groups: string[] };

export function C3AtAGlance(props: C3AtAGlanceProps) {
  if (props.mode === "flat") {
    return (
      <Block code="C3" label="At-a-glance facts">
        {props.rows.map((row) => (
          <KV key={row} label={row} />
        ))}
      </Block>
    );
  }

  return (
    <Block code="C3" label="At-a-glance facts — rounds">
      {props.groups.map((group) => (
        <div key={group} className="my-2 border border-neutral-200 p-2.5">
          <h4 className="mb-1.5 text-xs">{group}</h4>
          <KV label="Deadline" />
          <KV label="Results" />
        </div>
      ))}
    </Block>
  );
}
