package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.PatientRelationshipDto;
import java.util.List;

public interface PatientRelationshipService {
    PatientRelationshipDto createPatientRelationship(PatientRelationshipDto patientRelationshipDto);
    PatientRelationshipDto getPatientRelationshipById(String relationshipId);
    List<PatientRelationshipDto> getAllPatientRelationships();
    List<PatientRelationshipDto> getPatientRelationshipsByPatientId(String patientId);
    PatientRelationshipDto updatePatientRelationship(String relationshipId, PatientRelationshipDto patientRelationshipDto);
    void deletePatientRelationship(String relationshipId);
}
