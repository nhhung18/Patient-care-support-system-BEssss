package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Doctor;

public class DoctorMapper {

    public static DoctorDto mapToDoctorDto(Doctor doctor) {
        return new DoctorDto(
                doctor.getDoctorId(),
                doctor.getName(),
                doctor.getBirthday(),
                doctor.getAddress(),
                doctor.getGender(),
                doctor.getPosition(),
                doctor.getExperience(),
                doctor.getSalary()
        );
    }

    public static Doctor mapToDoctor(DoctorDto doctorDto) {
        return new Doctor(
                doctorDto.getDoctorId(),
                doctorDto.getName(),
                doctorDto.getBirthday(),
                doctorDto.getAddress(),
                doctorDto.getGender(),
                doctorDto.getPosition(),
                doctorDto.getExperience(),
                doctorDto.getSalary()
        );
    }
}
