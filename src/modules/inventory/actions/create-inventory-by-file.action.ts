import alexandriaApi from '@/api/alexandriaApi';

// ? Types
import type { Inventory } from '../types';

export const createInventoryByFile = async (file: File): Promise<void> => {
  try {
    const { data } = await alexandriaApi.post(
      '/inventory/batch',
      {
        file,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log('::data', data);
  } catch (error) {
    throw new Error('⚠️ Error al crear el inventario por medio de un archivo');
  }
};
