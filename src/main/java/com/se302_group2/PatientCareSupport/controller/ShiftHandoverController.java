package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.ShiftHandoverDto;
import com.se302_group2.PatientCareSupport.service.ShiftHandoverService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shift-handovers")
@AllArgsConstructor
public class ShiftHandoverController {

    private ShiftHandoverService shiftHandoverService;

    @PostMapping
    public ResponseEntity<ShiftHandoverDto> createShiftHandover(@RequestBody ShiftHandoverDto shiftHandoverDto) {
        ShiftHandoverDto savedHandover = shiftHandoverService.createShiftHandover(shiftHandoverDto);
        return new ResponseEntity<>(savedHandover, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ShiftHandoverDto> getShiftHandoverById(@PathVariable("id") String handoverId) {
        ShiftHandoverDto shiftHandoverDto = shiftHandoverService.getShiftHandoverById(handoverId);
        return ResponseEntity.ok(shiftHandoverDto);
    }

    @GetMapping
    public ResponseEntity<List<ShiftHandoverDto>> getAllShiftHandovers() {
        List<ShiftHandoverDto> handovers = shiftHandoverService.getAllShiftHandovers();
        return ResponseEntity.ok(handovers);
    }

    @GetMapping("/nurse-from/{nurseId}")
    public ResponseEntity<List<ShiftHandoverDto>> getShiftHandoversByNurseFromId(@PathVariable("nurseId") String nurseId) {
        List<ShiftHandoverDto> handovers = shiftHandoverService.getShiftHandoversByNurseFromId(nurseId);
        return ResponseEntity.ok(handovers);
    }

    @GetMapping("/nurse-to/{nurseId}")
    public ResponseEntity<List<ShiftHandoverDto>> getShiftHandoversByNurseToId(@PathVariable("nurseId") String nurseId) {
        List<ShiftHandoverDto> handovers = shiftHandoverService.getShiftHandoversByNurseToId(nurseId);
        return ResponseEntity.ok(handovers);
    }

    @GetMapping("/department/{departmentId}")
    public ResponseEntity<List<ShiftHandoverDto>> getShiftHandoversByDepartmentId(@PathVariable("departmentId") String departmentId) {
        List<ShiftHandoverDto> handovers = shiftHandoverService.getShiftHandoversByDepartmentId(departmentId);
        return ResponseEntity.ok(handovers);
    }

    @PutMapping("{id}")
    public ResponseEntity<ShiftHandoverDto> updateShiftHandover(@PathVariable("id") String handoverId, @RequestBody ShiftHandoverDto shiftHandoverDto) {
        ShiftHandoverDto updatedHandover = shiftHandoverService.updateShiftHandover(handoverId, shiftHandoverDto);
        return ResponseEntity.ok(updatedHandover);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteShiftHandover(@PathVariable("id") String handoverId) {
        shiftHandoverService.deleteShiftHandover(handoverId);
        return ResponseEntity.ok("ShiftHandover deleted successfully!.");
    }
}
