package com.se302_group2.PatientCareSupport.dto;

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
public class MedicineDto {
    private String medicineId;
    private String medicineName;
    private String category;
    private LocalDate expirenceDate;
    private String directionForUse;
    private BigDecimal price;
    private String medicineStatus;
}
