package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.MedicineRecallDto;
import com.se302_group2.PatientCareSupport.service.MedicineRecallService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicine-recalls")
@AllArgsConstructor
public class MedicineRecallController {

    private MedicineRecallService medicineRecallService;

    @PostMapping
    public ResponseEntity<MedicineRecallDto> createMedicineRecall(@RequestBody MedicineRecallDto medicineRecallDto) {
        MedicineRecallDto savedRecall = medicineRecallService.createMedicineRecall(medicineRecallDto);
        return new ResponseEntity<>(savedRecall, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<MedicineRecallDto> getMedicineRecallById(@PathVariable("id") String recallId) {
        MedicineRecallDto medicineRecallDto = medicineRecallService.getMedicineRecallById(recallId);
        return ResponseEntity.ok(medicineRecallDto);
    }

    @GetMapping
    public ResponseEntity<List<MedicineRecallDto>> getAllMedicineRecalls() {
        List<MedicineRecallDto> recalls = medicineRecallService.getAllMedicineRecalls();
        return ResponseEntity.ok(recalls);
    }

    @GetMapping("/prescription/{prescriptionId}")
    public ResponseEntity<List<MedicineRecallDto>> getMedicineRecallsByPrescriptionId(@PathVariable("prescriptionId") String prescriptionId) {
        List<MedicineRecallDto> recalls = medicineRecallService.getMedicineRecallsByPrescriptionId(prescriptionId);
        return ResponseEntity.ok(recalls);
    }

    @GetMapping("/nurse/{nurseId}")
    public ResponseEntity<List<MedicineRecallDto>> getMedicineRecallsByNurseId(@PathVariable("nurseId") String nurseId) {
        List<MedicineRecallDto> recalls = medicineRecallService.getMedicineRecallsByNurseId(nurseId);
        return ResponseEntity.ok(recalls);
    }

    @PutMapping("{id}")
    public ResponseEntity<MedicineRecallDto> updateMedicineRecall(@PathVariable("id") String recallId, @RequestBody MedicineRecallDto medicineRecallDto) {
        MedicineRecallDto updatedRecall = medicineRecallService.updateMedicineRecall(recallId, medicineRecallDto);
        return ResponseEntity.ok(updatedRecall);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMedicineRecall(@PathVariable("id") String recallId) {
        medicineRecallService.deleteMedicineRecall(recallId);
        return ResponseEntity.ok("MedicineRecall deleted successfully!.");
    }
}
