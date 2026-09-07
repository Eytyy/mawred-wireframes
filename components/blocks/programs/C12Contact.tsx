import { Block } from "@/components/wireframe/Block";

type C12ContactProps = {
  contact?: string;
};

export function C12Contact({ contact }: C12ContactProps) {
  if (!contact) {
    return null;
  }

  return (
    <Block code="C12" label="Contact">
      <p>
        If you have more questions, email us at{" "}
        <a href={`mailto:${contact}`}>{contact}</a>.
      </p>
    </Block>
  );
}
