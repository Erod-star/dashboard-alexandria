import { useState } from 'react';
import { toast } from 'sonner';

import googleApi from '@/api/googleApi';

// ? Types
import type { GoogleCalendarEvent } from '../types';

export const useEventMutations = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createEvent = async (event: GoogleCalendarEvent): Promise<void> => {
    setIsLoading(true);
    try {
      await googleApi.post('', JSON.stringify(event));
      toast.success('¡Evento creado exitosamente!');
    } catch (error) {
      console.error('::Error::', error);
      toast.error('¡Hubo un error al crear este evento!', {
        description: 'Intentalo más tarde.',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    // ? Properties
    isLoading,

    // ? Methods
    createEvent,
  };
};
