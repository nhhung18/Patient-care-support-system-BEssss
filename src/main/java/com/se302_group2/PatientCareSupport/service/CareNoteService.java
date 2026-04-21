package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.CareNoteDto;
import java.util.List;

public interface CareNoteService {
    CareNoteDto createCareNote(CareNoteDto careNoteDto);
    CareNoteDto getCareNoteById(String noteId);
    List<CareNoteDto> getAllCareNotes();
    List<CareNoteDto> getCareNotesByTreatmentId(String treatmentId);
    List<CareNoteDto> getCareNotesByNurseId(String nurseId);
    CareNoteDto updateCareNote(String noteId, CareNoteDto careNoteDto);
    void deleteCareNote(String noteId);
}
