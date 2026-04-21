package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.MedicalPrescriptionDto;
import com.se302_group2.PatientCareSupport.service.MedicalPrescriptionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical-prescriptions")
@AllArgsConstructor
public class MedicalPrescriptionController {

    private MedicalPrescriptionService medicalPrescriptionService;

    @PostMapping
    public ResponseEntity<MedicalPrescriptionDto> createMedicalPrescription(@RequestBody MedicalPrescriptionDto medicalPrescriptionDto) {
        MedicalPrescriptionDto savedMedicalPrescription = medicalPrescriptionService.createMedicalPrescription(medicalPrescriptionDto);
        return new ResponseEntity<>(savedMedicalPrescription, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<MedicalPrescriptionDto> getMedicalPrescriptionById(@PathVariable("id") String prescriptionId) {
        MedicalPrescriptionDto medicalPrescriptionDto = medicalPrescriptionService.getMedicalPrescriptionById(prescriptionId);
        return ResponseEntity.ok(medicalPrescriptionDto);
    }

    @GetMapping
    public ResponseEntity<List<MedicalPrescriptionDto>> getAllMedicalPrescriptions() {
        List<MedicalPrescriptionDto> medicalPrescriptions = medicalPrescriptionService.getAllMedicalPrescriptions();
        return ResponseEntity.ok(medicalPrescriptions);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<MedicalPrescriptionDto>> getMedicalPrescriptionsByOrderId(@PathVariable("orderId") String orderId) {
        List<MedicalPrescriptionDto> medicalPrescriptions = medicalPrescriptionService.getMedicalPrescriptionsByOrderId(orderId);
        return ResponseEntity.ok(medicalPrescriptions);
    }

    @PutMapping("{id}")
    public ResponseEntity<MedicalPrescriptionDto> updateMedicalPrescription(@PathVariable("id") String prescriptionId, @RequestBody MedicalPrescriptionDto medicalPrescriptionDto) {
        MedicalPrescriptionDto updatedMedicalPrescription = medicalPrescriptionService.updateMedicalPrescription(prescriptionId, medicalPrescriptionDto);
        return ResponseEntity.ok(updatedMedicalPrescription);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMedicalPrescription(@PathVariable("id") String prescriptionId) {
        medicalPrescriptionService.deleteMedicalPrescription(prescriptionId);
        return ResponseEntity.ok("MedicalPrescription deleted successfully!.");
    }
}
