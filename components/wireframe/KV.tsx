type KVProps = {
  label: string;
  value?: string;
  fill?: boolean;
};

export function KV({ label, value, fill = true }: KVProps) {
  return (
    <div className="flex justify-between gap-3 border-b border-neutral-200 py-1.75">
      <span className="text-xs">{label}</span>
      {value !== undefined ? (
        <span className="flex-[0_0_40%] text-xs">{value}</span>
      ) : fill ? (
        <span className="h-2 flex-[0_0_40%] bg-neutral-200" />
      ) : null}
    </div>
  );
}
