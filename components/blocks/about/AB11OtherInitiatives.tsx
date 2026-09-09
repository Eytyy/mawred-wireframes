import { InitiativeCard } from "@/components/blocks/about/AB9InitiativeDirectory";
import { Block } from "@/components/wireframe/Block";
import { Hint } from "@/components/wireframe/Hint";

export function AB11OtherInitiatives() {
  return (
    <Block
      code="AB11"
      label="Other past initiatives"
      heading="Other past initiatives"
    >
      <div>
        {Array.from({ length: 3 }, (_, index) => (
          <InitiativeCard key={index} />
        ))}
      </div>
      <Hint>
        Reuses the directory row exactly. Which siblings count as related is a
        client/build call — the structure reserves the slot, following the
        publication-detail precedent (PC2).
      </Hint>
    </Block>
  );
}
