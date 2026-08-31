import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Prose } from "@/components/wireframe/Prose";

export function C8Conditions() {
  return (
    <Block code="C8" label="Conditions / exclusions">
      <Prose lines={2} />
      <ul className="m-0 pl-5">
        <li>
          <Fill width={60} />
        </li>
        <li>
          <Fill width={52} />
        </li>
      </ul>
    </Block>
  );
}
