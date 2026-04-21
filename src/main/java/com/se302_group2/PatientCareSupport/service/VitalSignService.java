package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.VitalSignDto;
import java.util.List;

public interface VitalSignService {
    VitalSignDto createVitalSign(VitalSignDto vitalSignDto);
    VitalSignDto getVitalSignById(String signId);
    List<VitalSignDto> getAllVitalSigns();
    List<VitalSignDto> getVitalSignsByTreatmentId(String treatmentId);
    List<VitalSignDto> getVitalSignsByNurseId(String nurseId);
    VitalSignDto updateVitalSign(String signId, VitalSignDto vitalSignDto);
    void deleteVitalSign(String signId);
}
