import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ? Components
import { Button } from '@/components';
import {
  inventoryColumns,
  InventoryTable,
} from '@/modules/inventory/components';

import { getInventories } from '../actions';

function InventoryView() {
  const navigate = useNavigate();

  useEffect(() => {
    getInventories();
  }, []);

  return (
    <div className="h-full">
      <section className="flex justify-between">
        <h2 className="text-4xl font-bold">Inventario</h2>

        <Button
          className="text-base font-semibold"
          onClick={() => navigate('/inventario/nuevo')}
        >
          + Propiedad
        </Button>
      </section>

      <div className="pb-6">
        <InventoryTable columns={inventoryColumns} data={[]} />
      </div>
    </div>
  );
}

export default InventoryView;
