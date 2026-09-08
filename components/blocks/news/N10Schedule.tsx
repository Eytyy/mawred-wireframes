import { cn } from "cn";
import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

const SCHEDULE_ROWS = 3;

export function N10Schedule() {
  return (
    <Block code="N10" label="Schedule / programme" optional>
      <div className="border border-black">
        {Array.from({ length: SCHEDULE_ROWS }, (_, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-wrap gap-3 px-2.5 py-2.25",
              index < SCHEDULE_ROWS - 1 && "border-b border-neutral-200",
            )}
          >
            <span className="w-[100px] shrink-0 text-xs font-bold">Date</span>
            <span className="min-w-[180px] flex-1 text-xs text-neutral-500">
              Venue &middot; detail
            </span>
            <span className="w-[70px] shrink-0 text-xs text-neutral-500">
              Time
            </span>
          </div>
        ))}
      </div>
      <Hint>
        Dated rows &mdash; date &middot; venue &middot; time &middot; detail.
        Sits after the prose (decision 29).
      </Hint>
    </Block>
  );
}
