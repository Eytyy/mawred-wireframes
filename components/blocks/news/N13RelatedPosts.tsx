import { NewsCard } from "@/components/blocks/news/N3PostFeed";
import { Block } from "@/components/wireframe/Block";
import { CardGrid } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import type { NewsPost } from "@/lib/pages/news";

const PLACEHOLDER_CARDS = 3;

type N13RelatedPostsProps = {
  posts?: NewsPost[];
};

export function N13RelatedPosts({ posts }: N13RelatedPostsProps) {
  return (
    <Block code="N13" label="Related posts">
      <CardGrid>
        {posts
          ? posts.map((post) => (
              <NewsCard key={post.title} post={post} bare />
            ))
          : Array.from({ length: PLACEHOLDER_CARDS }, (_, index) => (
              <NewsCard key={index} bare />
            ))}
      </CardGrid>
      <Hint>
        Reuses the feed card exactly. <strong>Related, not most-recent</strong>
        : by tag (same category / programme) where tags exist, falling back to
        posts published near this post&rsquo;s own date &mdash; so an old post
        surfaces its contemporaries rather than today&rsquo;s newest. Two cards
        here because the sample holds three posts and one of them is the post
        you are on.
      </Hint>
    </Block>
  );
}
