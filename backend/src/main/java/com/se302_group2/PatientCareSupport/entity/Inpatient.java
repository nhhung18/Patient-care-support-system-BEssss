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
@Table(name = "Inpatient")
public class Inpatient {

    @Id
    @Column(name = "InpatientID", length = 50, nullable = false)
    private String inpatientId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PatientID", nullable = false)
    private Patient patient;

    @Column(name = "AdmissionDate", nullable = false)
    private LocalDate admissionDate;

    @Column(name = "Reasons", length = 255, nullable = false)
    private String reasons;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DoctorID", nullable = false)
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BedID", nullable = false)
    private Bed bed;
}
