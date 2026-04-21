package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.DoctorDto;
import java.util.List;

public interface DoctorService {
    DoctorDto createDoctor(DoctorDto doctorDto);
    DoctorDto getDoctorById(String doctorId);
    List<DoctorDto> getAllDoctors();
    DoctorDto updateDoctor(String doctorId, DoctorDto doctorDto);
    void deleteDoctor(String doctorId);
}
