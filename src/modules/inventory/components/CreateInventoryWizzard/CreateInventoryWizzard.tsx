import { useEffect, useState } from 'react';

// ? Components
import { Progress } from '@/components';
import { Step1 } from './Step1';
import { Step2 } from './Step2';

export const CreateInventoryWizzard = () => {
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
      setProgress(33);
      setTitle('Ingresa la dirección de la propiedad');
    } else if (step === 2) {
      setProgress(66);
      setTitle('Ingresa la información de la propiedad');
    }
  }, [step]);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(33), 500);
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
      </div>
    </div>
  );
};
