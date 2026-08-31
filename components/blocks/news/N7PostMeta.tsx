import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Tag } from "@/components/wireframe/Tag";

type N7PostMetaProps = {
  byline: boolean;
};

export function N7PostMeta({ byline }: N7PostMetaProps) {
  return (
    <Block code="N7" label="Post meta strip">
      <div className="flex flex-wrap items-center gap-2.5 border-y border-neutral-200 py-2.25 text-xs">
        <span>12 March 2026</span>
        <Tag>Announcements</Tag>
        {byline ? (
          <span className="text-neutral-500">by Author Name</span>
        ) : null}
      </div>
      <Hint>
        Replaces the trailing &ldquo;Mawred News, SliderEN, Comments Off&rdquo;
        line and moves above the body. The author byline is a{" "}
        <strong>client call</strong> &mdash; laid out both ways; the strip reads
        fine without it.
      </Hint>
    </Block>
  );
}
