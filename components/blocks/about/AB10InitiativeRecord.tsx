import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

export function AB10InitiativeRecord() {
  return (
    <Block code="AB10" label="Initiative record">
      <Banner label="main image — full content width" />
      <div className="mt-3">
        <Prose lines={4} />
      </div>
      <Fill width={30} />
      <Prose lines={3} />
      <ul className="list-none p-0">
        <li>
          <Fill width={62} />
        </li>
        <li>
          <Fill width={54} />
        </li>
      </ul>
      <Hint>
        One rich-text field with simple styling — headings, lists, links. The
        &ldquo;tabs&rdquo; on the live teasers were only body headings, not the
        programme tab system, so there is no tab structure here. Title comes
        from the page-header band.
      </Hint>
    </Block>
  );
}
