import type { ReactNode } from "react";
import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

type N7PostMetaProps = {
  byline: boolean;
  date?: string;
  category?: string;
  author?: string;
  flush?: boolean;
  children?: ReactNode;
};

export function N7PostMeta({
  byline,
  date = "12 March 2026",
  category = "Announcements",
  author = "Author Name",
  flush,
  children,
}: N7PostMetaProps) {
  const bylineEl = byline ? (
    <span className="text-neutral-500">by {author}</span>
  ) : null;

  return (
    <Block code="N7" label="Post meta strip" flush={flush}>
      {children ? (
        <div className="flex flex-col gap-2">
          <span className="text-xs">{category}</span>
          {children}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs">
            <span>{date}</span>
            {bylineEl}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs">
          <span>{category}</span>
          <span>{date}</span>
          {bylineEl}
        </div>
      )}
      <Hint>
        On the editorial post, category sits above the H1 and date below it
        (decision 206). On the announcement it stays a single strip &mdash;
        category then date, no tag and no rule. Replaces the trailing
        &ldquo;Mawred News, SliderEN, Comments Off&rdquo; line. The author
        byline is a <strong>client call</strong> &mdash; laid out both ways; the
        line reads fine without it. Every live post is authored
        &ldquo;Mawred&rdquo;, so a byline as it stands adds nothing a reader
        doesn&rsquo;t already know.
      </Hint>
    </Block>
  );
}
