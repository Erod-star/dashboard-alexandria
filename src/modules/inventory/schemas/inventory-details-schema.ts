import { z } from 'zod';

export const inventoryDetailsSchema = z.object({
  folioOriginal: z
    .string()
    .min(1, { message: 'Por favor ingresa el folio' })
    .trim(),
  lista: z
    .string()
    .min(1, { message: 'Por favor selecciona una categoría' })
    .trim(),
  tipoPropiedad: z
    .string()
    .min(1, { message: 'Por favor selecciona un tipo de propiedad' })
    .trim(),
  recamaras: z
    .string()
    .min(1, { message: 'Por favor selecciona la cantidad de habitaciones' })
    .trim(),
  sanitarios: z
    .string()
    .min(1, { message: 'Por favor selecciona la cantidad de baños' })
    .trim(),
  estacionamientos: z
    .string()
    .min(1, { message: 'Por favor selecciona la cantidad de estacionamientos' })
    .trim(),
  terreno: z
    .string()
    .min(1, { message: 'Por favor introduce la superficie total' })
    .trim(),
  construccion: z
    .string()
    .min(1, { message: 'Por favor introduce la superficie construida' })
    .trim(),
});
