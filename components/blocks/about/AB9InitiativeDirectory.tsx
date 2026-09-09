import Link from "next/link";
import { Block } from "@/components/wireframe/Block";
import { Cover } from "@/components/wireframe/Card";
import { Hint } from "@/components/wireframe/Hint";
import { PAST_INITIATIVE_DETAIL_HREF } from "@/lib/pages/about";

export function InitiativeCard({ href = PAST_INITIATIVE_DETAIL_HREF }: { href?: string }) {
  return (
    <Link
      href={href}
      className="flex min-w-0 items-center gap-4 border-b border-neutral-200 px-0.5 py-3 no-underline"
    >
      <Cover compact label="image" />
      <span className="flex min-w-0 flex-1 flex-col">
        <h2 className="text-2xl font-bold">Initiative title</h2>
        <span className="text-xs text-neutral-500">one-line teaser</span>
      </span>
    </Link>
  );
}

export function AB9InitiativeDirectory() {
  return (
    <Block code="AB9" label="Initiative directory">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
        {Array.from({ length: 12 }, (_, index) => (
          <InitiativeCard key={index} />
        ))}
      </div>
      <Hint>
        Row = compact Cover &middot; title &middot; teaser &mdash; same stack as
        PA4 / N3, teaser below the title (decision 194). Two rows per line from{" "}
        <code>lg</code> (decision 196). It leaves <code>DirRow</code>, whose
        single-line name + trailing badges cannot hold that stack. AB11 reuses
        the row and stays stacked. ~30 entries, no filter bar and no pagination
        (decision 52). The directory has no facets to filter on and 30 rows
        scroll fine.
      </Hint>
    </Block>
  );
}
