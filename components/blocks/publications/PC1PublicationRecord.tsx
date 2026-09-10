import type { ReactNode } from "react";
import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { KV } from "@/components/wireframe/KV";
import { Prose } from "@/components/wireframe/Prose";
import type { PublicationRecord } from "@/lib/pages/publications";

type PartProps = {
  record?: PublicationRecord;
  flush?: boolean;
};

function RecordCover() {
  return <Cover tall />;
}

function RecordMeta({ record }: { record?: PublicationRecord }) {
  return (
    <div>
      <KV label="Author" />
      <KV label="Type" />
      <KV label="Language" value={record?.language} />
      <KV label="Year" value={record?.year} />
    </div>
  );
}

function RecordDownloads({ record }: { record?: PublicationRecord }) {
  return record?.downloads ? (
    <div className="flex flex-wrap gap-1.5">
      {record.downloads.map((label) => (
        <Btn key={label} primary>
          ↓ {label}
        </Btn>
      ))}
    </div>
  ) : (
    <Btn primary>↓ Open the document</Btn>
  );
}

function RecordAbstract({ record }: { record?: PublicationRecord }) {
  return record?.abstract ? (
    <Prose text={record.abstract} />
  ) : (
    <Prose lines={4} />
  );
}

function Part({ flush, children }: { flush?: boolean; children: ReactNode }) {
  return (
    <Block code="PC1" label="Publication record" flush={flush}>
      {children}
    </Block>
  );
}

export function PC1Cover({ flush }: Omit<PartProps, "record">) {
  return (
    <Part flush={flush}>
      <RecordCover />
    </Part>
  );
}

export function PC1Meta({ record, flush }: PartProps) {
  return (
    <Part flush={flush}>
      <RecordMeta record={record} />
    </Part>
  );
}

export function PC1Downloads({ record, flush }: PartProps) {
  return (
    <Part flush={flush}>
      <RecordDownloads record={record} />
    </Part>
  );
}

export function PC1Abstract({ record, flush }: PartProps) {
  return (
    <Part flush={flush}>
      <RecordAbstract record={record} />
    </Part>
  );
}

export function PC1PublicationRecord({ record }: { record?: PublicationRecord }) {
  return (
    <Block code="PC1" label="Publication record">
      <div className="grid grid-cols-1 items-start gap-8 wide:grid-cols-2 wide:gap-12">
        <RecordCover />
        <div className="flex flex-col gap-4">
          <RecordMeta record={record} />
          <RecordAbstract record={record} />
          <RecordDownloads record={record} />
        </div>
      </div>
      <Hint>
        Cover, metadata, downloads and abstract are separate slots the detail
        page grids (decisions 208, 218). From <code>wide</code> (1440)
        the cover is sticky left; meta sits under the title, downloads
        under the abstract. This record publishes Language and Year only;
        Author and Type stay as fill bars because the live detail page
        does not tag them. Country and Theme leave (decision 207) — they
        are library facets, not fields this page shows.
      </Hint>
    </Block>
  );
}
