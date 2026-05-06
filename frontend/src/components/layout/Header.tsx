import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

export function Header({ title, subtitle, showBack }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-white border-b border-slate-100 shadow-[0_4px_20px_rgba(25,118,210,0.05)]">
      <div className="flex items-center gap-2">
        {showBack ? (
          <button 
            onClick={() => navigate(-1)} 
            className="mr-2 p-2 rounded-full hover:bg-slate-100 transition-colors active:scale-95"
            aria-label="Quay lại"
          >
            <span className="material-symbols-outlined text-primary" aria-hidden="true">arrow_back</span>
          </button>
        ) : (
          <span className="material-symbols-outlined text-blue-700" style={{ fontVariationSettings: '"FILL" 1' }} aria-hidden="true">medical_services</span>
        )}
        
        <div className="flex flex-col">
          <h1 className="font-headline-md text-headline-md text-primary">{title}</h1>
          {subtitle && <p className="font-label-caps text-label-caps text-secondary uppercase">{subtitle}</p>}
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-4">
        <div className="hidden md:flex flex-col text-right">
          <span className="font-title-sm text-sm text-on-surface">Dr. Smith</span>
          <span className="text-xs text-secondary">Chief Resident</span>
        </div>
        <img 
          alt="Doctor Profile" 
          className="w-10 h-10 rounded-full border-2 border-primary-fixed-dim object-cover" 
          width={40}
          height={40}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXJAVCa4MRT6YllsO0uheRGSF2VEsSeYmek4jpMMHmCcBcNa-zxPL0q0Ndog5QQZT3xwGriR_d6jjURNl2uPwF2xm6ncOg_z6hezduvqbEz2NdGVfBfvWYRDgudtG3EiOMkn6GP6VLkreYTJ8JJc1sskJCRL4qpxMNA5pZvMkKyzpy3A3jMli0rtL_9k0R_5ReN-_UjSg2jnEOPlmTDJ2BOU01aZ5pYImYSgxNgKw_QeKt3QfspW8PEoM7_FzqbvXQAlneS4MEu2g"
        />
      </div>
    </header>
  );
}

