import { StubPage } from "@/components/StubPage";
import { ROUTES_BY_KEY } from "@/lib/pages/routes";

export default function HomePage() {
  return <StubPage route={ROUTES_BY_KEY.home} />;
}
