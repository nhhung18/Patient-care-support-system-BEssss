package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TreatmentProcessRepository extends JpaRepository<TreatmentProcess, String> {
    List<TreatmentProcess> findByInpatient_InpatientId(String inpatientId);
}
