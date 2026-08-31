import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

export function AB6SectionIntro({ optional }: { optional?: boolean }) {
  return (
    <Block
      code="AB6"
      label={`Section intro${optional ? " — available slot" : ""}`}
      optional={optional}
    >
      <Fill width={74} />
      <Hint>
        {optional
          ? "Not present today. One line of context above the listing if the client wants it; the page reads fine opening straight on the grid."
          : "Net-new micro-copy: one line framing team and governance. Today that context exists only as a passing sentence on Who We Are."}
      </Hint>
    </Block>
  );
}
