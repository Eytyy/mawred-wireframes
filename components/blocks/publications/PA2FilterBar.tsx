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
      <FilterBar facets={facets} defaultOpenIdx={0} />
      <Hint>
        Six facets kept as-is: Author · Country · Theme · Language · Type ·
        Year. Author is shown open to demonstrate the long-facet treatment
        (decision 12): a facet over ~12 values gets a search field, the first
        six values and a &ldquo;show all&rdquo;; short facets list every value.
      </Hint>
    </Block>
  );
}
