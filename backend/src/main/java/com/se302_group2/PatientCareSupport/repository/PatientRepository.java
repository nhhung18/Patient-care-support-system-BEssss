package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, String> {
}
