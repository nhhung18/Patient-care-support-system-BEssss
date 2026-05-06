package com.se302_group2.PatientCareSupport.security;

import com.se302_group2.PatientCareSupport.entity.UserAccount;
import com.se302_group2.PatientCareSupport.repository.UserAccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Set;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private UserAccountRepository userAccountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserAccount userAccount = userAccountRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not exists by Username"));

        Set<GrantedAuthority> authorities = Collections.singleton(new SimpleGrantedAuthority(userAccount.getRole().name()));

        return new User(username, userAccount.getPassword(), authorities);
    }
}
