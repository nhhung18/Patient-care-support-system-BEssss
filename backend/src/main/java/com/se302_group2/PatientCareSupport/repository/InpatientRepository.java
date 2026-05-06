package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.Inpatient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InpatientRepository extends JpaRepository<Inpatient, String> {
    List<Inpatient> findByPatient_PatientId(String patientId);
    List<Inpatient> findByDoctor_DoctorId(String doctorId);
}
