import { useNavigate } from 'react-router-dom';

// ? Components
import { Button } from '@/components';
import {
  inventoryColumns,
  InventoryTable,
} from '@/modules/inventory/components';

// ? Types
import type { Property } from '@/modules/inventory/interfaces';

function InventoryView() {
  const navigate = useNavigate();

  const data: Property[] = [
    {
      id: 'p1',
      photos: ['https://github.com/shadcn.png'],
      name: 'Casa en la Playa',
      category: 'Adjudicada',
      type: 'Casa',
      totalSpace: 300,
      totalBuildedSpace: 250,
      dateOfRegistration: '2023-06-15',
      commercialValue: 500000,
      finishValue: 550000,
      availability: 'Disponible',
    },
    {
      id: 'p2',
      photos: ['https://github.com/shadcn.png'],
      name: 'Departamento Urbano',
      category: 'Altaltium',
      type: 'Departamento',
      totalSpace: 120,
      totalBuildedSpace: 100,
      dateOfRegistration: '2024-01-10',
      commercialValue: 300000,
      finishValue: 320000,
      availability: 'Apartada',
    },
    {
      id: 'p3',
      photos: ['https://github.com/shadcn.png'],
      name: 'Residencia Familiar',
      category: 'Banco',
      type: 'Casa',
      totalSpace: 400,
      totalBuildedSpace: 350,
      dateOfRegistration: '2022-09-20',
      commercialValue: 750000,
      finishValue: 780000,
      availability: 'Vendida',
    },
    {
      id: 'p4',
      photos: ['https://github.com/shadcn.png'],
      name: 'Loft Moderno',
      category: 'Cobranza',
      type: 'Departamento',
      totalSpace: 80,
      totalBuildedSpace: 70,
      dateOfRegistration: '2023-03-30',
      commercialValue: 200000,
      finishValue: 210000,
      availability: 'Disponible',
    },
    {
      id: 'p5',
      photos: ['https://github.com/shadcn.png'],
      name: 'Villa de Lujo',
      category: 'Consignación',
      type: 'Casa',
      totalSpace: 600,
      totalBuildedSpace: 500,
      dateOfRegistration: '2024-05-01',
      commercialValue: 1200000,
      finishValue: 1250000,
      availability: 'Apartada',
    },
    {
      id: 'p6',
      photos: ['https://github.com/shadcn.png'],
      name: 'Casa en el Bosque',
      category: 'Juicio',
      type: 'Casa',
      totalSpace: 450,
      totalBuildedSpace: 400,
      dateOfRegistration: '2023-07-22',
      commercialValue: 900000,
      finishValue: 950000,
      availability: 'Disponible',
    },
    {
      id: 'p7',
      photos: ['https://github.com/shadcn.png'],
      name: 'Departamento en el Centro',
      category: 'Preventa',
      type: 'Departamento',
      totalSpace: 110,
      totalBuildedSpace: 90,
      dateOfRegistration: '2023-11-05',
      commercialValue: 280000,
      finishValue: 300000,
      availability: 'Vendida',
    },
    {
      id: 'p8',
      photos: ['https://github.com/shadcn.png'],
      name: 'Chalet en la Montaña',
      category: 'Sentencia',
      type: 'Casa',
      totalSpace: 350,
      totalBuildedSpace: 320,
      dateOfRegistration: '2024-02-18',
      commercialValue: 600000,
      finishValue: 650000,
      availability: 'Apartada',
    },
    {
      id: 'p9',
      photos: ['https://github.com/shadcn.png'],
      name: 'Penthouse Exclusivo',
      category: 'Adjudicada',
      type: 'Departamento',
      totalSpace: 150,
      totalBuildedSpace: 130,
      dateOfRegistration: '2023-12-01',
      commercialValue: 450000,
      finishValue: 480000,
      availability: 'Disponible',
    },
    {
      id: 'p10',
      photos: ['https://github.com/shadcn.png'],
      name: 'Casa de Campo',
      category: 'Altaltium',
      type: 'Casa',
      totalSpace: 500,
      totalBuildedSpace: 450,
      dateOfRegistration: '2023-04-12',
      commercialValue: 1000000,
      finishValue: 1050000,
      availability: 'Disponible',
    },
    {
      id: 'p11',
      photos: ['https://github.com/shadcn.png'],
      name: 'Departamento Minimalista',
      category: 'Banco',
      type: 'Departamento',
      totalSpace: 95,
      totalBuildedSpace: 85,
      dateOfRegistration: '2023-10-25',
      commercialValue: 240000,
      finishValue: 260000,
      availability: 'Vendida',
    },
    {
      id: 'p12',
      photos: ['https://github.com/shadcn.png'],
      name: 'Casa de Lujo en la Ciudad',
      category: 'Consignación',
      type: 'Casa',
      totalSpace: 550,
      totalBuildedSpace: 500,
      dateOfRegistration: '2024-03-14',
      commercialValue: 1100000,
      finishValue: 1150000,
      availability: 'Apartada',
    },
    {
      id: 'p13',
      photos: ['https://github.com/shadcn.png'],
      name: 'Departamento con Vista al Mar',
      category: 'Juicio',
      type: 'Departamento',
      totalSpace: 140,
      totalBuildedSpace: 120,
      dateOfRegistration: '2024-01-29',
      commercialValue: 500000,
      finishValue: 520000,
      availability: 'Disponible',
    },
    {
      id: 'p14',
      photos: ['https://github.com/shadcn.png'],
      name: 'Casa Moderna',
      category: 'Preventa',
      type: 'Casa',
      totalSpace: 320,
      totalBuildedSpace: 280,
      dateOfRegistration: '2023-08-06',
      commercialValue: 700000,
      finishValue: 750000,
      availability: 'Disponible',
    },
    {
      id: 'p15',
      photos: ['https://github.com/shadcn.png'],
      name: 'Departamento en la Costa',
      category: 'Adjudicada',
      type: 'Departamento',
      totalSpace: 130,
      totalBuildedSpace: 110,
      dateOfRegistration: '2023-09-17',
      commercialValue: 400000,
      finishValue: 420000,
      availability: 'Apartada',
    },
    {
      id: 'p16',
      photos: ['https://github.com/shadcn.png'],
      name: 'Casa Tradicional',
      category: 'Cobranza',
      type: 'Casa',
      totalSpace: 380,
      totalBuildedSpace: 340,
      dateOfRegistration: '2023-05-23',
      commercialValue: 800000,
      finishValue: 850000,
      availability: 'Vendida',
    },
    {
      id: 'p17',
      photos: ['https://github.com/shadcn.png'],
      name: 'Departamento Industrial',
      category: 'Adjudicada',
      type: 'Departamento',
      totalSpace: 100,
      totalBuildedSpace: 90,
      dateOfRegistration: '2023-11-14',
      commercialValue: 270000,
      finishValue: 290000,
      availability: 'Disponible',
    },
  ];

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
        <InventoryTable columns={inventoryColumns} data={data} />
      </div>
    </div>
  );
}

export default InventoryView;
