package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.BedDto;
import com.se302_group2.PatientCareSupport.service.BedService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/beds")
@AllArgsConstructor
public class BedController {

    private BedService bedService;

    @PostMapping
    public ResponseEntity<BedDto> createBed(@RequestBody BedDto bedDto) {
        BedDto savedBed = bedService.createBed(bedDto);
        return new ResponseEntity<>(savedBed, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<BedDto> getBedById(@PathVariable("id") String bedId) {
        BedDto bedDto = bedService.getBedById(bedId);
        return ResponseEntity.ok(bedDto);
    }

    @GetMapping
    public ResponseEntity<List<BedDto>> getAllBeds() {
        List<BedDto> beds = bedService.getAllBeds();
        return ResponseEntity.ok(beds);
    }

    @GetMapping("/room/{roomId}")
    public ResponseEntity<List<BedDto>> getBedsByRoomId(@PathVariable("roomId") String roomId) {
        List<BedDto> beds = bedService.getBedsByRoomId(roomId);
        return ResponseEntity.ok(beds);
    }

    @PutMapping("{id}")
    public ResponseEntity<BedDto> updateBed(@PathVariable("id") String bedId, @RequestBody BedDto bedDto) {
        BedDto updatedBed = bedService.updateBed(bedId, bedDto);
        return ResponseEntity.ok(updatedBed);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBed(@PathVariable("id") String bedId) {
        bedService.deleteBed(bedId);
        return ResponseEntity.ok("Bed deleted successfully!.");
    }
}
