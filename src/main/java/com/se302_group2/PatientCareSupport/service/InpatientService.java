package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.InpatientDto;
import java.util.List;

public interface InpatientService {
    InpatientDto createInpatient(InpatientDto inpatientDto);
    InpatientDto getInpatientById(String inpatientId);
    List<InpatientDto> getAllInpatients();
    List<InpatientDto> getInpatientsByPatientId(String patientId);
    List<InpatientDto> getInpatientsByDoctorId(String doctorId);
    InpatientDto updateInpatient(String inpatientId, InpatientDto inpatientDto);
    void deleteInpatient(String inpatientId);
}
