import { Outlet } from 'react-router-dom';

// ? Components
import { Navbar } from '@/components';

export default function RootLayout() {
  return (
    <div>
      <Navbar />

      <main className="h-[calc(100vh-82px)] p-6">
        <Outlet />
      </main>
    </div>
  );
}
