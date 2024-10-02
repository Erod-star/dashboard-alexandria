/*
  TODOS:
  Para este componente:
  - Añadir validaciones básicas al formulario
  
  Para lo demás:
  - Mostrarlos medio bonitos
  - Añadir un handler para cuando no se un usuario con oAuth
  - Ver si puedo añadir más campos a la creación del evento (participantes, locaciones, etc)
  - Añadir un botón para eliminar un evento y hacer la integracion con la API de Google
  - Añadir un botón para editar un evento y hacer la integracion con la API de Google (Este aun no se xd)
*/

import { useState } from 'react';
import * as z from 'zod';

// ? Icons
import { CalendarPlus } from 'lucide-react';

// ? Components
import {
  Button,
  DateTimePicker,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Textarea,
} from '@/components';

// ? Hooks
import { useCalendarEventForm, useEventMutations } from '../hooks';

export const CreateDialogEvent = () => {
  const { form, formSchema } = useCalendarEventForm();

  const { createEvent, isLoading } = useEventMutations();

  const [initialDate, setInitialDate] = useState<Date | undefined>(undefined);
  const [finishDate, setFinishDate] = useState<Date | undefined>(undefined);

  const onSubmit = async (payload: z.infer<typeof formSchema>) => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const event = {
      ...payload,
      start: {
        dateTime: initialDate?.toISOString(),
        timeZone,
      },
      end: {
        dateTime: finishDate?.toISOString(),
        timeZone,
      },
    };
    createEvent(event);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2 items-center text-base font-semibold w-full">
          <CalendarPlus className="size-5" /> <p>Nuevo evento</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nuevo evento</DialogTitle>

          <DialogDescription>
            Añade los detalles del nuevo evento
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del evento</FormLabel>
                  <FormControl>
                    <Input placeholder="Mi evento" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex w-full flex-col gap-2">
              <Label>Inicio del evento</Label>
              <DateTimePicker
                placeholder="Selecciona una fecha"
                hourCycle={12}
                value={initialDate}
                onChange={setInitialDate}
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <Label>Fin del evento</Label>
              <DateTimePicker
                placeholder="Selecciona una fecha"
                hourCycle={12}
                value={finishDate}
                onChange={setFinishDate}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del evento</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none h-32"
                      placeholder="Junta por videollamada..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end w-full">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Crear evento'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
