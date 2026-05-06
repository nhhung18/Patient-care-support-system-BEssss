package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.TreatmentProcessDto;
import com.se302_group2.PatientCareSupport.service.TreatmentProcessService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/treatment-processes")
@AllArgsConstructor
public class TreatmentProcessController {

    private TreatmentProcessService treatmentProcessService;

    @PostMapping
    public ResponseEntity<TreatmentProcessDto> createTreatmentProcess(@RequestBody TreatmentProcessDto treatmentProcessDto) {
        TreatmentProcessDto savedTreatmentProcess = treatmentProcessService.createTreatmentProcess(treatmentProcessDto);
        return new ResponseEntity<>(savedTreatmentProcess, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<TreatmentProcessDto> getTreatmentProcessById(@PathVariable("id") String treatmentId) {
        TreatmentProcessDto treatmentProcessDto = treatmentProcessService.getTreatmentProcessById(treatmentId);
        return ResponseEntity.ok(treatmentProcessDto);
    }

    @GetMapping
    public ResponseEntity<List<TreatmentProcessDto>> getAllTreatmentProcesses() {
        List<TreatmentProcessDto> treatmentProcesses = treatmentProcessService.getAllTreatmentProcesses();
        return ResponseEntity.ok(treatmentProcesses);
    }

    @GetMapping("/inpatient/{inpatientId}")
    public ResponseEntity<List<TreatmentProcessDto>> getTreatmentProcessesByInpatientId(@PathVariable("inpatientId") String inpatientId) {
        List<TreatmentProcessDto> treatmentProcesses = treatmentProcessService.getTreatmentProcessesByInpatientId(inpatientId);
        return ResponseEntity.ok(treatmentProcesses);
    }

    @PutMapping("{id}")
    public ResponseEntity<TreatmentProcessDto> updateTreatmentProcess(@PathVariable("id") String treatmentId, @RequestBody TreatmentProcessDto treatmentProcessDto) {
        TreatmentProcessDto updatedTreatmentProcess = treatmentProcessService.updateTreatmentProcess(treatmentId, treatmentProcessDto);
        return ResponseEntity.ok(updatedTreatmentProcess);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTreatmentProcess(@PathVariable("id") String treatmentId) {
        treatmentProcessService.deleteTreatmentProcess(treatmentId);
        return ResponseEntity.ok("TreatmentProcess deleted successfully!.");
    }
}
