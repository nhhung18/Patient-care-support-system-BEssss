package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "VitalSign")
public class VitalSign {

    @Id
    @Column(name = "SignID", length = 50, nullable = false)
    private String signId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TreatmentID", nullable = false)
    private TreatmentProcess treatmentProcess;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NurseID", nullable = false)
    private Nurse nurse;

    @Column(name = "RecordTime", nullable = false)
    private LocalDateTime recordTime;

    @Column(name = "Temperature", precision = 4, scale = 1)
    private BigDecimal temperature;

    @Column(name = "BloodPressure", length = 20)
    private String bloodPressure;

    @Column(name = "Pulse")
    private Integer pulse;

    @Column(name = "BreathRate")
    private Integer breathRate;

    @Column(name = "SpO2", precision = 5, scale = 2)
    private BigDecimal spO2;

    @Column(name = "Weight", precision = 5, scale = 2)
    private BigDecimal weight;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
