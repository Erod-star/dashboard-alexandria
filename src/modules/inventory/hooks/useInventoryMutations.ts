import { toast } from 'sonner';

import { useMutation, useQueryClient } from '@tanstack/react-query';

// ? Actions
import { createInventoryByFile } from '../actions';

export const useInventoryMutations = () => {
  const queryClient = useQueryClient();

  const handleInvalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: ['inventories'],
    });
  };

  const createByFileMutation = useMutation({
    mutationFn: createInventoryByFile,
    onSuccess: () => {
      toast.success('Inventario creado exitosamente!');
      handleInvalidateQueries();
    },
    onError: (error) => {
      toast.error('¡Hubo un error al crear este inventario!', {
        description: 'Intentalo más tarde o contacta a un administrador.',
      });
      throw error;
    },
  });

  return {
    createByFileMutation,
  };
};
