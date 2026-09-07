"use client";

import { useState } from "react";
import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { CardGrid, Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";
import type { PersonRecord } from "@/lib/pages/about";

function Person({ record }: { record: PersonRecord }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Cover label={record.noimg ? "default avatar" : "photo"} />
      {record.bio ? (
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 text-left"
          onClick={() => setOpen((current) => !current)}
        >
          <strong className="text-sm">Name</strong>
          <span>{open ? "▾" : "▸"}</span>
        </button>
      ) : (
        <strong className="block text-sm">Name</strong>
      )}
      {record.role ? (
        <small className="mt-1 block text-xs text-neutral-500">Role</small>
      ) : null}
      <small className="mt-1 block text-xs text-neutral-500">Country</small>
      {record.bio && open ? (
        <div className="mt-2.5">
          <Prose lines={3} />
        </div>
      ) : null}
    </div>
  );
}

type AB7PeopleGroupProps = {
  label: string;
  people: PersonRecord[];
  total?: number;
  cardNote?: boolean;
};

export function AB7PeopleGroup({
  label,
  people,
  total,
  cardNote,
}: AB7PeopleGroupProps) {
  return (
    <Block code="AB7" label={`People group — ${label}`} heading={label}>
      <CardGrid>
        {people.map((record) => (
          <Person key={record.key} record={record} />
        ))}
      </CardGrid>
      {total ? (
        <div className="mt-3.5 text-center">
          <Btn>{`Show all ${total}`}</Btn>
        </div>
      ) : null}
      {cardNote ? (
        <Hint>
          One card pattern across all three groups: photo · name · role where it
          applies · country. A record with a bio carries a disclosure arrow next
          to the name that opens the bio in place; a record without one simply
          omits it — optional fields render by omission, so a static card is
          never dimmed or disabled (decision 48). Default-avatar cards are a
          normal state, not an error. Both kinds are drawn side by side here.
        </Hint>
      ) : total ? (
        <Hint>
          Over ~12 records, a group shows its first eight and a &ldquo;show
          all&rdquo; (decision 50) — the assembly is the largest group and would
          otherwise be most of the page.
        </Hint>
      ) : null}
    </Block>
  );
}
