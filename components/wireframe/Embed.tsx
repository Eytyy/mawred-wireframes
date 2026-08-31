type EmbedProps = {
  kind: "audio" | "video";
};

export function Embed({ kind }: EmbedProps) {
  const label =
    kind === "video"
      ? "video embed (YouTube) — provider chrome carries the title and thumbnail"
      : "audio embed (SoundCloud) — provider chrome carries the title";

  return (
    <div
      className={`flex items-center justify-center border border-black bg-neutral-200 px-2.5 text-center text-xs text-neutral-500 ${
        kind === "video" ? "h-[190px]" : "h-[58px]"
      }`}
    >
      {label}
    </div>
  );
}
