import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="border border-black px-2 py-1 text-xs">{children}</span>
  );
}
