// ? Types
import type { Event } from 'react-big-calendar';
import type { EventItem } from './GoogleCalendarEvent';

export interface AltaltiumEvent extends Event {
  googleData: EventItem;
}

export interface AltaltiumEventForm {
  eventId: string;
  summary: string;
  description: string;
  date: Date | string;
  times: {
    start: string;
    end: string;
  };
}
