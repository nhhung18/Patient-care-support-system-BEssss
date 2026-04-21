package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicineRecallDto;
import java.util.List;

public interface MedicineRecallService {
    MedicineRecallDto createMedicineRecall(MedicineRecallDto medicineRecallDto);
    MedicineRecallDto getMedicineRecallById(String recallId);
    List<MedicineRecallDto> getAllMedicineRecalls();
    List<MedicineRecallDto> getMedicineRecallsByPrescriptionId(String prescriptionId);
    List<MedicineRecallDto> getMedicineRecallsByNurseId(String nurseId);
    MedicineRecallDto updateMedicineRecall(String recallId, MedicineRecallDto medicineRecallDto);
    void deleteMedicineRecall(String recallId);
}
