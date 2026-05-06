import { Header } from '../../components/layout/Header';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useClinicalContext } from '../../context/ClinicalContext';
import { useNavigate } from 'react-router-dom';

export function TransferPatientInfo() {
  const { patientObject } = useClinicalContext();
  const navigate = useNavigate();

  if (!patientObject) return null;

  return (
    <>
      <Header title="Thông tin bàn giao" showBack />
      <div className="max-w-4xl mx-auto px-container-margin pt-lg pb-32">
        <Card>
          <h2 className="text-title-sm text-on-surface mb-md">Cập nhật thông tin bàn giao</h2>
          <div className="flex flex-col gap-md">
            <Input label="Lý do chuyển khoa" placeholder="Nhập lý do..." />
            <Input label="Tình trạng hiện tại" defaultValue={patientObject.diagnosis} />
            <Input label="Ghi chú thêm" placeholder="..." />
          </div>
        </Card>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-md bg-surface-container-lowest border-t border-surface-variant z-40 pb-safe">
        <Button 
          variant="primary" 
          className="w-full"
          onClick={() => navigate(-1)}
        >
          Xác nhận chuyển khoa
        </Button>
      </div>
    </>
  );
}
