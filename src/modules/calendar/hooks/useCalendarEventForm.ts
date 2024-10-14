import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { add, addHours, format } from 'date-fns';
import * as z from 'zod';
import { timeToInt } from '@/lib/utils';

export type CalendarEventFormInitialState =
  | {
      summary: string;
      description: string;
      date: Date;
      times: {
        start: string;
        end: string;
      };
    }
  | undefined;

export const useCalendarEventForm = (event?: CalendarEventFormInitialState) => {
  const formSchema = z.object({
    summary: z.string().min(2, {
      message: 'El nombre del evento debe tener al menos 2 caracteres.',
    }),
    description: z.string().min(2, {
      message: 'El nombre del evento debe tener al menos 2 caracteres.',
    }),
    date: z.date({
      required_error: 'Por favor selecciona una fecha para el evento.',
    }),
    times: z
      .object({
        start: z
          .string()
          .regex(
            /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
            "La hora del evento debe tener el formato 'HH:mm'."
          ),
        end: z
          .string()
          .regex(
            /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
            "La hora del evento debe tener el formato 'HH:mm'."
          ),
      })
      .superRefine((times, ctx) => {
        const overlaps =
          timeToInt(times.start) < timeToInt(times.end) &&
          timeToInt(times.end) > timeToInt(times.start);

        if (!overlaps) {
          return ctx.addIssue({
            code: 'custom',
            message:
              'La hora de inicio debe ser menor a la hora de finalización.',
          });
        }
        if (timeToInt(times.start) >= timeToInt(times.end)) {
          return ctx.addIssue({
            code: 'custom',
            message: 'La hora de termino debe ser menor a la hora de inicio.',
          });
        }
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      summary: event?.summary || '',
      description: event?.description || '',
      date: event?.date || addHours(new Date(), 1),
      times: {
        start:
          event?.times.start || format(add(new Date(), { hours: 1 }), 'HH:mm'),
        end:
          event?.times.end ||
          format(add(new Date(), { hours: 1, minutes: 30 }), 'HH:mm'),
      },
    },
    values: event,
  });

  const formState = useFormState(form);

  return {
    form,
    formSchema,
    formState,
  };
};
