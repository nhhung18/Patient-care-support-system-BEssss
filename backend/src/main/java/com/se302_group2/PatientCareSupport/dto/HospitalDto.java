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
public class HospitalDto {
    private String hospitalId;
    private String hospitalName;
    private LocalDate foundingDate;
    private String email;
    private String phone;
    private String address;
    private String website;
    private String type;
    private String directorName;
}
