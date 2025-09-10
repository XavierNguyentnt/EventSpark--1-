import { useState, useMemo } from 'react';
import { Event, EventCategory, EventSortBy } from '@/types/event';
import eventsData from '@/data/events.json';

export function useEvents() {
  const [filter, setFilter] = useState<EventCategory>('all');
  const [sortBy, setSortBy] = useState<EventSortBy>('date');

  const events = useMemo(() => {
    let filteredEvents = eventsData as Event[];

    // Apply category filter
    if (filter !== 'all') {
      filteredEvents = filteredEvents.filter(event => event.category === filter);
    }

    // Apply sorting
    switch (sortBy) {
      case 'date':
        filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'name':
        filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        filteredEvents.sort((a, b) => a.category.localeCompare(b.category));
        break;
    }

    return filteredEvents;
  }, [filter, sortBy]);

  const upcomingEvents = useMemo(() => {
    return (eventsData as Event[])
      .filter(event => event.status === 'upcoming')
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 3);
  }, []);

  return {
    events,
    upcomingEvents,
    filter,
    setFilter,
    sortBy,
    setSortBy,
  };
}
