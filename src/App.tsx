import { RouterProvider } from 'react-router-dom';

// ? Routes
import { router } from '@/routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
