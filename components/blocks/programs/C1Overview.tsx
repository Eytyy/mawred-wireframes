import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C1OverviewProps = {
  crumb?: string;
  pageTitle?: string;
  title?: string;
  text?: string | string[];
  items?: string[];
};

export function C1Overview({
  crumb,
  pageTitle,
  title,
  text,
  items,
}: C1OverviewProps) {
  return (
    <>
      {crumb ? (
        <div
          className="mb-2 w-full basis-full text-xs text-neutral-500"
          dangerouslySetInnerHTML={{ __html: crumb }}
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <Block code="C1" label="Overview">
          {pageTitle ? (
            <h1
              className="inline-block py-2 text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: pageTitle }}
            />
          ) : null}
          {title ? (
            <h3 className="mb-1 text-base font-bold">{title}</h3>
          ) : null}
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
      </div>
    </>
  );
}
