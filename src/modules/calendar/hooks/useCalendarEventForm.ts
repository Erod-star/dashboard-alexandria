import { useForm, useFormState } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export const useCalendarEventForm = () => {
  const formSchema = z.object({
    summary: z.string().min(2, {
      message: 'El nombre del evento debe tener al menos 2 caracteres.',
    }),
    description: z.string().min(2, {
      message: 'El nombre del evento debe tener al menos 2 caracteres.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      summary: '',
      description: '',
    },
  });

  const formState = useFormState(form);

  return {
    form,
    formSchema,
    formState,
  };
};
