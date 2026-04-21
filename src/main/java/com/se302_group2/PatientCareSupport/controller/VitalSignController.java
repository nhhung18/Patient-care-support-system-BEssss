package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.VitalSignDto;
import com.se302_group2.PatientCareSupport.service.VitalSignService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vital-signs")
@AllArgsConstructor
public class VitalSignController {

    private VitalSignService vitalSignService;

    @PostMapping
    public ResponseEntity<VitalSignDto> createVitalSign(@RequestBody VitalSignDto vitalSignDto) {
        VitalSignDto savedVitalSign = vitalSignService.createVitalSign(vitalSignDto);
        return new ResponseEntity<>(savedVitalSign, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<VitalSignDto> getVitalSignById(@PathVariable("id") String signId) {
        VitalSignDto vitalSignDto = vitalSignService.getVitalSignById(signId);
        return ResponseEntity.ok(vitalSignDto);
    }

    @GetMapping
    public ResponseEntity<List<VitalSignDto>> getAllVitalSigns() {
        List<VitalSignDto> vitalSigns = vitalSignService.getAllVitalSigns();
        return ResponseEntity.ok(vitalSigns);
    }

    @GetMapping("/treatment/{treatmentId}")
    public ResponseEntity<List<VitalSignDto>> getVitalSignsByTreatmentId(@PathVariable("treatmentId") String treatmentId) {
        List<VitalSignDto> vitalSigns = vitalSignService.getVitalSignsByTreatmentId(treatmentId);
        return ResponseEntity.ok(vitalSigns);
    }

    @GetMapping("/nurse/{nurseId}")
    public ResponseEntity<List<VitalSignDto>> getVitalSignsByNurseId(@PathVariable("nurseId") String nurseId) {
        List<VitalSignDto> vitalSigns = vitalSignService.getVitalSignsByNurseId(nurseId);
        return ResponseEntity.ok(vitalSigns);
    }

    @PutMapping("{id}")
    public ResponseEntity<VitalSignDto> updateVitalSign(@PathVariable("id") String signId, @RequestBody VitalSignDto vitalSignDto) {
        VitalSignDto updatedVitalSign = vitalSignService.updateVitalSign(signId, vitalSignDto);
        return ResponseEntity.ok(updatedVitalSign);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteVitalSign(@PathVariable("id") String signId) {
        vitalSignService.deleteVitalSign(signId);
        return ResponseEntity.ok("VitalSign deleted successfully!.");
    }
}
