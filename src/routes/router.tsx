import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

// ? Layouts
import RootLayout from '@/layouts/RootLayout';

// ? Module routes

// ? Views
import UsersView from '@/modules/users/views/UsersView';
import InventoryView from '@/modules/inventory/views/InventoryView';
import { NotFound } from '@/modules/global/views/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/inventario" />} />

      <Route path="inventario">
        <Route index element={<InventoryView />} />
      </Route>

      <Route path="usuarios">
        <Route index element={<UsersView />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
