import { Block } from "@/components/wireframe/Block";

type DownloadFile = {
  n: string;
  t: string;
};

type S2DownloadsProps = {
  files: DownloadFile[];
};

export function S2Downloads({ files }: S2DownloadsProps) {
  return (
    <Block code="S2" label="Downloadable forms / files">
      {files.map((file) => (
        <div
          key={file.n}
          className="my-1.5 flex justify-between gap-2.5 border border-black px-2.5 py-2"
        >
          <span>↓ {file.n}</span>
          <span className="text-neutral-500">{file.t}</span>
        </div>
      ))}
    </Block>
  );
}
