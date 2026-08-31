import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";
import { Prose } from "@/components/wireframe/Prose";

export function AB13Position() {
  return (
    <Block code="AB13" label="Position">
      <Prose lines={6} />
      <Fill width={30} />
      <ul className="list-none p-0">
        <li>
          <Fill width={64} />
        </li>
        <li>
          <Fill width={58} />
        </li>
        <li>
          <Fill width={70} />
        </li>
      </ul>
      <div className="mt-3">
        <Btn primary>Apply</Btn>
      </div>
      <KV label="Or write to — [contact address]" fill={false} />
      <Hint>
        Single rich-text body plus an optional apply action. Title comes from
        the page-header band.
      </Hint>
    </Block>
  );
}
