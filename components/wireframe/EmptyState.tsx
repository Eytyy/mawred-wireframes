import { Btn } from "@/components/wireframe/Btn";

type EmptyStateProps = {
  heading: string;
  line: string;
  action?: string;
};

export function EmptyState({ heading, line, action = "Clear all filters" }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-black px-4 py-9 text-center">
      <strong className="text-sm">{heading}</strong>
      <p className="my-1.5 mb-3 text-xs text-neutral-500">{line}</p>
      <Btn>{action}</Btn>
    </div>
  );
}
