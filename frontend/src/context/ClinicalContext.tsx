import { createContext, useContext, useState, type ReactNode } from 'react';

// Define the shape of our clinical data
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  department: string;
  room: string;
  bed: string;
  status: 'stable' | 'monitoring' | 'critical';
  diagnosis: string;
  vitals: {
    hr: number;
    bp: string;
    temp: number;
    spo2: number;
  };
}

interface ClinicalContextType {
  patientId: string | null;
  roomId: string | null;
  patientObject: Patient | null;
  setPatientId: (id: string | null) => void;
  setRoomId: (id: string | null) => void;
}

const MOCK_PATIENTS: Record<string, Patient> = {
  'BN-001': {
    id: 'BN-001',
    name: 'Nguyễn Văn An',
    age: 45,
    gender: 'Nam',
    department: 'Hồi sức cấp cứu',
    room: 'P.301',
    bed: 'Giường 1',
    status: 'critical',
    diagnosis: 'Viêm phổi nặng, suy hô hấp cấp',
    vitals: { hr: 110, bp: '140/90', temp: 39.2, spo2: 92 },
  },
  'BN-002': {
    id: 'BN-002',
    name: 'Trần Thị Bình',
    age: 62,
    gender: 'Nữ',
    department: 'Nội tổng hợp',
    room: 'P.301',
    bed: 'Giường 2',
    status: 'monitoring',
    diagnosis: 'Cao huyết áp, đái tháo đường type 2',
    vitals: { hr: 85, bp: '150/95', temp: 37.5, spo2: 97 },
  },
};

const ClinicalContext = createContext<ClinicalContextType | undefined>(undefined);

export function ClinicalProvider({ children }: { children: ReactNode }) {
  const [patientId, setPatientIdState] = useState<string | null>(null);
  const [roomId, setRoomId] = useState<string | null>(null);

  // Auto-resolve the patient object when patientId changes
  const patientObject = patientId ? MOCK_PATIENTS[patientId] || null : null;

  const setPatientId = (id: string | null) => {
    setPatientIdState(id);
  };

  return (
    <ClinicalContext.Provider
      value={{
        patientId,
        roomId,
        patientObject,
        setPatientId,
        setRoomId,
      }}
    >
      {children}
    </ClinicalContext.Provider>
  );
}

export function useClinicalContext() {
  const context = useContext(ClinicalContext);
  if (context === undefined) {
    throw new Error('useClinicalContext must be used within a ClinicalProvider');
  }
  return context;
}
