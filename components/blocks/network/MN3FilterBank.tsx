import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Field } from "@/components/wireframe/Field";
import { FilterBar } from "@/components/wireframe/FilterBar";
import { Hint } from "@/components/wireframe/Hint";
import { NETWORK_FACETS } from "@/lib/pages/network";

export function MN3FilterBank() {
  return (
    <Block code="MN3" label="Filter bank">
      <div className="mb-2.5 flex flex-wrap items-center gap-2">
        <Field className="min-w-[240px] flex-[1_1_240px]">Search by name…</Field>
        <Btn>Search</Btn>
      </div>
      <FilterBar facets={NETWORK_FACETS} defaultOpenIdx={1} />
      <Hint>
        Five facets: Involvement · Programme · Discipline · Country · Year.
        Entity Type is not a facet here — the listing tabs own it (decision 20).
        Programme is shown open to demonstrate the long-facet treatment: over ~12
        values → search + first six + &ldquo;show all&rdquo; (decision 12) —
        also applies to Discipline (22), Country (55) and Year (21, 2004–2025
        with no 2006). The name search is an addition to the spec (decision 21).
      </Hint>
    </Block>
  );
}
