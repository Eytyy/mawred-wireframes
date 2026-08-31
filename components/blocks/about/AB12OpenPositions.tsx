import { Block } from "@/components/wireframe/Block";
import { DirRow } from "@/components/wireframe/DirRow";
import { EmptyState } from "@/components/wireframe/EmptyState";
import { Hint } from "@/components/wireframe/Hint";
import { CAREERS_POSITION_HREF } from "@/lib/pages/about";

type AB12OpenPositionsProps = {
  onejob: boolean;
  nopositions: boolean;
};

export function AB12OpenPositions({ onejob, nopositions }: AB12OpenPositionsProps) {
  const count = onejob ? 1 : 4;

  return (
    <Block code="AB12" label="Open positions">
      {nopositions ? (
        <>
          <EmptyState
            heading="No open positions right now"
            line="New roles are posted here when they open."
            action="Contact Mawred"
          />
          <Hint>
            The likeliest state of this page for most of the year — drawn as a
            first-class state, not an accident.
          </Hint>
        </>
      ) : (
        <>
          {Array.from({ length: count }, (_, index) => (
            <DirRow key={index} href={CAREERS_POSITION_HREF} name="Position title">
              <span className="text-xs text-neutral-500">Location · Full time</span>
              <span className="text-xs text-neutral-500">Apply by [date]</span>
            </DirRow>
          ))}
          <Hint>
            Text rows, not image cards (decision 53): a list of one to a few text
            records has no imagery to carry a grid, and the same row reads
            correctly at one item or at ten. Meta is optional per position and
            drops out when absent. Toggle the single and empty states.
          </Hint>
        </>
      )}
    </Block>
  );
}
