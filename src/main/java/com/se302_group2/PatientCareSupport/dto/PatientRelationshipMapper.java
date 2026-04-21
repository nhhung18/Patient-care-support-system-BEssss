package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Patient;
import com.se302_group2.PatientCareSupport.entity.PatientRelationship;

public class PatientRelationshipMapper {

    public static PatientRelationshipDto mapToPatientRelationshipDto(PatientRelationship patientRelationship) {
        return new PatientRelationshipDto(
                patientRelationship.getRelationshipId(),
                patientRelationship.getPatient() != null ? patientRelationship.getPatient().getPatientId() : null,
                patientRelationship.getName(),
                patientRelationship.getAge(),
                patientRelationship.getEmail(),
                patientRelationship.getPhone(),
                patientRelationship.getRelationshipWithPatient(),
                patientRelationship.getProfession()
        );
    }

    public static PatientRelationship mapToPatientRelationship(PatientRelationshipDto patientRelationshipDto, Patient patient) {
        return new PatientRelationship(
                patientRelationshipDto.getRelationshipId(),
                patient,
                patientRelationshipDto.getName(),
                patientRelationshipDto.getAge(),
                patientRelationshipDto.getEmail(),
                patientRelationshipDto.getPhone(),
                patientRelationshipDto.getRelationshipWithPatient(),
                patientRelationshipDto.getProfession()
        );
    }
}
