package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.MedicalOrderDto;
import com.se302_group2.PatientCareSupport.service.MedicalOrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medical-orders")
@AllArgsConstructor
public class MedicalOrderController {

    private MedicalOrderService medicalOrderService;

    @PostMapping
    public ResponseEntity<MedicalOrderDto> createMedicalOrder(@RequestBody MedicalOrderDto medicalOrderDto) {
        MedicalOrderDto savedMedicalOrder = medicalOrderService.createMedicalOrder(medicalOrderDto);
        return new ResponseEntity<>(savedMedicalOrder, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<MedicalOrderDto> getMedicalOrderById(@PathVariable("id") String orderId) {
        MedicalOrderDto medicalOrderDto = medicalOrderService.getMedicalOrderById(orderId);
        return ResponseEntity.ok(medicalOrderDto);
    }

    @GetMapping
    public ResponseEntity<List<MedicalOrderDto>> getAllMedicalOrders() {
        List<MedicalOrderDto> medicalOrders = medicalOrderService.getAllMedicalOrders();
        return ResponseEntity.ok(medicalOrders);
    }

    @GetMapping("/treatment/{treatmentId}")
    public ResponseEntity<List<MedicalOrderDto>> getMedicalOrdersByTreatmentId(@PathVariable("treatmentId") String treatmentId) {
        List<MedicalOrderDto> medicalOrders = medicalOrderService.getMedicalOrdersByTreatmentId(treatmentId);
        return ResponseEntity.ok(medicalOrders);
    }

    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<MedicalOrderDto>> getMedicalOrdersByDoctorId(@PathVariable("doctorId") String doctorId) {
        List<MedicalOrderDto> medicalOrders = medicalOrderService.getMedicalOrdersByDoctorId(doctorId);
        return ResponseEntity.ok(medicalOrders);
    }

    @PutMapping("{id}")
    public ResponseEntity<MedicalOrderDto> updateMedicalOrder(@PathVariable("id") String orderId, @RequestBody MedicalOrderDto medicalOrderDto) {
        MedicalOrderDto updatedMedicalOrder = medicalOrderService.updateMedicalOrder(orderId, medicalOrderDto);
        return ResponseEntity.ok(updatedMedicalOrder);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteMedicalOrder(@PathVariable("id") String orderId) {
        medicalOrderService.deleteMedicalOrder(orderId);
        return ResponseEntity.ok("MedicalOrder deleted successfully!.");
    }
}
