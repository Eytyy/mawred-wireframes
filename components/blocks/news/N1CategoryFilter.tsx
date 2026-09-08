import { Block } from "@/components/wireframe/Block";
import { FilterBar } from "@/components/wireframe/FilterBar";
import { Hint } from "@/components/wireframe/Hint";
import { NEWS_CATEGORY_FACET, NEWS_PROGRAMME_FACET } from "@/lib/pages/news";

export function N1CategoryFilter() {
  return (
    <Block code="N1" label="Category filter">
      <FilterBar facets={[NEWS_CATEGORY_FACET, NEWS_PROGRAMME_FACET]} />
      <Hint>
        Two facets: Category (Announcements · News &amp; Events) and Programme
        (the four programmes). Same FilterBar as Publications and the Network,
        just shorter &mdash; no &ldquo;All&rdquo; value, because unfiltered is
        the default (decision 190). The real category list and the tagging
        model remain a <strong>client call</strong>; these are the spec&rsquo;s
        starter facets.
      </Hint>
    </Block>
  );
}
