import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const navItems = [
    { to: '/', label: 'Dashboard', icon: 'dashboard' },
    { to: '/schedule', label: 'Appointments', icon: 'event' },
    { to: '/patients/1/medical-record', label: 'Medical Notes', icon: 'description' }, // Demo link
    { to: '/alerts', label: 'Emergency', icon: 'emergency' }
  ];

  return (
    <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full py-8 w-[280px] border-r bg-surface-container-lowest border-surface-variant z-40">
      <div className="px-6 mb-8 flex items-center gap-2">
        <span className="material-symbols-outlined text-2xl font-black text-primary" aria-hidden="true">medical_services</span>
        <span className="text-2xl font-black text-primary tracking-tight">MedCare</span>
      </div>
      
      <div className="px-6 mb-8 flex items-center gap-4">
        <img 
          alt="Medical Practitioner" 
          className="w-12 h-12 rounded-full object-cover" 
          width={48}
          height={48}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_3aPPHMopNHdTdxoeWBzaTu5pjNyctudArxR-t5uUVZTnffQ1512s82GPybPC338OvmhoGSRdfkz1L2X2WjNdyp_Q0CL2ypQiO8wqRVdiaMZ1BdWB8gbGiY4QXzfKHSBpHYDmMBch4ZYDOrOoImQbMdYRbnPsiJ1r6KnvXzphraQyVoc0syqkRx67bXSX7SxLve4FUWZyUcAIhLXA23ua51HHtI2kXj9w_D1GWMrLuELcjAkCqVCxMJwLcdtNDRU4bm71Rvt4DWU"
        />
        <div>
          <div className="font-title-sm text-on-surface">Dr. Smith</div>
          <div className="font-body-sm text-outline">Chief Resident</div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col gap-2 w-full">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 border-l-4 font-inter text-sm font-medium transition-all cursor-pointer active:opacity-80 ${
                isActive
                  ? 'bg-primary-fixed text-on-primary-fixed-variant border-primary rounded-r-lg'
                  : 'text-on-surface-variant border-transparent hover:bg-surface-container-low'
              }`
            }
          >
            <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
        
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 border-l-4 font-inter text-sm font-medium transition-all cursor-pointer active:opacity-80 mt-auto ${
              isActive
                ? 'bg-primary-fixed text-on-primary-fixed-variant border-primary rounded-r-lg'
                : 'text-on-surface-variant border-transparent hover:bg-surface-container-low'
            }`
          }
        >
          <span className="material-symbols-outlined" aria-hidden="true">settings</span>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
