package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.PatientRelationship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRelationshipRepository extends JpaRepository<PatientRelationship, String> {
    List<PatientRelationship> findByPatient_PatientId(String patientId);
}
