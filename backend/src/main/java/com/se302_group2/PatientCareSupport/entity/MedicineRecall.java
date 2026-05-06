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
@Table(name = "MedicineRecall")
public class MedicineRecall {

    @Id
    @Column(name = "RecallID", length = 50, nullable = false)
    private String recallId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PrescriptionID", nullable = false)
    private MedicalPrescription medicalPrescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NurseID", nullable = false)
    private Nurse nurse;

    @Column(name = "RecallDate", nullable = false)
    private LocalDateTime recallDate;

    @Column(name = "Quantity", nullable = false)
    private Integer quantity;

    @Column(name = "Reasons", length = 255, nullable = false)
    private String reasons;
}
