import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto space-y-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome / Hero Section */}
      <div className="bg-primary-container rounded p-lg text-on-primary shadow-[0_4px_20px_rgba(25,118,210,0.15)] relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="font-display-lg mb-2">Xin chào, Dr. Smith</h1>
          <p className="font-body-md opacity-90 max-w-md">Chào mừng bạn trở lại. Dưới đây là tổng quan các chức năng quản lý hôm nay.</p>
        </div>
        {/* Decorative Background Pattern */}
        <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none" aria-hidden="true">
          <span className="material-symbols-outlined text-[200px]">local_hospital</span>
        </div>
      </div>

      {/* Bento Grid Layout for Functions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Group 1: Quản lý lưu trú */}
        <div className="lg:col-span-2 space-y-md">
          <h2 className="font-title-sm text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" aria-hidden="true">hotel</span>
            Quản lý lưu trú
          </h2>
          <div className="grid sm:grid-cols-2 gap-md grid-cols-2">
            
            {/* Card 1 */}
            <Link 
              to="/rooms"
              className="bg-surface-container-lowest rounded p-md border border-surface-variant shadow-[0_4px_20px_rgba(25,118,210,0.04)] hover:shadow-[0_4px_20px_rgba(25,118,210,0.1)] transition-shadow cursor-pointer flex flex-col justify-between h-32 no-underline"
            >
              <div className="flex justify-between items-start">
                <div className="bg-primary-fixed rounded p-2 text-on-primary-fixed">
                  <span className="material-symbols-outlined" aria-hidden="true">meeting_room</span>
                </div>
                <div className="bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  Active
                </div>
              </div>
              <h3 className="font-title-sm text-on-surface">Quản lý buồng bệnh</h3>
            </Link>

            {/* Card 2 */}
            <Link 
              to="/shift-handover"
              className="bg-surface-container-lowest rounded p-md border border-surface-variant shadow-[0_4px_20px_rgba(25,118,210,0.04)] hover:shadow-[0_4px_20px_rgba(25,118,210,0.1)] transition-shadow cursor-pointer flex flex-col justify-between h-32 no-underline"
            >
              <div className="flex justify-between items-start">
                <div className="bg-primary-fixed rounded p-2 text-on-primary-fixed">
                  <span className="material-symbols-outlined" aria-hidden="true">swap_horiz</span>
                </div>
              </div>
              <h3 className="font-title-sm text-on-surface">Bàn giao ca</h3>
            </Link>

            {/* Card 3 */}
            <Link 
              to="/patient-handover"
              className="bg-surface-container-lowest rounded p-md border border-surface-variant shadow-[0_4px_20px_rgba(25,118,210,0.04)] hover:shadow-[0_4px_20px_rgba(25,118,210,0.1)] transition-shadow cursor-pointer flex flex-col justify-between h-32 no-underline"
            >
              <div className="flex justify-between items-start">
                <div className="bg-primary-fixed rounded p-2 text-on-primary-fixed">
                  <span className="material-symbols-outlined" aria-hidden="true">transfer_within_a_station</span>
                </div>
              </div>
              <h3 className="font-title-sm text-on-surface">Bàn giao bệnh nhân</h3>
            </Link>

            {/* Card 4 */}
            <Link 
              to="/general-summary"
              className="bg-surface-container-lowest rounded p-md border border-surface-variant shadow-[0_4px_20px_rgba(25,118,210,0.04)] hover:shadow-[0_4px_20px_rgba(25,118,210,0.1)] transition-shadow cursor-pointer flex flex-col justify-between h-32 no-underline"
            >
              <div className="flex justify-between items-start">
                <div className="bg-primary-fixed rounded p-2 text-on-primary-fixed">
                  <span className="material-symbols-outlined" aria-hidden="true">table_chart</span>
                </div>
              </div>
              <h3 className="font-title-sm text-on-surface">Bảng kê tổng hợp</h3>
            </Link>

          </div>
        </div>

        {/* Right Column: Group 2 & Notes */}
        <div className="space-y-lg">
          {/* Group 2: Hành chính y tế */}
          <div className="space-y-md">
            <h2 className="font-title-sm text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">folder_managed</span>
              Hành chính y tế
            </h2>
            <div className="flex flex-col gap-md">
              
              <Link 
                to="/scan-document"
                className="bg-surface-container-lowest rounded p-md border border-surface-variant shadow-[0_4px_20px_rgba(25,118,210,0.04)] hover:shadow-[0_4px_20px_rgba(25,118,210,0.1)] transition-shadow cursor-pointer flex items-center gap-4 no-underline"
              >
                <div className="bg-secondary-container rounded p-3 text-on-secondary-container">
                  <span className="material-symbols-outlined" aria-hidden="true">document_scanner</span>
                </div>
                <h3 className="font-title-sm text-on-surface flex-1">Scan tài liệu</h3>
                <span className="material-symbols-outlined text-outline" aria-hidden="true">chevron_right</span>
              </Link>

              <Link 
                to="/scan-history"
                className="bg-surface-container-lowest rounded p-md border border-surface-variant shadow-[0_4px_20px_rgba(25,118,210,0.04)] hover:shadow-[0_4px_20px_rgba(25,118,210,0.1)] transition-shadow cursor-pointer flex items-center gap-4 no-underline"
              >
                <div className="bg-secondary-container rounded p-3 text-on-secondary-container">
                  <span className="material-symbols-outlined" aria-hidden="true">history</span>
                </div>
                <h3 className="font-title-sm text-on-surface flex-1">Lịch sử Scan</h3>
                <span className="material-symbols-outlined text-outline" aria-hidden="true">chevron_right</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
