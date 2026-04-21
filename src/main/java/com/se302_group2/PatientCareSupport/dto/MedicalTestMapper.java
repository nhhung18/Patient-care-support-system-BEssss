package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.MedicalOrder;
import com.se302_group2.PatientCareSupport.entity.MedicalTest;

public class MedicalTestMapper {

    public static MedicalTestDto mapToMedicalTestDto(MedicalTest medicalTest) {
        return new MedicalTestDto(
                medicalTest.getTestId(),
                medicalTest.getMedicalOrder() != null ? medicalTest.getMedicalOrder().getOrderId() : null,
                medicalTest.getTestName(),
                medicalTest.getSampleTime(),
                medicalTest.getResult(),
                medicalTest.getStatus(),
                medicalTest.getNotes()
        );
    }

    public static MedicalTest mapToMedicalTest(MedicalTestDto medicalTestDto, MedicalOrder medicalOrder) {
        return new MedicalTest(
                medicalTestDto.getTestId(),
                medicalOrder,
                medicalTestDto.getTestName(),
                medicalTestDto.getSampleTime(),
                medicalTestDto.getResult(),
                medicalTestDto.getStatus() != null ? medicalTestDto.getStatus() : "pending",
                medicalTestDto.getNotes()
        );
    }
}
