import type { ReactNode } from "react";

type BlockProps = {
  code: string;
  label: string;
  children: ReactNode;
  optional?: boolean;
  callout?: boolean;
};

export function Block({ code, label, children, optional, callout }: BlockProps) {
  const borderClass = callout
    ? "border-[3px] border-black"
    : optional
      ? "border border-dashed border-black"
      : "border border-black";

  return (
    <section className={`my-3.5 p-3.5 ${borderClass}`}>
      <div className="mb-2.5 flex items-center gap-2">
        <span className="code border border-black px-1 py-0.5 font-mono text-xs">
          {code}
        </span>
        <span className="text-xs uppercase tracking-widest">{label}</span>
      </div>
      {children}
    </section>
  );
}
