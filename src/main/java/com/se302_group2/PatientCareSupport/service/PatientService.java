package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.PatientDto;
import java.util.List;

public interface PatientService {
    PatientDto createPatient(PatientDto patientDto);
    PatientDto getPatientById(String patientId);
    List<PatientDto> getAllPatients();
    PatientDto updatePatient(String patientId, PatientDto patientDto);
    void deletePatient(String patientId);
}
