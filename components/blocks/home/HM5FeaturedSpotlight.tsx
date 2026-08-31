import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Btn } from "@/components/wireframe/Btn";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";

type HM5FeaturedSpotlightProps = {
  twentieth: boolean;
};

export function HM5FeaturedSpotlight({ twentieth }: HM5FeaturedSpotlightProps) {
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
              : "Beneficiary story, publication, exhibition or milestone"}
          </strong>
          <Fill width={94} />
          <Fill width={70} />
          <div className="mt-2.75">
            <Btn primary>Read more</Btn>
          </div>
        </div>
      </div>
      <Hint>
        The homepage&rsquo;s one curation lever: an editor chooses what leads.
        Two-column, image left, following decision 15. The &ldquo;Mawred&rsquo;s
        20th&rdquo; campaign is a <b>state on this block, not a block of its own</b>{" "}
        (decision 44) &mdash; so Home can carry the campaign without baking a
        temporary thing into permanent structure. Whether the 20th is permanent nav
        or a temporary campaign is a <b>client call</b>; this lays out either way.
        Toggle the 20th state.
      </Hint>
    </Block>
  );
}
