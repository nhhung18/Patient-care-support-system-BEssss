import { useNavigate } from 'react-router-dom';

export function OrderHistory() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface-container-low text-on-surface min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top App Bar (Mobile Subpage style) */}
      <header className="fixed top-0 left-0 w-full z-40 bg-surface-container-lowest border-b border-surface-variant shadow-sm md:hidden h-16 flex justify-between items-center px-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-on-surface hover:bg-surface-container p-2 rounded-full transition-colors active:scale-95 cursor-pointer border-none bg-transparent"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-md text-on-surface text-center flex-1 pr-10">Lịch sử y lệnh</h1>
      </header>

      <main className="pt-20 px-6 md:pt-8 max-w-4xl mx-auto w-full pb-8">
        
        {/* Web Header (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="text-on-surface hover:bg-surface-container p-2 rounded-full transition-colors active:scale-95 cursor-pointer border-none bg-transparent"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-on-surface">Lịch sử y lệnh</h1>
        </div>

        {/* Timeline List */}
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-variant before:to-transparent">
          
          {/* Order Item 1 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-surface-container-lowest rounded-full border-2 border-surface-container z-10 md:left-1/2 md:-ml-5">
              <span className="material-symbols-outlined text-[#137333]">check_circle</span>
            </div>
            <div className="ml-14 bg-surface-container-lowest p-5 rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] w-full md:ml-auto md:w-[calc(50%-3rem)] md:mr-0 border border-surface-variant">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> 14:30 - Hôm nay
                </span>
                <span className="font-label-caps text-[#137333] bg-[#e6f4ea] px-2 py-0.5 rounded">Đã thực hiện</span>
              </div>
              <h3 className="font-title-sm text-on-surface mb-2">Paracetamol 500mg</h3>
              <div className="bg-surface-container-low p-3 rounded mb-3">
                <div className="grid grid-cols-2 gap-2 font-body-sm text-on-surface-variant">
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Liều lượng</strong> 1 viên</div>
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Đường dùng</strong> Uống</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-surface-variant font-body-sm text-on-surface-variant">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">NT</span>
                Người thực hiện: Điều dưỡng Nguyễn Thị B
              </div>
            </div>
          </div>

          {/* Order Item 2 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-surface-container-lowest rounded-full border-2 border-surface-container z-10 md:left-1/2 md:-ml-5">
              <span className="material-symbols-outlined text-[#137333]">check_circle</span>
            </div>
            <div className="ml-14 bg-surface-container-lowest p-5 rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] w-full md:ml-0 md:w-[calc(50%-3rem)] md:mr-auto border border-surface-variant">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> 08:00 - Hôm nay
                </span>
                <span className="font-label-caps text-[#137333] bg-[#e6f4ea] px-2 py-0.5 rounded">Đã thực hiện</span>
              </div>
              <h3 className="font-title-sm text-on-surface mb-2">Cefuroxim 1g</h3>
              <div className="bg-surface-container-low p-3 rounded mb-3">
                <div className="grid grid-cols-2 gap-2 font-body-sm text-on-surface-variant">
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Liều lượng</strong> 1 lọ</div>
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Đường dùng</strong> Tiêm tĩnh mạch</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-surface-variant font-body-sm text-on-surface-variant">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">NT</span>
                Người thực hiện: Điều dưỡng Nguyễn Thị B
              </div>
            </div>
          </div>

          {/* Order Item 3 (Pending) */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-surface-container-lowest rounded-full border-2 border-surface-variant z-10 md:left-1/2 md:-ml-5">
              <span className="material-symbols-outlined text-on-surface-variant">radio_button_unchecked</span>
            </div>
            <div className="ml-14 bg-surface-container-lowest p-5 rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] w-full md:ml-auto md:w-[calc(50%-3rem)] md:mr-0 border border-primary/20 bg-primary-fixed/10">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> 20:00 - Hôm nay
                </span>
                <span className="font-label-caps text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded">Chưa thực hiện</span>
              </div>
              <h3 className="font-title-sm text-on-surface mb-2">Paracetamol 500mg</h3>
              <div className="bg-surface-container-lowest p-3 rounded mb-3 border border-surface-variant">
                <div className="grid grid-cols-2 gap-2 font-body-sm text-on-surface-variant">
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Liều lượng</strong> 1 viên</div>
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Đường dùng</strong> Uống</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
