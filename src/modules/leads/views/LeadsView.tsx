import { useNavigate } from 'react-router-dom';

// ? Components
import { Button } from '@/components';

function LeadsView() {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <section className="flex justify-between">
        <h2 className="text-4xl font-bold">Leads</h2>

        <Button
          className="text-base font-semibold"
          onClick={() => navigate('/leads/nuevo')}
        >
          + Lead
        </Button>
      </section>

      <div className="pb-6">
        <h3>Aqui va la tabla!</h3>
      </div>
    </div>
  );
}

export default LeadsView;
