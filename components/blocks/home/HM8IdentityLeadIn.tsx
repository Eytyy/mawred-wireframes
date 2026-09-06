import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type HM8IdentityLeadInProps = {
  text: string;
  href: string;
};

export function HM8IdentityLeadIn({ text, href }: HM8IdentityLeadInProps) {
  return (
    <Block code="HM8" label="Identity lead-in">
      <Prose text={text} />
      <div className="mt-2.5">
        <Btn href={href}>Who we are</Btn>
      </div>
      <Hint>
        Kept light (decision 42): one paragraph from Who We Are&rsquo;s second
        intro paragraph (the services-and-public-good cut, so it doesn&rsquo;t
        repeat HM1&rsquo;s sentence) and a route into the merged Who We Are
        page. The heading Fill is gone &mdash; a leftover from the unpopulated
        kit (decisions 107/113); the H1 is the destination&rsquo;s chrome band,
        not a second headline here. The hero already carries identity as a
        positioning line, so this is the editorial hand-off, not a second
        identity statement. Set aside: folding it into the footer, which leaves
        Home with no editorial route into About.
      </Hint>
    </Block>
  );
}
