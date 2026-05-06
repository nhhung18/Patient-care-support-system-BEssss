package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.Bed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BedRepository extends JpaRepository<Bed, String> {
    List<Bed> findByRoom_RoomId(String roomId);
}
