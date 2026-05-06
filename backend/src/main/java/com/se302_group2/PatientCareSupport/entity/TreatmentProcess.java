package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "TreatmentProcess")
public class TreatmentProcess {

    @Id
    @Column(name = "TreatmentID", length = 50, nullable = false)
    private String treatmentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "InpatientID", nullable = false)
    private Inpatient inpatient;

    @Column(name = "StartDate", nullable = false)
    private LocalDate startDate;

    @Column(name = "EndDate")
    private LocalDate endDate;

    @Column(name = "MainDiagnosis", length = 255, nullable = false)
    private String mainDiagnosis;

    @Column(name = "TreatmentPlan", length = 255)
    private String treatmentPlan;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
