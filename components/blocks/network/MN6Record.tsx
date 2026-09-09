import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Cover } from "@/components/wireframe/Card";
import { Badge } from "@/components/wireframe/DirRow";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";
import { Prose } from "@/components/wireframe/Prose";
import type { NetworkEngagement, NetworkRecord } from "@/lib/pages/network";

type MN6RecordProps = {
  record?: NetworkRecord;
};

const PLACEHOLDER_ROWS = [
  "Country",
  "Discipline",
  "Involvement",
  "Programme",
  "Round",
  "Year",
];

function Engagement({ engagement }: { engagement: NetworkEngagement }) {
  return (
    <div className="mt-3.5 border-t border-neutral-200 pt-2.5">
      <div className="mb-1.5 flex flex-wrap items-center gap-2">
        <Badge>{engagement.involvement}</Badge>
        <span className="text-xs">{engagement.programme}</span>
        {engagement.track ? (
          <span className="text-xs text-neutral-500">{engagement.track}</span>
        ) : null}
        <span className="text-xs text-neutral-500">{engagement.year}</span>
      </div>
      <strong className="text-sm">{engagement.title}</strong>
      {engagement.description ? <Prose text={engagement.description} /> : null}
    </div>
  );
}

export function MN6Record({ record }: MN6RecordProps) {
  return (
    <Block code="MN6" label="Record">
      <div className="flex flex-wrap gap-4">
        <div className="shrink-0 grow-0 basis-[190px]">
          <Cover tall label="photo / logo" />
        </div>
        <div className="min-w-[340px] flex-1">
          {record ? (
            <>
              {record.descriptor ? (
                <strong className="text-sm">{record.descriptor}</strong>
              ) : null}
              <KV label="Country" value={record.countries} />
              <KV label="Discipline" value={record.disciplines} />
              {record.body ? (
                <div className="my-2.5">
                  <Prose text={record.body} />
                </div>
              ) : null}
              {record.engagements.map((engagement) => (
                <Engagement
                  key={`${engagement.involvement} ${engagement.track ?? engagement.year}`}
                  engagement={engagement}
                />
              ))}
            </>
          ) : (
            <>
              <strong className="text-sm">Descriptor / role</strong>
              {PLACEHOLDER_ROWS.map((label) => (
                <KV key={label} label={label} />
              ))}
              <div className="my-3.5">
                <strong className="text-sm">Project title</strong>
                <Prose lines={3} />
              </div>
            </>
          )}
          <div className="mt-3.5">
            <Btn>← Back to the directory</Btn>
          </div>
        </div>
      </div>
      <Hint>
        Name comes from the page-header band — no title block. Photo left,
        fields right (decision 15). Publication detail later moved to the
        editorial two-column (decision 201); this record keeps the original
        split.
        A record carries one <em>or more</em> engagements, each with its own
        involvement, programme, round or track, year and project — this
        organisation took part in All Around Culture twice, so the group
        repeats. Optional fields render by omission: an organisation record
        carries no descriptor, an individual record carries no organisational
        description, and the first engagement here has a project title and no
        description. Programme · Discipline · Country values link back into the
        directory pre-filtered. Generic WordPress furniture — comment box,
        8-target share bar, dead decorative icons — is dropped (decision 24).
      </Hint>
    </Block>
  );
}
