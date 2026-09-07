"use client";

import { useEffect, useRef, useState } from "react";

export type Facet = {
  n: string;
  v: number;
  values?: string[];
};

type FilterBarProps = {
  facets: Facet[];
};

function valuesFor(facet: Facet): string[] {
  return Array.from({ length: facet.v }, (_, index) => facet.values?.[index] ?? "value");
}

export function FilterBar({ facets }: FilterBarProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  useEffect(() => {
    if (openIdx === null) {
      return;
    }

    function close() {
      setOpenIdx(null);
    }

    function onPointerDown(event: PointerEvent) {
      if (rootRef.current?.contains(event.target as Node)) {
        return;
      }
      close();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIdx]);

  function toggleFacet(index: number) {
    setOpenIdx((current) => (current === index ? null : index));
    setQuery("");
  }

  function toggleValue(facetName: string, value: string) {
    setSelected((current) => {
      const currentValues = current[facetName] ?? [];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...current, [facetName]: nextValues };
    });
  }

  function clearFacet(facetName: string) {
    setSelected((current) => ({ ...current, [facetName]: [] }));
  }

  return (
    <div ref={rootRef} className="flex flex-wrap gap-2">
      {facets.map((facet, index) => {
        const open = openIdx === index;
        const values = valuesFor(facet);
        const facetSelected = selected[facet.n] ?? [];
        const selectedCount = facetSelected.length;
        const q = query.trim().toLowerCase();
        const filtered = q
          ? values.filter((value) => value.toLowerCase().includes(q))
          : values;

        return (
          <div key={facet.n} className="relative">
            <button
              type="button"
              className="flex shrink-0 grow-0 basis-auto cursor-pointer justify-between gap-3.5 border border-black bg-white px-2.5 py-2 text-sm"
              aria-expanded={open}
              onClick={() => toggleFacet(index)}
            >
              <span>
                {facet.n}
                {selectedCount > 0 ? ` (${selectedCount})` : ""}
              </span>
              <span>{open ? "−" : "+"}</span>
            </button>
            {open ? (
              <div className="absolute top-full left-0 z-40 mt-1 w-[280px] border border-black bg-white">
                {facet.v > 12 ? (
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={`search ${facet.n.toLowerCase()}…`}
                    className="w-full border-b border-black px-2.5 py-2 text-sm placeholder:text-neutral-500"
                  />
                ) : null}
                <div className="max-h-[240px] overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="px-2.5 py-2 text-xs text-neutral-500">
                      No matches
                    </div>
                  ) : (
                    filtered.map((value, valueIndex) => (
                      <label
                        key={`${value}-${valueIndex}`}
                        className="flex cursor-pointer items-center gap-1.5 px-2.5 py-1.5 text-sm"
                      >
                        <input
                          type="checkbox"
                          className="h-[11px] w-[11px] shrink-0 appearance-none border border-black checked:bg-black"
                          checked={facetSelected.includes(value)}
                          onChange={() => toggleValue(facet.n, value)}
                        />
                        {value}
                      </label>
                    ))
                  )}
                </div>
                {selectedCount > 0 ? (
                  <div className="border-t border-black">
                    <button
                      type="button"
                      className="w-full cursor-pointer px-2.5 py-2 text-left text-sm"
                      onClick={() => clearFacet(facet.n)}
                    >
                      Clear
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
