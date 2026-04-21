package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.DepartmentTransferDto;
import java.util.List;

public interface DepartmentTransferService {
    DepartmentTransferDto createDepartmentTransfer(DepartmentTransferDto departmentTransferDto);
    DepartmentTransferDto getDepartmentTransferById(String transferId);
    List<DepartmentTransferDto> getAllDepartmentTransfers();
    List<DepartmentTransferDto> getDepartmentTransfersByInpatientId(String inpatientId);
    List<DepartmentTransferDto> getDepartmentTransfersByFromDeptId(String departmentId);
    List<DepartmentTransferDto> getDepartmentTransfersByToDeptId(String departmentId);
    DepartmentTransferDto updateDepartmentTransfer(String transferId, DepartmentTransferDto departmentTransferDto);
    void deleteDepartmentTransfer(String transferId);
}
