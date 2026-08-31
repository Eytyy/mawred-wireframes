import { Block } from "@/components/wireframe/Block";
import { Timeline } from "@/components/wireframe/Timeline";

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
      <Timeline
        items={stages.map((stage) => ({
          key: stage.n,
          label: stage.n,
          meta: stage.d,
        }))}
      />
    </Block>
  );
}
