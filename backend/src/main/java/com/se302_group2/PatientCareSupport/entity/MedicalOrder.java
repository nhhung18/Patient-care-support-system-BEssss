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
@Table(name = "MedicalOrder")
public class MedicalOrder {

    @Id
    @Column(name = "OrderID", length = 50, nullable = false)
    private String orderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TreatmentID", nullable = false)
    private TreatmentProcess treatmentProcess;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DoctorID", nullable = false)
    private Doctor doctor;

    @Column(name = "OrderDate", nullable = false)
    private LocalDateTime orderDate;

    @Column(name = "OrderType", length = 50, nullable = false)
    private String orderType;

    @Column(name = "Priority", length = 50)
    private String priority;

    @Column(name = "Instructions", columnDefinition = "TEXT")
    private String instructions;

    @Column(name = "Status", length = 50)
    private String status = "pending";
}
