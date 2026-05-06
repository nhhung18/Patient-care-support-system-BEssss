package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicalTestDto;
import java.util.List;

public interface MedicalTestService {
    MedicalTestDto createMedicalTest(MedicalTestDto medicalTestDto);
    MedicalTestDto getMedicalTestById(String testId);
    List<MedicalTestDto> getAllMedicalTests();
    List<MedicalTestDto> getMedicalTestsByOrderId(String orderId);
    MedicalTestDto updateMedicalTest(String testId, MedicalTestDto medicalTestDto);
    void deleteMedicalTest(String testId);
}
