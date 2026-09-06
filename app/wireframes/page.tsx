import Link from "next/link";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { INDEX_ROUTES } from "@/lib/pages/routes";

export default function WireframesIndexPage() {
  return (
    <>
      <div>
        <PageHeaderBand />
        <p>
          Lo-fi, English-only, black &amp; white. Structure per the project specs;
          nothing here re-opens a settled decision.
        </p>
      </div>
      <div className="my-5 grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3">
        {INDEX_ROUTES.map((route) => (
          <Link
            key={route.key}
            href={route.path}
            className="block border border-black p-3.5 no-underline"
          >
            <strong dangerouslySetInnerHTML={{ __html: route.indexLabel ?? "" }} />
            <small
              className="mt-1.5 block text-neutral-500"
              dangerouslySetInnerHTML={{ __html: route.indexSublabel ?? "" }}
            />
          </Link>
        ))}
      </div>
      <p className="text-sm text-neutral-500">
        Use the panel bottom-right to toggle block codes and page-specific
        states.
      </p>
    </>
  );
}
