import { Button } from '@/components';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main className="w-full h-full flex-center flex-col">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-alt-green-300 px-2 text-sm text-black rounded rotate-12 absolute shadow-lg">
        ¡Página no encontrada!
      </div>
      <Button
        className="mt-5 bg-alt-green-300 text-black border-slate-500 hover:bg-alt-green-300/65"
        variant="outline"
      >
        <Link to="/">Regresar al inicio</Link>
      </Button>
    </main>
  );
};
