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
@Table(name = "Hospital")
public class Hospital {

    @Id
    @Column(name = "HospitalID", length = 10, nullable = false)
    private String hospitalId;

    @Column(name = "HospitalName", length = 100, nullable = false)
    private String hospitalName;

    @Column(name = "FoundingDate", nullable = false)
    private LocalDate foundingDate;

    @Column(name = "Email", length = 225, nullable = false)
    private String email;

    @Column(name = "Phone", length = 15, nullable = false)
    private String phone;

    @Column(name = "Address", length = 225, nullable = false)
    private String address;

    @Column(name = "Website", length = 225, nullable = false)
    private String website;

    @Column(name = "Type", length = 100, nullable = false)
    private String type;

    @Column(name = "DirectorName", length = 100, nullable = false)
    private String directorName;
}
