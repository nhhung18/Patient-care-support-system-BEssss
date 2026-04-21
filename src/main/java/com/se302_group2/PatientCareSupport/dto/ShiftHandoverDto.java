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
public class ShiftHandoverDto {
    private String handoverId;
    private String nurseFromId;
    private String nurseToId;
    private String departmentId;
    private LocalDateTime handoverTime;
    private String handoverContent;
    private String notes;
}
