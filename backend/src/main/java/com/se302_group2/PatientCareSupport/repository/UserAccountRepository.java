package com.se302_group2.PatientCareSupport.repository;

import com.se302_group2.PatientCareSupport.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    Optional<UserAccount> findByUsername(String username);
    Boolean existsByUsername(String username);
}
