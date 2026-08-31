import type { ReactNode } from "react";

type CountRowProps = {
  count: ReactNode;
  actions?: ReactNode;
};

export function CountRow({ count, actions }: CountRowProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2.5 border-y border-neutral-200 py-2.25 text-xs">
      <span>{count}</span>
      {actions ? <span className="flex flex-wrap items-center gap-1.5">{actions}</span> : null}
    </div>
  );
}
