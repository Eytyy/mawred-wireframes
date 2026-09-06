"use client";

import type { ReactNode } from "react";

type TabItem = {
  label: string;
  count?: number;
};

type TabsProps = {
  items: TabItem[];
  activeIdx: number;
  onSelect: (idx: number) => void;
  children?: ReactNode;
};

export function Tabs({ items, activeIdx, onSelect, children }: TabsProps) {
  return (
    <div className={children ? undefined : "mb-3"}>
      <div className="flex flex-wrap items-end border-b border-neutral-200">
        {items.map((item, idx) => {
          const active = idx === activeIdx;
          return (
            <button
              key={item.label}
              type="button"
              className={
                active
                  ? "relative -mb-px cursor-pointer border border-b-white border-neutral-200 bg-white px-3.5 py-2.25 text-sm font-bold"
                  : "cursor-pointer bg-transparent px-3.5 py-2.25 text-sm text-neutral-500"
              }
              onClick={() => onSelect(idx)}
            >
              {item.label}
              {item.count !== undefined ? (
                <span className="ml-1.75 text-xs text-neutral-500">
                  {item.count}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
      {children ? (
        <div className="border border-t-0 border-neutral-200 p-2.5">
          {children}
        </div>
      ) : null}
    </div>
  );
}
