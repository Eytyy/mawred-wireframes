import { cn } from 'cn';
import type { ReactNode } from 'react';
import { Fill } from './Fill';

export type TimelineItem = {
  key: string;
  label: ReactNode;
  meta?: ReactNode;
  text?: ReactNode;
  fill?: number;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item, index) => (
        <li
          key={item.key}
          className={cn(
            'relative border-l-2 border-black pb-4 pl-3.5',
            index === items.length - 1 && 'border-l-transparent',
          )}
        >
          <span
            className="absolute -left-1.5 top-2 h-2.5 w-2.5 bg-black rounded-full"
            aria-hidden
          />
          <div className="flex justify-between gap-2.5 text-lg font-bold">
            <span>{item.label}</span>
            {item.meta ? (
              <em className="text-xs not-italic text-neutral-500">{item.meta}</em>
            ) : null}
          </div>
          {item.text ? (
            <p className="my-2">{item.text}</p>
          ) : item.fill !== undefined ? (
            <Fill width={item.fill} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
