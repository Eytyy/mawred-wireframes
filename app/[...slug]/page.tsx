import { notFound } from "next/navigation";
import { StubPage } from "@/components/StubPage";
import { getRouteByPath } from "@/lib/pages/routes";

type CatchAllPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const route = getRouteByPath(path);

  if (!route) {
    notFound();
  }

  return <StubPage route={route} />;
}
