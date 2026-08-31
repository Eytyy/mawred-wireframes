import { Block } from "@/components/wireframe/Block";
import { Badge } from "@/components/wireframe/DirRow";
import { Card, CardGrid } from "@/components/wireframe/Card";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { HOME_OPEN_CALLS } from "@/lib/pages/home";

type HM3OpenOpportunitiesProps = {
  nocalls: boolean;
};

export function HM3OpenOpportunities({ nocalls }: HM3OpenOpportunitiesProps) {
  return (
    <Block code="HM3" label="Currently open opportunities">
      {nocalls ? (
        <>
          <EmptyState
            heading="No calls are open right now"
            line="The next round opens [date]. All four programmes stay browsable in the meantime."
            action="See all programmes"
          />
          <Hint>
            Never an empty slot: the block falls back to next-round timing plus a
            route into the programmes (spec §3C). Same information as a programme
            page&rsquo;s closed apply state (decision 5).
          </Hint>
        </>
      ) : (
        <>
          <CardGrid>
            {HOME_OPEN_CALLS.map((call) => (
              <Card
                key={call.programme}
                href={call.href}
                title={call.programme}
                footer={
                  <>
                    <Fill width={92} />
                    <small className="mt-1.25 block text-xs text-neutral-500">
                      Read more and apply →
                    </small>
                  </>
                }
              >
                <Badge>{call.status}</Badge>
              </Card>
            ))}
          </CardGrid>
          <Hint>
            Card = call-status badge · programme name · one-line descriptor →
            programme page. Curated block, not a live query into the programme kit
            &mdash; the kit stays closed. Call-status is one shared source with
            three surfaces: this block, the News Announcements category, and the
            programme page&rsquo;s apply status (decision 5). Toggle the no-calls
            state for the fallback.
          </Hint>
        </>
      )}
    </Block>
  );
}
