export type FigItem = string | { label: string; value?: string };

type FigsProps = {
  labels: readonly FigItem[];
  wide?: boolean;
};

export function Figs({ labels, wide }: FigsProps) {
  return (
    <div
      className={
        wide
          ? "grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5"
          : "grid grid-cols-2 gap-2.5"
      }
    >
      {labels.map((item) => {
        const { label, value } =
          typeof item === "string" ? { label: item, value: undefined } : item;

        return (
          <div key={label} className="border border-black p-2.5 text-center">
            <b className="block text-4xl">{value ?? "00"}</b>
            <span className="text-xs text-neutral-500">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
