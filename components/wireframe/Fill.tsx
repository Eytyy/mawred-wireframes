export function Fill({ width = 100 }: { width?: number }) {
  return (
    <div
      className="my-[7px] h-2 bg-neutral-200"
      style={{ width: `${width}%` }}
    />
  );
}
