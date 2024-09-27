import { RouterProvider } from 'react-router-dom';
import { useSession, useSessionContext } from '@supabase/auth-helpers-react';

// ? Routes
import { router } from '@/routes';

// ? Components
import { Toaster } from '@/components';

// ? Views
import AuthView from './modules/auth/AuthView';

function App() {
  const session = useSession();
  const { isLoading } = useSessionContext();

  if (isLoading) return <></>;

  if (!session) return <AuthView />;

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
