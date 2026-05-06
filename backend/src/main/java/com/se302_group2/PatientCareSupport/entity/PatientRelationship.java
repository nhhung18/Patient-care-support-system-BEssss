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
@Table(name = "PatientRelationship")
public class PatientRelationship {

    @Id
    @Column(name = "RelationshipID", length = 10, nullable = false)
    private String relationshipId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PatientID", nullable = false)
    private Patient patient;

    @Column(name = "Name", length = 50, nullable = false)
    private String name;

    @Column(name = "Age", nullable = false)
    private Integer age;

    @Column(name = "Email", length = 50, nullable = false)
    private String email;

    @Column(name = "Phone", length = 15, nullable = false)
    private String phone;

    @Column(name = "RelationshipWithPatient", length = 50, nullable = false)
    private String relationshipWithPatient;

    @Column(name = "Profession", length = 50, nullable = false)
    private String profession;
}
