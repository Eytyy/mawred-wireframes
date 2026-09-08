import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";

export type WhichRoundRow = { label: string; value: string };

type S6WhichRoundProps = {
  lead?: string;
  rows?: WhichRoundRow[];
  notes?: string[];
};

const PLACEHOLDER_LABELS = [
  "If your travel is before [date]",
  "If your travel is before [date]",
  "If your travel is after [date]",
];

export function S6WhichRound({ lead, rows, notes }: S6WhichRoundProps) {
  return (
    <Block
      code="S6"
      label="Which round should I apply to?"
      heading="Which round should I apply to?"
      headingAs="h3"
    >
      {lead ? <p className="mb-4">{lead}</p> : null}
      {rows
        ? rows.map((row) => (
            <KV key={row.label} label={row.label} value={row.value} fill={false} />
          ))
        : PLACEHOLDER_LABELS.map((label, index) => (
            <KV key={`${label}-${index}`} label={label} />
          ))}
      {notes ? (
        <div className="mt-4 bg-neutral-200 p-3.5">
          <ul className="m-0 list-disc pl-5">
            {notes.map((note) => (
              <li key={note} className="mb-1.5 last:mb-0">
                {note}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <Hint>
        Static guide, not an interactive date picker (decision 7).
        {rows ? (
          <> Each row names the earliest round a travel date can use; later
          rounds stay open for later travel.</>
        ) : null}
      </Hint>
    </Block>
  );
}
