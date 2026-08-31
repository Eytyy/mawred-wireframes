import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";
import { Timeline } from "@/components/wireframe/Timeline";

type HistoryEntry = {
  year: string;
  milestone: string;
};

export function AB5HistoryTimeline({ entries }: { entries: HistoryEntry[] }) {
  return (
    <Block code="AB5" label="History timeline">
      <Prose lines={2} />
      <Timeline
        items={entries.map((entry) => ({
          key: entry.year,
          label: (
            <span>
              <strong>{entry.year}</strong> — {entry.milestone}
            </span>
          ),
          fill: 72,
        }))}
      />
      <Hint>
        The headline graduation: a wall of dated prose becomes an ordered
        timeline. Entry count and granularity are a copy call — nine drawn. Long
        nuance that will not fit a row lives in the short lead paragraph above,
        not in a row. Kept inline on this page rather than linked or anchored
        out (decision 46).
      </Hint>
    </Block>
  );
}
