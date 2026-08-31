import { Block } from "@/components/wireframe/Block";
import { Btn } from "@/components/wireframe/Btn";
import { Hint } from "@/components/wireframe/Hint";
import { NEWS_SHARE_TARGETS } from "@/lib/pages/news";

export function N12Share() {
  return (
    <Block code="N12" label="Share">
      <div className="flex flex-wrap items-center gap-1.75 text-xs">
        <span>Share</span>
        {Array.from({ length: NEWS_SHARE_TARGETS }, (_, index) => (
          <span
            key={index}
            className="flex h-8 w-8 items-center justify-center border border-black"
          >
            &#9633;
          </span>
        ))}
        <Btn>Copy link</Btn>
      </div>
      <Hint>
        Trimmed from the current eight targets to four plus copy-link (decision
        31), at the body tail above Related posts.
      </Hint>
    </Block>
  );
}
