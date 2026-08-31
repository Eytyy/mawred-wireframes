import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C6HighlightedNoteProps = {
  label: string;
  text?: string | string[];
};

export function C6HighlightedNote({ label, text }: C6HighlightedNoteProps) {
  return (
    <Block code="C6" label="Highlighted note" callout>
      <strong>{label}</strong>
      <Prose lines={2} text={text} />
    </Block>
  );
}
