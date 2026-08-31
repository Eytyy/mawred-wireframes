import { Block } from "@/components/wireframe/Block";
import { Accordion } from "@/components/wireframe/Accordion";
import { Btn } from "@/components/wireframe/Btn";
import { Hint } from "@/components/wireframe/Hint";

type S3PastBeneficiariesProps = {
  groups: string[];
  offered?: boolean;
};

function BeneficiaryRows() {
  return (
    <>
      <div className="flex justify-between border-b border-neutral-200 py-1.5 text-sm">
        <span>Name</span>
        <span>Country →</span>
      </div>
      <div className="flex justify-between border-b border-neutral-200 py-1.5 text-sm">
        <span>Name</span>
        <span>Country →</span>
      </div>
      <div className="flex justify-between border-b border-neutral-200 py-1.5 text-sm">
        <span>Name</span>
        <span>Country →</span>
      </div>
    </>
  );
}

export function S3PastBeneficiaries({ groups, offered }: S3PastBeneficiariesProps) {
  return (
    <Block code="S3" label="Past beneficiaries" optional={offered}>
      <Accordion
        items={groups.map((group, index) => ({
          title: group,
          defaultOpen: index === 0,
          content: <BeneficiaryRows />,
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
