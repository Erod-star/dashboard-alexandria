// ? Icons
import { TriangleAlert } from 'lucide-react';

const EnvErrorView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-alt-green-900">
      <div className="flex flex-col items-center justify-center px-4 py-1 h-52 bg-gray-100 rounded-md text-black shadow-lg">
        <div className="bg-alt-green-300 p-3 rounded-sm border-black shadow-md">
          <TriangleAlert className="size-8" />
        </div>
        <p className="text-lg px-4 mt-5 max-w-[35rem] text-center">
          ¡Ups! Parece que hubo un error al cargar la aplicación.
          <br />
          Si el problema persiste por favor contacta al administrador.
        </p>
      </div>
    </div>
  );
};

export default EnvErrorView;
