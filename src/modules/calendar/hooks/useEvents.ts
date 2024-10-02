import { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

// ? Actions
import { getGoogleEvents } from '../actions';

// ? Types
import type { Event as ReactBCEvent } from 'react-big-calendar';

export const useEvents = () => {
  const eventsQuery = useQuery({
    queryKey: ['events'],
    queryFn: () => getGoogleEvents(),
    staleTime: 1000 * 60 * 5,
  });

  const events = eventsQuery.data?.items ?? [];

  const parsedEvents: ReactBCEvent[] = useMemo(
    () =>
      events.map((event) => ({
        title: event.summary,
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime),
      })),
    [events]
  );

  useEffect(() => {
    if (eventsQuery.isError) {
      console.error('::eventsQuery', eventsQuery.error);
      toast.error('Error al obtener los eventos');
    }
  }, [eventsQuery.isError]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    ...eventsQuery,

    // ? Properties
    events,
    parsedEvents,
  };
};
