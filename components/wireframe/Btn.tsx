import { cn } from "cn";
import Link from "next/link";
import type { ReactNode } from "react";

type BtnProps = {
  children: ReactNode;
  primary?: boolean;
  compact?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  href?: string;
};

export function Btn({
  children,
  primary,
  compact,
  disabled,
  type = "button",
  className = "",
  href,
}: BtnProps) {
  const classes = cn(
    "cursor-pointer border border-black bg-white",
    compact ? "px-2.5 py-1 text-sm" : "px-3.5 py-2 text-sm",
    primary && "border-2 font-bold",
    disabled && "cursor-not-allowed border-dashed text-neutral-500",
    className,
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={cn(classes, "no-underline")}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
