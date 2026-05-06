package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.CareNote;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;

public class CareNoteMapper {

    public static CareNoteDto mapToCareNoteDto(CareNote careNote) {
        return new CareNoteDto(
                careNote.getNoteId(),
                careNote.getTreatmentProcess() != null ? careNote.getTreatmentProcess().getTreatmentId() : null,
                careNote.getNurse() != null ? careNote.getNurse().getNurseId() : null,
                careNote.getNoteDate(),
                careNote.getContent()
        );
    }

    public static CareNote mapToCareNote(CareNoteDto careNoteDto, TreatmentProcess treatmentProcess, Nurse nurse) {
        return new CareNote(
                careNoteDto.getNoteId(),
                treatmentProcess,
                nurse,
                careNoteDto.getNoteDate(),
                careNoteDto.getContent()
        );
    }
}
