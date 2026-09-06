import { Chip } from '@/components/wireframe/Chip';

export function UtilityBar() {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      <Chip>Search</Chip>
      <Chip>EN | AR</Chip>
    </div>
  );
}
