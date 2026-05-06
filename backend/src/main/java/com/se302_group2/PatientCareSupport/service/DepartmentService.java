package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.DepartmentDto;
import java.util.List;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);
    DepartmentDto getDepartmentById(String departmentId);
    List<DepartmentDto> getAllDepartments();
    List<DepartmentDto> getDepartmentsByHospitalId(String hospitalId);
    DepartmentDto updateDepartment(String departmentId, DepartmentDto departmentDto);
    void deleteDepartment(String departmentId);
}
