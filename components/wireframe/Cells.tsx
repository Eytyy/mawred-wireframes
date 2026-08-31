import type { ReactNode } from "react";

export function Cells({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap">{children}</div>;
}

export function Cell({ children }: { children: ReactNode }) {
  return (
    <div className="-mb-px -mr-px flex-[1_1_140px] border border-black p-2.5">
      {children}
    </div>
  );
}
