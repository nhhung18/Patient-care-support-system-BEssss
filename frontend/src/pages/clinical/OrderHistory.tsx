import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';

export function OrderHistory() {
  const { patientObject } = useClinicalContext();

  if (!patientObject) return null;

  return (
    <div className="bg-surface-container-low min-h-screen text-on-surface font-body-md flex flex-col">
      <Header title="Lịch sử y lệnh" showBack />
      
      <main className="flex-1 w-full p-container-margin pb-32">
        {/* Patient Context (Optional based on design) */}
        <h3 className="text-headline-md text-on-surface mb-8">Bệnh nhân: {patientObject.name}</h3>
        
        {/* Timeline List */}
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-variant before:to-transparent">
          
          {/* Order Item 1 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-surface-container-lowest rounded-full border-2 border-surface-container z-10">
              <span className="material-symbols-outlined text-[#137333]">check_circle</span>
            </div>
            <div className="ml-14 bg-surface-container-lowest p-5 rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] w-full border border-surface-variant">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> 14:30 - Hôm nay
                </span>
                <span className="font-label-caps text-label-caps text-[#137333] bg-[#e6f4ea] px-2 py-0.5 rounded">Đã thực hiện</span>
              </div>
              <h3 className="font-title-sm text-title-sm text-on-surface mb-2">Paracetamol 500mg</h3>
              <div className="bg-surface-container-low p-3 rounded-lg mb-3">
                <div className="grid grid-cols-2 gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Liều lượng</strong> 1 viên</div>
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Đường dùng</strong> Uống</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-surface-variant font-body-sm text-body-sm text-on-surface-variant">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">NT</span>
                Người thực hiện: Điều dưỡng Nguyễn Thị B
              </div>
            </div>
          </div>

          {/* Order Item 2 */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-surface-container-lowest rounded-full border-2 border-surface-container z-10">
              <span className="material-symbols-outlined text-[#137333]">check_circle</span>
            </div>
            <div className="ml-14 bg-surface-container-lowest p-5 rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] w-full border border-surface-variant">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> 08:00 - Hôm nay
                </span>
                <span className="font-label-caps text-label-caps text-[#137333] bg-[#e6f4ea] px-2 py-0.5 rounded">Đã thực hiện</span>
              </div>
              <h3 className="font-title-sm text-title-sm text-on-surface mb-2">Cefuroxim 1g</h3>
              <div className="bg-surface-container-low p-3 rounded-lg mb-3">
                <div className="grid grid-cols-2 gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Liều lượng</strong> 1 lọ</div>
                  <div><strong className="text-on-surface block text-[12px] uppercase tracking-wider mb-0.5">Đường dùng</strong> Tiêm tĩnh mạch</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-surface-variant font-body-sm text-body-sm text-on-surface-variant">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">NT</span>
                Người thực hiện: Điều dưỡng Nguyễn Thị B
              </div>
            </div>
          </div>

          {/* Order Item 3 (Pending) */}
          <div className="relative flex items-start group">
            <div className="absolute left-0 w-10 h-10 flex items-center justify-center bg-surface-container-lowest rounded-full border-2 border-surface-variant z-10">
              <span className="material-symbols-outlined text-on-surface-variant">radio_button_unchecked</span>
            </div>
            <div className="ml-14 bg-surface-container-lowest p-5 rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] w-full border border-primary/20 bg-primary-fixed/10">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> 20:00 - Hôm nay
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded">Chưa thực hiện</span>
              </div>
              <h3 className="font-title-sm text-title-sm text-on-surface mb-2">Paracetamol 500mg</h3>
              <div className="bg-surface-container-lowest p-3 rounded-lg mb-3 border border-surface-variant">
                <div className="grid grid-cols-2 gap-2 font-body-sm text-body-sm text-on-surface-variant">
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
