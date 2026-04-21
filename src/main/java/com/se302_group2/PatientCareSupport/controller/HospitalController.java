package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.HospitalDto;
import com.se302_group2.PatientCareSupport.service.HospitalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hospitals")
@AllArgsConstructor
public class HospitalController {

    private HospitalService hospitalService;

    @PostMapping
    public ResponseEntity<HospitalDto> createHospital(@RequestBody HospitalDto hospitalDto) {
        HospitalDto savedHospital = hospitalService.createHospital(hospitalDto);
        return new ResponseEntity<>(savedHospital, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<HospitalDto> getHospitalById(@PathVariable("id") String hospitalId) {
        HospitalDto hospitalDto = hospitalService.getHospitalById(hospitalId);
        return ResponseEntity.ok(hospitalDto);
    }

    @GetMapping
    public ResponseEntity<List<HospitalDto>> getAllHospitals() {
        List<HospitalDto> hospitals = hospitalService.getAllHospitals();
        return ResponseEntity.ok(hospitals);
    }

    @PutMapping("{id}")
    public ResponseEntity<HospitalDto> updateHospital(@PathVariable("id") String hospitalId, @RequestBody HospitalDto hospitalDto) {
        HospitalDto updatedHospital = hospitalService.updateHospital(hospitalId, hospitalDto);
        return ResponseEntity.ok(updatedHospital);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteHospital(@PathVariable("id") String hospitalId) {
        hospitalService.deleteHospital(hospitalId);
        return ResponseEntity.ok("Hospital deleted successfully!.");
    }
}
