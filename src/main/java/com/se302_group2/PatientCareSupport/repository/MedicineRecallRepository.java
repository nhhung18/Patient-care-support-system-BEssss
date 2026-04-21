package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.MedicineRecall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRecallRepository extends JpaRepository<MedicineRecall, String> {
    List<MedicineRecall> findByMedicalPrescription_PrescriptionId(String prescriptionId);
    List<MedicineRecall> findByNurse_NurseId(String nurseId);
}
