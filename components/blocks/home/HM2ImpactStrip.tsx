import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Figs, type FigItem } from "@/components/wireframe/Figs";
import { Hint } from "@/components/wireframe/Hint";
import type { MosaicTile } from "@/lib/pages/home";

type HM2ImpactStripProps = {
  staticfb: boolean;
  figures: readonly FigItem[];
  mosaic: MosaicTile[];
};

export function HM2ImpactStrip({
  staticfb,
  figures,
  mosaic,
}: HM2ImpactStripProps) {
  return (
    <Block code="HM2" label="Impact stat strip + faces-of-impact mosaic wall">
      <Figs labels={[...figures]} wide />
      {staticfb ? (
        <div className="mt-3">
          <Banner label="single static impact image — motion fallback" />
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {mosaic.map((tile) => (
            <div
              key={tile.key}
              className={`flex h-[92px] items-end border border-black bg-neutral-200 p-1.5 text-[10px] text-neutral-500 ${
                tile.wide ? "col-span-2" : ""
              }`}
            >
              tile
            </div>
          ))}
        </div>
      )}
      <Hint>
        Replaces the dropped Data-Studio map. Figures sit as an adjacent band
        above the wall, not overlaid on it (decision 37). 55 countries and 38
        programmes &amp; initiatives are the Network facet counts; 23 years is
        years since founding in 2003, not Network&rsquo;s 21 tagged years.{" "}
        <b>Gap:</b> no Mawred-wide grant total is published anywhere &mdash;
        the spec&rsquo;s ~400 is Production Awards alone, and 87 organisations
        is Abbara&rsquo;s &mdash; so the first rail keeps <code>00</code>{" "}
        rather than borrowing a programme-scoped number (decisions 112, 128).
        Tiles stay uncaptioned (decision 37); same record source as HM1.{" "}
        <b>Which figures lead is a client call</b>. Hero and wall are two
        distinct blocks sharing material, not a continuous dissolve (decision
        38). Figures count up on scroll; degrade to plain numbers.
      </Hint>
    </Block>
  );
}
