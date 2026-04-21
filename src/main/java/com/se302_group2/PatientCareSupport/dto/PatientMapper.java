package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Patient;

public class PatientMapper {

    public static PatientDto mapToPatientDto(Patient patient) {
        return new PatientDto(
                patient.getPatientId(),
                patient.getBirthday(),
                patient.getAddress(),
                patient.getGender(),
                patient.getPhone(),
                patient.getCccd(),
                patient.getBhyt()
        );
    }

    public static Patient mapToPatient(PatientDto patientDto) {
        return new Patient(
                patientDto.getPatientId(),
                patientDto.getBirthday(),
                patientDto.getAddress(),
                patientDto.getGender(),
                patientDto.getPhone(),
                patientDto.getCccd(),
                patientDto.getBhyt()
        );
    }
}
