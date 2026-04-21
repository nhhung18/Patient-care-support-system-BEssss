package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, String> {
    List<Department> findByHospital_HospitalId(String hospitalId);
}
