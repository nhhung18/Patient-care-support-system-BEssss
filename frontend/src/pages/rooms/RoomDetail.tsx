import { useNavigate } from 'react-router-dom';

export function RoomDetail() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Navigation Header Override for RoomDetail
          In a real app, this might be handled via a Portal to the TopAppBar
          or by hiding the global TopAppBar on this route and showing this one.
          For now, we render it locally and it will overlay or sit below depending on layout.
          Let's just show the content since the global MainLayout already provides TopAppBar.
          We will add a local sub-header to compensate.
      */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <div className="flex flex-col">
          <h1 className="font-headline-md text-primary">Phòng Hồi sức 101</h1>
          <p className="font-label-caps text-secondary uppercase">Khu vực A - Tầng 1</p>
        </div>
      </div>

      {/* Room Statistics Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-primary-container/10 p-4 rounded border border-primary-fixed-dim">
          <p className="font-label-caps text-primary">TỔNG SỐ GIƯỜNG</p>
          <p className="font-display-lg text-primary">12</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded border border-emerald-100">
          <p className="font-label-caps text-emerald-700">HIỆN CÓ</p>
          <p className="font-display-lg text-emerald-700">04</p>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-100">
          <p className="font-label-caps text-blue-700">ĐANG SỬ DỤNG</p>
          <p className="font-display-lg text-blue-700">08</p>
        </div>
        <div className="bg-orange-50 p-4 rounded border border-orange-100">
          <p className="font-label-caps text-orange-700">CHỜ VỆ SINH</p>
          <p className="font-display-lg text-orange-700">01</p>
        </div>
      </section>

      {/* Bed Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        
        {/* Occupied Bed Card 1 */}
        <div 
          onClick={() => navigate('/patients/1')}
          className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer relative group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-primary-fixed-dim flex items-center justify-center text-primary font-bold text-xl">01</div>
              <div>
                <h3 className="font-title-sm text-on-surface">Trần Văn Hoàng</h3>
                <p className="text-body-sm text-secondary">ID: BN-99281</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">Đang điều trị</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">medical_information</span>
              <span>Chẩn đoán: Suy hô hấp cấp</span>
            </div>
            <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
              <span>Nhập viện: 14:30 - 22/10</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-surface-container-lowest flex items-center justify-center text-[10px] text-blue-700 font-bold">BS</div>
              <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-surface-container-lowest flex items-center justify-center text-[10px] text-emerald-700 font-bold">ĐD</div>
            </div>
            <button className="text-primary font-label-caps text-xs flex items-center gap-1 group-hover:underline cursor-pointer border-none bg-transparent">
              CHI TIẾT <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Empty Bed Card 1 */}
        <div className="bg-surface-container-low p-lg rounded border border-dashed border-outline-variant hover:bg-surface-container-lowest hover:border-solid hover:border-primary transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-outline font-bold text-xl group-hover:bg-primary-fixed-dim group-hover:text-primary transition-colors">02</div>
              <div>
                <h3 className="font-title-sm text-outline group-hover:text-on-surface transition-colors">Giường trống</h3>
                <p className="text-body-sm text-outline">Sẵn sàng tiếp nhận</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold rounded uppercase tracking-wider">Trống</span>
          </div>
          <div className="flex flex-col items-center justify-center py-6 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary">add_circle</span>
            <p className="mt-2 text-xs font-label-caps text-outline group-hover:text-primary">XẾP BỆNH NHÂN MỚI</p>
          </div>
        </div>

        {/* Occupied Bed Card 2 */}
        <div 
          onClick={() => navigate('/patients/2')}
          className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer relative group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-primary-fixed-dim flex items-center justify-center text-primary font-bold text-xl">03</div>
              <div>
                <h3 className="font-title-sm text-on-surface">Lê Thị Mai</h3>
                <p className="text-body-sm text-secondary">ID: BN-88123</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">Đang điều trị</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">medical_information</span>
              <span>Chẩn đoán: Hồi sức sau phẫu thuật</span>
            </div>
            <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
              <span>Nhập viện: 08:15 - 23/10</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-error text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>emergency</span>
              <span className="text-xs text-error font-bold">Theo dõi đặc biệt</span>
            </div>
            <button className="text-primary font-label-caps text-xs flex items-center gap-1 group-hover:underline cursor-pointer border-none bg-transparent">
              CHI TIẾT <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Occupied Bed Card 3 */}
        <div 
          onClick={() => navigate('/patients/3')}
          className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-l-4 border-primary hover:shadow-md transition-shadow cursor-pointer relative group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-primary-fixed-dim flex items-center justify-center text-primary font-bold text-xl">04</div>
              <div>
                <h3 className="font-title-sm text-on-surface">Nguyễn Gia Bảo</h3>
                <p className="text-body-sm text-secondary">ID: BN-11204</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">Đang điều trị</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">medical_information</span>
              <span>Chẩn đoán: Viêm phổi nặng</span>
            </div>
            <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
              <span>Nhập viện: 11:20 - 24/10</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-emerald-600 font-medium">Sinh hiệu ổn định</span>
            </div>
            <button className="text-primary font-label-caps text-xs flex items-center gap-1 group-hover:underline cursor-pointer border-none bg-transparent">
              CHI TIẾT <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Cleaning Bed Card */}
        <div className="bg-orange-50 p-lg rounded border border-orange-200 cursor-wait group">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xl">05</div>
              <div>
                <h3 className="font-title-sm text-orange-800">Đang vệ sinh</h3>
                <p className="text-body-sm text-orange-700/70">Dự kiến xong: 15:45</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-orange-200 text-orange-700 text-[10px] font-bold rounded uppercase tracking-wider">Cleaning</span>
          </div>
          <div className="flex flex-col items-center justify-center py-6">
            <span className="material-symbols-outlined text-4xl text-orange-400">vacuum</span>
            <div className="w-full bg-orange-200 h-1 rounded-full mt-4 overflow-hidden">
              <div className="bg-orange-600 h-full w-[65%]"></div>
            </div>
          </div>
        </div>

        {/* Empty Bed Card 2 */}
        <div className="bg-surface-container-low p-lg rounded border border-dashed border-outline-variant hover:bg-surface-container-lowest hover:border-solid hover:border-primary transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center text-outline font-bold text-xl group-hover:bg-primary-fixed-dim group-hover:text-primary transition-colors">06</div>
              <div>
                <h3 className="font-title-sm text-outline group-hover:text-on-surface transition-colors">Giường trống</h3>
                <p className="text-body-sm text-outline">Sẵn sàng tiếp nhận</p>
              </div>
            </div>
            <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold rounded uppercase tracking-wider">Trống</span>
          </div>
          <div className="flex flex-col items-center justify-center py-6 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary">add_circle</span>
            <p className="mt-2 text-xs font-label-caps text-outline group-hover:text-primary">XẾP BỆNH NHÂN MỚI</p>
          </div>
        </div>

      </div>
    </div>
  );
}
