package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.DepartmentTransfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentTransferRepository extends JpaRepository<DepartmentTransfer, String> {
    List<DepartmentTransfer> findByInpatient_InpatientId(String inpatientId);
    List<DepartmentTransfer> findByFromDept_DepartmentId(String departmentId);
    List<DepartmentTransfer> findByToDept_DepartmentId(String departmentId);
}
