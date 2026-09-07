import { Block } from '@/components/wireframe/Block';
import { Chip } from '@/components/wireframe/Chip';
import { Fill } from '@/components/wireframe/Fill';
import { Hint } from '@/components/wireframe/Hint';

type SupportRecord = {
  label: string;
  body?: string;
  items?: string[];
  amount?: string;
  amt?: boolean;
};

type C5FormsOfSupportProps = {
  records: SupportRecord[];
  heading?: string;
};

export function C5FormsOfSupport({ records, heading = 'Forms of support' }: C5FormsOfSupportProps) {
  const hasNoAmount = records.some((record) => !record.amt && record.amount === undefined);

  return (
    <Block code="C5" label="Forms of support" heading={heading} headingAs="h3">
      {records.map((record) => (
        <div key={record.label} className="my-2 flex items-start gap-3 border border-black p-2.5">
          <div className="flex-1">
            <strong className="text-lg">{record.label}</strong>
            {record.body ? <p className="mt-1 text-neutral-500">{record.body}</p> : null}
            {record.items ? (
              <ul className="m-0 mt-1 list-disc pl-5">
                {record.items.map((item) => (
                  <li key={item} className="mb-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {!record.body && !record.items ? <Fill width={85} /> : null}
          </div>
          {record.amount !== undefined ? (
            <Chip>{record.amount}</Chip>
          ) : record.amt ? (
            <Chip>amount</Chip>
          ) : null}
        </div>
      ))}
      {hasNoAmount ? (
        <Hint>
          Record without an amount renders with no chip — no empty column, no &ldquo;N/A&rdquo;.
        </Hint>
      ) : null}
    </Block>
  );
}
