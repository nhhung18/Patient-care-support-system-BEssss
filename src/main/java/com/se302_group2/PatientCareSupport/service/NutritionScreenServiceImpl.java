package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.NutritionScreenDto;
import com.se302_group2.PatientCareSupport.dto.NutritionScreenMapper;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.NutritionScreen;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.NurseRepository;
import com.se302_group2.PatientCareSupport.repository.NutritionScreenRepository;
import com.se302_group2.PatientCareSupport.repository.TreatmentProcessRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class NutritionScreenServiceImpl implements NutritionScreenService {

    private NutritionScreenRepository nutritionScreenRepository;
    private TreatmentProcessRepository treatmentProcessRepository;
    private NurseRepository nurseRepository;

    @Override
    public NutritionScreenDto createNutritionScreen(NutritionScreenDto nutritionScreenDto) {
        if (nutritionScreenDto.getScreenId() == null || nutritionScreenDto.getScreenId().isEmpty()) {
            nutritionScreenDto.setScreenId(UUID.randomUUID().toString());
        }

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(nutritionScreenDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + nutritionScreenDto.getTreatmentId()));

        Nurse nurse = nurseRepository.findById(nutritionScreenDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + nutritionScreenDto.getNurseId()));

        NutritionScreen nutritionScreen = NutritionScreenMapper.mapToNutritionScreen(nutritionScreenDto, treatmentProcess, nurse);
        NutritionScreen savedNutritionScreen = nutritionScreenRepository.save(nutritionScreen);
        return NutritionScreenMapper.mapToNutritionScreenDto(savedNutritionScreen);
    }

    @Override
    public NutritionScreenDto getNutritionScreenById(String screenId) {
        NutritionScreen nutritionScreen = nutritionScreenRepository.findById(screenId)
                .orElseThrow(() -> new ResourceNotFoundException("NutritionScreen not found with id: " + screenId));
        return NutritionScreenMapper.mapToNutritionScreenDto(nutritionScreen);
    }

    @Override
    public List<NutritionScreenDto> getAllNutritionScreens() {
        List<NutritionScreen> nutritionScreens = nutritionScreenRepository.findAll();
        return nutritionScreens.stream().map(NutritionScreenMapper::mapToNutritionScreenDto).collect(Collectors.toList());
    }

    @Override
    public List<NutritionScreenDto> getNutritionScreensByTreatmentId(String treatmentId) {
        List<NutritionScreen> nutritionScreens = nutritionScreenRepository.findByTreatmentProcess_TreatmentId(treatmentId);
        return nutritionScreens.stream().map(NutritionScreenMapper::mapToNutritionScreenDto).collect(Collectors.toList());
    }

    @Override
    public List<NutritionScreenDto> getNutritionScreensByNurseId(String nurseId) {
        List<NutritionScreen> nutritionScreens = nutritionScreenRepository.findByNurse_NurseId(nurseId);
        return nutritionScreens.stream().map(NutritionScreenMapper::mapToNutritionScreenDto).collect(Collectors.toList());
    }

    @Override
    public NutritionScreenDto updateNutritionScreen(String screenId, NutritionScreenDto nutritionScreenDto) {
        NutritionScreen nutritionScreen = nutritionScreenRepository.findById(screenId)
                .orElseThrow(() -> new ResourceNotFoundException("NutritionScreen not found with id: " + screenId));

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(nutritionScreenDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + nutritionScreenDto.getTreatmentId()));

        Nurse nurse = nurseRepository.findById(nutritionScreenDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + nutritionScreenDto.getNurseId()));

        nutritionScreen.setTreatmentProcess(treatmentProcess);
        nutritionScreen.setNurse(nurse);
        nutritionScreen.setScreenDate(nutritionScreenDto.getScreenDate());
        nutritionScreen.setDietType(nutritionScreenDto.getDietType());
        nutritionScreen.setAllergies(nutritionScreenDto.getAllergies());
        nutritionScreen.setNotes(nutritionScreenDto.getNotes());

        NutritionScreen updatedNutritionScreen = nutritionScreenRepository.save(nutritionScreen);
        return NutritionScreenMapper.mapToNutritionScreenDto(updatedNutritionScreen);
    }

    @Override
    public void deleteNutritionScreen(String screenId) {
        NutritionScreen nutritionScreen = nutritionScreenRepository.findById(screenId)
                .orElseThrow(() -> new ResourceNotFoundException("NutritionScreen not found with id: " + screenId));
        nutritionScreenRepository.delete(nutritionScreen);
    }
}
