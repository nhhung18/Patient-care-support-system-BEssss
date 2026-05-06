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
@Table(name = "NutritionScreen")
public class NutritionScreen {

    @Id
    @Column(name = "ScreenID", length = 50, nullable = false)
    private String screenId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TreatmentID", nullable = false)
    private TreatmentProcess treatmentProcess;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NurseID", nullable = false)
    private Nurse nurse;

    @Column(name = "ScreenDate", nullable = false)
    private LocalDateTime screenDate;

    @Column(name = "DietType", length = 100, nullable = false)
    private String dietType;

    @Column(name = "Allergies", columnDefinition = "TEXT")
    private String allergies;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
