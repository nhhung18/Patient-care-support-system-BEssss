package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.NutritionScreenDto;
import java.util.List;

public interface NutritionScreenService {
    NutritionScreenDto createNutritionScreen(NutritionScreenDto nutritionScreenDto);
    NutritionScreenDto getNutritionScreenById(String screenId);
    List<NutritionScreenDto> getAllNutritionScreens();
    List<NutritionScreenDto> getNutritionScreensByTreatmentId(String treatmentId);
    List<NutritionScreenDto> getNutritionScreensByNurseId(String nurseId);
    NutritionScreenDto updateNutritionScreen(String screenId, NutritionScreenDto nutritionScreenDto);
    void deleteNutritionScreen(String screenId);
}
