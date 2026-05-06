import { NavLink } from 'react-router-dom';

export function Navigation() {
  const links = [
    { to: '/', label: 'Tổng quan', icon: 'dashboard' },
    { to: '/rooms', label: 'Buồng bệnh', icon: 'room_preferences' },
    { to: '/patients', label: 'Bệnh nhân', icon: 'person' },
    { to: '/schedule', label: 'Lịch làm việc', icon: 'calendar_month' },
    { to: '/alerts', label: 'Cảnh báo', icon: 'notifications' },
  ];

  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-screen w-[280px] bg-white border-r border-slate-100 flex-col py-6 px-4 z-50">
      <div className="flex items-center gap-3 px-4 mb-10 text-primary">
        <span className="material-symbols-outlined text-3xl font-bold">medical_services</span>
        <span className="text-xl font-bold tracking-tight text-on-surface">PCSS Mobile</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                isActive 
                  ? 'bg-primary-container text-white shadow-md shadow-blue-100' 
                  : 'text-on-surface-variant hover:bg-slate-50'
              }`
            }
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-auto">
        <NavLink 
          to="/profile" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
              isActive 
                ? 'bg-primary-container text-white' 
                : 'text-on-surface-variant hover:bg-slate-50'
            }`
          }
        >
          <span className="material-symbols-outlined">settings</span>
          Cài đặt
        </NavLink>
      </div>
    </aside>
  );
}
