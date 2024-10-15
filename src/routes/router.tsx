import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

// ? Layouts
import RootLayout from '@/layouts/RootLayout';

// ? === Views ===

// Calendar
import CalendarView from '@/modules/calendar/views/CalendarView';

// Inventory
import InventoryView from '@/modules/inventory/views/InventoryView';
import CreateInventoryView from '@/modules/inventory/views/CreateInventoryView';

// Publications
import PublicationsView from '@/modules/publications/views/PublicationsView';

// Requests
import RequestsView from '@/modules/requests/views/RequestsView';

// Leads
import LeadsView from '@/modules/leads/views/LeadsView';
import LeadsFormView from '@/modules/leads/views/LeadsFormView';

// Users
import UsersView from '@/modules/users/views/UsersView';
import UsersFormView from '@/modules/users/views/UsersFormView';

// 404
import { NotFound } from '@/modules/global/views/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/inventario" />} />

        <Route path="calendario">
          <Route index element={<CalendarView />} />
        </Route>

        <Route path="inventario">
          <Route index element={<InventoryView />} />
          <Route path="nuevo" element={<CreateInventoryView />} />
        </Route>

        <Route path="publicaciones">
          <Route index element={<PublicationsView />} />
        </Route>

        <Route path="peticiones">
          <Route index element={<RequestsView />} />
        </Route>

        <Route path="leads">
          <Route index element={<LeadsView />} />
          <Route path="nuevo" element={<LeadsFormView />} />
        </Route>

        <Route path="usuarios">
          <Route index element={<UsersView />} />
          <Route path="nuevo" element={<UsersFormView />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
