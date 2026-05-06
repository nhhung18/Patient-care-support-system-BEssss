import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';

export function TransferPatient() {
  const navigate = useNavigate();
  const { patientObject } = useClinicalContext();

  if (!patientObject) return null;

  return (
    <>
      <Header title="Bàn giao chuyển khoa" showBack />
      
      <div className="w-full px-container-margin mt-4 flex flex-col gap-gutter pb-32">
        {/* Left Column: Patient & Status (7 cols) */}
        <div className="flex flex-col gap-lg">
          {/* 1. Admin & Transfer Info */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] p-md">
            <h2 className="font-title-sm text-title-sm text-on-surface mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">patient_list</span>
              Thông tin Hành chính & Chuyển khoa
            </h2>
            <div className="h-px bg-surface-variant w-full mb-md"></div>
            <div className="grid grid-cols-1 gap-md">
              
              {/* Patient Info Auto-fill */}
              <div className="bg-surface-container-low rounded-lg p-sm flex items-center gap-md border border-surface-variant">
                <div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-title-sm text-title-sm">
                  {patientObject.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                </div>
                <div>
                  <p className="font-title-sm text-title-sm text-on-surface">{patientObject.name}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">ID: {patientObject.id} • {patientObject.age} tuổi • {patientObject.gender}</p>
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Khoa chuyển đi</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface-variant focus:outline-none cursor-not-allowed" 
                  readOnly 
                  type="text" 
                  value={`${patientObject.department}`}
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Khoa nhận</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                  <option>Hồi sức tích cực (ICU)</option>
                  <option>Nội Tim Mạch</option>
                  <option>Ngoại Tổng Hợp</option>
                </select>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Bác sĩ bàn giao</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface-variant focus:outline-none cursor-not-allowed" 
                  readOnly 
                  type="text" 
                  value="BS. Trần Hữu Khang" 
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Thời gian dự kiến</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                  type="datetime-local" 
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Lý do chuyển khoa</label>
                <textarea 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                  placeholder="Nhập lý do cụ thể..." 
                  rows={2}
                ></textarea>
              </div>
            </div>
          </section>

          {/* 2. Patient Status */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] p-md">
            <div className="flex items-center justify-between mb-sm">
              <h2 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">monitor_heart</span>
                Tình trạng Bệnh nhân
              </h2>
              <span className="px-2 py-1 bg-surface-container-highest text-on-surface rounded font-label-caps text-label-caps">Bắt buộc</span>
            </div>
            <div className="h-px bg-surface-variant w-full mb-md"></div>
            
            <div className="space-y-md">
              {/* Triage/Stability */}
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Đánh giá chung</p>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input defaultChecked className="text-primary focus:ring-primary h-5 w-5 border-outline-variant" name="stability" type="radio" />
                    <span className="font-body-md text-body-md text-on-surface">Ổn định</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input className="text-error focus:ring-error h-5 w-5 border-outline-variant" name="stability" type="radio" />
                    <span className="font-body-md text-body-md text-on-surface">Nguy kịch / Cần theo dõi sát</span>
                  </label>
                </div>
              </div>

              {/* Vitals */}
              <div className="bg-surface-container-low rounded-lg p-sm border border-surface-variant grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Mạch (l/p)</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-2 py-1 font-body-md text-body-md text-on-surface focus:border-primary" placeholder="80" type="number" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">HA (mmHg)</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-2 py-1 font-body-md text-body-md text-on-surface focus:border-primary" placeholder="120/80" type="text" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">SpO2 (%)</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-2 py-1 font-body-md text-body-md text-on-surface focus:border-primary" placeholder="98" type="number" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Nhiệt độ (°C)</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-2 py-1 font-body-md text-body-md text-on-surface focus:border-primary" placeholder="37.0" step="0.1" type="number" />
                </div>
              </div>

              {/* Consciousness */}
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Tri giác (Glasgow / AVPU)</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                  <option>Tỉnh táo, tiếp xúc tốt (GCS 15)</option>
                  <option>Lơ mơ, đáp ứng chậm</option>
                  <option>Hôn mê</option>
                  <option>Kích thích, vật vã</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Checklists (5 cols) */}
        <div className="flex flex-col gap-lg">
          {/* 3. Equipment & Tubes */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] p-md border-t-4 border-primary">
            <h2 className="font-title-sm text-title-sm text-on-surface mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">fluid</span>
              Thiết bị & Đường truyền
            </h2>
            <div className="h-px bg-surface-variant w-full mb-sm"></div>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-surface-variant">
                <input className="mt-1 text-primary focus:ring-primary h-5 w-5 rounded border-outline-variant" type="checkbox" />
                <div>
                  <p className="font-body-md text-body-md text-on-surface font-medium">Đường truyền tĩnh mạch (IV)</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Ghi chú vị trí, tình trạng dịch truyền.</p>
                </div>
              </label>
              <label className="flex items-start gap-3 p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-surface-variant">
                <input className="mt-1 text-primary focus:ring-primary h-5 w-5 rounded border-outline-variant" type="checkbox" />
                <div>
                  <p className="font-body-md text-body-md text-on-surface font-medium">Sonde tiểu (Catheter)</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Số lượng, màu sắc nước tiểu.</p>
                </div>
              </label>
              <label className="flex items-start gap-3 p-2 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-surface-variant">
                <input className="mt-1 text-primary focus:ring-primary h-5 w-5 rounded border-outline-variant" type="checkbox" />
                <div>
                  <p className="font-body-md text-body-md text-on-surface font-medium">Hỗ trợ hô hấp</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Oxy mũi, Mask, Thở máy.</p>
                </div>
              </label>
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:border-primary text-sm mt-2" placeholder="Ghi chú thêm thiết bị..." rows={2}></textarea>
            </div>
          </section>

          {/* 4. Care & Mobility */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] p-md">
            <h2 className="font-title-sm text-title-sm text-on-surface mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">accessible</span>
              Chăm sóc & Vận động
            </h2>
            <div className="h-px bg-surface-variant w-full mb-md"></div>
            <div className="space-y-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Tình trạng da / Vết loét</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:border-primary">
                  <option>Da nguyên vẹn</option>
                  <option>Có nguy cơ loét</option>
                  <option>Đã có vết loét tì đè</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Dinh dưỡng</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:border-primary">
                  <option>Đường miệng (Bình thường)</option>
                  <option>Qua Sonde dạ dày</option>
                  <option>Tĩnh mạch hoàn toàn</option>
                </select>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Hình thức di chuyển</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 border border-primary text-primary bg-primary-fixed-dim/20 rounded-lg font-body-sm text-body-sm text-center" type="button">Băng ca / Giường</button>
                  <button className="flex-1 py-2 px-3 border border-outline-variant text-on-surface bg-surface rounded-lg font-body-sm text-body-sm text-center hover:bg-surface-container-high transition-colors" type="button">Xe lăn</button>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Documents & Medications */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(25,118,210,0.08)] p-md">
            <h2 className="font-title-sm text-title-sm text-on-surface mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">folder_open</span>
              Hồ sơ & Thuốc mang theo
            </h2>
            <div className="h-px bg-surface-variant w-full mb-sm"></div>
            <div className="grid grid-cols-1 gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input defaultChecked className="text-primary focus:ring-primary h-5 w-5 rounded border-outline-variant" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">Bệnh án giấy</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input defaultChecked className="text-primary focus:ring-primary h-5 w-5 rounded border-outline-variant" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">Phim X-Quang/MRI</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="text-primary focus:ring-primary h-5 w-5 rounded border-outline-variant" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">Kết quả XN máu</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="text-primary focus:ring-primary h-5 w-5 rounded border-outline-variant" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface">Thuốc đang dùng</span>
              </label>
            </div>
          </section>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t border-surface-variant p-md flex items-center justify-end gap-md shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-lg font-title-sm text-title-sm text-primary border border-primary hover:bg-primary/5 transition-colors"
        >
            Hủy
        </button>
        <button 
          onClick={() => navigate(-1)}
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-title-sm text-title-sm shadow-sm hover:opacity-90 transition-opacity"
        >
            Lưu bàn giao
        </button>
      </footer>
    </>
  );
}
