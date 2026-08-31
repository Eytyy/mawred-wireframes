import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Hint } from "@/components/wireframe/Hint";
import { NEWS_TOTAL_PAGES } from "@/lib/pages/news";

export function N4Pagination() {
  return (
    <Block code="N4" label="Pagination">
      <div className="mt-3.5 flex flex-wrap justify-center">
        <Btn className="-mr-px">‹ Prev</Btn>
        <Btn className="-mr-px" primary>
          1
        </Btn>
        <Btn className="-mr-px">2</Btn>
        <Btn className="-mr-px">3</Btn>
        <Btn className="-mr-px" disabled>
          …
        </Btn>
        <Btn className="-mr-px">{NEWS_TOTAL_PAGES}</Btn>
        <Btn>Next ›</Btn>
      </div>
      <Hint>
        Numbered pager, not load-more (decision 26): 26 pages of dated archive,
        page URLs already server-rendered and shareable, and reaching 2021 by
        load-more would take 25 clicks. The Network keeps load-more &mdash; a
        directory is narrowed, an archive is navigated.
      </Hint>
    </Block>
  );
}
