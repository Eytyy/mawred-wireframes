import { Block } from "@/components/wireframe/Block";
import { Chip } from "@/components/wireframe/Chip";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

type SupportRecord = {
  label: string;
  amt?: boolean;
};

type C5FormsOfSupportProps = {
  records: SupportRecord[];
};

export function C5FormsOfSupport({ records }: C5FormsOfSupportProps) {
  const hasNoAmount = records.some((record) => !record.amt);

  return (
    <Block code="C5" label="Forms of support">
      {records.map((record) => (
        <div
          key={record.label}
          className="my-2 flex items-start gap-3 border border-black p-2.5"
        >
          <div className="flex-1">
            <strong>{record.label}</strong>
            <Fill width={85} />
          </div>
          {record.amt ? <Chip>amount</Chip> : null}
        </div>
      ))}
      {hasNoAmount ? (
        <Hint>
          Record without an amount renders with no chip — no empty column, no
          &ldquo;N/A&rdquo;.
        </Hint>
      ) : null}
    </Block>
  );
}
