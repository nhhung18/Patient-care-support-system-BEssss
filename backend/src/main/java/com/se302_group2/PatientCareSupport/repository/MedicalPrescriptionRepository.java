package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.MedicalPrescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalPrescriptionRepository extends JpaRepository<MedicalPrescription, String> {
    List<MedicalPrescription> findByMedicalOrder_OrderId(String orderId);
}
