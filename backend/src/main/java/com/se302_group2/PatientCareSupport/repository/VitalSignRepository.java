package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.VitalSign;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VitalSignRepository extends JpaRepository<VitalSign, String> {
    List<VitalSign> findByTreatmentProcess_TreatmentId(String treatmentId);
    List<VitalSign> findByNurse_NurseId(String nurseId);
}
