"use client";

type TabItem = {
  label: string;
  count?: number;
};

type TabsProps = {
  items: TabItem[];
  activeIdx: number;
  onSelect: (idx: number) => void;
};

export function Tabs({ items, activeIdx, onSelect }: TabsProps) {
  return (
    <div className="mb-3 flex flex-wrap">
      {items.map((item, idx) => {
        const active = idx === activeIdx;
        return (
          <button
            key={item.label}
            type="button"
            className={`cursor-pointer border border-black bg-white px-3.5 py-2.25 -mr-px text-sm ${
              active ? "border-2 font-bold" : ""
            }`}
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
  );
}
