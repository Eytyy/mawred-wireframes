import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Card, CardGrid, Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { Tag } from "@/components/wireframe/Tag";
import type { PubStripItem } from "@/lib/pages/home";

function PubStripCard({ kind, title, subtitle, href }: PubStripItem) {
  return (
    <Card href={href} title={title} subtitle={subtitle}>
      <Cover label={kind === "Episode" ? "episode thumbnail" : undefined} />
      <div className="mt-1.75">
        <Tag>{kind}</Tag>
      </div>
    </Card>
  );
}

type HM7LatestPublicationsProps = {
  items: PubStripItem[];
  allHref: string;
};

export function HM7LatestPublications({
  items,
  allHref,
}: HM7LatestPublicationsProps) {
  return (
    <Block
      code="HM7"
      label="Latest from Publications"
      heading="Latest from Publications"
    >
      <CardGrid>
        {items.map((item) => (
          <PubStripCard key={item.title} {...item} />
        ))}
      </CardGrid>
      <Btn className="mt-3" href={allHref}>
        All publications
      </Btn>
      <Hint>
        One combined strip, not a documents strip plus a media strip (decision
        41) &mdash; two three-item strips for a taste of one section makes Home
        sprawl. Three library records (the first three{" "}
        <code>LIBRARY_RECORDS</code>) with their real language lines, plus one
        Mudawanat card. <b>Gap:</b> no episode titles are sourced, so the media
        card carries the series, not an episode. Because the strip mixes two
        kinds, each card carries a type tag (Publication / Episode); otherwise
        it is the library card unchanged. The media item is a cover-style card
        linking into the series page, not a live embed &mdash; embeds carry
        provider chrome we can&rsquo;t restyle.
      </Hint>
    </Block>
  );
}
