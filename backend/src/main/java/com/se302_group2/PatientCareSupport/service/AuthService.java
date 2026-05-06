package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.AuthDto;

public interface AuthService {
    String login(AuthDto.LoginDto loginDto);
    String register(AuthDto.RegisterDto registerDto);
}
