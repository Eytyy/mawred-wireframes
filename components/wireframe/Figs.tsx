type FigsProps = {
  labels: string[];
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
      {labels.map((label) => (
        <div key={label} className="border border-black p-2.5 text-center">
          <b className="block text-xl">00</b>
          <span className="text-xs text-neutral-500">{label}</span>
        </div>
      ))}
    </div>
  );
}
