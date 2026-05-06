package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.MedicalOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalOrderRepository extends JpaRepository<MedicalOrder, String> {
    List<MedicalOrder> findByTreatmentProcess_TreatmentId(String treatmentId);
    List<MedicalOrder> findByDoctor_DoctorId(String doctorId);
}
