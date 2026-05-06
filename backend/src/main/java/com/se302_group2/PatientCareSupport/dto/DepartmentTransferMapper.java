package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.DepartmentTransfer;
import com.se302_group2.PatientCareSupport.entity.Inpatient;

public class DepartmentTransferMapper {

    public static DepartmentTransferDto mapToDepartmentTransferDto(DepartmentTransfer departmentTransfer) {
        return new DepartmentTransferDto(
                departmentTransfer.getTransferId(),
                departmentTransfer.getInpatient() != null ? departmentTransfer.getInpatient().getInpatientId() : null,
                departmentTransfer.getFromDept() != null ? departmentTransfer.getFromDept().getDepartmentId() : null,
                departmentTransfer.getToDept() != null ? departmentTransfer.getToDept().getDepartmentId() : null,
                departmentTransfer.getTransferDate(),
                departmentTransfer.getReasons(),
                departmentTransfer.getNotes()
        );
    }

    public static DepartmentTransfer mapToDepartmentTransfer(DepartmentTransferDto departmentTransferDto, Inpatient inpatient, Department fromDept, Department toDept) {
        return new DepartmentTransfer(
                departmentTransferDto.getTransferId(),
                inpatient,
                fromDept,
                toDept,
                departmentTransferDto.getTransferDate(),
                departmentTransferDto.getReasons(),
                departmentTransferDto.getNotes()
        );
    }
}
