import { Fill } from "./Fill";

const WIDTHS = [100, 96, 88, 92, 72, 84];

export function Prose({ lines }: { lines: number }) {
  return (
    <>
      {Array.from({ length: lines }, (_, index) => (
        <Fill key={index} width={WIDTHS[index % WIDTHS.length]} />
      ))}
    </>
  );
}
