export function UtilityBar() {
  return (
    <div className="flex items-center justify-between">
      <span className="inline-flex h-10 items-center border border-black px-3 text-sm">Search</span>
      <div className="flex items-center gap-2">
        <span className="inline-flex size-10 items-center justify-center bg-black text-sm text-white">
          EN
        </span>
        <span className="inline-flex size-10 items-center justify-center border border-black text-sm">
          ع
        </span>
      </div>
    </div>
  );
}
