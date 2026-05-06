package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Medicine")
public class Medicine {

    @Id
    @Column(name = "MedicineID", length = 50, nullable = false)
    private String medicineId;

    @Column(name = "MedicineName", length = 50, nullable = false)
    private String medicineName;

    @Column(name = "Category", length = 50, nullable = false)
    private String category;

    @Column(name = "ExpirenceDate", nullable = false)
    private LocalDate expirenceDate;

    @Column(name = "DirectionForUse", length = 225, nullable = false)
    private String directionForUse;

    @Column(name = "Price", precision = 10, scale = 2, nullable = false)
    private BigDecimal price;

    @Column(name = "MedicineStatus", length = 50)
    private String medicineStatus = "Available";
}
