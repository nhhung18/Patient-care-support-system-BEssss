import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Schedule } from './pages/Schedule';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';
import { RoomList } from './pages/rooms/RoomList';
import { RoomDetail } from './pages/rooms/RoomDetail';
import { PatientDetail } from './pages/patients/PatientDetail';
import { ClinicalProvider } from './context/ClinicalContext';

// Clinical Actions
import { MedicalRecord } from './pages/clinical/MedicalRecord';
import { CreateOrder } from './pages/clinical/CreateOrder';
import { OrderHistory } from './pages/clinical/OrderHistory';
import { TransferPatient } from './pages/clinical/TransferPatient';
import { TransferPatientInfo } from './pages/clinical/TransferPatientInfo';
import { CareTicketParentCreate } from './pages/clinical/CareTicketParentCreate';
import { CareTicketParentList } from './pages/clinical/CareTicketParentList';
import { CareTicketChildList } from './pages/clinical/CareTicketChildList';
import { CareTicketChildCreate } from './pages/clinical/CareTicketChildCreate';
import { IVTicketCreate } from './pages/clinical/IVTicketCreate';
import { IVHistory } from './pages/clinical/IVHistory';
import { PlaceholderScreen } from './pages/placeholders/PlaceholderScreen';

function App() {
  return (
    <ClinicalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="rooms" element={<RoomList />} />
            <Route path="rooms/:id" element={<RoomDetail />} />

            <Route path="patients" element={<Navigate to="/rooms" replace />} />
            <Route path="patients/:id" element={<PatientDetail />} />

            {/* Global Bottom Nav Routes */}
            <Route path="schedule" element={<Schedule />} />
            <Route path="alerts" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />

            {/* Placeholder Routes from Dashboard */}
            <Route path="shift-handover" element={<PlaceholderScreen title="Bàn giao ca" />} />
            <Route path="patient-handover" element={<PlaceholderScreen title="Bàn giao bệnh nhân" />} />
            <Route path="general-summary" element={<PlaceholderScreen title="Bảng kê tổng hợp" />} />
            <Route path="scan-document" element={<PlaceholderScreen title="Scan tài liệu" />} />
            <Route path="scan-history" element={<PlaceholderScreen title="Lịch sử Scan" />} />
          </Route>

          {/* Clinical Sub-flows (No Bottom Nav, full screen with Back stack) */}
          <Route path="/patients/:id/medical-record" element={<MedicalRecord />} />
          <Route path="/patients/:id/orders/create" element={<CreateOrder />} />
          <Route path="/patients/:id/orders/history" element={<OrderHistory />} />
          <Route path="/patients/:id/transfer" element={<TransferPatient />} />
          <Route path="/patients/:id/transfer/info" element={<TransferPatientInfo />} />

          <Route path="/patients/:id/care-tickets/create" element={<CareTicketParentCreate />} />
          <Route path="/patients/:id/care-tickets" element={<CareTicketParentList />} />
          <Route path="/patients/:id/care-tickets/:parentId/children" element={<CareTicketChildList />} />
          <Route path="/patients/:id/care-tickets/:parentId/children/create" element={<CareTicketChildCreate />} />

          <Route path="/patients/:id/iv-tickets" element={<IVTicketCreate />} />
          <Route path="/patients/:id/iv-tickets/history" element={<IVHistory />} />
        </Routes>
      </BrowserRouter>
    </ClinicalProvider>
  );
}

export default App;
