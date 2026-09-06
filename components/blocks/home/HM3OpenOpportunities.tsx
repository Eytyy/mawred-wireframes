import { Block } from "@/components/wireframe/Block";
import { Badge } from "@/components/wireframe/DirRow";
import { Card, CardGrid } from "@/components/wireframe/Card";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";
import type { OpenCall } from "@/lib/pages/home";

type HM3OpenOpportunitiesProps = {
  nocalls: boolean;
  calls: OpenCall[];
};

export function HM3OpenOpportunities({
  nocalls,
  calls,
}: HM3OpenOpportunitiesProps) {
  return (
    <Block
      code="HM3"
      label="Currently open opportunities"
      heading="Currently open opportunities"
    >
      {nocalls ? (
        <>
          <EmptyState
            heading="No calls are open right now"
            line="The next round opens [date]. All four programmes stay browsable in the meantime."
            action="See all programmes"
          />
          <Hint>
            Spec §3C requires the graceful-empty branch, so the toggle stays
            &mdash; but it is a <b>template branch, not a reachable state</b>.
            Stand for Art accepts applications all year with no rounds and no
            deadlines, so at least one call is always open. Same information as
            a programme page&rsquo;s closed apply state (decision 5).
          </Hint>
        </>
      ) : (
        <>
          <CardGrid>
            {calls.map((call) => (
              <Card
                key={call.programme}
                href={call.href}
                title={call.programme}
                footer={
                  <>
                    <p className="mt-1.5 text-sm">{call.descriptor}</p>
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
            programme page. Descriptors and names come from{" "}
            <code>HOME_PROGRAMMES</code> (compressed from each programme&rsquo;s
            C1); status is the live call: Production Awards deadline 19 Oct
            2026, 16:00 Beirut; Wijhat applications year-round, decided in three
            rounds (the live Home&rsquo;s &ldquo;open all year&rdquo; is wrong
            &mdash; no year is invented); Stand for Art open all year, no
            rounds, no deadlines. Abbara is absent because Abbara 08 closed in
            July 2025. Curated block, not a live query into the programme kit
            &mdash; the kit stays closed. Call-status is one shared source with
            three surfaces: this block, the News Announcements category, and the
            programme page&rsquo;s apply status (decision 5). Toggle the
            no-calls state for the template empty branch.
          </Hint>
        </>
      )}
    </Block>
  );
}
