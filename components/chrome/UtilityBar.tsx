import { Chip } from '@/components/wireframe/Chip';

export function UtilityBar() {
  return (
    <div className="text-xs">
      <div className="mx-auto flex max-w-[1040px] justify-end gap-2 px-4 pt-4 pb-2">
        <Chip>Search</Chip>
        <Chip>EN | AR</Chip>
      </div>
    </div>
  );
}
