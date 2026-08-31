import { NewsCard } from "@/components/blocks/news/N3PostFeed";
import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { CardGrid } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { HOME_NEWS_COUNT } from "@/lib/pages/home";

export function HM6LatestNews() {
  return (
    <Block code="HM6" label="Latest news">
      <CardGrid>
        {Array.from({ length: HOME_NEWS_COUNT }, (_, index) => (
          <NewsCard key={index} bare />
        ))}
      </CardGrid>
      <Btn className="mt-3">All news</Btn>
      <Hint>
        Reuses the News feed card verbatim (decision 43) &mdash; image · category
        tag · title · date. Four latest posts, curated to a strip; the full
        archive and its pager live on the News landing.
      </Hint>
    </Block>
  );
}
