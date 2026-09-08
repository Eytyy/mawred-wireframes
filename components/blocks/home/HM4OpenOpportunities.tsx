import { Block } from '@/components/wireframe/Block';
import { Badge } from '@/components/wireframe/DirRow';
import { Card, CardGrid } from '@/components/wireframe/Card';
import { Hint } from '@/components/wireframe/Hint';
import { SectionHeading } from '@/components/wireframe/SectionHeading';
import type { HomeOpportunity } from '@/lib/pages/home';

type HM4OpenOpportunitiesProps = {
  opportunities: HomeOpportunity[];
};

export function HM4OpenOpportunities({ opportunities }: HM4OpenOpportunitiesProps) {
  return (
    <Block code="HM4" label="Open grants & opportunities">
      <SectionHeading>Grants & opportunities</SectionHeading>
      <CardGrid cols={3} className="mt-8">
        {opportunities.map((opportunity) => (
          <Card
            key={opportunity.name}
            href={opportunity.href}
            title={opportunity.name}
            footer={
              <>
                <p className="mt-1.5 text-sm">{opportunity.descriptor}</p>
                <div className="mt-1.5">
                  <Badge>{opportunity.status}</Badge>
                </div>
              </>
            }
          />
        ))}
      </CardGrid>
      <Hint>
        Spec &sect;3C&rsquo;s open-calls strip, not the all-four overview (decision 40 revised).
        Shared <code>Card</code> + <code>CardGrid</code>: name at <code>text-2xl</code>,
        C1-compressed descriptor, then status <code>Badge</code> last so a wrapping chip does not
        push titles out of line (decision 184). Three cards now &mdash; Production Awards, Wijhat,
        Stand for Art. Abbara is absent because Abbara 08 closed in July 2025. Three cards fill a
        three-column row rather than leaving a fourth slot empty (decision 167 revised). Wijhat is
        applications year-round, decided in three rounds (the live Home&rsquo;s &ldquo;open all
        year&rdquo; is wrong &mdash; no year is invented). Stand for Art: open all year, no rounds,
        no deadlines, so an empty strip is unreachable and <code>nocalls</code> stays retired
        (decision 130). Curated block, not a live query into the programme kit &mdash; the kit stays
        closed. <code>HOME_OPPORTUNITIES</code> is the only surface (decision 132 revised). The HM3
        code is not reused. Jobs stay on About.
      </Hint>
    </Block>
  );
}
