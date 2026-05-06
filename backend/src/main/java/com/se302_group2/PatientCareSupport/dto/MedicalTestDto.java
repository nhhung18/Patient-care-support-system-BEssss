package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalTestDto {
    private String testId;
    private String orderId;
    private String testName;
    private LocalDateTime sampleTime;
    private String result;
    private String status;
    private String notes;
}
