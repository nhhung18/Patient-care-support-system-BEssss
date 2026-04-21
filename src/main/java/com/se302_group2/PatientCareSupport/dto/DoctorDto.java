package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto {
    private String doctorId;
    private String name;
    private LocalDate birthday;
    private String address;
    private String gender;
    private String position;
    private String experience;
    private BigDecimal salary;
}
