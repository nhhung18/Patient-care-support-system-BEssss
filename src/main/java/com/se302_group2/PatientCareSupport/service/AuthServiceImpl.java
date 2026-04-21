package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.AuthDto;
import com.se302_group2.PatientCareSupport.entity.Role;
import com.se302_group2.PatientCareSupport.entity.UserAccount;
import com.se302_group2.PatientCareSupport.exception.BadRequestException;
import com.se302_group2.PatientCareSupport.repository.UserAccountRepository;
import com.se302_group2.PatientCareSupport.security.JwtTokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager authenticationManager;
    private UserAccountRepository userAccountRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public String login(AuthDto.LoginDto loginDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsername(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        return token;
    }

    @Override
    public String register(AuthDto.RegisterDto registerDto) {

        // check username exists in database
        if(userAccountRepository.existsByUsername(registerDto.getUsername())){
            throw new BadRequestException("Username already exists.");
        }

        UserAccount user = new UserAccount();
        user.setUsername(registerDto.getUsername());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setRole(Role.valueOf(registerDto.getRole().toUpperCase()));
        user.setEmployeeId(registerDto.getEmployeeId());

        userAccountRepository.save(user);

        return "User registered successfully.";
    }
}
