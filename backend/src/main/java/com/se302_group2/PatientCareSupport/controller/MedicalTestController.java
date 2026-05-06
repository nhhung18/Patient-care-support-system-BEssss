package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.MedicalTestDto;
import com.se302_group2.PatientCareSupport.service.MedicalTestService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical-tests")
@AllArgsConstructor
public class MedicalTestController {

    private MedicalTestService medicalTestService;

    @PostMapping
    public ResponseEntity<MedicalTestDto> createMedicalTest(@RequestBody MedicalTestDto medicalTestDto) {
        MedicalTestDto savedMedicalTest = medicalTestService.createMedicalTest(medicalTestDto);
        return new ResponseEntity<>(savedMedicalTest, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<MedicalTestDto> getMedicalTestById(@PathVariable("id") String testId) {
        MedicalTestDto medicalTestDto = medicalTestService.getMedicalTestById(testId);
        return ResponseEntity.ok(medicalTestDto);
    }

    @GetMapping
    public ResponseEntity<List<MedicalTestDto>> getAllMedicalTests() {
        List<MedicalTestDto> medicalTests = medicalTestService.getAllMedicalTests();
        return ResponseEntity.ok(medicalTests);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<MedicalTestDto>> getMedicalTestsByOrderId(@PathVariable("orderId") String orderId) {
        List<MedicalTestDto> medicalTests = medicalTestService.getMedicalTestsByOrderId(orderId);
        return ResponseEntity.ok(medicalTests);
    }

    @PutMapping("{id}")
    public ResponseEntity<MedicalTestDto> updateMedicalTest(@PathVariable("id") String testId, @RequestBody MedicalTestDto medicalTestDto) {
        MedicalTestDto updatedMedicalTest = medicalTestService.updateMedicalTest(testId, medicalTestDto);
        return ResponseEntity.ok(updatedMedicalTest);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMedicalTest(@PathVariable("id") String testId) {
        medicalTestService.deleteMedicalTest(testId);
        return ResponseEntity.ok("MedicalTest deleted successfully!.");
    }
}
