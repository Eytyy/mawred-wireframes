import type { ReactNode } from "react";

export function Caption({ children }: { children: ReactNode }) {
  return (
    <div className="mt-1.5 border border-dashed border-black px-2 py-1.5 text-xs text-neutral-500">
      {children}
    </div>
  );
}
