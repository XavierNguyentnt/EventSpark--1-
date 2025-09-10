export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  category: 'academic' | 'cultural' | 'sports' | 'departmental';
  department: string;
  description: string;
  organizer: string;
  image: string;
  status: 'upcoming' | 'ongoing' | 'past';
  registrationRequired?: boolean;
  capacity?: number;
}

export type EventCategory = Event['category'] | 'all';
export type EventSortBy = 'date' | 'name' | 'category';
