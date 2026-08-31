import type { RouteEntry } from "@/lib/pages/routes";
import { Stub } from "@/components/wireframe/Stub";

export function StubPage({ route }: { route: RouteEntry }) {
  return <Stub message={route.stubMessage} />;
}
