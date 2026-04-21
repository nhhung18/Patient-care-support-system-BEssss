package com.se302_group2.PatientCareSupport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Room")
public class Room {

    @Id
    @Column(name = "RoomID", length = 10, nullable = false)
    private String roomId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DepartmentID", nullable = false)
    private Department department;

    @Column(name = "Name", length = 50, nullable = false)
    private String name;

    @Column(name = "Type", length = 50, nullable = false)
    private String type;

    @Column(name = "NumOfBeds", nullable = false)
    private Integer numOfBeds;

    @Column(name = "ServicePrice", precision = 15, scale = 2, nullable = false)
    private BigDecimal servicePrice;
}
