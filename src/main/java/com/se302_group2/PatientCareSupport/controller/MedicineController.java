package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.MedicineDto;
import com.se302_group2.PatientCareSupport.service.MedicineService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@AllArgsConstructor
public class MedicineController {

    private MedicineService medicineService;

    @PostMapping
    public ResponseEntity<MedicineDto> createMedicine(@RequestBody MedicineDto medicineDto) {
        MedicineDto savedMedicine = medicineService.createMedicine(medicineDto);
        return new ResponseEntity<>(savedMedicine, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<MedicineDto> getMedicineById(@PathVariable("id") String medicineId) {
        MedicineDto medicineDto = medicineService.getMedicineById(medicineId);
        return ResponseEntity.ok(medicineDto);
    }

    @GetMapping
    public ResponseEntity<List<MedicineDto>> getAllMedicines() {
        List<MedicineDto> medicines = medicineService.getAllMedicines();
        return ResponseEntity.ok(medicines);
    }

    @PutMapping("{id}")
    public ResponseEntity<MedicineDto> updateMedicine(@PathVariable("id") String medicineId, @RequestBody MedicineDto medicineDto) {
        MedicineDto updatedMedicine = medicineService.updateMedicine(medicineId, medicineDto);
        return ResponseEntity.ok(updatedMedicine);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMedicine(@PathVariable("id") String medicineId) {
        medicineService.deleteMedicine(medicineId);
        return ResponseEntity.ok("Medicine deleted successfully!.");
    }
}
