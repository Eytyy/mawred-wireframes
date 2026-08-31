import type { ReactNode } from "react";
import { Fill } from "./Fill";

export type TimelineItem = {
  key: string;
  label: ReactNode;
  meta?: ReactNode;
  fill?: number;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item, index) => (
        <li
          key={item.key}
          className={`relative border-l-2 border-black pb-3.5 pl-3.5 ${
            index === items.length - 1 ? "border-l-transparent" : ""
          }`}
        >
          <span
            className="absolute -left-1.75 top-0.5 h-2.5 w-2.5 bg-black"
            aria-hidden
          />
          <div className="flex justify-between gap-2.5 text-sm">
            <span>{item.label}</span>
            {item.meta ? (
              <em className="text-xs not-italic text-neutral-500">{item.meta}</em>
            ) : null}
          </div>
          <Fill width={item.fill ?? 65} />
        </li>
      ))}
    </ul>
  );
}
