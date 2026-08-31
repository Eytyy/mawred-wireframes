import { Block } from "@/components/wireframe/Block";
import { Banner } from "@/components/wireframe/Banner";
import { Hint } from "@/components/wireframe/Hint";

export function N6FeaturedImage() {
  return (
    <Block code="N6" label="Featured image">
      <Banner label="featured image — full content width" />
      <Hint>
        The current site repeats the title as an H2 under the image; dropped
        &mdash; the page-header band carries the title.
      </Hint>
    </Block>
  );
}
