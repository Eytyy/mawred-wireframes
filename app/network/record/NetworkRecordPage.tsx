import { MN6Record } from "@/components/blocks/network/MN6Record";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { NETWORK_RECORD } from "@/lib/pages/network";

export function NetworkRecordPage() {
  return (
    <PageWidth>
      <div>
        <PageHeaderBand hideTitle />
      </div>
      <div className="mt-6 md:mt-8">
        <MN6Record flush record={NETWORK_RECORD} />
      </div>
    </PageWidth>
  );
}
