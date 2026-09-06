import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";
import { Timeline } from "@/components/wireframe/Timeline";
import type { HistoryEntry } from "@/lib/pages/about";

type AB5HistoryTimelineProps = {
  lead: string[];
  entries: HistoryEntry[];
};

export function AB5HistoryTimeline({ lead, entries }: AB5HistoryTimelineProps) {
  return (
    <Block code="AB5" label="History timeline" heading="History">
      <Prose text={lead} />
      <div className="mt-4">
        <Timeline
          items={entries.map((entry) => ({
            key: entry.year,
            label: (
              <span>
                <strong>{entry.year}</strong> — {entry.milestone}
              </span>
            ),
            text: entry.text,
          }))}
        />
      </div>
      <Hint>
        The headline graduation: a wall of dated prose becomes an ordered
        timeline. Eleven dated entries, from the 2003 founding meetings to the
        2017 move to Beirut; the undated joint initiatives have no year to sit
        on and stay in the lead above. The twelfth row spans 2018&ndash;2026
        and is labelled &ldquo;Not covered by the published history&rdquo;
        rather than filled: the published history stops at 2017, so nine years
        of it are Mawred&rsquo;s to write, not ours to invent. Kept inline on
        this page rather than linked or anchored out (decision 46).
      </Hint>
    </Block>
  );
}
