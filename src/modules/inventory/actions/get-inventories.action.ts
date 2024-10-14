import alexandriaApi from '@/api/alexandriaApi';

export const getInventories = async (): Promise<void> => {
  try {
    const { data } = await alexandriaApi.get('/inventory');
    console.log('::data', data);
  } catch (error) {
    throw new Error('⚠️ Error obteniendo inventarios');
  }
};
