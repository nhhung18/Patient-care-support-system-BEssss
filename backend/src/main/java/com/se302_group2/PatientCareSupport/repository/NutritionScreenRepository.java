package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.NutritionScreen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NutritionScreenRepository extends JpaRepository<NutritionScreen, String> {
    List<NutritionScreen> findByTreatmentProcess_TreatmentId(String treatmentId);
    List<NutritionScreen> findByNurse_NurseId(String nurseId);
}
