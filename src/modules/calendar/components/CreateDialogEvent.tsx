import { useState } from 'react';
import { toast } from 'sonner';
import { useSession } from '@supabase/auth-helpers-react';

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
  Input,
  Label,
  Textarea,
} from '@/components';

export const CreateDialogEvent = () => {
  const session = useSession();

  // TODO: Create a form hook to handle this integration
  const [initialDate, setInitialDate] = useState<Date | undefined>(undefined);
  const [finishDate, setFinishDate] = useState<Date | undefined>(undefined);
  const [summary, setSummary] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const event = {
      summary,
      description,
      start: {
        dateTime: initialDate?.toISOString(),
        timeZone,
      },
      end: {
        dateTime: finishDate?.toISOString(),
        timeZone,
      },
    };

    // TODO: Migrate this code to an Axios instance to handle the request
    await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session?.provider_token}`,
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        });
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nuevo evento</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nuevo evento</DialogTitle>

          <DialogDescription>
            Añade los detalles del nuevo evento
          </DialogDescription>
        </DialogHeader>

        {/* // TODO: Add a form to handle the input validations! */}
        <div className="flex w-full flex-col gap-2">
          <Label>Inicio del evento</Label>
          <Input
            placeholder="Nombre del evento"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

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

        <div className="flex w-full flex-col gap-2">
          <Label>Descripción del evento</Label>
          <Textarea
            className="resize-none h-32"
            placeholder="Descripción del evento"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button onClick={handleSubmit}>Crear evento</Button>
      </DialogContent>
    </Dialog>
  );
};
