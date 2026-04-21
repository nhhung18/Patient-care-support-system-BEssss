package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Department")
public class Department {

    @Id
    @Column(name = "DepartmentID", length = 50, nullable = false)
    private String departmentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HospitalID", nullable = false)
    private Hospital hospital;

    @Column(name = "Name", length = 100, nullable = false)
    private String name;

    @Column(name = "Phone", length = 100, nullable = false)
    private String phone;

    @Column(name = "Floor", length = 10, nullable = false)
    private String floor;

    @Column(name = "Description", length = 255, nullable = false)
    private String description;

    @Column(name = "HeadDoctorID", length = 50, nullable = false)
    private String headDoctorId;

    @Column(name = "NumOfRooms", nullable = false)
    private Integer numOfRooms;

    @Column(name = "NumOfDoctors", nullable = false)
    private Integer numOfDoctors;

    @Column(name = "NumOfNurses", nullable = false)
    private Integer numOfNurses;
}
