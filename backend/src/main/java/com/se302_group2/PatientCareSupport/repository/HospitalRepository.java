package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, String> {
}
