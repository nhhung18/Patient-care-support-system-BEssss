import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';

export function MedicalRecord() {
  const { patientObject } = useClinicalContext();

  if (!patientObject) return null;

  return (
    <div className="bg-surface min-h-screen text-on-surface font-body-md flex flex-col">
      <Header title="Hồ sơ bệnh án" showBack />
      <main className="flex-1 w-full p-container-margin flex flex-col gap-lg pb-32">
        {/* Patient Profile Header */}
        <section className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(25,118,210,0.08)] flex flex-col gap-lg items-start border border-outline-variant/30">
          <div className="relative">
            <img 
              alt="Patient Avatar" 
              className="w-24 h-24 rounded-full object-cover border-4 border-surface" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaDwbdacL9BzWlPZPJHAkVbZIcNagMpc_rQzA-OnZw8EaZ47m1lhkPG4Lr5-lSMC6lKMpqmUqrR8eJM4oP-A-zIOTfAxp-DseJrYxFjIPwt4OthrrxOnWoDsq3qQ0ZRCGfPZcgYjCUOTUmdRnBftDyOzW0oWd1bKNIY1pe4IDJ2Q2shWLeUUMEuUMjjuzAK-ILbD2hAdFYKnJQBhb5aMV78HS7mI5eh2IdPz1ulMmVydRHH-GAJ0FSp94buBvHqjsyUBR6qGRgA-Y"
            />
            <div className="absolute bottom-0 right-0 bg-primary-container text-on-primary-container rounded-full p-xs border-2 border-surface-container-lowest">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-xs">
            <div className="flex items-center gap-sm flex-wrap">
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">{patientObject.name}</h2>
              <span className="bg-primary-fixed-dim/20 text-on-primary-fixed-variant px-sm py-xs rounded-full font-label-caps text-label-caps flex items-center gap-xs">
                <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                Ổn định
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-sm flex-wrap">
              <span>ID: {patientObject.id}</span> • 
              <span>Nữ</span> • 
              <span>{patientObject.age} Tuổi</span>
            </p>
          </div>
          <div className="flex flex-col gap-sm min-w-[200px] border-t border-outline-variant/50 pt-md w-full">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-outline">bloodtype</span>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Nhóm máu</p>
                <p className="font-title-sm text-title-sm text-on-surface font-bold">O+</p>
              </div>
            </div>
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-error">warning</span>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Dị ứng</p>
                <p className="font-body-sm text-body-sm text-error font-bold">Penicillin, Lạc</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bento Grid Layout for Details */}
        <div className="grid grid-cols-1 gap-lg">
          {/* Personal Information */}
          <section className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-outline-variant/30 flex flex-col gap-md h-fit">
            <div className="flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
              <span className="material-symbols-outlined text-primary">person</span>
              <h3 className="font-title-sm text-title-sm text-on-surface font-bold tracking-tight">Thông tin cá nhân</h3>
            </div>
            <div className="flex flex-col gap-sm mt-sm">
              <div className="flex justify-between items-center py-sm border-b border-outline-variant/20">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Ngày sinh</span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">12/05/1955</span>
              </div>
              <div className="flex justify-between items-center py-sm border-b border-outline-variant/20">
                <span className="font-body-sm text-body-sm text-on-surface-variant">CCCD</span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">001155123456</span>
              </div>
              <div className="flex justify-between items-center py-sm border-b border-outline-variant/20">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Số điện thoại</span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">0901 234 567</span>
              </div>
              <div className="flex flex-col gap-xs py-sm border-b border-outline-variant/20">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Địa chỉ thường trú</span>
                <span className="font-body-sm text-body-sm text-on-surface">123 Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex flex-col gap-xs py-sm">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Liên hệ khẩn cấp</span>
                <div className="flex items-center gap-sm bg-surface-container-low p-sm rounded-lg mt-xs">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined">family_restroom</span>
                  </div>
                  <div>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">Nguyễn Văn Bình (Con trai)</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">0988 765 432</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* History & Diagnoses */}
          <div className="flex flex-col gap-lg">
            {/* Admission History */}
            <section className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-outline-variant/30 flex flex-col gap-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">local_hospital</span>
                  <h3 className="font-title-sm text-title-sm text-on-surface font-bold tracking-tight">Lịch sử nhập viện</h3>
                </div>
              </div>
              <div className="relative pl-lg border-l-2 border-surface-container-high ml-sm mt-sm flex flex-col gap-md">
                {/* Record 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest"></div>
                  <div className="bg-surface-container-low rounded-lg p-md border border-outline-variant/20 hover:bg-surface-container transition-colors">
                    <div className="flex justify-between items-start mb-sm flex-wrap gap-sm">
                      <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Khoa Tim Mạch - Bệnh viện Trung Ương</h4>
                      <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-highest px-sm py-xs rounded-full">15/08/2023 - 22/08/2023</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs"><strong className="text-on-surface">Lý do:</strong> Đau thắt ngực, khó thở nhẹ về đêm.</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Bác sĩ phụ trách:</strong> TS.BS Lê Hoàng Nam</p>
                  </div>
                </div>
                {/* Record 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-surface-variant border-4 border-surface-container-lowest"></div>
                  <div className="bg-surface-container-low rounded-lg p-md border border-outline-variant/20 hover:bg-surface-container transition-colors">
                    <div className="flex justify-between items-start mb-sm flex-wrap gap-sm">
                      <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Khoa Nội Tiết - Bệnh viện Đa Khoa</h4>
                      <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-highest px-sm py-xs rounded-full">10/02/2022 - 14/02/2022</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs"><strong className="text-on-surface">Lý do:</strong> Kiểm tra định kỳ đái tháo đường tuýp 2, điều chỉnh liều insulin.</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Bác sĩ phụ trách:</strong> ThS.BS Trần Thị Hương</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Diagnosis History */}
            <section className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-outline-variant/30 flex flex-col gap-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">stethoscope</span>
                  <h3 className="font-title-sm text-title-sm text-on-surface font-bold tracking-tight">Chẩn đoán &amp; Tình trạng</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-md mt-sm">
                <div className="bg-error-container/30 border border-error/20 p-md rounded-lg flex flex-col gap-sm">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-error">favorite</span>
                    <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Thiếu máu cục bộ cơ tim</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Chẩn đoán từ 2021. Đang điều trị nội khoa, tình trạng hiện tại ổn định. Cần theo dõi huyết áp hàng ngày.</p>
                </div>
                <div className="bg-tertiary-container/10 border border-tertiary/20 p-md rounded-lg flex flex-col gap-sm">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-tertiary">water_drop</span>
                    <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Đái tháo đường Tuýp 2</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Chẩn đoán từ 2018. Kiểm soát tốt bằng chế độ ăn và Metformin 500mg x2/ngày. HbA1c gần nhất: 6.8%.</p>
                </div>
                <div className="bg-surface-container p-md rounded-lg flex flex-col gap-sm">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary">pill</span>
                    <h4 className="font-title-sm text-title-sm text-on-surface font-bold">Đơn thuốc hiện tại (Đang sử dụng)</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-xs mt-xs">
                    <div className="flex items-center gap-sm p-sm bg-surface-container-lowest rounded border border-outline-variant/20">
                      <span className="material-symbols-outlined text-outline text-[18px]">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Aspirin 81mg (1 viên/ngày, sáng)</span>
                    </div>
                    <div className="flex items-center gap-sm p-sm bg-surface-container-lowest rounded border border-outline-variant/20">
                      <span className="material-symbols-outlined text-outline text-[18px]">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Atorvastatin 20mg (1 viên/ngày, tối)</span>
                    </div>
                    <div className="flex items-center gap-sm p-sm bg-surface-container-lowest rounded border border-outline-variant/20">
                      <span className="material-symbols-outlined text-outline text-[18px]">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Metformin 500mg (2 viên/ngày, sau ăn)</span>
                    </div>
                    <div className="flex items-center gap-sm p-sm bg-surface-container-lowest rounded border border-outline-variant/20">
                      <span className="material-symbols-outlined text-outline text-[18px]">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Amlodipine 5mg (1 viên/ngày, sáng)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
