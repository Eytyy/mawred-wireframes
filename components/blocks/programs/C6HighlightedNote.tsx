import { Block } from "@/components/wireframe/Block";
import { Prose } from "@/components/wireframe/Prose";

type C6HighlightedNoteProps = {
  label: string;
};

export function C6HighlightedNote({ label }: C6HighlightedNoteProps) {
  return (
    <Block code="C6" label="Highlighted note" callout>
      <strong>{label}</strong>
      <Prose lines={2} />
    </Block>
  );
}
