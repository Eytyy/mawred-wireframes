import { Block } from "@/components/wireframe/Block";
import { Chip } from "@/components/wireframe/Chip";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type PB1SeriesIntroProps = {
  paras?: number;
  links?: string[];
  text?: string | string[];
  heading?: string;
};

export function PB1SeriesIntro({
  paras = 3,
  links = [],
  text,
  heading,
}: PB1SeriesIntroProps) {
  return (
    <Block code="PB1" label="Series intro">
      {heading ? <h3 className="mb-1 text-base font-bold">{heading}</h3> : null}
      <Prose lines={paras} text={text} />
      {links.length > 0 ? (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {links.map((link) => (
            <Chip key={link}>↗ {link}</Chip>
          ))}
        </div>
      ) : null}
      <Hint>
        Prose length flexes per series (1 paragraph → 3). Outbound links sit at
        the end of the intro. None of the three series has a headline above the
        intro — the H1 is the chrome band — so the heading is an unused slot.
      </Hint>
    </Block>
  );
}
