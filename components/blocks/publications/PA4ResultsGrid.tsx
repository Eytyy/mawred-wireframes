import Link from 'next/link';
import { Block } from '@/components/wireframe/Block';
import { Cover } from '@/components/wireframe/Card';
import { EmptyState } from '@/components/wireframe/EmptyState';
import { Hint } from '@/components/wireframe/Hint';
import type { LibraryRecord } from '@/lib/pages/publications';

type LibraryRowProps = {
  href: string;
  title: string;
  languages: string;
  author?: string;
};

export function LibraryRow({
  href,
  title,
  languages,
  author = 'Author name',
}: LibraryRowProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 border-b border-neutral-200 px-0.5 py-3 no-underline"
    >
      <Cover compact label="cover" />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-xs text-neutral-500">{author}</span>
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-xs text-neutral-500">{languages}</span>
      </span>
    </Link>
  );
}

type PA4ResultsGridProps = {
  empty: boolean;
  detailHref?: string;
  records?: LibraryRecord[];
};

const SAMPLE = 9;

const PLACEHOLDERS: LibraryRecord[] = Array.from({ length: SAMPLE }, () => ({
  title: 'Publication title',
  languages: 'Arabic, English',
}));

export function PA4ResultsGrid({
  empty,
  detailHref = '/publications/research/publication',
  records,
}: PA4ResultsGridProps) {
  const sampled = (records ?? PLACEHOLDERS).slice(0, SAMPLE);
  const total = records?.length;

  return (
    <Block code="PA4" label="Results grid">
      {empty ? (
        <>
          <EmptyState
            heading="No publications match these filters"
            line="Remove a filter to widen the search."
          />
          <Hint>Empty state sits inside the grid slot — filter bar and count row stay put.</Hint>
        </>
      ) : (
        <>
          <div>
            {sampled.map((record, index) => (
              <LibraryRow
                key={records ? record.title : index}
                href={detailHref}
                title={record.title}
                languages={record.languages}
                author={record.author}
              />
            ))}
          </div>
          {total !== undefined ? (
            <div className="text-xs italic text-neutral-500">… {total} items in the grid</div>
          ) : null}
          <Hint>
            Row = cover · author · title · language line → publication detail.
            Author is a stand-in — the live listing and detail do not publish it
            (decision 105). Nine sampled rows; the overflow line is the rest of
            the library (decision 191).
          </Hint>
        </>
      )}
    </Block>
  );
}
