import { GalleryGrid } from '@/components/gallery/gallery-grid';
import { GalleryFilters } from '@/components/gallery/gallery-filters';
import { useGallery } from '@/hooks/use-gallery';

export default function Gallery() {
  const { galleryItems, filter, setFilter } = useGallery();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="text-gallery-hero-title">
              Event Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-hero-description">
              Relive the memorable moments from our past events. Browse through our collection 
              of photos organized by year and category.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryFilters currentFilter={filter} onFilterChange={setFilter} />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryItems.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground" data-testid="text-gallery-count">
                Showing {galleryItems.length} photo{galleryItems.length !== 1 ? 's' : ''}
                {filter !== 'all' && (
                  <span className="text-muted-foreground">
                    {' '}from{' '}
                    <span className="capitalize">
                      {filter === '2024' || filter === '2023' ? filter : `${filter} events`}
                    </span>
                  </span>
                )}
              </h2>
            </div>
          )}

          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-gallery-info-title">
            Capturing Campus Life
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-gallery-info-description">
            Our gallery showcases the vibrant life at CampusConnect College. From academic achievements 
            to cultural celebrations, from sports victories to innovative projects - every moment tells 
            a story of growth, learning, and community.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Technical', count: '15+', description: 'Innovation showcases and tech events' },
              { category: 'Cultural', count: '25+', description: 'Festivals and artistic performances' },
              { category: 'Sports', count: '20+', description: 'Athletic competitions and victories' },
              { category: 'Academic', count: '30+', description: 'Conferences and learning activities' }
            ].map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.count}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.category}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
