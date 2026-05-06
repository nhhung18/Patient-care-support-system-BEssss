package com.se302_group2.PatientCareSupport.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AuthDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LoginDto {
        private String username;
        private String password;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RegisterDto {
        private String username;
        private String password;
        private String role; // ROLE_NURSE, ROLE_DOCTOR, ROLE_ADMIN
        private String employeeId;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class JwtAuthResponse {
        private String accessToken;
        private String tokenType = "Bearer";
    }
}
