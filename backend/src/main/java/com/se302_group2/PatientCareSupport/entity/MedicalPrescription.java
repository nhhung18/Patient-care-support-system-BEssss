package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "MedicalPrescription")
public class MedicalPrescription {

    @Id
    @Column(name = "PrescriptionID", length = 50, nullable = false)
    private String prescriptionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderID", nullable = false)
    private MedicalOrder medicalOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MedicineID", nullable = false)
    private Medicine medicine;

    @Column(name = "Dose", length = 100, nullable = false)
    private String dose;

    @Column(name = "Route", length = 100)
    private String route;

    @Column(name = "Frequency", length = 100)
    private String frequency;

    @Column(name = "Duration", length = 100)
    private String duration;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
