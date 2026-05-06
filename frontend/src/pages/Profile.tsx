export function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Profile Card */}
      <section className="bg-surface-container-lowest rounded p-6 shadow-sm border border-surface-variant text-center flex flex-col items-center">
        <div className="relative inline-block mb-4">
          <div className="h-28 w-28 rounded overflow-hidden shadow-md border-4 border-surface-container-lowest bg-surface-container">
            <img 
              alt="Dr. Smith Profile" 
              className="h-full w-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX1bGuE4Fm3hgdIYWVHMvsCtFyOlRwJ50O6zBJya7z4W1FZ7RIn2F_0gxxPgJmRjZ4e8hHjZawbr64pZ1exPjrOAisZtrw2a0ZFn_bdmcU--3yiPQewAYt2FvDU3OMDx08gGlvGgM1HDsUL4vLwKfKAV-qwWvDqE8a-csPlilsz4UjwJGDdmXb0ThErNXDpD4IqNu7m6kw9ss9598xft2hkZf16VlIqT0dOugn_uZ0eNwFS6hWS8GFEb9BwYn3KUbuVa-rdHgyyUM"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 rounded-full border-2 border-surface-container-lowest shadow-sm z-10"></div>
        </div>
        <h2 className="font-display-lg text-primary mb-1">Dr. Smith</h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-on-secondary-container font-title-sm">Chief Resident</span>
          <span className="h-1.5 w-1.5 rounded-full bg-outline-variant"></span>
          <span className="text-secondary font-body-md">ICU Department</span>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="space-y-3">
          <h3 className="font-title-sm text-on-surface flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-primary">badge</span>
            Personal Information
          </h3>
          <div className="bg-surface-container-lowest rounded shadow-sm border border-surface-variant divide-y divide-surface-container overflow-hidden">
            <div className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div>
                <p className="text-secondary font-label-caps mb-0.5">EMAIL ADDRESS</p>
                <p className="text-on-surface font-body-md">smith.j@medcare.org</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-sm">chevron_right</span>
            </div>
            
            <div className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors cursor-pointer group">
              <div>
                <p className="text-secondary font-label-caps mb-0.5">PHONE NUMBER</p>
                <p className="text-on-surface font-body-md">+1 (555) 902-4421</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-sm">chevron_right</span>
            </div>
            
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-secondary font-label-caps mb-0.5">LICENSE NUMBER</p>
                <p className="text-on-surface font-body-md">MD-9920-4122-88</p>
              </div>
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
            </div>
          </div>
        </div>

        {/* App Settings */}
        <div className="space-y-3">
          <h3 className="font-title-sm text-on-surface flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-primary">settings</span>
            App Settings
          </h3>
          <div className="bg-surface-container-lowest rounded shadow-sm border border-surface-variant overflow-hidden divide-y divide-surface-container">
            <button className="w-full p-4 flex items-center gap-4 hover:bg-surface-container-low transition-colors group cursor-pointer border-none bg-transparent">
              <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center flex-shrink-0 group-hover:bg-primary-fixed-dim transition-colors">
                <span className="material-symbols-outlined text-primary">security</span>
              </div>
              <div className="text-left flex-1">
                <p className="font-title-sm text-on-surface">Security</p>
                <p className="font-body-sm text-secondary">Biometrics & 2FA</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">chevron_right</span>
            </button>
            
            <button className="w-full p-4 flex items-center gap-4 hover:bg-surface-container-low transition-colors group cursor-pointer border-none bg-transparent">
              <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-secondary">help</span>
              </div>
              <div className="text-left flex-1">
                <p className="font-title-sm text-on-surface">Support</p>
                <p className="font-body-sm text-secondary">Help Center & Tickets</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">chevron_right</span>
            </button>
            
            <button className="w-full p-4 flex items-center gap-4 hover:bg-error-container transition-colors group cursor-pointer border-none bg-transparent">
              <div className="w-10 h-10 rounded bg-error-container/50 flex items-center justify-center flex-shrink-0 group-hover:bg-error-container transition-colors">
                <span className="material-symbols-outlined text-error">logout</span>
              </div>
              <div className="text-left flex-1">
                <p className="font-title-sm text-error">Logout</p>
                <p className="font-body-sm text-error/70">Close current session</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
