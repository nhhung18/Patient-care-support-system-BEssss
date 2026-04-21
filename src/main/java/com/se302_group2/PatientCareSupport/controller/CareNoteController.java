package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.CareNoteDto;
import com.se302_group2.PatientCareSupport.service.CareNoteService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/care-notes")
@AllArgsConstructor
public class CareNoteController {

    private CareNoteService careNoteService;

    @PostMapping
    public ResponseEntity<CareNoteDto> createCareNote(@RequestBody CareNoteDto careNoteDto) {
        CareNoteDto savedCareNote = careNoteService.createCareNote(careNoteDto);
        return new ResponseEntity<>(savedCareNote, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CareNoteDto> getCareNoteById(@PathVariable("id") String noteId) {
        CareNoteDto careNoteDto = careNoteService.getCareNoteById(noteId);
        return ResponseEntity.ok(careNoteDto);
    }

    @GetMapping
    public ResponseEntity<List<CareNoteDto>> getAllCareNotes() {
        List<CareNoteDto> careNotes = careNoteService.getAllCareNotes();
        return ResponseEntity.ok(careNotes);
    }

    @GetMapping("/treatment/{treatmentId}")
    public ResponseEntity<List<CareNoteDto>> getCareNotesByTreatmentId(@PathVariable("treatmentId") String treatmentId) {
        List<CareNoteDto> careNotes = careNoteService.getCareNotesByTreatmentId(treatmentId);
        return ResponseEntity.ok(careNotes);
    }

    @GetMapping("/nurse/{nurseId}")
    public ResponseEntity<List<CareNoteDto>> getCareNotesByNurseId(@PathVariable("nurseId") String nurseId) {
        List<CareNoteDto> careNotes = careNoteService.getCareNotesByNurseId(nurseId);
        return ResponseEntity.ok(careNotes);
    }

    @PutMapping("{id}")
    public ResponseEntity<CareNoteDto> updateCareNote(@PathVariable("id") String noteId, @RequestBody CareNoteDto careNoteDto) {
        CareNoteDto updatedCareNote = careNoteService.updateCareNote(noteId, careNoteDto);
        return ResponseEntity.ok(updatedCareNote);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCareNote(@PathVariable("id") String noteId) {
        careNoteService.deleteCareNote(noteId);
        return ResponseEntity.ok("CareNote deleted successfully!.");
    }
}
