import { Block } from "@/components/wireframe/Block";
import { Cell, Cells } from "@/components/wireframe/Cells";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { HOME_PROGRAMMES } from "@/lib/pages/home";

export function HM4ProgrammesOverview() {
  return (
    <Block code="HM4" label="Programmes overview — all four">
      <Cells>
        {HOME_PROGRAMMES.map((programme) => (
          <Cell key={programme.name}>
            <span className="mb-1.5 block text-xs text-neutral-500">Programme</span>
            <strong className="text-sm">{programme.name}</strong>
            <Fill width={90} />
            <small className="mt-1.25 block text-xs text-neutral-500">
              Learn more →
            </small>
          </Cell>
        ))}
      </Cells>
      <Hint>
        New vs the current Home, which only ever shows what&rsquo;s open. Renders
        as a compact text row, deliberately lighter than HM3&rsquo;s cards
        (decision 40), so the two don&rsquo;t read as duplicate strips. An open
        programme appears in both &mdash; different jobs: HM3 says act now, HM4
        says here is the whole offer. Name + descriptor only, no kit dependency.
      </Hint>
    </Block>
  );
}
