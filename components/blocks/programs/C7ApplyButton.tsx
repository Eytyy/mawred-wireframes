import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

type C7ApplyButtonProps = {
  dest: string;
  repeat?: boolean;
  closed?: boolean;
};

export function C7ApplyButton({ dest, repeat, closed }: C7ApplyButtonProps) {
  return (
    <Block code="C7" label={`Apply${repeat ? " (repeat)" : ""}`}>
      {closed ? (
        <>
          <Btn primary disabled>
            Apply now
          </Btn>
          <Fill width={80} />
          <Hint>
            Closed state: button disabled, replaced by &ldquo;applications
            closed &middot; next round [date]&rdquo; + link to results in News.
          </Hint>
        </>
      ) : (
        <>
          <Btn primary>Apply now</Btn>
          <Hint>Destination: {dest}</Hint>
        </>
      )}
    </Block>
  );
}
