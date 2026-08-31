import { Fill } from "./Fill";

const WIDTHS = [100, 96, 88, 92, 72, 84];

type ProseProps = {
  lines?: number;
  text?: string | string[];
};

export function Prose({ lines = 3, text }: ProseProps) {
  if (text !== undefined) {
    const paragraphs = Array.isArray(text) ? text : [text];

    return (
      <>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="my-2">
            {paragraph}
          </p>
        ))}
      </>
    );
  }

  return (
    <>
      {Array.from({ length: lines }, (_, index) => (
        <Fill key={index} width={WIDTHS[index % WIDTHS.length]} />
      ))}
    </>
  );
}
