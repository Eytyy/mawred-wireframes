import type { RouteEntry } from "@/lib/pages/routes";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { Stub } from "@/components/wireframe/Stub";

export function StubPage({ route }: { route: RouteEntry }) {
  return (
    <>
      <div>
        <PageHeaderBand />
      </div>
      <Stub message={route.stubMessage} />
    </>
  );
}
