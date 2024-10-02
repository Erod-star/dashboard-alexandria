// ? Types
import type { Event } from 'react-big-calendar';

interface CalendarEventProps {
  event: Event;
}

export const CalendarEvent = ({ event }: CalendarEventProps) => {
  return <div>{event.title}</div>;
};
