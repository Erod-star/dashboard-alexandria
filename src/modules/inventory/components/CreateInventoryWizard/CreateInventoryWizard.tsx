import { useEffect, useState } from 'react';

// ? Components
import { Progress } from '@/components';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

export const CreateInventoryWizard = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('Ingresa la dirección de la propiedad');
  const [progress, setProgress] = useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step === 1) {
      setProgress(20);
      setTitle('Ingresa la dirección de la propiedad');
    } else if (step === 2) {
      setProgress(45);
      setTitle('Ingresa los detalles de la propiedad');
    } else if (step === 3) {
      setProgress(75);
      setTitle('Ingresa los detalles del pago');
    } else if (step === 4) {
      setProgress(95);
      setTitle('Antes de concluir por favor revisa los datos');
    }
  }, [step]);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(20), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-5">
        <h2 className="text-4xl font-semibold">Propiedad Premium</h2>

        <h3 className="text-2xl">{title}</h3>
        <div>
          <Progress
            className="bg-alt-green-900 border border-slate-500"
            value={progress}
          />
        </div>
      </div>

      <div className="mt-8 h-full relative">
        {step === 1 && <Step1 onNextStep={handleNextStep} />}
        {step === 2 && (
          <Step2
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {step === 3 && (
          <Step3
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
        {step === 4 && <Step4 />}
      </div>
    </div>
  );
};
