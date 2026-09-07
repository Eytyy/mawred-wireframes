import { AB13Position } from "@/components/blocks/about/AB13Position";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";

export function PositionPage() {
  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
      </div>
      <AB13Position />
    </PageWidth>
  );
}
