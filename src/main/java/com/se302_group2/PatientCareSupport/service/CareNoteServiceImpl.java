package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.CareNoteDto;
import com.se302_group2.PatientCareSupport.dto.CareNoteMapper;
import com.se302_group2.PatientCareSupport.entity.CareNote;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.CareNoteRepository;
import com.se302_group2.PatientCareSupport.repository.NurseRepository;
import com.se302_group2.PatientCareSupport.repository.TreatmentProcessRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CareNoteServiceImpl implements CareNoteService {

    private CareNoteRepository careNoteRepository;
    private TreatmentProcessRepository treatmentProcessRepository;
    private NurseRepository nurseRepository;

    @Override
    public CareNoteDto createCareNote(CareNoteDto careNoteDto) {
        if (careNoteDto.getNoteId() == null || careNoteDto.getNoteId().isEmpty()) {
            careNoteDto.setNoteId(UUID.randomUUID().toString());
        }

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(careNoteDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + careNoteDto.getTreatmentId()));

        Nurse nurse = nurseRepository.findById(careNoteDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + careNoteDto.getNurseId()));

        CareNote careNote = CareNoteMapper.mapToCareNote(careNoteDto, treatmentProcess, nurse);
        CareNote savedCareNote = careNoteRepository.save(careNote);
        return CareNoteMapper.mapToCareNoteDto(savedCareNote);
    }

    @Override
    public CareNoteDto getCareNoteById(String noteId) {
        CareNote careNote = careNoteRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("CareNote not found with id: " + noteId));
        return CareNoteMapper.mapToCareNoteDto(careNote);
    }

    @Override
    public List<CareNoteDto> getAllCareNotes() {
        List<CareNote> careNotes = careNoteRepository.findAll();
        return careNotes.stream().map(CareNoteMapper::mapToCareNoteDto).collect(Collectors.toList());
    }

    @Override
    public List<CareNoteDto> getCareNotesByTreatmentId(String treatmentId) {
        List<CareNote> careNotes = careNoteRepository.findByTreatmentProcess_TreatmentId(treatmentId);
        return careNotes.stream().map(CareNoteMapper::mapToCareNoteDto).collect(Collectors.toList());
    }

    @Override
    public List<CareNoteDto> getCareNotesByNurseId(String nurseId) {
        List<CareNote> careNotes = careNoteRepository.findByNurse_NurseId(nurseId);
        return careNotes.stream().map(CareNoteMapper::mapToCareNoteDto).collect(Collectors.toList());
    }

    @Override
    public CareNoteDto updateCareNote(String noteId, CareNoteDto careNoteDto) {
        CareNote careNote = careNoteRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("CareNote not found with id: " + noteId));

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(careNoteDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + careNoteDto.getTreatmentId()));

        Nurse nurse = nurseRepository.findById(careNoteDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + careNoteDto.getNurseId()));

        careNote.setTreatmentProcess(treatmentProcess);
        careNote.setNurse(nurse);
        careNote.setNoteDate(careNoteDto.getNoteDate());
        careNote.setContent(careNoteDto.getContent());

        CareNote updatedCareNote = careNoteRepository.save(careNote);
        return CareNoteMapper.mapToCareNoteDto(updatedCareNote);
    }

    @Override
    public void deleteCareNote(String noteId) {
        CareNote careNote = careNoteRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("CareNote not found with id: " + noteId));
        careNoteRepository.delete(careNote);
    }
}
