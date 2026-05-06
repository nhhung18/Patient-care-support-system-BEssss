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
@Table(name = "Doctor")
public class Doctor {

    @Id
    @Column(name = "DoctorID", length = 50, nullable = false)
    private String doctorId;

    @Column(name = "Name", length = 100, nullable = false)
    private String name;

    @Column(name = "Birthday", nullable = false)
    private LocalDate birthday;

    @Column(name = "Address", length = 100, nullable = false)
    private String address;

    @Column(name = "Gender", length = 10, nullable = false)
    private String gender;

    @Column(name = "Position", length = 50, nullable = false)
    private String position;

    @Column(name = "Experience", length = 50, nullable = false)
    private String experience;

    @Column(name = "Salary", precision = 15, scale = 2, nullable = false)
    private BigDecimal salary;
}
