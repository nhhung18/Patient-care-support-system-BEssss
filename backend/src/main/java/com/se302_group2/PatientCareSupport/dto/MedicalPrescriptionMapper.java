package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.MedicalOrder;
import com.se302_group2.PatientCareSupport.entity.MedicalPrescription;
import com.se302_group2.PatientCareSupport.entity.Medicine;

public class MedicalPrescriptionMapper {

    public static MedicalPrescriptionDto mapToMedicalPrescriptionDto(MedicalPrescription medicalPrescription) {
        return new MedicalPrescriptionDto(
                medicalPrescription.getPrescriptionId(),
                medicalPrescription.getMedicalOrder() != null ? medicalPrescription.getMedicalOrder().getOrderId() : null,
                medicalPrescription.getMedicine() != null ? medicalPrescription.getMedicine().getMedicineId() : null,
                medicalPrescription.getDose(),
                medicalPrescription.getRoute(),
                medicalPrescription.getFrequency(),
                medicalPrescription.getDuration(),
                medicalPrescription.getNotes()
        );
    }

    public static MedicalPrescription mapToMedicalPrescription(MedicalPrescriptionDto medicalPrescriptionDto, MedicalOrder medicalOrder, Medicine medicine) {
        return new MedicalPrescription(
                medicalPrescriptionDto.getPrescriptionId(),
                medicalOrder,
                medicine,
                medicalPrescriptionDto.getDose(),
                medicalPrescriptionDto.getRoute(),
                medicalPrescriptionDto.getFrequency(),
                medicalPrescriptionDto.getDuration(),
                medicalPrescriptionDto.getNotes()
        );
    }
}
