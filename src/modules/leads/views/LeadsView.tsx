import { useNavigate } from 'react-router-dom';

// ? Components
import { Button } from '@/components';
import { LeadsTable } from '@/modules/leads/components';

// ? Types
import type { Lead } from '../interfaces';
import { leadsColumns } from '../components/LeadsTable/LeadsColumns';

function LeadsView() {
  const navigate = useNavigate();
  const leads: Lead[] = [
    {
      id: '1',
      name: 'Lead 1',
      email: 'algo@gmail.con',
      phone: '123 1232 3231',
      since: '2020',
      reason: 'Negocios',
      properties: [
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
      ],
    },
    {
      id: '2',
      name: 'Lead 2',
      email: 'algo2@gmail.com',
      phone: '123 1232 3231',
      since: '2020',
      reason: 'Negocios',
      properties: [],
    },
  ];

  return (
    <div className="h-full">
      <section className="flex justify-between mb-5">
        <h2 className="text-4xl font-bold">Leads</h2>

        <Button
          className="text-base font-semibold"
          onClick={() => navigate('/leads/nuevo')}
        >
          + Lead
        </Button>
      </section>

      <div className="pb-6">
        <LeadsTable data={leads} columns={leadsColumns} />
      </div>
    </div>
  );
}

export default LeadsView;
