import { Block } from "@/components/wireframe/Block";
import { Fill } from "@/components/wireframe/Fill";

type TimelineStage = {
  n: string;
  d: string;
};

type S1TimelineProps = {
  stages: TimelineStage[];
};

export function S1Timeline({ stages }: S1TimelineProps) {
  return (
    <Block code="S1" label="Programme timeline">
      <ul className="m-0 list-none p-0">
        {stages.map((stage, index) => (
          <li
            key={stage.n}
            className={`relative border-l-2 border-black pb-3.5 pl-3.5 ${
              index === stages.length - 1 ? "border-l-transparent" : ""
            }`}
          >
            <span
              className="absolute -left-[7px] top-0.5 h-2.5 w-2.5 bg-black"
              aria-hidden
            />
            <div className="flex justify-between gap-2.5 text-sm">
              <span>{stage.n}</span>
              <em className="text-xs text-neutral-500 not-italic">{stage.d}</em>
            </div>
            <Fill width={65} />
          </li>
        ))}
      </ul>
    </Block>
  );
}
