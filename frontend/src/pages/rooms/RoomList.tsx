import { Link } from 'react-router-dom';

export function RoomList() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Search Bar Section */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
          <span className="material-symbols-outlined" aria-hidden="true">search</span>
        </div>
        <input 
          className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:ring-2 focus:ring-primary font-body-md text-on-surface placeholder-slate-400 focus-visible:outline-none" 
          placeholder="Tìm kiếm bệnh nhân hoặc số phòng…" 
          type="search"
          name="room-search"
          autoComplete="off"
        />
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mt-6 max-w-2xl mx-auto px-1">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-surface-variant rounded-full shadow-sm hover:border-primary transition-colors duration-200 text-on-surface-variant cursor-pointer">
          <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">location_city</span>
          <span className="font-body-sm font-semibold">Tòa nhà: Tất cả</span>
          <span className="material-symbols-outlined text-[20px] text-secondary" aria-hidden="true">expand_more</span>
        </button>

        <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-surface-variant rounded-full shadow-sm hover:border-primary transition-colors duration-200 text-on-surface-variant cursor-pointer">
          <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">layers</span>
          <span className="font-body-sm font-semibold">Tầng: Tất cả</span>
          <span className="material-symbols-outlined text-[20px] text-secondary" aria-hidden="true">expand_more</span>
        </button>
        
        <div className="flex-1"></div>
        
        <button className="flex items-center gap-1.5 text-primary font-body-sm font-bold hover:bg-primary/5 px-4 py-2 rounded-full transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">filter_list</span>
          Lọc thêm
        </button>
      </div>

      {/* Bento Grid of Rooms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Room Card 1 */}
        <Link 
          to="/rooms/1"
          className="group relative bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_20px_rgba(25,118,210,0.08)] hover:shadow-[0_15px_40px_rgba(25,118,210,0.12)] transition-shadow duration-300 cursor-pointer overflow-hidden active:scale-95 no-underline"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Phòng Hồi sức 101</h3>
              <p className="text-secondary font-body-sm mt-2">Khoa Cấp cứu - Tầng 1</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div>
                <span className="font-display-lg text-primary tabular-nums">12</span>
                <span className="text-secondary font-medium ml-2">giường trống</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Room Card 2 */}
        <Link 
          to="/rooms/2"
          className="group relative bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_20px_rgba(25,118,210,0.08)] hover:shadow-[0_15px_40px_rgba(25,118,210,0.12)] transition-shadow duration-300 cursor-pointer overflow-hidden active:scale-95 no-underline"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Phòng Nội khoa 205</h3>
              <p className="text-secondary font-body-sm mt-2">Khoa Nội - Tầng 2</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div>
                <span className="font-display-lg text-outline-variant tabular-nums">0</span>
                <span className="text-secondary font-medium ml-2">giường trống</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Room Card 3 */}
        <Link 
          to="/rooms/3"
          className="group relative bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_20px_rgba(25,118,210,0.08)] hover:shadow-[0_15px_40px_rgba(25,118,210,0.12)] transition-shadow duration-300 cursor-pointer overflow-hidden active:scale-95 no-underline"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Phòng Nhi khoa 302</h3>
              <p className="text-secondary font-body-sm mt-2">Khoa Nhi - Tầng 3</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div>
                <span className="font-display-lg text-primary tabular-nums">05</span>
                <span className="text-secondary font-medium ml-2">giường trống</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Room Card 4 */}
        <Link 
          to="/rooms/4"
          className="group relative bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_20px_rgba(25,118,210,0.08)] hover:shadow-[0_15px_40px_rgba(25,118,210,0.12)] transition-shadow duration-300 cursor-pointer overflow-hidden active:scale-95 no-underline"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Phòng Hậu phẫu 401</h3>
              <p className="text-secondary font-body-sm mt-2">Khoa Ngoại - Tầng 4</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div>
                <span className="font-display-lg text-primary tabular-nums">08</span>
                <span className="text-secondary font-medium ml-2">giường trống</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Room Card 5 */}
        <Link 
          to="/rooms/5"
          className="group relative bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_4px_20px_rgba(25,118,210,0.08)] hover:shadow-[0_15px_40px_rgba(25,118,210,0.12)] transition-shadow duration-300 cursor-pointer overflow-hidden active:scale-95 no-underline"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">Phòng Lọc máu 105</h3>
              <p className="text-secondary font-body-sm mt-2">Khoa Thận - Tầng 1</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div>
                <span className="font-display-lg text-primary tabular-nums">03</span>
                <span className="text-secondary font-medium ml-2">giường trống</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Room Card 6 (Special/Maintenance State) */}
        <div className="group relative bg-surface-container-low rounded-[32px] p-8 border-2 border-dashed border-outline-variant transition-shadow duration-300 cursor-not-allowed overflow-hidden">
          <div className="flex flex-col h-full justify-between grayscale opacity-60">
            <div>
              <h3 className="font-headline-md text-on-surface">Phòng Cách ly 202</h3>
              <p className="text-secondary font-body-sm mt-2">Đang khử khuẩn - Tầng 2</p>
            </div>
            <div className="mt-12 flex items-end justify-between">
              <div>
                <span className="font-display-lg text-outline-variant">--</span>
                <span className="text-secondary font-medium ml-2">giường trống</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
