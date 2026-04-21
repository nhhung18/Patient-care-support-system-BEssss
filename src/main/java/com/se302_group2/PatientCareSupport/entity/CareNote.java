package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CareNote")
public class CareNote {

    @Id
    @Column(name = "NoteID", length = 50, nullable = false)
    private String noteId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TreatmentID", nullable = false)
    private TreatmentProcess treatmentProcess;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NurseID", nullable = false)
    private Nurse nurse;

    @Column(name = "NoteDate", nullable = false)
    private LocalDateTime noteDate;

    @Column(name = "Content", columnDefinition = "TEXT", nullable = false)
    private String content;
}
