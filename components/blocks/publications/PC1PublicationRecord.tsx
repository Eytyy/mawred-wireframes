import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";
import { Prose } from "@/components/wireframe/Prose";
import type { PublicationRecord } from "@/lib/pages/publications";

type PC1PublicationRecordProps = {
  record?: PublicationRecord;
};

export function PC1PublicationRecord({ record }: PC1PublicationRecordProps) {
  return (
    <Block code="PC1" label="Publication record">
      <div className="flex flex-wrap gap-4">
        <div className="shrink-0 grow-0 basis-[190px]">
          <Cover tall />
        </div>
        <div className="min-w-[340px] flex-1">
          <KV label="Author" />
          <KV label="Country" />
          <KV label="Theme" />
          <KV label="Type" />
          <KV label="Language" value={record?.language} />
          <KV label="Year" value={record?.year} />
          <div className="my-3.5">
            <Prose lines={4} text={record?.abstract} />
          </div>
          {record?.downloads ? (
            <div className="flex flex-wrap gap-1.5">
              {record.downloads.map((label) => (
                <Btn key={label} primary>
                  ↓ {label}
                </Btn>
              ))}
            </div>
          ) : (
            <Btn primary>↓ Open the document</Btn>
          )}
        </div>
      </div>
      <Hint>
        Title comes from the page-header band — no title block. Cover left,
        metadata + abstract right (decision 15). This record publishes Language
        and Year only; Author, Country, Theme and Type stay as fill bars because
        the live detail page does not tag them — the library filters on taxonomy
        this page does not show.
      </Hint>
    </Block>
  );
}
