import { useState } from 'react';

import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';
import { ActionPopup } from '../../components/ActionPopup';

export function PatientDetail() {
  const { patientObject } = useClinicalContext();
  const [showActionPopup, setShowActionPopup] = useState(false);

  if (!patientObject) return null;

  return (
    <>
      <Header title="Chi tiết bệnh nhân" showBack />

      <div className="flex flex-col gap-lg pb-32 w-full">
        {/* Section 1: Administrative Info */}
        <section className="flex flex-col gap-md">
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(25,118,210,0.08)] flex flex-col items-center text-center border border-surface-variant/30">
            <div className="w-24 h-24 rounded-full bg-primary-fixed flex items-center justify-center mb-md overflow-hidden ring-4 ring-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">person</span>
            </div>
            <h2 className="font-title-sm text-title-sm text-on-surface mb-xs">{patientObject.name}</h2>
            <div className="flex items-center gap-xs text-on-surface-variant mb-md font-body-sm text-body-sm">
              <span>{patientObject.age} tuổi</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span>{patientObject.gender}</span>
            </div>

            <div className="w-full bg-surface rounded-lg p-md grid grid-cols-2 gap-md text-left mb-lg">
              <div>
                <span className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">ID BỆNH NHÂN</span>
                <span className="block font-body-sm text-body-sm text-on-surface">{patientObject.id}</span>
              </div>
              <div>
                <span className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">MÃ NHẬP VIỆN</span>
                <span className="block font-body-sm text-body-sm text-on-surface">AD-99201</span>
              </div>
            </div>

            <button className="w-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed transition-colors py-sm px-md rounded-lg font-title-sm text-title-sm flex items-center justify-center gap-sm">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">assignment</span>
              Xem bệnh án
            </button>
          </div>

          {/* Quick Status Card */}
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(25,118,210,0.08)] flex items-start justify-between border border-surface-variant/30">
            <div>
              <h3 className="font-title-sm text-title-sm text-on-surface mb-xs">Trạng thái hiện tại</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{patientObject.room}, {patientObject.department}</p>
            </div>
            <div className="bg-[#e6f4ea] text-[#137333] px-3 py-1 rounded-full font-label-caps text-label-caps flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#137333]"></span>
              {patientObject.status}
            </div>
          </div>
        </section>

        {/* Section 2: Vital Signs Dashboard */}
        <section className="flex flex-col gap-lg">
          <div>
            <h3 className="font-title-sm text-title-sm text-on-surface mb-md">Dấu hiệu sinh tồn</h3>
            <div className="grid grid-cols-2 gap-md">
              {/* Temperature */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-t-4 border-[#e53935] border-l border-r border-b border-surface-variant/30">
                <div className="flex items-center gap-sm mb-md text-on-surface-variant">
                  <div className="w-8 h-8 rounded-full bg-[#ffebee] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#e53935] text-[18px]">device_thermostat</span>
                  </div>
                  <span className="font-label-caps text-label-caps">NHIỆT ĐỘ</span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="font-display-lg text-display-lg text-on-surface tabular-nums">37.2</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">°C</span>
                </div>
              </div>

              {/* Blood Pressure */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-t-4 border-primary border-l border-r border-b border-surface-variant/30">
                <div className="flex items-center gap-sm mb-md text-on-surface-variant">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[18px]">favorite</span>
                  </div>
                  <span className="font-label-caps text-label-caps">HUYẾT ÁP</span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="font-display-lg text-display-lg text-on-surface tabular-nums">120/80</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">mmHg</span>
                </div>
              </div>

              {/* Heart Rate */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-t-4 border-[#fb8c00] border-l border-r border-b border-surface-variant/30">
                <div className="flex items-center gap-sm mb-md text-on-surface-variant">
                  <div className="w-8 h-8 rounded-full bg-[#fff3e0] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#fb8c00] text-[18px]">ecg</span>
                  </div>
                  <span className="font-label-caps text-label-caps">NHỊP TIM</span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="font-display-lg text-display-lg text-on-surface tabular-nums">75</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">bpm</span>
                </div>
              </div>

              {/* Respiratory Rate */}
              <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(25,118,210,0.08)] border-t-4 border-[#00acc1] border-l border-r border-b border-surface-variant/30">
                <div className="flex items-center gap-sm mb-md text-on-surface-variant">
                  <div className="w-8 h-8 rounded-full bg-[#e0f7fa] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#00acc1] text-[18px]">air</span>
                  </div>
                  <span className="font-label-caps text-label-caps">NHỊP THỞ</span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="font-display-lg text-display-lg text-on-surface tabular-nums">16</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/min</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details Area */}
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(25,118,210,0.08)] flex-1 border border-surface-variant/30">
            <div className="flex justify-between items-center mb-md border-b border-surface-variant pb-sm">
              <h3 className="font-title-sm text-title-sm text-on-surface">Ghi chú lâm sàng gần nhất</h3>
              <button className="text-primary font-title-sm text-title-sm hover:text-on-primary-fixed-variant transition-colors">Xem tất cả</button>
            </div>
            <div className="space-y-md mt-sm">
              <div className="flex gap-md">
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-on-surface-variant shrink-0">
                  <span className="material-symbols-outlined text-[24px]">edit_document</span>
                </div>
                <div>
                  <p className="font-body-sm text-body-sm text-on-surface mb-xs">Bệnh nhân phản hồi tốt với phác đồ điều trị hiện tại. Không có dấu hiệu sốt trong 24h qua.</p>
                  <span className="font-label-caps text-label-caps text-outline">08:00 AM, 24/10/2023 - Dr. Tran</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Main Action Container */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-variant p-md z-50 shadow-[0_-4px_20px_rgba(25,118,210,0.08)]">
        <div className="flex justify-end w-full">
          <button
            onClick={() => setShowActionPopup(true)}
            className="w-full bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors py-sm px-xl rounded-lg font-title-sm text-title-sm shadow-md flex items-center justify-center gap-sm h-[48px]"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">medical_services</span>
            Thực hiện chức năng
          </button>
        </div>
      </div>

      {showActionPopup && <ActionPopup onClose={() => setShowActionPopup(false)} />}
    </>
  );
}
