import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";
import { Prose } from "@/components/wireframe/Prose";

type C1OverviewProps = {
  title?: string;
  text?: string | string[];
  items?: string[];
};

export function C1Overview({ title, text, items }: C1OverviewProps) {
  return (
    <Block code="C1" label="Overview">
      {title ? (
        <h3 className="mb-1 text-base font-bold">{title}</h3>
      ) : (
        <Fill width={30} />
      )}
      <Prose lines={4} text={text} />
      {items ? (
        <ul className="m-0 pl-5">
          {items.map((item) => (
            <li key={item} className="mb-1.5">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </Block>
  );
}
