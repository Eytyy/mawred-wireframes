import { MN6Record } from "@/components/blocks/network/MN6Record";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { NETWORK_RECORD } from "@/lib/pages/network";

export function NetworkRecordPage() {
  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
      </div>
      <MN6Record record={NETWORK_RECORD} />
    </PageWidth>
  );
}
