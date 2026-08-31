import { Block } from "@/components/wireframe/Block";
import { Chip } from "@/components/wireframe/Chip";
import { Fill } from "@/components/wireframe/Fill";
import { Hint } from "@/components/wireframe/Hint";
import { Prose } from "@/components/wireframe/Prose";

type PB1SeriesIntroProps = {
  paras: number;
  links?: string[];
};

export function PB1SeriesIntro({ paras, links = [] }: PB1SeriesIntroProps) {
  return (
    <Block code="PB1" label="Series intro">
      <Fill width={34} />
      <Prose lines={paras} />
      {links.length > 0 ? (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {links.map((link) => (
            <Chip key={link}>↗ {link}</Chip>
          ))}
        </div>
      ) : null}
      <Hint>
        Prose length flexes per series (1 paragraph → 3). Outbound links sit at
        the end of the intro.
      </Hint>
    </Block>
  );
}
