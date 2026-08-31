import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Figs } from "@/components/wireframe/Figs";
import { Hint } from "@/components/wireframe/Hint";
import { HOME_FIGURES, HOME_MOSAIC } from "@/lib/pages/home";

type HM2ImpactStripProps = {
  staticfb: boolean;
};

export function HM2ImpactStrip({ staticfb }: HM2ImpactStripProps) {
  return (
    <Block code="HM2" label="Impact stat strip + faces-of-impact mosaic wall">
      <Figs labels={[...HOME_FIGURES]} wide />
      {staticfb ? (
        <div className="mt-3">
          <Banner label="single static impact image — motion fallback" />
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {HOME_MOSAIC.map((tile) => (
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
        above the wall, not overlaid on it (decision 37) &mdash; numbers over
        arbitrary photography can&rsquo;t be guaranteed legible. Figures count up
        on scroll; degrade to plain numbers. Tiles are uncaptioned (decision 37):
        captioning eight tiles is noise at tile size, and the hero already names
        its material. Same record source as HM1, so both numbers and imagery
        come from real funded records. <b>Which figures lead is a client call</b>
        , as is confirming them against the Network counts. Hero and wall are two
        distinct blocks sharing material, not a continuous dissolve (decision 38).
      </Hint>
    </Block>
  );
}
