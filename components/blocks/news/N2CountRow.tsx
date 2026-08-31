import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Chip } from "@/components/wireframe/Chip";
import { CountRow } from "@/components/wireframe/CountRow";
import { Hint } from "@/components/wireframe/Hint";
import {
  NEWS_CATEGORIES,
  NEWS_PAGE_SIZE,
} from "@/lib/pages/news";

type N2CountRowProps = {
  activeIdx: number;
  empty: boolean;
  filtered: boolean;
};

export function N2CountRow({ activeIdx, empty, filtered }: N2CountRowProps) {
  const category = NEWS_CATEGORIES[activeIdx];
  const shown = empty ? 0 : NEWS_PAGE_SIZE;

  return (
    <Block code="N2" label="Result count / active filters">
      <CountRow
        count={
          <>
            <strong>Showing {shown}</strong> of {category.count} posts
            {activeIdx > 0 ? ` in ${category.label}` : ""}
          </>
        }
        actions={
          filtered || empty ? (
            <>
              <Chip>Programme: Wijhat ×</Chip>
              <Btn>Clear all</Btn>
            </>
          ) : (
            <span className="text-neutral-500">no programme filter applied</span>
          )
        }
      />
      <Hint>
        Count row per decision 13, scoped to the open tab. No sort control
        &mdash; reverse-chronological is the only meaningful order for a dated
        feed &mdash; and only the programme filter chips, since the active tab
        is already visible above (decision 28).
      </Hint>
    </Block>
  );
}
