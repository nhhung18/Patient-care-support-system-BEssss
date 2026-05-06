package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.NutritionScreen;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;

public class NutritionScreenMapper {

    public static NutritionScreenDto mapToNutritionScreenDto(NutritionScreen nutritionScreen) {
        return new NutritionScreenDto(
                nutritionScreen.getScreenId(),
                nutritionScreen.getTreatmentProcess() != null ? nutritionScreen.getTreatmentProcess().getTreatmentId() : null,
                nutritionScreen.getNurse() != null ? nutritionScreen.getNurse().getNurseId() : null,
                nutritionScreen.getScreenDate(),
                nutritionScreen.getDietType(),
                nutritionScreen.getAllergies(),
                nutritionScreen.getNotes()
        );
    }

    public static NutritionScreen mapToNutritionScreen(NutritionScreenDto nutritionScreenDto, TreatmentProcess treatmentProcess, Nurse nurse) {
        return new NutritionScreen(
                nutritionScreenDto.getScreenId(),
                treatmentProcess,
                nurse,
                nutritionScreenDto.getScreenDate(),
                nutritionScreenDto.getDietType(),
                nutritionScreenDto.getAllergies(),
                nutritionScreenDto.getNotes()
        );
    }
}
