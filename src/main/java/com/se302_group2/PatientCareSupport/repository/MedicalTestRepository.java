package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.MedicalTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalTestRepository extends JpaRepository<MedicalTest, String> {
    List<MedicalTest> findByMedicalOrder_OrderId(String orderId);
}
