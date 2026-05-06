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
public class BedDto {
    private String bedId;
    private String roomId;
    private String status;
    private LocalDate arrivalDate;
    private LocalDate departDate;
}
