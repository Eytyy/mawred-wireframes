import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Prose } from "@/components/wireframe/Prose";

type C8ConditionsProps = {
  text?: string | string[];
  items?: string[];
};

export function C8Conditions({ text, items }: C8ConditionsProps) {
  return (
    <Block code="C8" label="Conditions / exclusions">
      <Prose lines={2} text={text} />
      <ul className="m-0 pl-5">
        {items ? (
          items.map((item) => (
            <li key={item} className="mb-1.5">
              {item}
            </li>
          ))
        ) : (
          <>
            <li>
              <Fill width={60} />
            </li>
            <li>
              <Fill width={52} />
            </li>
          </>
        )}
      </ul>
    </Block>
  );
}
