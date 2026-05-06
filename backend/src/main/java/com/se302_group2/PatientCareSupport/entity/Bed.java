package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.*;
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
@Table(name = "Bed")
public class Bed {

    @Id
    @Column(name = "BedID", length = 10, nullable = false)
    private String bedId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RoomID", nullable = false)
    private Room room;

    @Column(name = "Status", length = 50, nullable = false)
    private String status;

    @Column(name = "ArrivalDate")
    private LocalDate arrivalDate;

    @Column(name = "DepartDate")
    private LocalDate departDate;
}
