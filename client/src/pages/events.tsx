import { EventCard } from '@/components/events/event-card';
import { EventFilters } from '@/components/events/event-filters';
import { useEvents } from '@/hooks/use-events';

export default function Events() {
  const { events, filter, setFilter, sortBy, setSortBy } = useEvents();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="text-events-hero-title">
              Event Calendar
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-events-hero-description">
              Explore our comprehensive list of upcoming and past events. Filter by category 
              and sort to find exactly what interests you.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventFilters
            currentFilter={filter}
            onFilterChange={setFilter}
            currentSort={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {events.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4" data-testid="text-no-events-title">
                No Events Found
              </h3>
              <p className="text-muted-foreground" data-testid="text-no-events-description">
                No events match your current filter criteria. Try selecting a different category.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground" data-testid="text-events-count">
                  Showing {events.length} event{events.length !== 1 ? 's' : ''}
                  {filter !== 'all' && (
                    <span className="text-muted-foreground">
                      {' '}in{' '}
                      <span className="capitalize">{filter}</span> category
                    </span>
                  )}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-events-cta-title">
            Don't Miss Out on Campus Events
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6" data-testid="text-events-cta-description">
            Stay connected with the campus community and make the most of your college experience.
          </p>
          <p className="text-primary-foreground/80" data-testid="text-events-cta-note">
            For event registration and more information, contact the respective organizers or visit the student affairs office.
          </p>
        </div>
      </section>
    </div>
  );
}
