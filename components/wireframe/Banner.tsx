type BannerProps = {
  label: string;
};

export function Banner({ label }: BannerProps) {
  return (
    <div className="flex aspect-video items-center justify-center border border-black bg-neutral-200 text-xs text-neutral-500">
      {label}
    </div>
  );
}
