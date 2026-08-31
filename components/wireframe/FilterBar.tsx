"use client";

import { useState } from "react";
import { Btn } from "@/components/wireframe/Btn";
import { Field } from "@/components/wireframe/Field";

export type Facet = {
  n: string;
  v: number;
};

type FilterBarProps = {
  facets: Facet[];
  defaultOpenIdx?: number;
};

function FacetPanel({ facet, open }: { facet: Facet; open: boolean }) {
  if (!open) {
    return null;
  }

  const long = facet.v > 12;
  const shown = long ? 6 : facet.v;

  return (
    <div className="my-2 border border-black p-2.5">
      {long ? (
        <Field className="mb-2.25 block w-full">
          search {facet.n.toLowerCase()}…
        </Field>
      ) : null}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-3 gap-y-1.25">
        {Array.from({ length: shown }, (_, index) => (
          <span
            key={index}
            className="flex items-center gap-1.5 text-xs text-neutral-500"
          >
            <i className="inline-block h-[11px] w-[11px] shrink-0 border border-black" />
            value
          </span>
        ))}
      </div>
      {long ? (
        <Btn className="mt-2.5">Show all {facet.v}</Btn>
      ) : null}
    </div>
  );
}

export function FilterBar({ facets, defaultOpenIdx }: FilterBarProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(
    defaultOpenIdx ?? null,
  );

  function toggleFacet(index: number) {
    setOpenIdx((current) => (current === index ? null : index));
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {facets.map((facet, index) => (
          <button
            key={facet.n}
            type="button"
            className="flex shrink-0 grow-0 basis-auto cursor-pointer justify-between gap-3.5 border border-black bg-white px-2.5 py-2 text-sm"
            onClick={() => toggleFacet(index)}
          >
            <span>{facet.n}</span>
            <span>{openIdx === index ? "−" : "+"}</span>
          </button>
        ))}
      </div>
      {facets.map((facet, index) => (
        <FacetPanel key={facet.n} facet={facet} open={openIdx === index} />
      ))}
    </div>
  );
}
