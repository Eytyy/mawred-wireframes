import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

export function AB2Vision({ text }: { text: string }) {
  return (
    <Block code="AB2" label="Vision">
      <div className="bg-neutral-200 p-3.5">
        <h2 className="block-heading mb-2.5 text-2xl font-bold">Vision</h2>
        <p className="m-0 text-lg">{text}</p>
      </div>
      <Hint>
        Heading and sentence in a grey fill, same treatment as C6. Not a
        quotation — N8 and N15 keep 3px.
      </Hint>
    </Block>
  );
}
