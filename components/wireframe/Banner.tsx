import { cn } from "cn";

type BannerProps = {
  label: string;
  square?: boolean;
};

export function Banner({ label, square }: BannerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-black bg-neutral-200 text-xs text-neutral-500",
        square ? "aspect-square" : "aspect-video",
      )}
    >
      {label}
    </div>
  );
}
