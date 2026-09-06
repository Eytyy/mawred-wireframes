import { NewsCard } from "@/components/blocks/news/N3PostFeed";
import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { CardGrid } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import type { NewsPost } from "@/lib/pages/news";

type HM6LatestNewsProps = {
  posts: NewsPost[];
  allHref: string;
};

export function HM6LatestNews({ posts, allHref }: HM6LatestNewsProps) {
  return (
    <Block code="HM6" label="Latest news" heading="Latest news">
      <CardGrid>
        {posts.map((post) => (
          <NewsCard key={post.title} post={post} bare />
        ))}
      </CardGrid>
      <Btn className="mt-3" href={allHref}>
        All news
      </Btn>
      <Hint>
        Reuses the News feed card verbatim (decision 43) &mdash; image ·
        category tag · title · date &mdash; each linking to its own route. Three
        real posts from the News sample (decision 115): Made With Your Magic
        (27 July), Wijhat second-round grantees (20 July), Production Awards
        2026 results (6 May). The port&rsquo;s four-card strip is gone; the full
        archive and its pager live on the News landing.
      </Hint>
    </Block>
  );
}
