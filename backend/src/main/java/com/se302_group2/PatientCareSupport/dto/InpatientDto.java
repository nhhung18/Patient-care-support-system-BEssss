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
public class InpatientDto {
    private String inpatientId;
    private String patientId;
    private LocalDate admissionDate;
    private String reasons;
    private String doctorId;
    private String bedId;
}
