import Link from "next/link";
import { Block } from "@/components/wireframe/Block";
import { Cover } from "@/components/wireframe/Card";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";
import {
  NEWS_DETAIL_HREF,
  NEWS_PAGE_SIZE,
  NEWS_TOTAL_PAGES,
  type NewsPost,
} from "@/lib/pages/news";

type NewsCardProps = {
  post?: NewsPost;
  href?: string;
};

export function NewsCard({
  post,
  href = NEWS_DETAIL_HREF,
}: NewsCardProps) {
  return (
    <Link
      href={post?.href ?? href}
      className="flex items-center gap-4 border-b border-neutral-200 px-0.5 py-3 no-underline"
    >
      <Cover compact label="image" />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-xs text-neutral-500">
          {post?.date ?? "12 March 2026"}
        </span>
        <h2 className="text-2xl font-bold">
          {post?.title ?? "Post title"}
        </h2>
        <span className="text-xs text-neutral-500">
          {post?.category ?? "Category"}
        </span>
      </span>
    </Link>
  );
}

type N3PostFeedProps = {
  empty: boolean;
  posts?: NewsPost[];
};

export function N3PostFeed({ empty, posts }: N3PostFeedProps) {
  return (
    <Block code="N3" label="Post feed">
      {empty ? (
        <>
          <EmptyState
            heading="No posts match this filter"
            line="Clear the filters."
          />
          <Hint>
            Empty state sits inside the feed slot &mdash; filter bar and count
            row stay put; the pager drops out entirely.
          </Hint>
        </>
      ) : (
        <>
          <div>
            {posts
              ? posts.map((post) => (
                  <NewsCard key={post.title} post={post} />
                ))
              : Array.from({ length: NEWS_PAGE_SIZE }, (_, index) => (
                  <NewsCard key={index} />
                ))}
          </div>
          {posts ? (
            <div className="text-xs italic text-neutral-500">
              … {NEWS_TOTAL_PAGES} pages of posts in the archive
            </div>
          ) : null}
          <Hint>
            Row = compact Cover &middot; date &middot; title &middot; category
            &mdash; same stack as PA4, date above / category below (decision
            192 revised). It leaves <code>DirRow</code>, whose single-line
            name + trailing badges cannot hold that stack. N13 reuses the
            row. HM6 stays the image-less <code>DirRow</code> (decision 43).
            Excerpt is an available field with no home on a row, so the{" "}
            <code>slots</code> toggle left the landing. The overflow line is
            the rest of the archive (decision 108).
          </Hint>
        </>
      )}
    </Block>
  );
}
