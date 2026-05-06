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
public class DepartmentTransferDto {
    private String transferId;
    private String inpatientId;
    private String fromDeptId;
    private String toDeptId;
    private LocalDateTime transferDate;
    private String reasons;
    private String notes;
}
