package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.NutritionScreenDto;
import com.se302_group2.PatientCareSupport.service.NutritionScreenService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nutrition-screens")
@AllArgsConstructor
public class NutritionScreenController {

    private NutritionScreenService nutritionScreenService;

    @PostMapping
    public ResponseEntity<NutritionScreenDto> createNutritionScreen(@RequestBody NutritionScreenDto nutritionScreenDto) {
        NutritionScreenDto savedNutritionScreen = nutritionScreenService.createNutritionScreen(nutritionScreenDto);
        return new ResponseEntity<>(savedNutritionScreen, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<NutritionScreenDto> getNutritionScreenById(@PathVariable("id") String screenId) {
        NutritionScreenDto nutritionScreenDto = nutritionScreenService.getNutritionScreenById(screenId);
        return ResponseEntity.ok(nutritionScreenDto);
    }

    @GetMapping
    public ResponseEntity<List<NutritionScreenDto>> getAllNutritionScreens() {
        List<NutritionScreenDto> nutritionScreens = nutritionScreenService.getAllNutritionScreens();
        return ResponseEntity.ok(nutritionScreens);
    }

    @GetMapping("/treatment/{treatmentId}")
    public ResponseEntity<List<NutritionScreenDto>> getNutritionScreensByTreatmentId(@PathVariable("treatmentId") String treatmentId) {
        List<NutritionScreenDto> nutritionScreens = nutritionScreenService.getNutritionScreensByTreatmentId(treatmentId);
        return ResponseEntity.ok(nutritionScreens);
    }

    @GetMapping("/nurse/{nurseId}")
    public ResponseEntity<List<NutritionScreenDto>> getNutritionScreensByNurseId(@PathVariable("nurseId") String nurseId) {
        List<NutritionScreenDto> nutritionScreens = nutritionScreenService.getNutritionScreensByNurseId(nurseId);
        return ResponseEntity.ok(nutritionScreens);
    }

    @PutMapping("{id}")
    public ResponseEntity<NutritionScreenDto> updateNutritionScreen(@PathVariable("id") String screenId, @RequestBody NutritionScreenDto nutritionScreenDto) {
        NutritionScreenDto updatedNutritionScreen = nutritionScreenService.updateNutritionScreen(screenId, nutritionScreenDto);
        return ResponseEntity.ok(updatedNutritionScreen);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteNutritionScreen(@PathVariable("id") String screenId) {
        nutritionScreenService.deleteNutritionScreen(screenId);
        return ResponseEntity.ok("NutritionScreen deleted successfully!.");
    }
}
