import { Outlet } from 'react-router-dom';

// ? Components
import { Navbar } from '@/components';

export default function RootLayout() {
  return (
    <div>
      <Navbar />

      <main className="h-[calc(100vh-82px)] py-6 px-10">
        <Outlet />
      </main>
    </div>
  );
}
