import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ActionModal({ isOpen, onClose }: ActionModalProps) {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-6 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-[480px] bg-surface rounded-t-xl md:rounded shadow-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-full md:slide-in-from-bottom-12 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle for mobile */}
        <div className="w-full flex justify-center pt-4 pb-2 md:hidden bg-surface">
          <div className="w-12 h-1.5 bg-outline-variant rounded-full"></div>
        </div>
        
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-surface-variant/50 bg-surface">
          <h2 className="font-title-sm text-on-surface">Thực hiện chức năng</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-low text-on-surface-variant transition-colors cursor-pointer border-none bg-transparent"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        
        {/* Scrollable Content Area */}
        <div className="overflow-y-auto max-h-[70vh] p-6 flex flex-col gap-6 bg-surface">
          
          {/* Group 1: Hồ sơ và theo dõi */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-1 mb-1">
              <span className="font-label-caps text-primary/80 uppercase tracking-widest">Hồ sơ và theo dõi</span>
              <div className="h-[1px] bg-surface-variant flex-1 opacity-50"></div>
            </div>
            <div className="flex flex-col bg-surface-container-lowest rounded border border-outline-variant/30 overflow-hidden shadow-sm">
              <button 
                onClick={() => {
                  onClose();
                  navigate('/patients/medical-record');
                }}
                className="flex items-center gap-4 p-4 hover:bg-primary/5 active:bg-primary/10 transition-colors text-left w-full group cursor-pointer border-none bg-transparent"
              >
                <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center text-primary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]">assignment</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-on-surface font-semibold">Xem bệnh án</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-primary transition-colors">chevron_right</span>
              </button>
            </div>
          </div>
          
          {/* Group 2: Y lệnh và chỉ định */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-1 mb-1">
              <span className="font-label-caps text-tertiary/80 uppercase tracking-widest">Y lệnh và chỉ định</span>
              <div className="h-[1px] bg-surface-variant flex-1 opacity-50"></div>
            </div>
            <div className="flex flex-col bg-surface-container-lowest rounded border border-outline-variant/30 overflow-hidden shadow-sm divide-y divide-outline-variant/20">
              <button 
                onClick={() => {
                  onClose();
                  navigate('/orders/create');
                }}
                className="flex items-center gap-4 p-4 hover:bg-tertiary/5 active:bg-tertiary/10 transition-colors text-left w-full group cursor-pointer border-none bg-transparent"
              >
                <div className="w-9 h-9 rounded bg-tertiary/10 flex items-center justify-center text-tertiary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]">prescriptions</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-on-surface font-semibold">Tạo y lệnh</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-tertiary transition-colors">add</span>
              </button>
              
              <button className="flex items-center gap-4 p-4 hover:bg-tertiary/5 active:bg-tertiary/10 transition-colors text-left w-full group cursor-pointer border-none bg-transparent">
                <div className="w-9 h-9 rounded bg-tertiary/10 flex items-center justify-center text-tertiary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]">medical_services</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-on-surface font-semibold">Xem và tạo phiếu chăm sóc</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-tertiary transition-colors">add</span>
              </button>
              
              <button className="flex items-center gap-4 p-4 hover:bg-tertiary/5 active:bg-tertiary/10 transition-colors text-left w-full group cursor-pointer border-none bg-transparent">
                <div className="w-9 h-9 rounded bg-tertiary/10 flex items-center justify-center text-tertiary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]">fluid_med</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-on-surface font-semibold">Xem và tạo phiếu truyền dịch</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-tertiary transition-colors">add</span>
              </button>
              
              <button 
                onClick={() => {
                  onClose();
                  navigate('/orders/history');
                }}
                className="flex items-center gap-4 p-4 hover:bg-surface-container-low active:bg-surface-container transition-colors text-left w-full group cursor-pointer border-none bg-transparent"
              >
                <div className="w-9 h-9 rounded bg-surface-variant/50 flex items-center justify-center text-on-surface-variant transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]">history</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-on-surface font-semibold">Lịch sử thực hiện y lệnh</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-on-surface-variant transition-colors">chevron_right</span>
              </button>
            </div>
          </div>
          
          {/* Group 3: Điều chuyển và Bàn giao */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-1 mb-1">
              <span className="font-label-caps text-secondary/80 uppercase tracking-widest">Điều chuyển và Bàn giao</span>
              <div className="h-[1px] bg-surface-variant flex-1 opacity-50"></div>
            </div>
            <div className="flex flex-col bg-surface-container-lowest rounded border border-outline-variant/30 overflow-hidden shadow-sm">
              <button 
                onClick={() => {
                  onClose();
                  navigate('/patients/transfer');
                }}
                className="flex items-center gap-4 p-4 hover:bg-secondary/5 active:bg-secondary/10 transition-colors text-left w-full group cursor-pointer border-none bg-transparent"
              >
                <div className="w-9 h-9 rounded bg-secondary/10 flex items-center justify-center text-secondary transition-transform group-active:scale-95">
                  <span className="material-symbols-outlined text-[22px]">transfer_within_a_station</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-on-surface font-semibold">Bàn giao bệnh nhân chuyển khoa</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline/40 group-hover:text-secondary transition-colors">chevron_right</span>
              </button>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Padding for safe area on mobile */}
        <div className="h-4 bg-surface md:hidden"></div>
      </div>
    </div>
  );
}
