import { useState } from 'react';

// ? Components
import { InventoryWizard, UploadInventoryFile } from '../components';
import { Button } from '@/components';

const CreateInventoryView = () => {
  const [isManualFilling, setIsManualFilling] = useState<boolean>(false);

  return (
    <div className="relative w-full h-full border rounded-md p-5">
      {isManualFilling && (
        <Button
          className="absolute right-5"
          variant="destructive"
          onClick={() => setIsManualFilling(false)}
        >
          Cancelar y generar por archivo
        </Button>
      )}

      {isManualFilling ? (
        <InventoryWizard />
      ) : (
        <UploadInventoryFile
          onChangeToManualFilling={() => setIsManualFilling(true)}
        />
      )}
    </div>
  );
};

export default CreateInventoryView;
