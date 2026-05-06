export type PatientStatus = 'stable' | 'monitoring' | 'critical';

interface StatusChipProps {
  status: PatientStatus;
  label: string;
  className?: string;
}

const statusClasses: Record<PatientStatus, string> = {
  stable: 'bg-green-50 text-green-700 border-green-100',
  monitoring: 'bg-amber-50 text-amber-700 border-amber-100',
  critical: 'bg-red-50 text-red-700 border-red-100',
};

export function StatusChip({ status, label, className = '' }: StatusChipProps) {
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${statusClasses[status]} ${className}`}>
      {label}
    </span>
  );
}
