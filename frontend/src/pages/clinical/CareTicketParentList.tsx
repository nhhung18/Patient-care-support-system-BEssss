import { Header } from '../../components/layout/Header';
import { useClinicalContext } from '../../context/ClinicalContext';
import { useNavigate, useParams } from 'react-router-dom';

export function CareTicketParentList() {
  const { patientObject } = useClinicalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  if (!patientObject) return null;

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Header title="DS Phiếu cha đã tạo" showBack />
      
      <main className="pt-20 pb-32 px-6 w-full">
        <div className="flex flex-col gap-6">
          
          {/* Header Section */}
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-md text-headline-md text-on-surface">DS Phiếu cha đã tạo</h2>
            <p className="text-body-sm text-secondary">Bệnh nhân: {patientObject.name} | Mã ID: {patientObject.id}</p>
          </div>

          {/* Search & Filters */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-body-sm transition-all" 
                placeholder="Tìm kiếm phiếu chăm sóc..." 
                type="text" 
              />
            </div>
            <div className="flex gap-2 w-full">
              <button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-body-sm text-secondary hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Lọc
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-body-sm text-secondary hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">sort</span>
                Sắp xếp
              </button>
            </div>
          </div>

          {/* Care Plan Grid/List - Forced Mobile layout */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Care Plan 1 */}
            <div 
              className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-50 flex flex-col gap-4 relative cursor-pointer"
              onClick={() => navigate(`/patients/${id}/care-tickets/1/children`)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Phiếu chăm sóc số 24</h3>
                  <p className="text-xs text-slate-500 font-medium">Loại: Chăm sóc Cha</p>
                </div>
                <span className="bg-green-100/50 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Ổn định</span>
              </div>
              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-body-sm text-secondary">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  <span>24/05/2024 - 08:30</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm">
                  <span className="material-symbols-outlined text-sm mt-1 text-slate-400">notes</span>
                  <span className="text-on-surface-variant line-clamp-3">Ghi chú: Tiếp tục theo dõi huyết áp, bệnh nhân tỉnh táo, ăn uống tốt.</span>
                </div>
              </div>
              <div className="mt-2 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-2">
                  <img alt="Staff" className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFS01Of0EVdq-2czsthnAh7rREvaXsWunKWf5PrJx15xdmyxMDjQJNAezAmToROgsBaOkPk9M2Gg8r50gde6saSrHUIXHPIK1Eaqf_K3x74QiP6vy-5MuK_rbkqlEuV5ONile6RGYLdj-aJi3ABazvMzNm9YVIomj7MLgxzYRS-dZSI2shb0bHCvHXM-ZIO_6GqEktUGNRPOY5T4tPlptCa7zu0TgQE_JO_DhNZYqdAxEHuH9zFPEdX9M4I57HAkykiJTJdfVjhVc" />
                </div>
                <button className="text-primary font-bold text-xs hover:underline">Chi tiết</button>
              </div>
            </div>

            {/* Care Plan 2 */}
            <div 
              className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-50 flex flex-col gap-4 relative cursor-pointer"
              onClick={() => navigate(`/patients/${id}/care-tickets/2/children`)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Phiếu chăm sóc số 23</h3>
                  <p className="text-xs text-slate-500 font-medium">Loại: Chăm sóc Cha</p>
                </div>
                <span className="bg-blue-100/50 text-blue-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Theo dõi</span>
              </div>
              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-body-sm text-secondary">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  <span>23/05/2024 - 14:15</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm">
                  <span className="material-symbols-outlined text-sm mt-1 text-slate-400">notes</span>
                  <span className="text-on-surface-variant line-clamp-3">Ghi chú: Thực hiện y lệnh thuốc lúc 14h. Bệnh nhân còn mệt, tim nhịp đều.</span>
                </div>
              </div>
              <div className="mt-2 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-2">
                  <img alt="Staff" className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGs-eOhbXqTp83gaBn_R5aF_Yz2lHA2Nm7jU-_Mns6XE4_GbeBCvsmZK1zPf8ROlup2u4UNx6BFDR2sHKeNJ_FE-h4bUWdJ1URvFVTNzhT1GiISuZamN37noCNk0lIDs2BS1LEAh7Mmi4yoQk5-hKSN3YZduxruIIkyhGY2zsVNrafa4WHfaHNyAbkKsT9oGi8cvkwdykYptmSvl5bH47yGZD9-VkuGODKN0tNNaaUcu5PnAYAgCc8kvntgowQwE01ZMWQ64UgtYo" />
                </div>
                <button className="text-primary font-bold text-xs hover:underline">Chi tiết</button>
              </div>
            </div>

            {/* Care Plan 3 */}
            <div 
              className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-slate-50 flex flex-col gap-4 relative cursor-pointer"
              onClick={() => navigate(`/patients/${id}/care-tickets/3/children`)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Phiếu chăm sóc số 22</h3>
                  <p className="text-xs text-slate-500 font-medium">Loại: Chăm sóc Cha</p>
                </div>
                <span className="bg-red-100/50 text-red-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Nguy kịch</span>
              </div>
              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-body-sm text-secondary">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  <span>22/05/2024 - 22:00</span>
                </div>
                <div className="flex items-start gap-2 text-body-sm">
                  <span className="material-symbols-outlined text-sm mt-1 text-slate-400">notes</span>
                  <span className="text-on-surface-variant line-clamp-3">Ghi chú: Bệnh nhân khó thở về đêm, đã báo bác sĩ trực tăng liều lợi tiểu.</span>
                </div>
              </div>
              <div className="mt-2 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-2">
                  <img alt="Staff" className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFS01Of0EVdq-2czsthnAh7rREvaXsWunKWf5PrJx15xdmyxMDjQJNAezAmToROgsBaOkPk9M2Gg8r50gde6saSrHUIXHPIK1Eaqf_K3x74QiP6vy-5MuK_rbkqlEuV5ONile6RGYLdj-aJi3ABazvMzNm9YVIomj7MLgxzYRS-dZSI2shb0bHCvHXM-ZIO_6GqEktUGNRPOY5T4tPlptCa7zu0TgQE_JO_DhNZYqdAxEHuH9zFPEdX9M4I57HAkykiJTJdfVjhVc" />
                </div>
                <button className="text-primary font-bold text-xs hover:underline">Chi tiết</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
