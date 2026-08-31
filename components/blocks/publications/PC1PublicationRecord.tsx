import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";
import { Prose } from "@/components/wireframe/Prose";

const METADATA_ROWS = [
  "Author",
  "Country",
  "Theme",
  "Type",
  "Language",
  "Year",
];

export function PC1PublicationRecord() {
  return (
    <Block code="PC1" label="Publication record">
      <div className="flex flex-wrap gap-4">
        <div className="shrink-0 grow-0 basis-[190px]">
          <Cover tall />
        </div>
        <div className="min-w-[340px] flex-1">
          {METADATA_ROWS.map((row) => (
            <KV key={row} label={row} />
          ))}
          <div className="my-3.5">
            <Prose lines={4} />
          </div>
          <Btn primary>↓ Open the document</Btn>
        </div>
      </div>
      <Hint>
        Title comes from the page-header band — no title block. A record missing
        a metadata field drops that row (no empty column, no &ldquo;N/A&rdquo;).
        Cover left, metadata + abstract right (decision 15).
      </Hint>
    </Block>
  );
}
