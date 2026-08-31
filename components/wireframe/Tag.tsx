import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-black px-1.5 py-0.5 text-xs uppercase tracking-wide">
      {children}
    </span>
  );
}
