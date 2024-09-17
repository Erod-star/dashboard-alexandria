import { Button } from '@/components';
import { UserPlus } from 'lucide-react';

function CalendarView() {
  return (
    <div className="h-full flex flex-col">
      <section className="mb-5 flex justify-between">
        <h2 className="text-4xl font-bold">Calendario</h2>

        <Button className="text-base font-semibold">Nuevo evento</Button>
      </section>

      <div className="grid grid-cols-3 h-full">
        <div>
          <div className="w-full h-[22rem] bg-yellow-300"></div>
          <Button
            className="flex gap-3 text-base font-semibold mt-3"
            variant="ghost"
          >
            <UserPlus /> <p>Buscar personas</p>
          </Button>
        </div>

        <div className="col-span-2 bg-red-400 h-full"></div>
      </div>
    </div>
  );
}

export default CalendarView;
