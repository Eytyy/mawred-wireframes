import { NewsCard } from "@/components/blocks/news/N3PostFeed";
import { Block } from "@/components/wireframe/Block";
import { CardGrid } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { NEWS_RELATED_COUNT } from "@/lib/pages/news";

export function N13RelatedPosts() {
  return (
    <Block code="N13" label="Related posts">
      <CardGrid>
        {Array.from({ length: NEWS_RELATED_COUNT }, (_, index) => (
          <NewsCard key={index} bare />
        ))}
      </CardGrid>
      <Hint>
        Reuses the feed card exactly. <strong>Related, not most-recent</strong>
        : by tag (same category / programme) where tags exist, falling back to
        posts published near this post&rsquo;s own date &mdash; so an old post
        surfaces its contemporaries rather than today&rsquo;s newest.
      </Hint>
    </Block>
  );
}
