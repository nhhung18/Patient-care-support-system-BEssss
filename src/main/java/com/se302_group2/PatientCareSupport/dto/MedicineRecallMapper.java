package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.MedicalPrescription;
import com.se302_group2.PatientCareSupport.entity.MedicineRecall;
import com.se302_group2.PatientCareSupport.entity.Nurse;

public class MedicineRecallMapper {

    public static MedicineRecallDto mapToMedicineRecallDto(MedicineRecall medicineRecall) {
        return new MedicineRecallDto(
                medicineRecall.getRecallId(),
                medicineRecall.getMedicalPrescription() != null ? medicineRecall.getMedicalPrescription().getPrescriptionId() : null,
                medicineRecall.getNurse() != null ? medicineRecall.getNurse().getNurseId() : null,
                medicineRecall.getRecallDate(),
                medicineRecall.getQuantity(),
                medicineRecall.getReasons()
        );
    }

    public static MedicineRecall mapToMedicineRecall(MedicineRecallDto medicineRecallDto, MedicalPrescription medicalPrescription, Nurse nurse) {
        return new MedicineRecall(
                medicineRecallDto.getRecallId(),
                medicalPrescription,
                nurse,
                medicineRecallDto.getRecallDate(),
                medicineRecallDto.getQuantity(),
                medicineRecallDto.getReasons()
        );
    }
}
