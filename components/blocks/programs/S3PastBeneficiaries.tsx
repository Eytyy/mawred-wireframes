import { Block } from "@/components/wireframe/Block";
import { Accordion } from "@/components/wireframe/Accordion";
import { Btn } from "@/components/wireframe/Btn";
import { Hint } from "@/components/wireframe/Hint";

export type BeneficiaryRecord = {
  name: string;
  country?: string;
};

export type BeneficiaryGroup =
  | string
  | { title: string; records: BeneficiaryRecord[] };

type S3PastBeneficiariesProps = {
  groups: BeneficiaryGroup[];
  label?: string;
  offered?: boolean;
};

function Row({ name, country }: BeneficiaryRecord) {
  return (
    <div className="flex justify-between border-b border-neutral-200 py-1.5 text-sm">
      <span>{name}</span>
      <span>{country ? `${country} →` : "→"}</span>
    </div>
  );
}

function BeneficiaryRows({ records }: { records?: BeneficiaryRecord[] }) {
  const rows =
    records ??
    Array.from({ length: 3 }, () => ({ name: "Name", country: "Country" }));

  return (
    <>
      {rows.map((record, index) => (
        <Row
          key={`${record.name}-${index}`}
          name={record.name}
          country={record.country}
        />
      ))}
    </>
  );
}

export function S3PastBeneficiaries({
  groups,
  label = "Past beneficiaries",
  offered,
}: S3PastBeneficiariesProps) {
  return (
    <Block code="S3" label={label} optional={offered}>
      <Accordion
        items={groups.map((group, index) => ({
          title: typeof group === "string" ? group : group.title,
          defaultOpen: index === 0,
          content: (
            <BeneficiaryRows
              records={typeof group === "string" ? undefined : group.records}
            />
          ),
        }))}
      />
      <Btn className="mt-2">View all in Mawred Network</Btn>
      <Hint>
        Shared record source with Mawred Network; &ldquo;view all&rdquo;
        deep-links pre-filtered to this programme.
        {offered ? (
          <>
            {" "}
            <strong>Offered, not currently used.</strong>
          </>
        ) : null}
      </Hint>
    </Block>
  );
}
