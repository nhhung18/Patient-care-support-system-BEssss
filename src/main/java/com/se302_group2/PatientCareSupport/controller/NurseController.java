package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.NurseDto;
import com.se302_group2.PatientCareSupport.service.NurseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nurses")
@AllArgsConstructor
public class NurseController {

    private NurseService nurseService;

    @PostMapping
    public ResponseEntity<NurseDto> createNurse(@RequestBody NurseDto nurseDto) {
        NurseDto savedNurse = nurseService.createNurse(nurseDto);
        return new ResponseEntity<>(savedNurse, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<NurseDto> getNurseById(@PathVariable("id") String nurseId) {
        NurseDto nurseDto = nurseService.getNurseById(nurseId);
        return ResponseEntity.ok(nurseDto);
    }

    @GetMapping
    public ResponseEntity<List<NurseDto>> getAllNurses() {
        List<NurseDto> nurses = nurseService.getAllNurses();
        return ResponseEntity.ok(nurses);
    }

    @PutMapping("{id}")
    public ResponseEntity<NurseDto> updateNurse(@PathVariable("id") String nurseId, @RequestBody NurseDto nurseDto) {
        NurseDto updatedNurse = nurseService.updateNurse(nurseId, nurseDto);
        return ResponseEntity.ok(updatedNurse);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteNurse(@PathVariable("id") String nurseId) {
        nurseService.deleteNurse(nurseId);
        return ResponseEntity.ok("Nurse deleted successfully!.");
    }
}
