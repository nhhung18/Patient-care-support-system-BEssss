package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.ShiftHandover;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShiftHandoverRepository extends JpaRepository<ShiftHandover, String> {
    List<ShiftHandover> findByNurseFrom_NurseId(String nurseId);
    List<ShiftHandover> findByNurseTo_NurseId(String nurseId);
    List<ShiftHandover> findByDepartment_DepartmentId(String departmentId);
}
