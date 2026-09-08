import { Block } from "@/components/wireframe/Block";
import { Card, CardGrid, Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { PAST_INITIATIVE_DETAIL_HREF } from "@/lib/pages/about";

export function InitiativeCard({ href = PAST_INITIATIVE_DETAIL_HREF }: { href?: string }) {
  return (
    <Card href={href} title="Initiative title" subtitle="one-line teaser">
      <Cover label="image" />
    </Card>
  );
}

export function AB9InitiativeDirectory() {
  return (
    <Block code="AB9" label="Initiative directory">
      <CardGrid cols={3}>
        {Array.from({ length: 12 }, (_, index) => (
          <InitiativeCard key={index} />
        ))}
      </CardGrid>
      <Hint>
        ~30 entries in a plain card grid — no filter bar and no pagination
        (decision 52). The directory has no facets to filter on and 30 cards
        scroll fine. Card = image · title · one-line teaser → initiative detail.
      </Hint>
    </Block>
  );
}
