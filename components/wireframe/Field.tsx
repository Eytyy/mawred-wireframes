import { cn } from "cn";
import type { ReactNode } from "react";

type FieldProps = {
  children: ReactNode;
  compact?: boolean;
  className?: string;
};

export function Field({ children, compact, className = "" }: FieldProps) {
  return (
    <span
      className={cn(
        "inline-block min-w-[220px] border border-black text-neutral-500",
        compact ? "px-2.5 py-1" : "px-2.5 py-2",
        className,
      )}
    >
      {children}
    </span>
  );
}
