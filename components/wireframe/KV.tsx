type KVProps = {
  label: string;
};

export function KV({ label }: KVProps) {
  return (
    <div className="flex justify-between gap-3 border-b border-neutral-200 py-1.75">
      <span className="text-xs">{label}</span>
      <span className="h-2 flex-[0_0_40%] bg-neutral-200" />
    </div>
  );
}
