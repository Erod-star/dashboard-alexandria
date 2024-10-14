import { toast } from 'sonner';

import { useMutation, useQueryClient } from '@tanstack/react-query';

// ? Actions
import { createEvent, updateEvent, deleteEvent } from '../actions';

export const useEventMutations = () => {
  const queryClient = useQueryClient();

  const handleInvalidateQueries = () => {
    // TODO: Hacer la invalidación de las queries por mes
    queryClient.invalidateQueries({
      queryKey: ['events'],
    });
  };

  const createMutation = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      toast.success('¡Evento creado exitosamente!');
      handleInvalidateQueries();
    },
    onError: (error) => {
      toast.error('¡Hubo un error al crear este evento!', {
        description: 'Intentalo más tarde.',
      });
      throw error;
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      toast.success('¡Evento editado exitosamente!');
      handleInvalidateQueries();
    },
    onError: (error) => {
      toast.error('¡Hubo un error al editar este evento!', {
        description: 'Intentalo más tarde.',
      });
      throw error;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      toast.success('¡Evento eliminado exitosamente!');
      handleInvalidateQueries();
    },
    onError: (error) => {
      toast.error('¡Hubo un error al eliminar este evento!', {
        description: 'Intentalo más tarde.',
      });
      throw error;
    },
  });

  return {
    // ? Mutations
    createMutation,
    updateMutation,
    deleteMutation,
  };
};
