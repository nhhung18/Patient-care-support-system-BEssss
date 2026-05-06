import { useNavigate } from 'react-router-dom';
import { useClinicalContext } from '../context/ClinicalContext';

interface ActionPopupProps {
  onClose: () => void;
}

export function ActionPopup({ onClose }: ActionPopupProps) {
  const navigate = useNavigate();
  const { patientId } = useClinicalContext();

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="absolute inset-0 bg-on-background/20 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-container-margin">
      {/* Action Pop-up / Bottom Sheet */}
      <div className="w-full max-w-[480px] bg-surface rounded-t-xl md:rounded-xl shadow-xl flex flex-col overflow-hidden animate-[slideUp_0.3s_ease-out]">
        
        {/* Handle for mobile */}
        <div className="w-full flex justify-center pt-md pb-sm md:hidden bg-surface" onClick={onClose}>
          <div className="w-12 h-1.5 bg-outline-variant rounded-full"></div>
        </div>
        
        {/* Header */}
        <div className="px-container-margin py-md flex items-center justify-between border-b border-surface-variant/50 bg-surface">
          <h2 className="font-title-sm text-title-sm text-on-surface">Thực hiện chức năng</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors cursor-pointer" aria-label="Đóng">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
          </button>
        </div>
        
        {/* Scrollable Content Area */}
        <div className="overflow-y-auto max-h-[70vh] p-container-margin flex flex-col gap-lg bg-surface" style={{ overscrollBehavior: 'contain' }}>
          
          {/* Group 1: Hồ sơ và theo dõi */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-sm px-xs mb-xs">
              <span className="font-label-caps text-label-caps text-primary/80 uppercase tracking-widest">Hồ sơ và theo dõi</span>
              <div className="h-[1px] bg-surface-variant flex-1 opacity-50"></div>
            </div>
            
            <div className="flex flex-col bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm">
              <button 
                onClick={() => handleNavigate(`/patients/${patientId}/medical-record`)}
                className="flex items-center gap-md p-md hover:bg-primary/5 active:bg-primary/10 transition-colors text-left w-full group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">assignment</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Xem bệnh án</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-primary transition-colors" aria-hidden="true">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Group 2: Y lệnh và chỉ định */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-sm px-xs mb-xs">
              <span className="font-label-caps text-label-caps text-tertiary/80 uppercase tracking-widest">Y lệnh và chỉ định</span>
              <div className="h-[1px] bg-surface-variant flex-1 opacity-50"></div>
            </div>
            
            <div className="flex flex-col bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm divide-y divide-outline-variant/20">
              <button 
                onClick={() => handleNavigate(`/patients/${patientId}/orders/create`)}
                className="flex items-center gap-md p-md hover:bg-tertiary/5 active:bg-tertiary/10 transition-colors text-left w-full group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">prescriptions</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Tạo y lệnh</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-tertiary transition-colors" aria-hidden="true">add</span>
              </button>
              
              <button 
                onClick={() => handleNavigate(`/patients/${patientId}/care-tickets/create`)}
                className="flex items-center gap-md p-md hover:bg-tertiary/5 active:bg-tertiary/10 transition-colors text-left w-full group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">medical_services</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Xem và tạo phiếu chăm sóc</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-tertiary transition-colors" aria-hidden="true">add</span>
              </button>
              
              <button 
                onClick={() => handleNavigate(`/patients/${patientId}/iv-tickets`)}
                className="flex items-center gap-md p-md hover:bg-tertiary/5 active:bg-tertiary/10 transition-colors text-left w-full group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">fluid_med</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Xem và tạo phiếu truyền dịch</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-tertiary transition-colors" aria-hidden="true">add</span>
              </button>
              
              <button 
                onClick={() => handleNavigate(`/patients/${patientId}/orders/history`)}
                className="flex items-center gap-md p-md hover:bg-surface-container-low active:bg-surface-container transition-colors text-left w-full group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-surface-variant/50 flex items-center justify-center text-on-surface-variant transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">history</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Lịch sử thực hiện y lệnh</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-on-surface-variant transition-colors" aria-hidden="true">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Group 3: Điều chuyển và Bàn giao */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-sm px-xs mb-xs">
              <span className="font-label-caps text-label-caps text-secondary/80 uppercase tracking-widest">Điều chuyển và Bàn giao</span>
              <div className="h-[1px] bg-surface-variant flex-1 opacity-50"></div>
            </div>
            
            <div className="flex flex-col bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm">
              <button 
                onClick={() => handleNavigate(`/patients/${patientId}/transfer`)}
                className="flex items-center gap-md p-md hover:bg-secondary/5 active:bg-secondary/10 transition-colors text-left w-full group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">transfer_within_a_station</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Bàn giao bệnh nhân chuyển khoa</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-secondary transition-colors" aria-hidden="true">chevron_right</span>
              </button>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Padding for safe area on mobile */}
        <div className="h-md bg-surface md:hidden"></div>
      </div>
      
      <style>{`
        @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
