import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';
import { useNavigate } from 'react-router-dom';

export function CareTicketChildCreate() {
  const { patientObject } = useClinicalContext();
  const navigate = useNavigate();

  if (!patientObject) return null;

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Header title="Tạo Phiếu chăm sóc con" showBack />
      
      <main className="flex-1 w-full pb-24 overflow-y-auto">
        <form className="w-full px-container-margin pt-4 space-y-4">
          
          {/* Patient & Objectives Card */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="px-2.5 py-1 bg-[#d4e3ff] rounded-md">
                <span className="text-[11px] font-bold text-[#005dac] uppercase tracking-wider">Bệnh nhân</span>
              </div>
              <div className="px-3 py-1.5 bg-[#e8f5e9] rounded-full">
                <span className="text-[12px] font-semibold text-[#2e7d32] whitespace-nowrap">Đang điều trị</span>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-[32px] font-bold text-on-surface leading-tight">{patientObject.name}</h2>
              <p className="text-[16px] text-on-surface-variant mt-1">
                <span className="font-medium">Mã BN:</span> <span className="font-bold text-on-surface">{patientObject.id}</span>
              </p>
            </div>
            <div className="h-px bg-slate-100 w-full mb-6"></div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Khoa</p>
                <p className="text-[16px] font-bold text-[#526069] leading-tight">{patientObject.department}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Phòng</p>
                <p className="text-[18px] font-bold text-[#526069]">{patientObject.room}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Giường</p>
                <p className="text-[18px] font-bold text-[#526069]">{patientObject.bed}</p>
              </div>
            </div>
          </div>

          {/* Clinical Assessments Sections */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* Da, niêm mạc */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">palette</span> Da, niêm mạc
              </h3>
              <div className="flex flex-wrap gap-2">
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="skin" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Bình thường</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="skin" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Hồng</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="skin" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Vàng</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="skin" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Nhợt nhạt</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="skin" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Tím tái</span>
                </label>
              </div>
            </div>

            {/* Tri giác */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">psychology</span> Tri giác
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-3 px-3 py-2.5 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="con" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Tỉnh táo</span>
                </label>
                <label className="flex items-center gap-3 px-3 py-2.5 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="con" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Lơ mơ</span>
                </label>
                <label className="flex items-center gap-3 px-3 py-2.5 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="con" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Kích thích</span>
                </label>
                <label className="flex items-center gap-3 px-3 py-2.5 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary border-outline-variant focus:ring-primary" name="con" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Hôn mê</span>
                </label>
              </div>
            </div>

            {/* Phù */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">water_drop</span> Phù
              </h3>
              <div className="flex flex-wrap gap-2">
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary" name="edema" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Không phù</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary" name="edema" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Độ 1</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary" name="edema" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Độ 2</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-surface-container-low rounded-xl cursor-pointer border border-transparent hover:border-primary-fixed transition-all">
                  <input className="w-4 h-4 text-primary" name="edema" type="radio" />
                  <span className="text-sm font-medium text-on-surface">Độ 3</span>
                </label>
              </div>
            </div>

            {/* Thang đo Đau */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">mood_bad</span> Thang đo Đau
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-800 rounded-xl cursor-pointer border border-transparent hover:border-green-200">
                  <input className="w-4 h-4 text-green-600 border-green-300" name="pain" type="radio" />
                  <span className="text-sm font-medium">Không đau</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-yellow-50 text-yellow-800 rounded-xl cursor-pointer border border-transparent hover:border-yellow-200">
                  <input className="w-4 h-4 text-yellow-600 border-yellow-300" name="pain" type="radio" />
                  <span className="text-sm font-medium">Đau nhẹ</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-orange-50 text-orange-800 rounded-xl cursor-pointer border border-transparent hover:border-orange-200">
                  <input className="w-4 h-4 text-orange-600 border-orange-300" name="pain" type="radio" />
                  <span className="text-sm font-medium">Đau vừa</span>
                </label>
                <label className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-800 rounded-xl cursor-pointer border border-transparent hover:border-red-200">
                  <input className="w-4 h-4 text-red-600 border-red-300" name="pain" type="radio" />
                  <span className="text-sm font-medium">Dữ dội</span>
                </label>
              </div>
            </div>

            {/* Hô hấp */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">air</span> Hô hấp
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Thở đều, êm</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Khó thở / Thở rên</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Tăng tiết đờm dãi</span></label>
              </div>
            </div>

            {/* Tuần hoàn */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">ecg</span> Tuần hoàn
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Mạch đều, rõ</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Mạch nhanh / chậm</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary focus:ring-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Huyết áp ổn định</span></label>
              </div>
            </div>

            {/* Dinh dưỡng */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">restaurant</span> Dinh dưỡng
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Ăn uống ngon miệng</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Chán ăn / Bỏ bữa</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Ăn qua ống thông</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Nôn / Buồn nôn</span></label>
              </div>
            </div>

            {/* Giấc ngủ & Tinh thần */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">bedtime</span> Giấc ngủ &amp; Tinh thần
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Ngủ ngon, đủ giấc</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Mất ngủ / Khó ngủ</span></label>
                <div className="h-px bg-slate-100 my-1"></div>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Ổn định, an tâm</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Lo âu / Căng thẳng</span></label>
              </div>
            </div>

            {/* Vận động */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">directions_run</span> Vận động
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Vận động bình thường</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Hạn chế vận động</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Liệt / Yếu chi</span></label>
              </div>
            </div>

            {/* Vệ sinh */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-on-surface-variant mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">cleaning_services</span> Vệ sinh
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Vệ sinh cá nhân tốt</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Cần hỗ trợ vệ sinh</span></label>
                <label className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Phụ thuộc hoàn toàn</span></label>
              </div>
            </div>
            
          </div>

          {/* Risk Assessments */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase mb-3 tracking-wider">Nguy cơ té ngã</h3>
              <div className="space-y-1">
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="fall" type="radio" /> Thấp</label>
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="fall" type="radio" /> Trung bình</label>
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="fall" type="radio" /> Cao</label>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase mb-3 tracking-wider">Nguy cơ loét</h3>
              <div className="space-y-1">
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="ulcer" type="radio" /> Không nguy cơ</label>
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="ulcer" type="radio" /> Nguy cơ thấp</label>
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="ulcer" type="radio" /> Nguy cơ cao</label>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-[11px] font-bold text-slate-500 uppercase mb-3 tracking-wider">NEWS2</h3>
              <div className="space-y-1">
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="news" type="radio" /> Ổn định</label>
                <label className="text-sm font-medium flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><input className="text-primary w-5 h-5 border-slate-300" name="news" type="radio" /> Cần theo dõi sát</label>
              </div>
            </div>
          </div>

          {/* Can thiệp Điều dưỡng */}
          <div className="bg-white p-4 rounded-2xl border border-primary-fixed/30 shadow-sm">
            <h3 className="text-sm font-bold text-on-surface-variant mb-4 flex items-center gap-2 border-b border-slate-50 pb-2">
              <span className="material-symbols-outlined text-primary">assignment_turned_in</span> Can thiệp Điều dưỡng
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Thuốc uống</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Thuốc tiêm</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Truyền dịch</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Chụp X-quang</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Xét nghiệm</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Vệ sinh giường</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Đón tiếp NB</span>
              </label>
              <label className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-primary-container/10 transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
                <input className="rounded text-primary w-4 h-4 border-outline-variant" type="checkbox" /><span className="text-[13px] font-semibold text-on-surface">Theo dõi DHST</span>
              </label>
            </div>
          </div>

          {/* Bàn giao */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-sm font-bold text-on-surface-variant mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">handshake</span> Bàn giao sau ca
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Người bệnh</span></label>
              <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Hồ sơ</span></label>
              <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Phim chụp</span></label>
              <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"><input className="rounded text-primary w-5 h-5 border-slate-300" type="checkbox" /><span className="text-sm font-medium">Thuốc/dịch truyền</span></label>
            </div>
          </div>
          
        </form>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-white border-t border-slate-100 flex gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
        <button 
          className="flex-1 py-3.5 px-6 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all"
          onClick={() => navigate(-1)}
        >
          Hủy
        </button>
        <button 
          className="flex-[2] py-3.5 px-6 rounded-2xl font-bold text-white bg-primary hover:bg-blue-700 shadow-lg shadow-blue-700/20 active:scale-95 transition-all"
          onClick={() => navigate(-1)}
        >
          Lưu phiếu con
        </button>
      </div>
    </div>
  );
}
