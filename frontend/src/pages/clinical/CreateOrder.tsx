import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';

export function CreateOrder() {
  const navigate = useNavigate();
  const { patientObject } = useClinicalContext();

  if (!patientObject) return null;

  return (
    <>
      <Header title="Tạo y lệnh" showBack />
      
      <main className="p-container-margin w-full space-y-lg pb-32">
        {/* Patient Info Card */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(25,118,210,0.05)] border border-surface-variant relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-[#d4e3ff] text-[#004786] px-3 py-1 rounded-lg font-label-caps text-[12px] uppercase">Bệnh nhân</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#e8f5e9] text-[#2e7d32] rounded-full font-label-caps text-[12px]">
              <span className="w-2 h-2 bg-[#2e7d32] rounded-full"></span>
              Đang điều trị
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-[32px] leading-tight font-bold text-on-surface mb-1">{patientObject.name}</h2>
            <p className="text-on-surface-variant font-body-md">Mã BN: <span className="font-semibold text-on-surface">{patientObject.id}</span></p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-variant/30">
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1 tracking-wider">Khoa</p>
              <p className="font-title-sm text-on-surface">{patientObject.department}</p>
            </div>
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1 tracking-wider">Phòng</p>
              <p className="font-title-sm text-on-surface">{patientObject.room}</p>
            </div>
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1 tracking-wider">Giường</p>
              <p className="font-title-sm text-on-surface">{patientObject.bed}</p>
            </div>
          </div>
        </section>

        {/* Fixed Section: Bác sĩ phụ trách */}
        <section className="bg-surface-container rounded-lg p-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-outline">badge</span>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Bác sĩ phụ trách</p>
              <p className="font-body-md text-body-md text-on-surface font-semibold">Dr. Smith (Chief Resident)</p>
            </div>
          </div>
        </section>

        {/* Order Form Form */}
        <form className="space-y-xl">
          {/* 1. Patient Position */}
          <fieldset className="space-y-sm">
            <legend className="font-title-sm text-title-sm text-on-surface border-b border-surface-variant w-full pb-xs mb-sm">1. Tư thế người bệnh</legend>
            <div className="grid grid-cols-1 gap-md">
              <label className="flex items-center gap-sm p-sm border border-outline-variant rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
                <input className="text-primary focus:ring-primary w-4 h-4" name="position" type="radio" value="low" />
                <span className="font-body-md text-body-md">Đầu thấp</span>
              </label>
              <label className="flex items-center gap-sm p-sm border border-outline-variant rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
                <input className="text-primary focus:ring-primary w-4 h-4" name="position" type="radio" value="30" />
                <span className="font-body-md text-body-md">Đầu cao 30 độ</span>
              </label>
              <label className="flex items-center gap-sm p-sm border border-outline-variant rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
                <input className="text-primary focus:ring-primary w-4 h-4" name="position" type="radio" value="45" />
                <span className="font-body-md text-body-md">Đầu cao 45 độ</span>
              </label>
            </div>
          </fieldset>

          {/* 2. Respiratory Support */}
          <fieldset className="space-y-sm">
            <legend className="font-title-sm text-title-sm text-on-surface border-b border-surface-variant w-full pb-xs mb-sm">2. Hỗ trợ hô hấp</legend>
            <div className="grid grid-cols-2 gap-md">
              <label className="flex items-center gap-sm">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="oxy" />
                <span className="font-body-md text-body-md">Thở oxy</span>
              </label>
              <label className="flex items-center gap-sm">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="ncpap" />
                <span className="font-body-md text-body-md">NCPAP</span>
              </label>
              <label className="flex items-center gap-sm">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="ventilator" />
                <span className="font-body-md text-body-md">Thở máy</span>
              </label>
              <label className="flex items-center gap-sm">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="other" />
                <span className="font-body-md text-body-md">Khác</span>
              </label>
            </div>
            <input className="w-full mt-2 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Ghi chú chi tiết hỗ trợ hô hấp..." type="text" />
          </fieldset>

          {/* 3. Medications */}
          <fieldset className="space-y-lg">
            <legend className="font-title-sm text-title-sm text-on-surface border-b border-surface-variant w-full pb-xs mb-sm">3. Thuốc điều trị</legend>
            {/* Legend for symbols */}
            <div className="flex flex-wrap gap-4 bg-surface-container-low p-sm rounded-lg mb-4">
              <span className="flex items-center gap-1 font-label-caps text-label-caps text-on-surface-variant"><span className="text-lg">○</span> Kháng sinh</span>
              <span className="flex items-center gap-1 font-label-caps text-label-caps text-on-surface-variant"><span className="text-lg">Δ</span> Kháng viêm</span>
              <span className="flex items-center gap-1 font-label-caps text-label-caps text-on-surface-variant"><span className="text-lg">□</span> An thần</span>
            </div>
            {/* Medication Sections grid */}
            <div className="grid grid-cols-1 gap-x-lg gap-y-md">
              <div className="space-y-sm">
                <label className="font-label-caps text-label-caps text-on-surface uppercase block">Truyền tĩnh mạch (IV Infusion)</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg">○</span>
                  <input className="w-full pl-10 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Nhập kháng sinh truyền TM..." type="text" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg">Δ</span>
                  <input className="w-full pl-10 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Nhập kháng viêm truyền TM..." type="text" />
                </div>
              </div>
              <div className="space-y-sm">
                <label className="font-label-caps text-label-caps text-on-surface uppercase block">Tiêm tĩnh mạch (IV Injection)</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg">□</span>
                  <input className="w-full pl-10 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Nhập an thần tiêm TM..." type="text" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg invisible">○</span>
                  <input className="w-full pl-10 rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Thuốc tiêm TM khác..." type="text" />
                </div>
              </div>
              <div className="space-y-sm">
                <label className="font-label-caps text-label-caps text-on-surface uppercase block">Đường uống (Oral)</label>
                <textarea className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Liệt kê thuốc uống..." rows={3}></textarea>
              </div>
              <div className="space-y-sm">
                <label className="font-label-caps text-label-caps text-on-surface uppercase block">Các đường khác (Khí dung, bôi...)</label>
                <textarea className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Liệt kê thuốc khí dung, bôi..." rows={3}></textarea>
              </div>
            </div>
          </fieldset>

          {/* 4. Nutrition & Care */}
          <fieldset className="space-y-sm">
            <legend className="font-title-sm text-title-sm text-on-surface border-b border-surface-variant w-full pb-xs mb-sm">4. Dinh dưỡng &amp; Chăm sóc</legend>
            <div className="grid grid-cols-1 gap-md">
              <div className="border border-outline-variant rounded-lg p-sm hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest">
                <label className="flex items-start gap-sm cursor-pointer w-full h-full">
                  <input className="mt-1 text-primary focus:ring-primary w-4 h-4" name="care_level" type="radio" value="1" />
                  <div>
                    <span className="font-title-sm text-title-sm block mb-1">Chăm sóc Cấp 1</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Theo dõi liên tục, hỗ trợ toàn diện.</span>
                  </div>
                </label>
              </div>
              <div className="border border-outline-variant rounded-lg p-sm hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest">
                <label className="flex items-start gap-sm cursor-pointer w-full h-full">
                  <input className="mt-1 text-primary focus:ring-primary w-4 h-4" name="care_level" type="radio" value="2" />
                  <div>
                    <span className="font-title-sm text-title-sm block mb-1">Chăm sóc Cấp 2</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Hỗ trợ một phần, theo dõi định kỳ.</span>
                  </div>
                </label>
              </div>
              <div className="border border-outline-variant rounded-lg p-sm hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest">
                <label className="flex items-start gap-sm cursor-pointer w-full h-full">
                  <input className="mt-1 text-primary focus:ring-primary w-4 h-4" name="care_level" type="radio" value="3" />
                  <div>
                    <span className="font-title-sm text-title-sm block mb-1">Chăm sóc Cấp 3</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Tự phục vụ, theo dõi cơ bản.</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-4 space-y-sm">
              <label className="font-label-caps text-label-caps text-on-surface uppercase block">Chế độ dinh dưỡng / Tần suất theo dõi</label>
              <textarea className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm p-3" placeholder="Ghi chú dinh dưỡng và tần suất..." rows={2}></textarea>
            </div>
          </fieldset>

          {/* Submit Action */}
          <div className="pt-lg border-t border-surface-variant flex justify-end gap-md">
            <button className="px-6 py-2 rounded-lg font-title-sm text-title-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors" type="button" onClick={() => navigate(-1)}>
              Hủy
            </button>
            <button className="px-6 py-2 rounded-lg font-title-sm text-title-sm text-on-primary bg-primary hover:bg-primary/90 transition-colors shadow-md" type="button" onClick={() => navigate(-1)}>
              Lưu y lệnh
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
