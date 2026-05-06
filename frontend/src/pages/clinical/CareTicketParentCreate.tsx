import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';

export function CareTicketParentCreate() {
  const navigate = useNavigate();
  const { patientObject } = useClinicalContext();

  if (!patientObject) return null;

  return (
    <>
      <Header title="Tạo Phiếu chăm sóc" showBack />
      
      <div className="w-full px-container-margin pb-32 mt-4">
        {/* Patient Summary Card */}
        <section className="mb-8">
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 z-0"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">Bệnh nhân</span>
                  <h3 className="text-headline-md text-on-surface">{patientObject.name}</h3>
                  <p className="text-body-sm text-slate-500">Mã BN: <span className="font-bold text-slate-700">{patientObject.id}</span></p>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100">Đang điều trị</span>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Khoa</p>
                  <p className="font-title-sm text-on-surface-variant">{patientObject.department}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Phòng</p>
                  <p className="font-title-sm text-on-surface-variant">{patientObject.room}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Giường</p>
                  <p className="font-title-sm text-on-surface-variant">B-12</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid for Diagnosis and Goals */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-blue-700">clinical_notes</span>
            <h4 className="font-title-sm text-blue-700">Chẩn đoán và Mục tiêu</h4>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {/* Field 1 */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 focus-within:border-primary transition-colors">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Chẩn đoán y khoa</label>
              <textarea className="w-full border-none p-0 focus:ring-0 text-body-md text-on-surface-variant placeholder:text-slate-300 min-h-[80px] resize-none outline-none" placeholder="Nhập chẩn đoán hiện tại của bệnh nhân..."></textarea>
            </div>
            
            {/* Field 2 */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 focus-within:border-primary transition-colors">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Diễn biến bệnh</label>
              <textarea className="w-full border-none p-0 focus:ring-0 text-body-md text-on-surface-variant placeholder:text-slate-300 min-h-[80px] resize-none outline-none" placeholder="Ghi nhận các triệu chứng, diễn biến mới..."></textarea>
            </div>
            
            {/* Field 3 */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 focus-within:border-primary transition-colors">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Mục tiêu chăm sóc</label>
              <textarea className="w-full border-none p-0 focus:ring-0 text-body-md text-on-surface-variant placeholder:text-slate-300 min-h-[80px] resize-none outline-none" placeholder="Các chỉ số cần đạt được (SpO2, Huyết áp...)"></textarea>
            </div>
            
            {/* Field 4 */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 focus-within:border-primary transition-colors">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Ghi chú đặc biệt</label>
              <textarea className="w-full border-none p-0 focus:ring-0 text-body-md text-on-surface-variant placeholder:text-slate-300 min-h-[80px] resize-none outline-none" placeholder="Dị ứng, chống chỉ định, lưu ý từ bác sĩ..."></textarea>
            </div>
          </div>
        </section>

        {/* Actions Section */}
        <section className="flex flex-col gap-4">
          <button 
            onClick={() => navigate('/care-ticket/child/create')}
            className="w-full py-4 bg-primary-container text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
            Tạo Phiếu con
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="w-full py-4 bg-blue-50 text-blue-700 rounded-xl font-semibold flex items-center justify-center gap-3 border border-blue-100 active:bg-blue-100 transition-colors"
          >
            <span className="material-symbols-outlined">format_list_bulleted</span>
            Danh sách phiếu con đã tạo
          </button>
        </section>
      </div>
    </>
  );
}
