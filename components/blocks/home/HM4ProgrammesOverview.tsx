import { Block } from "@/components/wireframe/Block";
import { Badge } from "@/components/wireframe/DirRow";
import { Card, CardGrid } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import type { ProgrammeOverview } from "@/lib/pages/home";

type HM4ProgrammesOverviewProps = {
  programmes: ProgrammeOverview[];
};

export function HM4ProgrammesOverview({
  programmes,
}: HM4ProgrammesOverviewProps) {
  return (
    <Block
      code="HM4"
      label="Programmes overview — all four"
      heading="Programmes"
    >
      <CardGrid>
        {programmes.map((programme) => (
          <Card
            key={programme.name}
            href={programme.href}
            title={programme.name}
            footer={<p className="mt-1.5 text-sm">{programme.descriptor}</p>}
          >
            <>
              {programme.status ? (
                <div className="mb-1.5">
                  <Badge>{programme.status}</Badge>
                </div>
              ) : null}
            </>
          </Card>
        ))}
      </CardGrid>
      <Hint>
        HM3 retired into this block. The four programmes are the same{" "}
        <code>Card</code> + <code>CardGrid</code> HM3 used: status{" "}
        <code>Badge</code> when the programme has one, name, C1-compressed
        descriptor in the footer. Abbara has no <code>status</code> (call closed
        July 2025), so it is a card without a chip &mdash; and that is also how
        &ldquo;nothing open&rdquo; reads: four cards, no badges, rather than an
        empty block (decision 130 revised). The <code>Programme</code> eyebrow
        and the <code>Cells</code> row are gone (decision 80 revised).{" "}
        <code>HOME_PROGRAMMES</code> is the only surface (decision 132 revised).
        Production Awards: deadline 19 Oct 2026, 16:00 Beirut. Wijhat:
        applications year-round, decided in three rounds (the live Home&rsquo;s
        &ldquo;open all year&rdquo; is wrong &mdash; no year is invented). Stand
        for Art: open all year, no rounds, no deadlines. Curated block, not a
        live query into the programme kit &mdash; the kit stays closed. The HM3
        code is not reused.
      </Hint>
    </Block>
  );
}
