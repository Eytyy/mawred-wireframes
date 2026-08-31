import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";
import { Tag } from "@/components/wireframe/Tag";

type N7PostMetaProps = {
  byline: boolean;
  date?: string;
  category?: string;
  author?: string;
};

export function N7PostMeta({
  byline,
  date = "12 March 2026",
  category = "Announcements",
  author = "Author Name",
}: N7PostMetaProps) {
  return (
    <Block code="N7" label="Post meta strip">
      <div className="flex flex-wrap items-center gap-2.5 border-y border-neutral-200 py-2.25 text-xs">
        <span>{date}</span>
        <Tag>{category}</Tag>
        {byline ? (
          <span className="text-neutral-500">by {author}</span>
        ) : null}
      </div>
      <Hint>
        Replaces the trailing &ldquo;Mawred News, SliderEN, Comments Off&rdquo;
        line and moves above the body. The author byline is a{" "}
        <strong>client call</strong> &mdash; laid out both ways; the strip reads
        fine without it. Every live post is authored &ldquo;Mawred&rdquo;, so a
        byline as it stands adds nothing a reader doesn&rsquo;t already know.
      </Hint>
    </Block>
  );
}
