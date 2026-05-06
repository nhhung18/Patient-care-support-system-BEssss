package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.DoctorDto;
import com.se302_group2.PatientCareSupport.service.DoctorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@AllArgsConstructor
public class DoctorController {

    private DoctorService doctorService;

    @PostMapping
    public ResponseEntity<DoctorDto> createDoctor(@RequestBody DoctorDto doctorDto) {
        DoctorDto savedDoctor = doctorService.createDoctor(doctorDto);
        return new ResponseEntity<>(savedDoctor, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DoctorDto> getDoctorById(@PathVariable("id") String doctorId) {
        DoctorDto doctorDto = doctorService.getDoctorById(doctorId);
        return ResponseEntity.ok(doctorDto);
    }

    @GetMapping
    public ResponseEntity<List<DoctorDto>> getAllDoctors() {
        List<DoctorDto> doctors = doctorService.getAllDoctors();
        return ResponseEntity.ok(doctors);
    }

    @PutMapping("{id}")
    public ResponseEntity<DoctorDto> updateDoctor(@PathVariable("id") String doctorId, @RequestBody DoctorDto doctorDto) {
        DoctorDto updatedDoctor = doctorService.updateDoctor(doctorId, doctorDto);
        return ResponseEntity.ok(updatedDoctor);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable("id") String doctorId) {
        doctorService.deleteDoctor(doctorId);
        return ResponseEntity.ok("Doctor deleted successfully!.");
    }
}
