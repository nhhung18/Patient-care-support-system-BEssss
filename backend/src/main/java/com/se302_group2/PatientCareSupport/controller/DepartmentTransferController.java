package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.DepartmentTransferDto;
import com.se302_group2.PatientCareSupport.service.DepartmentTransferService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/department-transfers")
@AllArgsConstructor
public class DepartmentTransferController {

    private DepartmentTransferService departmentTransferService;

    @PostMapping
    public ResponseEntity<DepartmentTransferDto> createDepartmentTransfer(@RequestBody DepartmentTransferDto departmentTransferDto) {
        DepartmentTransferDto savedTransfer = departmentTransferService.createDepartmentTransfer(departmentTransferDto);
        return new ResponseEntity<>(savedTransfer, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DepartmentTransferDto> getDepartmentTransferById(@PathVariable("id") String transferId) {
        DepartmentTransferDto departmentTransferDto = departmentTransferService.getDepartmentTransferById(transferId);
        return ResponseEntity.ok(departmentTransferDto);
    }

    @GetMapping
    public ResponseEntity<List<DepartmentTransferDto>> getAllDepartmentTransfers() {
        List<DepartmentTransferDto> transfers = departmentTransferService.getAllDepartmentTransfers();
        return ResponseEntity.ok(transfers);
    }

    @GetMapping("/inpatient/{inpatientId}")
    public ResponseEntity<List<DepartmentTransferDto>> getDepartmentTransfersByInpatientId(@PathVariable("inpatientId") String inpatientId) {
        List<DepartmentTransferDto> transfers = departmentTransferService.getDepartmentTransfersByInpatientId(inpatientId);
        return ResponseEntity.ok(transfers);
    }

    @GetMapping("/from-dept/{departmentId}")
    public ResponseEntity<List<DepartmentTransferDto>> getDepartmentTransfersByFromDeptId(@PathVariable("departmentId") String departmentId) {
        List<DepartmentTransferDto> transfers = departmentTransferService.getDepartmentTransfersByFromDeptId(departmentId);
        return ResponseEntity.ok(transfers);
    }

    @GetMapping("/to-dept/{departmentId}")
    public ResponseEntity<List<DepartmentTransferDto>> getDepartmentTransfersByToDeptId(@PathVariable("departmentId") String departmentId) {
        List<DepartmentTransferDto> transfers = departmentTransferService.getDepartmentTransfersByToDeptId(departmentId);
        return ResponseEntity.ok(transfers);
    }

    @PutMapping("{id}")
    public ResponseEntity<DepartmentTransferDto> updateDepartmentTransfer(@PathVariable("id") String transferId, @RequestBody DepartmentTransferDto departmentTransferDto) {
        DepartmentTransferDto updatedTransfer = departmentTransferService.updateDepartmentTransfer(transferId, departmentTransferDto);
        return ResponseEntity.ok(updatedTransfer);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartmentTransfer(@PathVariable("id") String transferId) {
        departmentTransferService.deleteDepartmentTransfer(transferId);
        return ResponseEntity.ok("DepartmentTransfer deleted successfully!.");
    }
}
