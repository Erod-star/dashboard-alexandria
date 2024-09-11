// ? Components
import { Progress } from '@/components';
import { Step1 } from './Step1';

export const CreateInventoryWizzard = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold">Propiedad Premium</h2>

        <h3 className="text-2xl">Ingresa la dirección de la propiedad</h3>
        <div>
          <Progress
            className="bg-slate-300 border-2 border-slate-200"
            value={33}
          />
        </div>
      </div>

      <div className="mt-7">
        <Step1 />
      </div>
    </div>
  );
};
