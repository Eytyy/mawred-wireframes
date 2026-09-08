import { Block } from "@/components/wireframe/Block";
import { Figs, type FigItem } from "@/components/wireframe/Figs";
import { Hint } from "@/components/wireframe/Hint";

type HM2ImpactStripProps = {
  figures: readonly FigItem[];
};

export function HM2ImpactStrip({ figures }: HM2ImpactStripProps) {
  return (
    <Block code="HM2" label="Impact stat strip">
      <Figs labels={[...figures]} wide />
      <Hint>
        Replaces the dropped Data-Studio map. The mosaic wall is gone
        (decision 37 revised) &mdash; HM2 is the figures only. 55 countries
        and 38 programmes &amp; initiatives are the Network facet counts.{" "}
        <code>~1,200</code> grants awarded since 2003 is a placeholder, not a
        published total (decision 131 revised) &mdash; the spec&rsquo;s ~400
        is Production Awards alone, and 87 organisations is Abbara&rsquo;s.
        Years since 2003 is dropped: it restates the founding year the hero
        already names. The hero is the only place the faces-of-impact
        material appears (decision 38 revised).{" "}
        <b>Which figures lead is a client call</b>. Figures count up on
        scroll; degrade to plain numbers.
      </Hint>
    </Block>
  );
}
