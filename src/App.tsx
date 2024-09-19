import { RouterProvider } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';

// ? Routes
import { router } from '@/routes';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
