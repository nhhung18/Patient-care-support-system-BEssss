package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VitalSignDto {
    private String signId;
    private String treatmentId;
    private String nurseId;
    private LocalDateTime recordTime;
    private BigDecimal temperature;
    private String bloodPressure;
    private Integer pulse;
    private Integer breathRate;
    private BigDecimal spO2;
    private BigDecimal weight;
    private String notes;
}
