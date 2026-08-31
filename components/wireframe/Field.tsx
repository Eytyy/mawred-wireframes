import type { ReactNode } from "react";

type FieldProps = {
  children: ReactNode;
  className?: string;
};

export function Field({ children, className = "" }: FieldProps) {
  return (
    <span
      className={`inline-block min-w-[220px] border border-black px-2.5 py-2 text-neutral-500 ${className}`}
    >
      {children}
    </span>
  );
}
