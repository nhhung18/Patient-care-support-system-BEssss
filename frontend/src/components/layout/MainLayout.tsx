import { Outlet } from 'react-router-dom';
import { BottomNavigation } from './BottomNavigation';
import { TopAppBar } from './TopAppBar';
import { Sidebar } from './Sidebar';

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-surface text-on-surface font-body-md antialiased overflow-x-hidden">
      <TopAppBar />
      <Sidebar />
      <main className="flex-1 mt-16 md:ml-[280px] p-container-margin md:p-xl pb-32 md:pb-xl">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
}
