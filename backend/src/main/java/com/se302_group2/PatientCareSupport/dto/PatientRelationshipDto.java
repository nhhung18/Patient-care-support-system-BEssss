package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientRelationshipDto {
    private String relationshipId;
    private String patientId;
    private String name;
    private Integer age;
    private String email;
    private String phone;
    private String relationshipWithPatient;
    private String profession;
}
