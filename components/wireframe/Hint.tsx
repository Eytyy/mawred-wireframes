import type { ReactNode } from "react";

export function Hint({ children }: { children: ReactNode }) {
  return (
    <div className="hint mt-2 text-xs italic text-neutral-500">{children}</div>
  );
}
