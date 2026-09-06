import Link from "next/link";
import { Block } from "@/components/wireframe/Block";
import { Cell, Cells } from "@/components/wireframe/Cells";
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
      <Cells>
        {programmes.map((programme) => (
          <Cell key={programme.name}>
            <Link href={programme.href} className="no-underline">
              <span className="mb-1.5 block text-xs text-neutral-500">
                Programme
              </span>
              <strong className="text-sm">{programme.name}</strong>
              <p className="mt-1.5 text-sm">{programme.descriptor}</p>
              <small className="mt-1.25 block text-xs text-neutral-500">
                Learn more →
              </small>
            </Link>
          </Cell>
        ))}
      </Cells>
      <Hint>
        New vs the current Home, which only ever shows what&rsquo;s open.
        Descriptors are compressed from each programme&rsquo;s C1;{" "}
        <code>HOME_PROGRAMMES</code> is the single source, and HM3&rsquo;s open
        calls reference it, so a programme&rsquo;s one-liner isn&rsquo;t written
        twice. Renders as a compact text row, deliberately lighter than
        HM3&rsquo;s cards (decision 40), so the two don&rsquo;t read as
        duplicate strips. An open programme appears in both &mdash; different
        jobs: HM3 says act now, HM4 says here is the whole offer. Name +
        descriptor only, no kit dependency.
      </Hint>
    </Block>
  );
}
