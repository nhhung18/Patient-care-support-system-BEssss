import { NavLink } from 'react-router-dom';

export function BottomNavigation() {
  const navItems = [
    { to: '/', label: 'Trang chủ', icon: 'home' },
    { to: '/schedule', label: 'Lịch làm việc', icon: 'calendar_month' },
    { to: '/alerts', label: 'Thông báo', icon: 'notifications' },
    { to: '/profile', label: 'Cá nhân', icon: 'person' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-20 pb-safe md:hidden bg-surface-container-lowest rounded-t-2xl border-t border-outline-variant shadow-[0_-4px_20px_rgba(25,118,210,0.08)]">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center font-inter text-[11px] font-medium tap-highlight-transparent transition-all duration-300 px-3 py-1 rounded ${
              isActive
                ? 'text-primary bg-primary-fixed'
                : 'text-outline hover:text-primary'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span 
                className={`material-symbols-outlined mb-1 text-[24px]`}
                style={isActive ? { fontVariationSettings: '"FILL" 1' } : {}}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="font-label-caps uppercase tracking-tighter">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
