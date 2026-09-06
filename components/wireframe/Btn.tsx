import Link from "next/link";
import type { ReactNode } from "react";

type BtnProps = {
  children: ReactNode;
  primary?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  href?: string;
};

export function Btn({
  children,
  primary,
  disabled,
  type = "button",
  className = "",
  href,
}: BtnProps) {
  const classes = [
    "cursor-pointer border border-black bg-white px-3.5 py-2 text-sm",
    primary ? "border-2 font-bold" : "",
    disabled ? "cursor-not-allowed border-dashed text-neutral-500" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    return (
      <Link href={href} className={`${classes} no-underline`}>
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
