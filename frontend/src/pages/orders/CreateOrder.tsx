import { useNavigate } from 'react-router-dom';

export function CreateOrder() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest border-b border-surface-variant shadow-sm md:pl-[280px]">
        <div className="flex items-center gap-4 w-full">
          <button 
            onClick={() => navigate(-1)}
            className="text-primary hover:bg-primary-fixed-dim p-2 rounded-full transition-colors active:scale-95 cursor-pointer border-none bg-transparent"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-on-surface flex-grow text-center pr-12">Tạo y lệnh</h1>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="p-6 pt-24 max-w-4xl mx-auto space-y-6">
        
        {/* Patient Info Card */}
        <section className="bg-surface-container-lowest rounded p-6 shadow-sm border border-surface-variant relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded font-label-caps uppercase">Bệnh nhân</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#e8f5e9] text-[#2e7d32] rounded-full font-label-caps">
              <span className="w-2 h-2 bg-[#2e7d32] rounded-full"></span>
              Đang điều trị
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-[32px] leading-tight font-bold text-on-surface mb-1">Nguyễn Văn A</h2>
            <p className="text-on-surface-variant font-body-md">Mã BN: <span className="font-semibold text-on-surface">P-98214</span></p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-variant/30">
            <div>
              <p className="font-label-caps text-on-surface-variant uppercase mb-1 tracking-wider">Khoa</p>
              <p className="font-title-sm text-on-surface">Nội Tổng Hợp</p>
            </div>
            <div>
              <p className="font-label-caps text-on-surface-variant uppercase mb-1 tracking-wider">Phòng</p>
              <p className="font-title-sm text-on-surface">402</p>
            </div>
            <div>
              <p className="font-label-caps text-on-surface-variant uppercase mb-1 tracking-wider">Giường</p>
              <p className="font-title-sm text-on-surface">B-12</p>
            </div>
          </div>
        </section>

        {/* Fixed Section: Bác sĩ phụ trách */}
        <section className="bg-surface-container rounded p-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-outline">badge</span>
            <div>
              <p className="font-label-caps text-on-surface-variant uppercase">Bác sĩ phụ trách</p>
              <p className="font-body-md text-on-surface font-semibold">Dr. Smith (Chief Resident)</p>
            </div>
          </div>
        </section>

        {/* Order Form Form */}
        <form className="space-y-8">
          
          {/* 1. Patient Position */}
          <fieldset className="space-y-2">
            <legend className="font-title-sm text-on-surface border-b border-surface-variant w-full pb-1 mb-2">1. Tư thế người bệnh</legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex items-center gap-2 p-2 border border-outline-variant rounded hover:bg-surface-container-low cursor-pointer transition-colors">
                <input className="text-primary focus:ring-primary w-4 h-4" name="position" type="radio" value="low"/>
                <span className="font-body-md">Đầu thấp</span>
              </label>
              <label className="flex items-center gap-2 p-2 border border-outline-variant rounded hover:bg-surface-container-low cursor-pointer transition-colors">
                <input className="text-primary focus:ring-primary w-4 h-4" name="position" type="radio" value="30"/>
                <span className="font-body-md">Đầu cao 30 độ</span>
              </label>
              <label className="flex items-center gap-2 p-2 border border-outline-variant rounded hover:bg-surface-container-low cursor-pointer transition-colors">
                <input className="text-primary focus:ring-primary w-4 h-4" name="position" type="radio" value="45"/>
                <span className="font-body-md">Đầu cao 45 độ</span>
              </label>
            </div>
          </fieldset>

          {/* 2. Respiratory Support */}
          <fieldset className="space-y-2">
            <legend className="font-title-sm text-on-surface border-b border-surface-variant w-full pb-1 mb-2">2. Hỗ trợ hô hấp</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <label className="flex items-center gap-2">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="oxy"/>
                <span className="font-body-md">Thở oxy</span>
              </label>
              <label className="flex items-center gap-2">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="ncpap"/>
                <span className="font-body-md">NCPAP</span>
              </label>
              <label className="flex items-center gap-2">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="ventilator"/>
                <span className="font-body-md">Thở máy</span>
              </label>
              <label className="flex items-center gap-2">
                <input className="rounded text-primary focus:ring-primary w-4 h-4" name="resp_support" type="checkbox" value="other"/>
                <span className="font-body-md">Khác</span>
              </label>
            </div>
            <input 
              className="w-full mt-2 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" 
              placeholder="Ghi chú chi tiết hỗ trợ hô hấp..." 
              type="text"
            />
          </fieldset>

          {/* 3. Medications */}
          <fieldset className="space-y-6">
            <legend className="font-title-sm text-on-surface border-b border-surface-variant w-full pb-1 mb-2">3. Thuốc điều trị</legend>
            
            {/* Legend for symbols */}
            <div className="flex flex-wrap gap-4 bg-surface-container-low p-2 rounded mb-4">
              <span className="flex items-center gap-1 font-label-caps text-on-surface-variant"><span className="text-lg">○</span> Kháng sinh</span>
              <span className="flex items-center gap-1 font-label-caps text-on-surface-variant"><span className="text-lg">Δ</span> Kháng viêm</span>
              <span className="flex items-center gap-1 font-label-caps text-on-surface-variant"><span className="text-lg">□</span> An thần</span>
            </div>
            
            {/* Medication Sections grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface uppercase block">Truyền tĩnh mạch (IV Infusion)</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg">○</span>
                  <input className="w-full pl-10 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" placeholder="Nhập kháng sinh truyền TM..." type="text"/>
                </div>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg">Δ</span>
                  <input className="w-full pl-10 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" placeholder="Nhập kháng viêm truyền TM..." type="text"/>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface uppercase block">Tiêm tĩnh mạch (IV Injection)</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg">□</span>
                  <input className="w-full pl-10 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" placeholder="Nhập an thần tiêm TM..." type="text"/>
                </div>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-3 text-on-surface-variant text-lg invisible">○</span>
                  <input className="w-full pl-10 rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" placeholder="Thuốc tiêm TM khác..." type="text"/>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface uppercase block">Đường uống (Oral)</label>
                <textarea className="w-full rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" placeholder="Liệt kê thuốc uống..." rows={3}></textarea>
              </div>
              
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface uppercase block">Các đường khác (Khí dung, bôi...)</label>
                <textarea className="w-full rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" placeholder="Liệt kê thuốc khí dung, bôi..." rows={3}></textarea>
              </div>
            </div>
          </fieldset>

          {/* 4. Nutrition & Care */}
          <fieldset className="space-y-2">
            <legend className="font-title-sm text-on-surface border-b border-surface-variant w-full pb-1 mb-2">4. Dinh dưỡng & Chăm sóc</legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-outline-variant rounded p-2 hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest">
                <label className="flex items-start gap-2 cursor-pointer w-full h-full">
                  <input className="mt-1 text-primary focus:ring-primary w-4 h-4" name="care_level" type="radio" value="1"/>
                  <div>
                    <span className="font-title-sm block mb-1">Chăm sóc Cấp 1</span>
                    <span className="font-body-sm text-on-surface-variant">Theo dõi liên tục, hỗ trợ toàn diện.</span>
                  </div>
                </label>
              </div>
              <div className="border border-outline-variant rounded p-2 hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest">
                <label className="flex items-start gap-2 cursor-pointer w-full h-full">
                  <input className="mt-1 text-primary focus:ring-primary w-4 h-4" name="care_level" type="radio" value="2"/>
                  <div>
                    <span className="font-title-sm block mb-1">Chăm sóc Cấp 2</span>
                    <span className="font-body-sm text-on-surface-variant">Hỗ trợ một phần, theo dõi định kỳ.</span>
                  </div>
                </label>
              </div>
              <div className="border border-outline-variant rounded p-2 hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest">
                <label className="flex items-start gap-2 cursor-pointer w-full h-full">
                  <input className="mt-1 text-primary focus:ring-primary w-4 h-4" name="care_level" type="radio" value="3"/>
                  <div>
                    <span className="font-title-sm block mb-1">Chăm sóc Cấp 3</span>
                    <span className="font-body-sm text-on-surface-variant">Tự phục vụ, theo dõi cơ bản.</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <label className="font-label-caps text-on-surface uppercase block">Chế độ dinh dưỡng / Tần suất theo dõi</label>
              <textarea className="w-full rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-body-sm p-3 bg-surface-container-lowest outline-none" placeholder="Ghi chú dinh dưỡng và tần suất..." rows={2}></textarea>
            </div>
          </fieldset>

          {/* Submit Action */}
          <div className="pt-6 border-t border-surface-variant flex justify-end gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded font-title-sm text-primary bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer border-none" 
              type="button"
            >
              Hủy
            </button>
            <button 
              className="px-6 py-2 rounded font-title-sm text-on-primary bg-primary hover:bg-primary/90 transition-colors shadow-md cursor-pointer border-none" 
              type="button"
            >
              Lưu y lệnh
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
