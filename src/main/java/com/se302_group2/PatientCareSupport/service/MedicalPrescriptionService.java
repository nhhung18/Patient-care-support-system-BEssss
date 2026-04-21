package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicalPrescriptionDto;
import java.util.List;

public interface MedicalPrescriptionService {
    MedicalPrescriptionDto createMedicalPrescription(MedicalPrescriptionDto medicalPrescriptionDto);
    MedicalPrescriptionDto getMedicalPrescriptionById(String prescriptionId);
    List<MedicalPrescriptionDto> getAllMedicalPrescriptions();
    List<MedicalPrescriptionDto> getMedicalPrescriptionsByOrderId(String orderId);
    MedicalPrescriptionDto updateMedicalPrescription(String prescriptionId, MedicalPrescriptionDto medicalPrescriptionDto);
    void deleteMedicalPrescription(String prescriptionId);
}
