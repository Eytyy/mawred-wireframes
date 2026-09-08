import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Field } from "@/components/wireframe/Field";
import { FilterBar } from "@/components/wireframe/FilterBar";
import { Hint } from "@/components/wireframe/Hint";
import { NETWORK_FACETS } from "@/lib/pages/network";

export function MN3FilterBank() {
  return (
    <Block code="MN3" label="Filter bank">
      <FilterBar
        facets={NETWORK_FACETS}
        lead={
          <>
            <Field compact>Search by name…</Field>
            <Btn compact>Search</Btn>
          </>
        }
      />
      <Hint>
        Five facets: Involvement · Programme · Discipline · Country · Year.
        Entity Type is not a facet here — the entity tabs on MN4 own it
        (decision 20).
        Each trigger opens an anchored dropdown of every value: over ~12
        values → type-to-filter and a scrollable list (decision 168) —
        also applies to Discipline (22), Country (55) and Year (21, 2004–2025
        with no 2006). The name search is an addition to the spec (decision 21)
        and shares the row with the facets (decision 180).
      </Hint>
    </Block>
  );
}
