package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.TreatmentProcessDto;
import java.util.List;

public interface TreatmentProcessService {
    TreatmentProcessDto createTreatmentProcess(TreatmentProcessDto treatmentProcessDto);
    TreatmentProcessDto getTreatmentProcessById(String treatmentId);
    List<TreatmentProcessDto> getAllTreatmentProcesses();
    List<TreatmentProcessDto> getTreatmentProcessesByInpatientId(String inpatientId);
    TreatmentProcessDto updateTreatmentProcess(String treatmentId, TreatmentProcessDto treatmentProcessDto);
    void deleteTreatmentProcess(String treatmentId);
}
