import { GalleryFilter } from '@/types/gallery';
import { Button } from '@/components/ui/button';

interface GalleryFiltersProps {
  currentFilter: GalleryFilter;
  onFilterChange: (filter: GalleryFilter) => void;
}

const filterOptions: { value: GalleryFilter; label: string }[] = [
  { value: 'all', label: 'All Photos' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: 'technical', label: 'Technical' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'sports', label: 'Sports' },
  { value: 'academic', label: 'Academic' },
];

export function GalleryFilters({ currentFilter, onFilterChange }: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filterOptions.map((option) => (
        <Button
          key={option.value}
          variant={currentFilter === option.value ? 'default' : 'outline'}
          onClick={() => onFilterChange(option.value)}
          className="transition-all duration-200"
          data-testid={`button-gallery-filter-${option.value}`}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
