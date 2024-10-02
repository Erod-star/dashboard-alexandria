import { toast } from 'sonner';

// ? Icons
import { UserPlus } from 'lucide-react';

// ? Components
import { Button } from '@/components';
import {
  CalendarComponent,
  CalendarGlossary,
  CreateDialogEvent,
} from '@/modules/calendar/components';

// ? Hooks
import { useEvents } from '../hooks';

function CalendarView() {
  const { parsedEvents, isLoading } = useEvents();

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-4 gap-10 h-full">
        <div className="space-y-10">
          <h2 className="text-4xl font-bold">Calendario</h2>
          <div className="w-full border rounded-sm p-4">
            <CalendarGlossary />
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-medium">Acciones</h3>
            <CreateDialogEvent />
            <Button
              className="flex gap-3 text-base font-semibold mt-3 w-full"
              disabled={isLoading}
              onClick={() =>
                toast.info('¡Esta funcionalidad aún no está disponible!')
              }
            >
              <UserPlus className="size-5" /> <p>Buscar personas</p>
            </Button>
          </div>
        </div>

        <div className="col-span-3">
          <CalendarComponent events={parsedEvents} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
