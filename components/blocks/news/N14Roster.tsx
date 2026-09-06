import { Block } from "@/components/wireframe/Block";
import { CardGrid } from "@/components/wireframe/Card";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

export type RosterRecord = {
  name: string;
  country: string;
  role: string;
  project?: string;
  description?: string;
};

type N14RosterProps = {
  label: string;
  records?: RosterRecord[];
  overflow?: string;
};

const PLACEHOLDER_CARDS = 3;

export function N14Roster({ label, records, overflow }: N14RosterProps) {
  return (
    <Block code="N14" label={label} heading={label} optional>
      <CardGrid>
        {records
          ? records.map((record) => (
              <div key={record.name} className="border border-black p-2.5">
                <strong className="text-sm">{record.name}</strong>
                <small className="mt-1.25 block text-xs text-neutral-500">
                  {record.country} &middot; {record.role}
                </small>
                {record.project ? (
                  <div className="mt-1.75 text-sm">{record.project}</div>
                ) : null}
                {record.description ? (
                  <p className="mt-1.5 text-xs text-neutral-500">
                    {record.description}
                  </p>
                ) : null}
              </div>
            ))
          : Array.from({ length: PLACEHOLDER_CARDS }, (_, index) => (
              <div key={index} className="border border-black p-2.5">
                <strong className="text-sm">Name</strong>
                <small className="mt-1.25 block text-xs text-neutral-500">
                  Country &middot; role
                </small>
                <div className="mt-1.75">
                  <Fill width={92} />
                  <Fill width={72} />
                </div>
              </div>
            ))}
      </CardGrid>
      {overflow ? (
        <div className="mt-3 text-xs italic text-neutral-500">{overflow}</div>
      ) : null}
      <Hint>
        Grantees and jury are one block. A jury entry has no project, so the
        title and description rows render by omission (standing constraint 3).
      </Hint>
    </Block>
  );
}
