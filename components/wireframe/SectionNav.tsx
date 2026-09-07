'use client';

import { useEffect, useState } from 'react';

type SectionNavItem = {
  id: string;
  label: string;
};

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  const itemIds = items.map((item) => item.id).join();

  useEffect(() => {
    const ids = itemIds.split(',').filter(Boolean);
    setActive((current) => (ids.includes(current) ? current : (ids[0] ?? '')));

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visible = new Set<string>();
    const bandHeight =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--band-h')) || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        const next = ids.find((id) => visible.has(id));
        if (next) setActive(next);
      },
      { rootMargin: `-${bandHeight}px 0px -60% 0px` },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [itemIds]);

  return (
    <nav aria-label="On this page" className="flex items-center gap-9">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="relative"
          aria-current={item.id === active ? 'true' : undefined}
        >
          {item.id === active ? (
            <span aria-hidden="true" className="absolute right-full mr-2">
              →
            </span>
          ) : null}
          {item.label}
        </a>
      ))}
    </nav>
  );
}
