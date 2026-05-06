import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';

export function IVHistory() {
  const { patientObject } = useClinicalContext();

  if (!patientObject) return null;

  return (
    <>
      <Header title="Lịch sử truyền dịch" showBack />
      
      <main className="w-full px-container-margin pb-32">
        {/* Patient Info Header */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(25,118,210,0.05)] border border-surface-variant relative overflow-hidden mb-8 w-full">
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

        <div className="w-full">
          {/* Search & Filter Bar */}
          <section className="mb-lg">
            <div className="flex flex-col gap-4 items-center">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-body-md" placeholder="Tìm kiếm dịch truyền..." type="text" />
              </div>
              <div className="flex gap-2 w-full overflow-x-auto hide-scrollbar">
                <button className="flex items-center gap-2 px-4 py-3 bg-white border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors whitespace-nowrap">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  <span className="font-body-sm">Ngày</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-3 bg-white border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors whitespace-nowrap">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  <span className="font-body-sm">Trạng thái</span>
                </button>
              </div>
            </div>
          </section>

          {/* Timeline / Infusion History List */}
          <section className="space-y-4">
            {/* Infusion Record 1: Infusing */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-md shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-l-4 border-l-primary relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse"></span>
                  Đang truyền
                </span>
              </div>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <span className="font-label-caps text-label-caps text-outline uppercase mb-1 block">Hôm nay, 14:30</span>
                  <h3 className="font-title-sm text-title-sm text-primary mb-2">Glucose 5% 500ml</h3>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-outline">Tốc độ</span>
                      <span className="font-body-md font-semibold text-on-surface">30 giọt/phút</span>
                    </div>
                    <div className="h-8 w-[1px] bg-outline-variant"></div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-outline">Thể tích</span>
                      <span className="font-body-md font-semibold text-on-surface">500 ml</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-[20px]">schedule</span>
                      <div>
                        <p className="font-label-caps text-label-caps text-outline">Bắt đầu - Kết thúc (Dự kiến)</p>
                        <p className="font-body-sm text-on-surface">14:30 - 18:30</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-[20px]">person</span>
                      <div>
                        <p className="font-label-caps text-label-caps text-outline">Bác sĩ chỉ định</p>
                        <p className="font-body-sm text-on-surface">BS. Nguyễn Tiến Dũng</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3">
                    <img alt="Nurse" className="w-10 h-10 rounded-lg object-cover" data-alt="Close up portrait of a dedicated healthcare nurse in professional uniform, with a warm and attentive expression. The lighting is bright and soft, highlighting the clean medical environment. The overall aesthetic is calm, professional, and compassionate, utilizing a soft blue and white color palette consistent with clinical excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZRtanayoYGDmgUI6nvXh7ZrVeMkntfZHdp2SsYQkgXoadOEtJBGFiAEPbiBvv5oWm42ybdNpq5EGX0SKIN1XHzbP5JU3I2ayQaZxAtNddMPqtI2BkQq8gcZfrkEMkI9UHYoi9iWjikfZZz72bNortnPUTaUGFgWdwS4kU6n1nELaT4YibrIKMUyv5haiT60MwbkeqanJX5iWUojsiNtLiop3dS-UZtAF23-au40LMo-m30Y1CeVGdAJv0dEmR268dMXbjEJUIiq4" />
                    <div>
                      <p className="font-label-caps text-label-caps text-outline">Điều dưỡng thực hiện</p>
                      <p className="font-body-sm text-on-surface">ĐD. Lê Thị Thanh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infusion Record 2: Completed */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-md shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-100 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  Đã hoàn thành
                </span>
              </div>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <span className="font-label-caps text-label-caps text-outline uppercase mb-1 block">Hôm qua, 08:15</span>
                  <h3 className="font-title-sm text-title-sm text-on-surface mb-2">Natri Clorid 0.9% 1000ml</h3>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-outline">Tốc độ</span>
                      <span className="font-body-md font-semibold text-on-surface">40 giọt/phút</span>
                    </div>
                    <div className="h-8 w-[1px] bg-outline-variant"></div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-outline">Thể tích</span>
                      <span className="font-body-md font-semibold text-on-surface">1000 ml</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-[20px]">schedule</span>
                      <div>
                        <p className="font-label-caps text-label-caps text-outline">Thời gian thực tế</p>
                        <p className="font-body-sm text-on-surface">08:15 - 13:45</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-[20px]">person</span>
                      <div>
                        <p className="font-label-caps text-label-caps text-outline">Bác sĩ chỉ định</p>
                        <p className="font-body-sm text-on-surface">BS. Trần Hoàng Nam</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3">
                    <img alt="Nurse" className="w-10 h-10 rounded-lg object-cover grayscale opacity-80" data-alt="A focused medical nurse in a bright, modern clinic performing professional duties. High-key lighting fills the space, creating a clean and empathetic atmosphere. The colors are dominated by clinical whites and soft blues, with a professional aesthetic that conveys trust and precision in patient care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ22O6kA6OZKVvXsncEuavTAkT1ntpOKxffuBZU9RPLSPpDV1fCpSY5DYUO72kbQoUTk5aZ_9cwMgwmXGQU04l7fzJQMuW5MVC28ppZoNdnoGCX_28lt3p7KXyVEQ0RUkYSvf6k5Ieoff8V85HiWU3vBfcwDWvKtAg7iTJtNOz1nb5M8gxr0qwx3lcWNTeDuNoBmdne1du-f9Lj6aFzAo6SLuWgLR6dDzud2O1RVIl6JAV9giAOKgZjvWJG-gZZfzskVJTKIFQt0Q" />
                    <div>
                      <p className="font-label-caps text-label-caps text-outline">Điều dưỡng thực hiện</p>
                      <p className="font-body-sm text-on-surface">ĐD. Phạm Minh Anh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infusion Record 3: Cancelled */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-md shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-100 relative opacity-70">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">cancel</span>
                  Đã hủy
                </span>
              </div>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <span className="font-label-caps text-label-caps text-outline uppercase mb-1 block">15/10/2023, 20:00</span>
                  <h3 className="font-title-sm text-title-sm text-on-surface mb-2">Ringer Lactate 500ml</h3>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-outline">Tốc độ</span>
                      <span className="font-body-md font-semibold text-on-surface">30 giọt/phút</span>
                    </div>
                    <div className="h-8 w-[1px] bg-outline-variant"></div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-outline">Thể tích</span>
                      <span className="font-body-md font-semibold text-on-surface">500 ml</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 text-[20px]">info</span>
                      <div>
                        <p className="font-label-caps text-label-caps text-red-600">Lý do hủy</p>
                        <p className="font-body-sm text-on-surface italic">Phản ứng nhẹ (phát ban), chuyển đổi phương án điều trị</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-outline text-[20px]">person</span>
                      <div>
                        <p className="font-label-caps text-label-caps text-outline">Bác sĩ chỉ định hủy</p>
                        <p className="font-body-sm text-on-surface">BS. Nguyễn Tiến Dũng</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3">
                    <img alt="Nurse" className="w-10 h-10 rounded-lg object-cover grayscale opacity-40" data-alt="A clinical portrait of a nurse in a medical setting, lit with soft daylight. The environment is clean and sterile, following a modern corporate healthcare aesthetic with high-key lighting and a soft-minimalist approach. The color palette centers around shades of blue and white, reflecting professional competence and a calm atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1N_oO2VfUdGtl7kQ43xC7_99CwOZIEyqsEU4u-MI_Ox1E0YK_zB5IFcAHpnZ9RuXGPe0QZQz197VvhTeGLH3kXopDljLYC7eqDrX4NvlMJxxemnsOqJERUyzSqepgcDxIUe8-hZ3Bv3FdoCg1qZmEY7rp-eqQciVHuw1LrQS2Y0cxbwhFiapDP8_amEW3f4LEnnttCeLCymXESmXAjDzm2rUzpdYtATSlZyjxuMfkiwz64FXyRkbCJrFRk7K70ujL2v1dEeWXLiI" />
                    <div>
                      <p className="font-label-caps text-label-caps text-outline">Điều dưỡng phụ trách</p>
                      <p className="font-body-sm text-on-surface">ĐD. Lê Thị Thanh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Background Decor for Clinical Ambience */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full -mr-64 -mt-64 blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50/30 rounded-full -ml-32 -mb-32 blur-3xl -z-10 pointer-events-none"></div>
    </>
  );
}
