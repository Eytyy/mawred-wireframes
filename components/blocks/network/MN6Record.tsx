import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";
import { Prose } from "@/components/wireframe/Prose";

type MN6RecordProps = {
  sparse: boolean;
};

const METADATA_ROWS: { label: string; sparse?: boolean }[] = [
  { label: "Country" },
  { label: "Discipline" },
  { label: "Involvement" },
  { label: "Programme" },
  { label: "Round", sparse: true },
  { label: "Year" },
];

export function MN6Record({ sparse }: MN6RecordProps) {
  const rows = METADATA_ROWS.filter((row) => !row.sparse || !sparse);

  return (
    <Block code="MN6" label="Record">
      <div className="flex flex-wrap gap-4">
        <div className="shrink-0 grow-0 basis-[190px]">
          <Cover tall label="photo / logo" />
        </div>
        <div className="min-w-[340px] flex-1">
          <strong className="text-sm">Descriptor / role</strong>
          {rows.map((row) => (
            <KV key={row.label} label={row.label} />
          ))}
          <div className="my-3.5">
            <strong className="text-sm">Project title</strong>
            {!sparse ? <Prose lines={3} /> : null}
          </div>
          <Btn>← Back to the directory</Btn>
        </div>
      </div>
      <Hint>
        Name comes from the page-header band — no title block. Photo left,
        fields right, following the publication-detail precedent (decision 15).
        A record with no round and no project description drops those rows
        entirely — no empty rows, no &ldquo;N/A&rdquo; (toggle the sparse
        state). Programme · Discipline · Country values link back into the
        directory pre-filtered. Generic WordPress furniture — comment box,
        8-target share bar, dead decorative icons — is dropped (decision 24).
      </Hint>
    </Block>
  );
}
