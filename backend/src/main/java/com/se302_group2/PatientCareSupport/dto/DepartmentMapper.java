package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.Hospital;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto(
                department.getDepartmentId(),
                department.getHospital() != null ? department.getHospital().getHospitalId() : null,
                department.getName(),
                department.getPhone(),
                department.getFloor(),
                department.getDescription(),
                department.getHeadDoctorId(),
                department.getNumOfRooms(),
                department.getNumOfDoctors(),
                department.getNumOfNurses()
        );
    }

    public static Department mapToDepartment(DepartmentDto departmentDto, Hospital hospital) {
        return new Department(
                departmentDto.getDepartmentId(),
                hospital,
                departmentDto.getName(),
                departmentDto.getPhone(),
                departmentDto.getFloor(),
                departmentDto.getDescription(),
                departmentDto.getHeadDoctorId(),
                departmentDto.getNumOfRooms(),
                departmentDto.getNumOfDoctors(),
                departmentDto.getNumOfNurses()
        );
    }
}
