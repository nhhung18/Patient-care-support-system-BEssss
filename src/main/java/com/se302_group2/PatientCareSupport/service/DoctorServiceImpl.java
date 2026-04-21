package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.DoctorDto;
import com.se302_group2.PatientCareSupport.dto.DoctorMapper;
import com.se302_group2.PatientCareSupport.entity.Doctor;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.DoctorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DoctorServiceImpl implements DoctorService {

    private DoctorRepository doctorRepository;

    @Override
    public DoctorDto createDoctor(DoctorDto doctorDto) {
        if (doctorDto.getDoctorId() == null || doctorDto.getDoctorId().isEmpty()) {
            doctorDto.setDoctorId(UUID.randomUUID().toString());
        }
        Doctor doctor = DoctorMapper.mapToDoctor(doctorDto);
        Doctor savedDoctor = doctorRepository.save(doctor);
        return DoctorMapper.mapToDoctorDto(savedDoctor);
    }

    @Override
    public DoctorDto getDoctorById(String doctorId) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + doctorId));
        return DoctorMapper.mapToDoctorDto(doctor);
    }

    @Override
    public List<DoctorDto> getAllDoctors() {
        List<Doctor> doctors = doctorRepository.findAll();
        return doctors.stream().map(DoctorMapper::mapToDoctorDto).collect(Collectors.toList());
    }

    @Override
    public DoctorDto updateDoctor(String doctorId, DoctorDto doctorDto) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + doctorId));

        doctor.setName(doctorDto.getName());
        doctor.setBirthday(doctorDto.getBirthday());
        doctor.setAddress(doctorDto.getAddress());
        doctor.setGender(doctorDto.getGender());
        doctor.setPosition(doctorDto.getPosition());
        doctor.setExperience(doctorDto.getExperience());
        doctor.setSalary(doctorDto.getSalary());

        Doctor updatedDoctor = doctorRepository.save(doctor);
        return DoctorMapper.mapToDoctorDto(updatedDoctor);
    }

    @Override
    public void deleteDoctor(String doctorId) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + doctorId));
        doctorRepository.delete(doctor);
    }
}
