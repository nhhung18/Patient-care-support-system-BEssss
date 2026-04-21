package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDto {
    private String departmentId;
    private String hospitalId; // We map the ID, not the entire object to avoid nested loops
    private String name;
    private String phone;
    private String floor;
    private String description;
    private String headDoctorId;
    private Integer numOfRooms;
    private Integer numOfDoctors;
    private Integer numOfNurses;
}
