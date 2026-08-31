import { Block } from "@/components/wireframe/Block";
import { Figs } from "@/components/wireframe/Figs";
import { Hint } from "@/components/wireframe/Hint";
import { NETWORK_FIGURES } from "@/lib/pages/network";

export function MN2ImpactStrip() {
  return (
    <Block code="MN2" label="Impact stat strip">
      <Figs labels={NETWORK_FIGURES} wide />
      <Hint>
        Native figures counted from the directory&rsquo;s own facets — carries
        the impact job the dropped geo-map was doing. Degrades to plain numbers.
        Two more are available if a fuller strip is wanted (8 kinds of
        involvement, 22 disciplines); which figures lead is a client call.
      </Hint>
    </Block>
  );
}
