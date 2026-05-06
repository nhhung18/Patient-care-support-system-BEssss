package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Medicine;

public class MedicineMapper {

    public static MedicineDto mapToMedicineDto(Medicine medicine) {
        return new MedicineDto(
                medicine.getMedicineId(),
                medicine.getMedicineName(),
                medicine.getCategory(),
                medicine.getExpirenceDate(),
                medicine.getDirectionForUse(),
                medicine.getPrice(),
                medicine.getMedicineStatus()
        );
    }

    public static Medicine mapToMedicine(MedicineDto medicineDto) {
        return new Medicine(
                medicineDto.getMedicineId(),
                medicineDto.getMedicineName(),
                medicineDto.getCategory(),
                medicineDto.getExpirenceDate(),
                medicineDto.getDirectionForUse(),
                medicineDto.getPrice(),
                medicineDto.getMedicineStatus() != null ? medicineDto.getMedicineStatus() : "Available"
        );
    }
}
