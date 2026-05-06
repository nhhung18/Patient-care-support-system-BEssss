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
@Table(name = "ShiftHandover")
public class ShiftHandover {

    @Id
    @Column(name = "HandoverID", length = 50, nullable = false)
    private String handoverId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NurseFromID", nullable = false)
    private Nurse nurseFrom;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NurseToID", nullable = false)
    private Nurse nurseTo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DepartmentID", nullable = false)
    private Department department;

    @Column(name = "HandoverTime", nullable = false)
    private LocalDateTime handoverTime;

    @Column(name = "HandoverContent", columnDefinition = "TEXT", nullable = false)
    private String handoverContent;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
