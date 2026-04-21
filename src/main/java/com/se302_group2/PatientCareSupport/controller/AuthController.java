package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.AuthDto;
import com.se302_group2.PatientCareSupport.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private AuthService authService;

    // Build Login REST API
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<AuthDto.JwtAuthResponse> login(@RequestBody AuthDto.LoginDto loginDto){
        String token = authService.login(loginDto);

        AuthDto.JwtAuthResponse jwtAuthResponse = new AuthDto.JwtAuthResponse();
        jwtAuthResponse.setAccessToken(token);

        return ResponseEntity.ok(jwtAuthResponse);
    }

    // Build Register REST API
    @PostMapping(value = {"/register", "/signup"})
    public ResponseEntity<String> register(@RequestBody AuthDto.RegisterDto registerDto){
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
