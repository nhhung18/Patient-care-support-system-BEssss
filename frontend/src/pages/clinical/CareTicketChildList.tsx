import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';
import { useNavigate } from 'react-router-dom';

export function CareTicketChildList() {
  const { patientObject } = useClinicalContext();
  const navigate = useNavigate();

  if (!patientObject) return null;

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen">
      <Header title="DS Phiếu chăm sóc con" showBack />
      
      <main className="pt-20 pb-32 px-4 w-full min-h-screen">
        {/* Parent Plan Identifier */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-title-sm font-headline-md text-primary">Phiếu chăm sóc cha số 1</h2>
            <p className="text-xs text-secondary font-medium uppercase tracking-wider">Danh sách phiếu con trực thuộc</p>
          </div>
        </div>

        {/* Primary Action (Mobile) */}
        <div className="mb-8">
          <button 
            className="w-full bg-primary text-white font-semibold rounded-lg py-4 shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            onClick={() => navigate(`/care-ticket/child/create`)}
          >
            <span className="material-symbols-outlined">add_circle</span>
            Tạo phiếu chăm sóc con
          </button>
        </div>

        {/* Filters Section */}
        <section className="mb-8 grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Lọc theo ngày</label>
            <div className="relative">
              <input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-body-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="date" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Cấp độ chăm sóc</label>
            <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-body-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none">
              <option>Tất cả cấp độ</option>
              <option>Cấp 1 - Chăm sóc tích cực</option>
              <option>Cấp 2 - Chăm sóc thông thường</option>
              <option>Cấp 3 - Tự chăm sóc</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Hành động</label>
            <div className="flex gap-2">
              <button className="flex-1 bg-white border border-primary text-primary font-medium rounded-lg py-2.5 text-sm hover:bg-blue-50 transition-colors">Áp dụng lọc</button>
              <button className="px-3 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined">filter_alt_off</span>
              </button>
            </div>
          </div>
        </section>

        {/* Timeline / Card List */}
        <section className="space-y-6 relative">
          
          {/* Timeline Item 1 */}
          <div className="relative group">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(25,118,210,0.05)] hover:shadow-[0_8px_30px_rgba(25,118,210,0.12)] transition-all">
              <div className="flex flex-col justify-between mb-4 gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <span className="text-body-md font-semibold text-slate-900">08:30 - 24/05/2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-100">Cấp độ 1</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-600">person</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Điều dưỡng thực hiện</p>
                    <p className="text-body-sm font-medium">Trần Thị Mai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-600">description</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Tóm tắt đánh giá</p>
                    <p className="text-body-sm text-slate-700 leading-relaxed">BN tỉnh, tiếp xúc tốt. Vết mổ khô, không sưng nề. Đã thay băng và hướng dẫn vận động nhẹ tại giường.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end gap-3">
                <button className="text-sm font-semibold text-blue-700 hover:underline">Chi tiết phiếu</button>
                <button className="text-sm font-semibold text-slate-400 hover:text-slate-600">Chỉnh sửa</button>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative group">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(25,118,210,0.05)] hover:shadow-[0_8px_30px_rgba(25,118,210,0.12)] transition-all">
              <div className="flex flex-col justify-between mb-4 gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">schedule</span>
                    <span className="text-body-md font-semibold text-slate-900">14:15 - 23/05/2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full border border-yellow-100">Cấp độ 2</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-600">person</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Điều dưỡng thực hiện</p>
                    <p className="text-body-sm font-medium">Lê Văn Hùng</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-600">description</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Tóm tắt đánh giá</p>
                    <p className="text-body-sm text-slate-700 leading-relaxed">BN than đau nhẹ vùng thượng vị. Đã dùng thuốc giảm đau theo y lệnh lúc 14:30. Theo dõi sát sinh hiệu.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end gap-3">
                <button className="text-sm font-semibold text-blue-700 hover:underline">Chi tiết phiếu</button>
                <button className="text-sm font-semibold text-slate-400 hover:text-slate-600">Chỉnh sửa</button>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative group">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(25,118,210,0.05)] hover:shadow-[0_8px_30px_rgba(25,118,210,0.12)] transition-all">
              <div className="flex flex-col justify-between mb-4 gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">schedule</span>
                    <span className="text-body-md font-semibold text-slate-900">09:00 - 23/05/2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">Cấp độ 3</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-600">person</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Điều dưỡng thực hiện</p>
                    <p className="text-body-sm font-medium">Trần Thị Mai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-600">description</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Tóm tắt đánh giá</p>
                    <p className="text-body-sm text-slate-700 leading-relaxed">Đánh giá ban đầu sau nhập viện. BN ổn định, không có tiền sử dị ứng thuốc. Hướng dẫn nội quy khoa phòng.</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end gap-3">
                <button className="text-sm font-semibold text-blue-700 hover:underline">Chi tiết phiếu</button>
                <button className="text-sm font-semibold text-slate-400 hover:text-slate-600">Chỉnh sửa</button>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
