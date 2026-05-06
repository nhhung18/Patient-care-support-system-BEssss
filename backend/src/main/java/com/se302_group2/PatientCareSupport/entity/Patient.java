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

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Patient")
public class Patient {

    @Id
    @Column(name = "PatientID", length = 50, nullable = false)
    private String patientId;

    @Column(name = "Birthday", nullable = false)
    private LocalDate birthday;

    @Column(name = "Address", length = 100, nullable = false)
    private String address;

    @Column(name = "Gender", length = 10, nullable = false)
    private String gender;

    @Column(name = "Phone", length = 15, nullable = false)
    private String phone;

    @Column(name = "CCCD", length = 20, nullable = false)
    private String cccd;

    @Column(name = "BHYT", length = 20, nullable = false)
    private String bhyt;
}
