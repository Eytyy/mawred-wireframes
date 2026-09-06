import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Badge, DirRow } from "@/components/wireframe/DirRow";
import { Hint } from "@/components/wireframe/Hint";
import type { NewsPost } from "@/lib/pages/news";

type HM6LatestNewsProps = {
  posts: NewsPost[];
  allHref: string;
};

export function HM6LatestNews({ posts, allHref }: HM6LatestNewsProps) {
  return (
    <Block code="HM6" label="Latest news" heading="Latest news">
      {posts.map((post) => (
        <DirRow key={post.title} href={post.href} name={post.title}>
          <Badge>{post.date}</Badge>
          <Badge>{post.category}</Badge>
        </DirRow>
      ))}
      <Btn className="mt-3" href={allHref}>
        All news
      </Btn>
      <Hint>
        Home is a summary index, not a second News landing, so this strip
        leaves the feed card for the shared <code>DirRow</code> &mdash; title
        &middot; date &middot; category, no image (decision 43 revised). Three
        real posts from the News sample (decision 115): Made With Your Magic
        (27 July), Wijhat second-round grantees (20 July), Production Awards
        2026 results (6 May). The full archive and its pager live on the News
        landing; N13 still reuses the feed card verbatim.
      </Hint>
    </Block>
  );
}
