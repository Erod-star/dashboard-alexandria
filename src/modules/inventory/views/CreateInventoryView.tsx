import { useEffect } from 'react';

// ? Hooks
import { useInventoryStore } from '../hooks';

// ? Components
import { InventoryWizard, UploadInventoryFile } from '../components';
import { Button } from '@/components';

const CreateInventoryView = () => {
  const { currentStep, resetInventoryWizzard } = useInventoryStore();

  useEffect(() => {
    resetInventoryWizzard();
  }, []);

  return (
    <div className="relative w-full h-full border rounded-md p-5">
      {currentStep !== 0 && (
        <Button
          className="absolute right-5"
          variant="destructive"
          onClick={resetInventoryWizzard}
        >
          Cancelar y generar por archivo
        </Button>
      )}

      {currentStep !== 0 ? <InventoryWizard /> : <UploadInventoryFile />}
    </div>
  );
};

export default CreateInventoryView;
