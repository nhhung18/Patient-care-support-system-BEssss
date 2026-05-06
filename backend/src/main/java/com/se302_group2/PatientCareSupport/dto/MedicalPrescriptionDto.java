package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalPrescriptionDto {
    private String prescriptionId;
    private String orderId;
    private String medicineId;
    private String dose;
    private String route;
    private String frequency;
    private String duration;
    private String notes;
}
