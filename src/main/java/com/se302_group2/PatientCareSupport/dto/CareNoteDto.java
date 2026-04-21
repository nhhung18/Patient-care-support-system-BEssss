package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CareNoteDto {
    private String noteId;
    private String treatmentId;
    private String nurseId;
    private LocalDateTime noteDate;
    private String content;
}
