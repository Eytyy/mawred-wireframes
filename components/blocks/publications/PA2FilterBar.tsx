import { Block } from "@/components/wireframe/Block";
import { FilterBar, type Facet } from "@/components/wireframe/FilterBar";
import { Hint } from "@/components/wireframe/Hint";
import { LIBRARY_FACETS } from "@/lib/pages/publications";

type PA2FilterBarProps = {
  facets?: Facet[];
};

export function PA2FilterBar({ facets = LIBRARY_FACETS }: PA2FilterBarProps) {
  return (
    <Block code="PA2" label="Filter bar">
      <FilterBar facets={facets} />
      <Hint>
        Six facets kept as-is: Author · Country · Theme · Language · Type ·
        Year. Each trigger opens an anchored dropdown of every value
        (decision 168): a facet over ~12 values gets a type-to-filter input
        and a scrollable list; short facets list every value. Scroll replaces
        truncation; there is no &ldquo;show all&rdquo;.
      </Hint>
    </Block>
  );
}
