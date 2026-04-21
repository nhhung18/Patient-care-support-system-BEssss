package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.PatientRelationshipDto;
import com.se302_group2.PatientCareSupport.service.PatientRelationshipService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patient-relationships")
@AllArgsConstructor
public class PatientRelationshipController {

    private PatientRelationshipService patientRelationshipService;

    @PostMapping
    public ResponseEntity<PatientRelationshipDto> createPatientRelationship(@RequestBody PatientRelationshipDto patientRelationshipDto) {
        PatientRelationshipDto savedPatientRelationship = patientRelationshipService.createPatientRelationship(patientRelationshipDto);
        return new ResponseEntity<>(savedPatientRelationship, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<PatientRelationshipDto> getPatientRelationshipById(@PathVariable("id") String relationshipId) {
        PatientRelationshipDto patientRelationshipDto = patientRelationshipService.getPatientRelationshipById(relationshipId);
        return ResponseEntity.ok(patientRelationshipDto);
    }

    @GetMapping
    public ResponseEntity<List<PatientRelationshipDto>> getAllPatientRelationships() {
        List<PatientRelationshipDto> patientRelationships = patientRelationshipService.getAllPatientRelationships();
        return ResponseEntity.ok(patientRelationships);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<PatientRelationshipDto>> getPatientRelationshipsByPatientId(@PathVariable("patientId") String patientId) {
        List<PatientRelationshipDto> patientRelationships = patientRelationshipService.getPatientRelationshipsByPatientId(patientId);
        return ResponseEntity.ok(patientRelationships);
    }

    @PutMapping("{id}")
    public ResponseEntity<PatientRelationshipDto> updatePatientRelationship(@PathVariable("id") String relationshipId, @RequestBody PatientRelationshipDto patientRelationshipDto) {
        PatientRelationshipDto updatedPatientRelationship = patientRelationshipService.updatePatientRelationship(relationshipId, patientRelationshipDto);
        return ResponseEntity.ok(updatedPatientRelationship);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePatientRelationship(@PathVariable("id") String relationshipId) {
        patientRelationshipService.deletePatientRelationship(relationshipId);
        return ResponseEntity.ok("PatientRelationship deleted successfully!.");
    }
}
