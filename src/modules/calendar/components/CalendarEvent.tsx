import { format } from 'date-fns';

// ? Components
import { Button } from '@/components';

// ? Hooks
import { useCalendarStore } from '../hooks';

// ? Types
import type { AltaltiumEvent } from '../types';

interface CalendarEventProps {
  event: AltaltiumEvent;
}

export const CalendarEvent = ({ event }: CalendarEventProps) => {
  const { setSelectedEvent, setIsEventDetailModalOpen } = useCalendarStore();

  const handleEventClick = () => {
    const { googleData: eventData } = event;

    setSelectedEvent({
      eventId: eventData.id,
      summary: eventData.summary,
      description: eventData.description,
      date: event.start!.toISOString(),
      times: {
        start: format(eventData.start.dateTime, 'HH:mm'),
        end: format(eventData.end.dateTime, 'HH:mm'),
      },
    });
    setIsEventDetailModalOpen(true);
  };

  return (
    <Button
      className="calendar-event-btn bg-alt-green-300 h-6 text-black px-2 py-1 rounded-md text-xs justify-start hover:bg-alt-green-400"
      variant="none"
      onClick={handleEventClick}
    >
      {event.googleData.summary}
    </Button>
  );
};
