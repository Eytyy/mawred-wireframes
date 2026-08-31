import { Block } from "@/components/wireframe/Block";
import { Caption } from "@/components/wireframe/Caption";
import { Card, CardGrid, Cover } from "@/components/wireframe/Card";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";
import { Tag } from "@/components/wireframe/Tag";
import {
  NEWS_DETAIL_HREF,
  NEWS_PAGE_SIZE,
  NEWS_TOTAL_PAGES,
  type NewsPost,
} from "@/lib/pages/news";

type NewsCardProps = {
  post?: NewsPost;
  href?: string;
  bare?: boolean;
  slots?: boolean;
};

export function NewsCard({
  post,
  href = NEWS_DETAIL_HREF,
  bare = false,
  slots = false,
}: NewsCardProps) {
  if (!post) {
    return (
      <Card
        href={href}
        title="Post title"
        subtitle="12 March 2026"
        footer={
          slots && !bare ? (
            <Caption>optional excerpt — available field, unused today</Caption>
          ) : null
        }
      >
        <Cover label="image" />
        <div className="mt-1.75">
          <Tag>Category</Tag>
        </div>
      </Card>
    );
  }

  return (
    <Card
      href={post.href}
      title={post.title}
      subtitle={post.date}
      footer={
        slots && !bare ? (
          <Caption>optional excerpt — available field, unused today</Caption>
        ) : null
      }
    >
      <Cover label="image" />
      <div className="mt-1.75">
        <Tag>{post.category}</Tag>
      </div>
    </Card>
  );
}

type N3PostFeedProps = {
  empty: boolean;
  slots: boolean;
  posts?: NewsPost[];
};

export function N3PostFeed({ empty, slots, posts }: N3PostFeedProps) {
  return (
    <Block code="N3" label="Post feed">
      {empty ? (
        <>
          <EmptyState
            heading="No posts match this filter"
            line="Clear the programme filter, or switch back to All."
          />
          <Hint>
            Empty state sits inside the feed slot &mdash; tabs and count row
            stay put; the pager drops out entirely.
          </Hint>
        </>
      ) : (
        <>
          <CardGrid>
            {posts
              ? posts.map((post) => (
                  <NewsCard key={post.title} post={post} slots={slots} />
                ))
              : Array.from({ length: NEWS_PAGE_SIZE }, (_, index) => (
                  <NewsCard key={index} slots={slots} />
                ))}
          </CardGrid>
          {posts ? (
            <div className="text-xs italic text-neutral-500">
              … {NEWS_TOTAL_PAGES} pages of posts in the archive
            </div>
          ) : null}
          <Hint>
            Card = image &middot; category tag &middot; title &middot; date
            (decision 30). The tag is new &mdash; it makes the kind of post
            legible on the card, which is the whole point of the taxonomy.
            Excerpt is an available slot, unused today. Nine per page, matching
            the current feed.
          </Hint>
        </>
      )}
    </Block>
  );
}
