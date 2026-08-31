import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Card, CardGrid, Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { Tag } from "@/components/wireframe/Tag";
import type { PubStripItem } from "@/lib/pages/home";

type PubStripCardProps = PubStripItem;

function PubStripCard({ kind, href }: PubStripCardProps) {
  if (kind === "Publication") {
    return (
      <Card href={href} title="Publication title" subtitle="Arabic, English">
        <Cover />
        <div className="mt-1.75">
          <Tag>Publication</Tag>
        </div>
      </Card>
    );
  }

  return (
    <Card href={href} title="Episode or series title" subtitle="Mudawanat Podcast">
      <Cover label="episode thumbnail" />
      <div className="mt-1.75">
        <Tag>Episode</Tag>
      </div>
    </Card>
  );
}

type HM7LatestPublicationsProps = {
  items: PubStripItem[];
};

export function HM7LatestPublications({ items }: HM7LatestPublicationsProps) {
  return (
    <Block code="HM7" label="Latest from Publications">
      <CardGrid>
        {items.map((item, index) => (
          <PubStripCard key={index} {...item} />
        ))}
      </CardGrid>
      <Btn className="mt-3">All publications</Btn>
      <Hint>
        One combined strip, not a documents strip plus a media strip (decision 41)
        &mdash; two three-item strips for a taste of one section makes Home
        sprawl. Because the strip mixes two kinds, each card carries a type tag
        (Publication / Episode); otherwise it is the library card unchanged. The
        media item is a cover-style card linking into the series page, not a live
        embed &mdash; embeds carry provider chrome we can&rsquo;t restyle.
      </Hint>
    </Block>
  );
}
