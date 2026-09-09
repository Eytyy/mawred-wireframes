import { Block } from "@/components/wireframe/Block";
import { Cover } from "@/components/wireframe/Card";
import { Badge } from "@/components/wireframe/DirRow";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";
import { Prose } from "@/components/wireframe/Prose";
import type { NetworkEngagement, NetworkRecord } from "@/lib/pages/network";

type MN6RecordProps = {
  record?: NetworkRecord;
  flush?: boolean;
};

function Engagement({ engagement }: { engagement: NetworkEngagement }) {
  return (
    <div className="border-t border-neutral-200 pt-2.5">
      <div className="mb-1.5 flex flex-col items-start gap-1.5">
        <Badge>{engagement.involvement}</Badge>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs">{engagement.programme}</span>
          {engagement.track ? (
            <span className="text-xs text-neutral-500">{engagement.track}</span>
          ) : null}
          <span className="text-xs text-neutral-500">{engagement.year}</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{engagement.title}</h2>
      {engagement.description ? <Prose text={engagement.description} /> : null}
    </div>
  );
}

function RecordMeta({ record }: { record?: NetworkRecord }) {
  if (!record) {
    return (
      <>
        <strong className="text-sm">Descriptor / role</strong>
        <KV label="Country" />
        <KV label="Discipline" />
      </>
    );
  }

  return (
    <>
      {record.descriptor ? (
        <strong className="text-sm">{record.descriptor}</strong>
      ) : null}
      <KV label="Country" value={record.countries} />
      <KV label="Discipline" value={record.disciplines} />
    </>
  );
}

function RecordBody({ record }: { record?: NetworkRecord }) {
  if (record?.body) {
    return <Prose text={record.body} />;
  }
  if (record) {
    return null;
  }
  return <Prose lines={3} />;
}

function RecordEngagements({ record }: { record?: NetworkRecord }) {
  if (!record) {
    return (
      <div className="border-t border-neutral-200 pt-2.5">
        <h2 className="text-2xl font-bold">Project title</h2>
        <Prose lines={3} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {record.engagements.map((engagement) => (
        <Engagement
          key={`${engagement.involvement} ${engagement.track ?? engagement.year}`}
          engagement={engagement}
        />
      ))}
    </div>
  );
}

export function MN6Record({ record, flush }: MN6RecordProps) {
  return (
    <Block code="MN6" label="Record" flush={flush}>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="contents lg:sticky lg:top-10 lg:flex lg:flex-col lg:gap-4 lg:self-start">
          <div className="order-2 md:col-start-1 md:row-start-1">
            <Cover tall label="photo / logo" />
          </div>
          <div className="order-3 md:col-span-2">
            <RecordMeta record={record} />
          </div>
        </div>
        <div className="contents lg:flex lg:flex-col lg:gap-4">
          <h1 className="order-1 min-w-0 text-5xl font-bold md:col-start-2 md:row-start-1">
            {record?.name ?? "Name"}
          </h1>
          <div className="order-4 md:col-span-2">
            <RecordBody record={record} />
          </div>
          <div className="order-5 md:col-span-2">
            <RecordEngagements record={record} />
          </div>
        </div>
      </div>
      <Hint>
        Cover, meta, title, description and engagements are separate grid
        items. Mobile stacks title, then cover, then meta, then description,
        then records. On tablet a compact portrait sits beside the title and
        the rest stay stacked. Desktop keeps the sticky identity column
        (photo / logo, Country, Discipline) and the reading column. Name
        comes from the record, not the page-header band (decision 210). A
        record carries one <em>or more</em> engagements, each with its own
        involvement, programme, round or track, year and project — this
        organisation took part in All Around Culture twice, so the group
        repeats. Optional fields render by omission: an organisation record
        carries no descriptor, an individual record carries no organisational
        description, and the first engagement here has a project title and no
        description. Programme · Discipline · Country values link back into
        the directory pre-filtered. No back button — the crumb already names
        the directory (decision 212). Generic WordPress furniture — comment
        box, 8-target share bar, dead decorative icons — is dropped
        (decision 24).
      </Hint>
    </Block>
  );
}
