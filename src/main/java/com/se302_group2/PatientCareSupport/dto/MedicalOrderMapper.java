package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Doctor;
import com.se302_group2.PatientCareSupport.entity.MedicalOrder;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;

public class MedicalOrderMapper {

    public static MedicalOrderDto mapToMedicalOrderDto(MedicalOrder medicalOrder) {
        return new MedicalOrderDto(
                medicalOrder.getOrderId(),
                medicalOrder.getTreatmentProcess() != null ? medicalOrder.getTreatmentProcess().getTreatmentId() : null,
                medicalOrder.getDoctor() != null ? medicalOrder.getDoctor().getDoctorId() : null,
                medicalOrder.getOrderDate(),
                medicalOrder.getOrderType(),
                medicalOrder.getPriority(),
                medicalOrder.getInstructions(),
                medicalOrder.getStatus()
        );
    }

    public static MedicalOrder mapToMedicalOrder(MedicalOrderDto medicalOrderDto, TreatmentProcess treatmentProcess, Doctor doctor) {
        return new MedicalOrder(
                medicalOrderDto.getOrderId(),
                treatmentProcess,
                doctor,
                medicalOrderDto.getOrderDate(),
                medicalOrderDto.getOrderType(),
                medicalOrderDto.getPriority(),
                medicalOrderDto.getInstructions(),
                medicalOrderDto.getStatus() != null ? medicalOrderDto.getStatus() : "pending"
        );
    }
}
