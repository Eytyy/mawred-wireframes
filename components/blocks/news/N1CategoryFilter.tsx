import { Block } from "@/components/wireframe/Block";
import { FilterBar } from "@/components/wireframe/FilterBar";
import { Hint } from "@/components/wireframe/Hint";
import { Tabs } from "@/components/wireframe/Tabs";
import { NEWS_CATEGORIES, NEWS_PROGRAMME_FACET } from "@/lib/pages/news";

type N1CategoryFilterProps = {
  activeIdx: number;
  onSelect: (idx: number) => void;
};

export function N1CategoryFilter({ activeIdx, onSelect }: N1CategoryFilterProps) {
  return (
    <Block code="N1" label="Category filter">
      <Tabs
        items={NEWS_CATEGORIES.map((category) => ({
          label: category.label,
          count: category.count,
        }))}
        activeIdx={activeIdx}
        onSelect={onSelect}
      />
      <FilterBar facets={[NEWS_PROGRAMME_FACET]} />
      <Hint>
        One primary dimension &mdash; category &mdash; as a tab row, with the
        optional &ldquo;by programme&rdquo; cut as a single facet trigger beside
        it (decision 27). Deliberately lighter than the six-facet bar on
        Publications and the Network. The real category list and the tagging
        model are a <strong>client call</strong>; these are the spec&rsquo;s
        starter facets.
      </Hint>
    </Block>
  );
}
