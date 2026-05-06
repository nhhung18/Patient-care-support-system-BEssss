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
@Table(name = "MedicalTest")
public class MedicalTest {

    @Id
    @Column(name = "TestID", length = 50, nullable = false)
    private String testId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderID", nullable = false)
    private MedicalOrder medicalOrder;

    @Column(name = "TestName", length = 255, nullable = false)
    private String testName;

    @Column(name = "SampleTime")
    private LocalDateTime sampleTime;

    @Column(name = "Result", columnDefinition = "TEXT")
    private String result;

    @Column(name = "Status", length = 50)
    private String status = "pending";

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
