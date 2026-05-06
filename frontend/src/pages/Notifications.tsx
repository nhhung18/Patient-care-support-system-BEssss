export function Notifications() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Page Title & Quick Actions */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display-lg text-primary">Thông báo</h2>
        </div>
        <button className="bg-secondary-container text-on-secondary-fixed-variant px-md py-sm rounded flex items-center gap-2 font-label-caps hover:bg-outline-variant transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          ĐÁNH DẤU TẤT CẢ ĐÃ ĐỌC
        </button>
      </div>

      {/* Section: Today */}
      <section className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-title-sm text-on-surface">Hôm nay</h3>
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Critical Alert Card */}
          <div className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-l-4 border-error relative overflow-hidden">
            <div className="flex items-start gap-md">
              <div className="bg-error-container text-error p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>emergency</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-error bg-error/10 px-2 py-1 rounded-full mb-2 inline-block">CHỈ SỐ NGUY KỊCH</span>
                  <span className="font-body-sm text-on-surface-variant">08:42</span>
                </div>
                <h4 className="font-title-sm mb-1">Cảnh báo bệnh nhân: Phòng 402-B</h4>
                <p className="font-body-md text-on-surface-variant">Bệnh nhân "Jonathan Miller" có dấu hiệu giảm oxy máu cấp (88%). Cần kiểm tra ngay lập tức.</p>
              </div>
            </div>
          </div>

          {/* New Medical Order Card */}
          <div className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-l-4 border-primary relative">
            <div className="flex items-start gap-md">
              <div className="bg-primary-fixed text-primary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">note_alt</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-primary bg-primary/10 px-2 py-1 rounded-full mb-2 inline-block">Y LỆNH MỚI</span>
                  <span className="font-body-sm text-on-surface-variant">10:15</span>
                </div>
                <h4 className="font-title-sm mb-1">Kết quả xét nghiệm: Bệnh nhân #8821</h4>
                <p className="font-body-md text-on-surface-variant">Bác sĩ Sarah Chen đã cập nhật báo cáo huyết học cho Jane Smith. Đã kê đơn liều mới cho Warfarin.</p>
              </div>
            </div>
          </div>

          {/* Shift Change Notification */}
          <div className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-l-4 border-secondary relative">
            <div className="flex items-start gap-md">
              <div className="bg-secondary-container text-secondary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-secondary bg-secondary/10 px-2 py-1 rounded-full mb-2 inline-block">BÀN GIAO CA</span>
                  <span className="font-body-sm text-on-surface-variant">11:30</span>
                </div>
                <h4 className="font-title-sm mb-1">Yêu cầu bàn giao điều dưỡng</h4>
                <p className="font-body-md text-on-surface-variant">Nhân viên ca chiều tại khu Tây đã đến. Vui lòng xác nhận bàn giao bệnh nhân trong hệ thống.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Earlier */}
      <section>
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-title-sm text-on-surface-variant">Trước đó</h3>
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 opacity-80">
          {/* Announcement Card */}
          <div className="bg-surface-container-low p-md rounded border border-outline-variant/20 relative">
            <div className="flex items-start gap-md">
              <div className="bg-tertiary-fixed text-tertiary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-tertiary bg-tertiary/10 px-2 py-1 rounded-full mb-2 inline-block">THÔNG BÁO</span>
                  <span className="font-body-sm text-on-surface-variant">Hôm qua</span>
                </div>
                <h4 className="font-title-sm mb-1">Quy trình an toàn mới</h4>
                <p className="font-body-md text-on-surface-variant">Đã cập nhật quy trình kiểm soát nhiễm khuẩn cho ICU. Vui lòng xem tài liệu.</p>
              </div>
            </div>
          </div>

          {/* Past Order Card */}
          <div className="bg-surface-container-low p-md rounded border border-outline-variant/20 relative">
            <div className="flex items-start gap-md">
              <div className="bg-primary-fixed text-primary p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">assignment_turned_in</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-primary bg-primary/10 px-2 py-1 rounded-full mb-2 inline-block">Y LỆNH HOÀN THÀNH</span>
                  <span className="font-body-sm text-on-surface-variant">2 ngày trước</span>
                </div>
                <h4 className="font-title-sm mb-1">Kết quả chẩn đoán hình ảnh</h4>
                <p className="font-body-md text-on-surface-variant">Kết quả MRI của bệnh nhân "Robert Vance" đã sẵn sàng trên hệ thống.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Bento-style Info Area */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mt-12">
        <div className="md:col-span-2 bg-gradient-to-br from-primary-container to-[#004786] text-on-primary-container p-lg rounded relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <h3 className="font-headline-md mb-2">Cập nhật tài nguyên bệnh viện</h3>
            <p className="font-body-md mb-6 max-w-md">Theo dõi thời gian thực cho thấy khu điều trị chung đang quá tải. Tất cả ca phẫu thuật không khẩn cấp ngày mai đã được dời lịch.</p>
            <button className="bg-surface-container-lowest text-primary px-lg py-md rounded font-label-caps cursor-pointer">XEM BẢNG ĐIỀU KHIỂN</button>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12">
            <span className="material-symbols-outlined text-[160px]">analytics</span>
          </div>
        </div>
        
        <div className="bg-tertiary-container text-on-tertiary-container p-lg rounded flex flex-col justify-between shadow-lg">
          <span className="material-symbols-outlined text-4xl">tips_and_updates</span>
          <div>
            <h3 className="font-title-sm mb-1">Bảo trì hệ thống</h3>
            <p className="font-body-sm">02:00 sáng nay. Hệ thống sẽ tạm ngừng 15 phút.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}