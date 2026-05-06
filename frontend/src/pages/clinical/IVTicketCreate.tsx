import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';

export function IVTicketCreate() {
  const navigate = useNavigate();
  const { patientObject } = useClinicalContext();

  if (!patientObject) return null;

  return (
    <>
      <Header title="Phiếu truyền dịch" showBack />
      
      <main className="w-full px-container-margin space-y-lg pb-32 mt-4">
        <section className="w-full">
          {/* Patient Summary Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-[0_4px_20px_rgba(25,118,210,0.08)] mb-8 border border-blue-50 dark:border-slate-700 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">BỆNH NHÂN</span>
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium border border-green-100">Đang điều trị</span>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-on-surface mb-1">{patientObject.name}</h2>
              <p className="text-body-sm text-outline"><span className="font-medium">Mã BN:</span> {patientObject.id}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
              <div>
                <span className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-1">KHOA</span>
                <p className="font-title-sm text-on-surface leading-tight">{patientObject.department}</p>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-1">PHÒNG</span>
                <p className="font-title-sm text-on-surface">{patientObject.room}</p>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-1">GIƯỜNG</span>
                <p className="font-title-sm text-on-surface">{patientObject.bed}</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/20 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          </div>

          {/* IV Infusion Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-surface-container-low border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-700" data-icon="vaccines">vaccines</span>
              <h3 className="font-title-sm text-on-surface">Thông tin truyền dịch</h3>
            </div>
            <div className="p-6 grid grid-cols-1 gap-y-6">
              {/* Date and Batch */}
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Ngày tháng</label>
                <div className="relative">
                  <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" type="date" defaultValue="2024-05-24" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Lô/Số sản xuất</label>
                <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" placeholder="VD: LSX-202401" type="text" />
              </div>

              {/* Fluid Info */}
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Tên dịch truyền / Hàm lượng</label>
                <div className="relative">
                  <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" placeholder="Nhập tên thuốc/dịch truyền và nồng độ..." type="text" />
                  <span className="absolute right-3 top-3 material-symbols-outlined text-outline" data-icon="search">search</span>
                </div>
              </div>

              {/* Quantity and Rate */}
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Số lượng (ml)</label>
                <div className="flex items-center gap-2">
                  <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" placeholder="500" type="number" />
                  <span className="text-body-sm text-outline font-medium">ml</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Tốc độ (giọt/phút)</label>
                <div className="flex items-center gap-3">
                  <input className="flex-1 accent-primary" max="120" min="10" step="5" type="range" />
                  <div className="bg-blue-50 px-3 py-1 rounded border border-blue-100 text-blue-700 font-bold text-sm min-w-[60px] text-center">
                    40 <span className="text-[10px]">g/p</span>
                  </div>
                </div>
              </div>

              {/* Timing */}
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Thời gian bắt đầu</label>
                <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" type="time" />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Thời gian kết thúc (Dự kiến)</label>
                <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md" type="time" />
              </div>

              {/* Staff */}
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Bác sĩ chỉ định</label>
                <select className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md appearance-none">
                  <option>BS. Nguyễn Thành Trung</option>
                  <option>BS. Lê Thị Thu</option>
                  <option>BS. Phạm Minh Hoàng</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Điều dưỡng thực hiện</label>
                <select className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md appearance-none">
                  <option>ĐD. Trần Thị Lan</option>
                  <option>ĐD. Hoàng Văn Nam</option>
                  <option>ĐD. Vũ Mỹ Linh</option>
                </select>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Ghi chú theo dõi</label>
                <textarea className="w-full bg-white border border-outline-variant rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-body-md resize-none" placeholder="Ghi nhận phản ứng của bệnh nhân hoặc các lưu ý đặc biệt khác..." rows={3}></textarea>
              </div>
            </div>

            {/* Form Actions */}
            <div className="px-6 py-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex items-center justify-end gap-4">
              <button className="px-6 py-2.5 rounded-lg font-title-sm text-secondary hover:bg-secondary-container/30 transition-all active:scale-95" onClick={() => navigate(-1)}>
                Hủy
              </button>
              <button className="px-8 py-2.5 bg-primary-container text-on-primary-container rounded-lg font-title-sm shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined" data-icon="add_task">add_task</span>
                Tạo phiếu
              </button>
            </div>
          </div>

          {/* Recent History Bento-like List */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-title-sm text-on-surface">Lịch sử truyền dịch gần đây</h3>
              <button className="text-primary font-bold text-sm hover:underline" onClick={() => navigate(`/patients/${patientObject.id}/iv-tickets/history`)}>Xem tất cả</button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Background Decor for Clinical Ambience */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full -mr-64 -mt-64 blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50/30 rounded-full -ml-32 -mb-32 blur-3xl -z-10 pointer-events-none"></div>
    </>
  );
}
