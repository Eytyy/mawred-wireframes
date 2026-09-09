import { NewsCard } from "@/components/blocks/news/N3PostFeed";
import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import type { NewsPost } from "@/lib/pages/news";

const PLACEHOLDER_ROWS = 3;

type N13RelatedPostsProps = {
  posts?: NewsPost[];
  flush?: boolean;
};

export function N13RelatedPosts({ posts, flush }: N13RelatedPostsProps) {
  return (
    <Block
      code="N13"
      label="Related posts"
      heading="Related posts"
      flush={flush}
    >
      <div>
        {posts
          ? posts.map((post) => (
              <NewsCard key={post.title} post={post} cover={false} />
            ))
          : Array.from({ length: PLACEHOLDER_ROWS }, (_, index) => (
              <NewsCard key={index} cover={false} />
            ))}
      </div>
      <Hint>
        Same feed row, without the compact Cover (decision 205).{" "}
        <strong>Related, not most-recent</strong>: by tag (same category /
        programme) where tags exist, falling back to posts published near this
        post&rsquo;s own date &mdash; so an old post surfaces its
        contemporaries rather than today&rsquo;s newest. Two rows here because
        the sample holds three posts and one of them is the post you are on.
      </Hint>
    </Block>
  );
}
