import { useState } from 'react';

// ? Icons
import { File } from 'lucide-react';

// ? Components
import { Button, Separator } from '@/components';
import { CreateInventoryWizzard } from '../components/CreateInventoryWizzard/CreateInventoryWizzard';

const CreateInventoryView = () => {
  const [isStartingManualCreation, setIsStartingManualCreation] =
    useState(false);

  return (
    <div className="w-full h-full border rounded-md p-5">
      {isStartingManualCreation ? (
        <CreateInventoryWizzard />
      ) : (
        <div className="w-full h-full flex-center flex-col">
          <h2 className="text-4xl font-semibold mb-20">🏚️ Agregar propiedad</h2>

          <section className="space-y-3 flex flex-col mb-10">
            <h3 className="text-2xl text-center mb-3">
              Subir CSV de proovedores
            </h3>
            <Button
              className="h-20 w-[30rem] text-lg flex gap-2"
              variant="dashed"
            >
              <File /> <span> Selecciona o arrastra el archivo </span>
            </Button>
          </section>

          <div className="flex-center gap-5 w-2/4 overflow-hidden text-xl">
            <Separator /> ó <Separator />
          </div>

          <section className="space-y-3 mt-10">
            <h3 className="text-xl text-center mb-5">
              Selecciona tipo de propiedad
            </h3>

            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setIsStartingManualCreation((prev) => !prev)}
              >
                Propiedad Premium
              </Button>
              <Button
                onClick={() => setIsStartingManualCreation((prev) => !prev)}
              >
                Propiedad Classic
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CreateInventoryView;
