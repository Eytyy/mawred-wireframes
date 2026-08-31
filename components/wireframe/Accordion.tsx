"use client";

import { useState, type ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        className="flex w-full cursor-pointer justify-between gap-2.5 border border-black bg-white px-2.5 py-2 text-left text-sm"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <div className="-mt-1.5 mb-1.5 border border-black border-t-0 p-2.5">
          {children}
        </div>
      ) : null}
    </div>
  );
}

type AccordionProps = {
  items: Array<{
    title: string;
    content: ReactNode;
    defaultOpen?: boolean;
  }>;
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
