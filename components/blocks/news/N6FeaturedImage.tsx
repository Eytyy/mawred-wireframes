import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Caption } from "@/components/wireframe/Caption";
import { Hint } from "@/components/wireframe/Hint";

type N6FeaturedImageProps = {
  caption?: string;
};

export function N6FeaturedImage({ caption }: N6FeaturedImageProps) {
  return (
    <Block code="N6" label="Featured image">
      <Banner label="featured image — full content width" />
      {caption ? <Caption>{caption}</Caption> : null}
      <Hint>
        The current site repeats the title as an H2 under the image; dropped
        &mdash; the page-header band carries the title. The caption slot below
        carries the image credit, which the live posts print as a trailing
        italic line at the very end of the body, far from the image it
        describes.
      </Hint>
    </Block>
  );
}
