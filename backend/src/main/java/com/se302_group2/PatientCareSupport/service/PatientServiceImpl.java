package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.PatientDto;
import com.se302_group2.PatientCareSupport.dto.PatientMapper;
import com.se302_group2.PatientCareSupport.entity.Patient;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.PatientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PatientServiceImpl implements PatientService {

    private PatientRepository patientRepository;

    @Override
    public PatientDto createPatient(PatientDto patientDto) {
        if (patientDto.getPatientId() == null || patientDto.getPatientId().isEmpty()) {
            patientDto.setPatientId(UUID.randomUUID().toString());
        }
        Patient patient = PatientMapper.mapToPatient(patientDto);
        Patient savedPatient = patientRepository.save(patient);
        return PatientMapper.mapToPatientDto(savedPatient);
    }

    @Override
    public PatientDto getPatientById(String patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + patientId));
        return PatientMapper.mapToPatientDto(patient);
    }

    @Override
    public List<PatientDto> getAllPatients() {
        List<Patient> patients = patientRepository.findAll();
        return patients.stream().map(PatientMapper::mapToPatientDto).collect(Collectors.toList());
    }

    @Override
    public PatientDto updatePatient(String patientId, PatientDto patientDto) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + patientId));

        patient.setBirthday(patientDto.getBirthday());
        patient.setAddress(patientDto.getAddress());
        patient.setGender(patientDto.getGender());
        patient.setPhone(patientDto.getPhone());
        patient.setCccd(patientDto.getCccd());
        patient.setBhyt(patientDto.getBhyt());

        Patient updatedPatient = patientRepository.save(patient);
        return PatientMapper.mapToPatientDto(updatedPatient);
    }

    @Override
    public void deletePatient(String patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + patientId));
        patientRepository.delete(patient);
    }
}
