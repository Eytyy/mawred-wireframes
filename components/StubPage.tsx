import type { RouteEntry } from "@/lib/pages/routes";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { PageWidth } from "@/components/chrome/PageWidth";
import { Stub } from "@/components/wireframe/Stub";

export function StubPage({ route }: { route: RouteEntry }) {
  return (
    <PageWidth>
      <div>
        <PageHeaderBand />
      </div>
      <Stub message={route.stubMessage} />
    </PageWidth>
  );
}
