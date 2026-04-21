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
public class MedicineRecallDto {
    private String recallId;
    private String prescriptionId;
    private String nurseId;
    private LocalDateTime recallDate;
    private Integer quantity;
    private String reasons;
}
