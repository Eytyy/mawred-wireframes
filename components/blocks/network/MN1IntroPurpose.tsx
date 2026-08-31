import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type MN1IntroPurposeProps = {
  heading?: string;
  text?: string | string[];
  contact?: string;
};

export function MN1IntroPurpose({
  heading,
  text,
  contact,
}: MN1IntroPurposeProps) {
  return (
    <Block code="MN1" label="Intro / purpose">
      {heading ? <h3 className="mb-1 text-base font-bold">{heading}</h3> : null}
      <Prose lines={3} text={text} />
      <div className="flex justify-between gap-3 border-b border-neutral-200 py-1.75">
        <span className="text-xs">
          To correct a profile — {contact ?? "communications@mawred.org"}
        </span>
        <span />
      </div>
      <Hint>
        The responsible-data commitment (consent · privacy · security ·
        ownership) is permanent, first-class prose here, not a footnote at the
        page tail. The live &ldquo;under development&rdquo; notice is retired —
        and with it the invitation to request data access or join data
        activities at resources@mawred.org, which is a client call: if that ask
        is permanent content it needs its own line here. No headline above the
        intro — the H1 is the chrome band — so the heading is an unused slot.
      </Hint>
    </Block>
  );
}
