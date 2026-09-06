import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C1OverviewProps = {
  text?: string | string[];
  items?: string[];
};

export function C1Overview({ text, items }: C1OverviewProps) {
  return (
    <Block code="C1" label="Overview">
      <Prose lines={4} text={text} />
      {items ? (
        <ul className="m-0 list-disc pl-5">
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
