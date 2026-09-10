import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Caption } from "@/components/wireframe/Caption";
import { Hint } from "@/components/wireframe/Hint";

type N6FeaturedImageProps = {
  caption?: string;
  flush?: boolean;
  square?: boolean;
};

export function N6FeaturedImage({
  caption,
  flush,
  square,
}: N6FeaturedImageProps) {
  return (
    <Block code="N6" label="Featured image" flush={flush}>
      <Banner label="featured image" square={square} />
      {caption ? <Caption>{caption}</Caption> : null}
      <Hint>
        The current site repeats the title as an H2 under the image; dropped
        &mdash; the page H1 carries the title. Square in the sticky column on
        both post kinds (decision 199, 217). The caption slot below carries
        the image credit, which the live posts print as a trailing italic line
        at the very end of the body, far from the image it describes.
      </Hint>
    </Block>
  );
}
