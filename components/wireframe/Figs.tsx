type FigsProps = {
  labels: string[];
};

export function Figs({ labels }: FigsProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {labels.map((label) => (
        <div key={label} className="border border-black p-2.5 text-center">
          <b className="block text-xl">00</b>
          <span className="text-xs text-neutral-500">{label}</span>
        </div>
      ))}
    </div>
  );
}
