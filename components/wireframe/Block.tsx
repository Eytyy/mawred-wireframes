import type { ReactNode } from "react";

type BlockProps = {
  code: string;
  label: string;
  children: ReactNode;
  optional?: boolean;
  heading?: string;
  headingAs?: "h2" | "h3";
  flush?: boolean;
};

export function Block({
  code,
  label,
  children,
  optional,
  heading,
  headingAs: HeadingTag = "h2",
  flush,
}: BlockProps) {
  const borderClass = optional
    ? "border border-dashed border-black"
    : "border border-black";

  return (
    <section
      className={`p-3.5 ${flush ? "block-flush" : "my-3.5"} ${borderClass} block-frame`}
    >
      <div className="block-label mb-2.5 flex items-center gap-2">
        <span className="code border border-black px-1 py-0.5 font-mono text-xs">
          {code}
        </span>
        <span className="text-xs uppercase tracking-widest">{label}</span>
      </div>
      {heading ? (
        <HeadingTag className="block-heading mb-2.5 text-lg font-bold">
          {heading}
        </HeadingTag>
      ) : null}
      {children}
    </section>
  );
}
