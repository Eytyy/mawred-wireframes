import { AB10InitiativeRecord } from "@/components/blocks/about/AB10InitiativeRecord";
import { AB11OtherInitiatives } from "@/components/blocks/about/AB11OtherInitiatives";
import { Hint } from "@/components/wireframe/Hint";

export function PastInitiativeDetailPage() {
  return (
    <>
      <AB10InitiativeRecord />
      <AB11OtherInitiatives />
      <Hint>
        Listing and detail are two views of one record type, the same pairing
        used for publications and network records.
      </Hint>
    </>
  );
}
