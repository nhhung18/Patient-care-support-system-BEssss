package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.CareNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CareNoteRepository extends JpaRepository<CareNote, String> {
    List<CareNote> findByTreatmentProcess_TreatmentId(String treatmentId);
    List<CareNote> findByNurse_NurseId(String nurseId);
}
