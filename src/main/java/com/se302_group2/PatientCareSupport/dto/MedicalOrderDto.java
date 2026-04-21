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
public class MedicalOrderDto {
    private String orderId;
    private String treatmentId;
    private String doctorId;
    private LocalDateTime orderDate;
    private String orderType;
    private String priority;
    private String instructions;
    private String status;
}
