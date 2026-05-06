package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicineDto;
import java.util.List;

public interface MedicineService {
    MedicineDto createMedicine(MedicineDto medicineDto);
    MedicineDto getMedicineById(String medicineId);
    List<MedicineDto> getAllMedicines();
    MedicineDto updateMedicine(String medicineId, MedicineDto medicineDto);
    void deleteMedicine(String medicineId);
}
