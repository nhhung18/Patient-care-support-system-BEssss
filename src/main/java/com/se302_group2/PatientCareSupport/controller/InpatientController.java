package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.InpatientDto;
import com.se302_group2.PatientCareSupport.service.InpatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inpatients")
@AllArgsConstructor
public class InpatientController {

    private InpatientService inpatientService;

    @PostMapping
    public ResponseEntity<InpatientDto> createInpatient(@RequestBody InpatientDto inpatientDto) {
        InpatientDto savedInpatient = inpatientService.createInpatient(inpatientDto);
        return new ResponseEntity<>(savedInpatient, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<InpatientDto> getInpatientById(@PathVariable("id") String inpatientId) {
        InpatientDto inpatientDto = inpatientService.getInpatientById(inpatientId);
        return ResponseEntity.ok(inpatientDto);
    }

    @GetMapping
    public ResponseEntity<List<InpatientDto>> getAllInpatients() {
        List<InpatientDto> inpatients = inpatientService.getAllInpatients();
        return ResponseEntity.ok(inpatients);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<InpatientDto>> getInpatientsByPatientId(@PathVariable("patientId") String patientId) {
        List<InpatientDto> inpatients = inpatientService.getInpatientsByPatientId(patientId);
        return ResponseEntity.ok(inpatients);
    }

    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<InpatientDto>> getInpatientsByDoctorId(@PathVariable("doctorId") String doctorId) {
        List<InpatientDto> inpatients = inpatientService.getInpatientsByDoctorId(doctorId);
        return ResponseEntity.ok(inpatients);
    }

    @PutMapping("{id}")
    public ResponseEntity<InpatientDto> updateInpatient(@PathVariable("id") String inpatientId, @RequestBody InpatientDto inpatientDto) {
        InpatientDto updatedInpatient = inpatientService.updateInpatient(inpatientId, inpatientDto);
        return ResponseEntity.ok(updatedInpatient);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteInpatient(@PathVariable("id") String inpatientId) {
        inpatientService.deleteInpatient(inpatientId);
        return ResponseEntity.ok("Inpatient deleted successfully!.");
    }
}
