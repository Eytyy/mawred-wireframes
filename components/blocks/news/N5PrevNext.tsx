import Link from "next/link";
import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { NEWS_DETAIL_HREF } from "@/lib/pages/news";

type N5PrevNextProps = {
  edge: boolean;
};

export function N5PrevNext({ edge }: N5PrevNextProps) {
  return (
    <Block code="N5" label="Previous / next post">
      <div className="flex gap-3">
        {!edge ? (
          <Link
            href={NEWS_DETAIL_HREF}
            className="block max-w-[46%] flex-[0_1_46%] border border-black px-2.5 py-2 text-sm no-underline"
          >
            <small className="mb-0.75 block text-xs text-neutral-500">
              &larr; Previous post
            </small>
            Title of the previous post
          </Link>
        ) : null}
        <Link
          href={NEWS_DETAIL_HREF}
          className={`block max-w-[46%] flex-[0_1_46%] border border-black px-2.5 py-2 text-sm no-underline ${
            edge ? "ml-auto text-right" : "ml-auto text-right"
          }`}
        >
          <small className="mb-0.75 block text-xs text-neutral-500">
            Next post &rarr;
          </small>
          Title of the next post
        </Link>
      </div>
      <Hint>
        Sequential by date, kept, and kept in the spec&rsquo;s position above
        the featured image (decision 32). At either end of the archive the
        missing direction is omitted, not disabled &mdash; toggle the
        first-post state.
      </Hint>
    </Block>
  );
}
