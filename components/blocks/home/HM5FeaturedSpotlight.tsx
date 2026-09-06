import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";
import type { HomeFeature } from "@/lib/pages/home";

type HM5FeaturedSpotlightProps = {
  twentieth: boolean;
  feature: HomeFeature;
};

export function HM5FeaturedSpotlight({
  twentieth,
  feature,
}: HM5FeaturedSpotlightProps) {
  return (
    <Block code="HM5" label="Featured / spotlight">
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[320px] flex-[2_1_320px]">
          <Banner label="feature image" />
        </div>
        <div className="min-w-[240px] flex-[1_1_240px]">
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            {twentieth ? "Mawred's 20th" : "Featured"}
          </span>
          <strong className="my-1.75 block text-sm">
            {twentieth
              ? "Twenty years of Mawred — campaign title"
              : feature.title}
          </strong>
          {twentieth ? (
            <>
              <Fill width={94} />
              <Fill width={70} />
            </>
          ) : (
            <Prose text={feature.text} />
          )}
          <div className="mt-2.75">
            <Btn primary href={twentieth ? "/mawreds-20th" : feature.href}>
              Read more
            </Btn>
          </div>
        </div>
      </div>
      <Hint>
        The homepage&rsquo;s one curation lever: an editor chooses what leads.
        Default feature is Made With Your Magic, Beirut &mdash; two sentences
        from that post&rsquo;s body, linking to{" "}
        <code>/news/editorial-post</code>. Two-column, image left, following
        decision 15. The &ldquo;Mawred&rsquo;s 20th&rdquo; campaign is a{" "}
        <b>state on this block, not a block of its own</b> (decision 44), and
        it stays structural: <code>/mawreds-20th</code> is still a stub and no
        campaign content is sourced, so the title and fills in that branch are
        a <b>gap</b>, not unpublished copy. Whether the 20th is permanent nav or
        a temporary campaign is a <b>client call</b>; this lays out either way.
        Toggle the 20th state.
      </Hint>
    </Block>
  );
}
