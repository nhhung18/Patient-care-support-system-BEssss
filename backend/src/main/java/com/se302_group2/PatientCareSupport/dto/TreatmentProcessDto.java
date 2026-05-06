package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TreatmentProcessDto {
    private String treatmentId;
    private String inpatientId;
    private LocalDate startDate;
    private LocalDate endDate;
    private String mainDiagnosis;
    private String treatmentPlan;
    private String notes;
}
