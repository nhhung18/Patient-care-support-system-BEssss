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
@Table(name = "DepartmentTransfer")
public class DepartmentTransfer {

    @Id
    @Column(name = "TransferID", length = 50, nullable = false)
    private String transferId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "InpatientID", nullable = false)
    private Inpatient inpatient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FromDeptID", nullable = false)
    private Department fromDept;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ToDeptID", nullable = false)
    private Department toDept;

    @Column(name = "TransferDate", nullable = false)
    private LocalDateTime transferDate;

    @Column(name = "Reasons", length = 255, nullable = false)
    private String reasons;

    @Column(name = "Notes", columnDefinition = "TEXT")
    private String notes;
}
