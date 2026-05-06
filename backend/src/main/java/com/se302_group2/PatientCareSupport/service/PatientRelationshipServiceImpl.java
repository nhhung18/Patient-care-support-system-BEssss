package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.PatientRelationshipDto;
import com.se302_group2.PatientCareSupport.dto.PatientRelationshipMapper;
import com.se302_group2.PatientCareSupport.entity.Patient;
import com.se302_group2.PatientCareSupport.entity.PatientRelationship;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.PatientRepository;
import com.se302_group2.PatientCareSupport.repository.PatientRelationshipRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PatientRelationshipServiceImpl implements PatientRelationshipService {

    private PatientRelationshipRepository patientRelationshipRepository;
    private PatientRepository patientRepository;

    @Override
    public PatientRelationshipDto createPatientRelationship(PatientRelationshipDto patientRelationshipDto) {
        if (patientRelationshipDto.getRelationshipId() == null || patientRelationshipDto.getRelationshipId().isEmpty()) {
            patientRelationshipDto.setRelationshipId(UUID.randomUUID().toString().substring(0, 10));
        }

        Patient patient = patientRepository.findById(patientRelationshipDto.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + patientRelationshipDto.getPatientId()));

        PatientRelationship patientRelationship = PatientRelationshipMapper.mapToPatientRelationship(patientRelationshipDto, patient);
        PatientRelationship savedPatientRelationship = patientRelationshipRepository.save(patientRelationship);
        return PatientRelationshipMapper.mapToPatientRelationshipDto(savedPatientRelationship);
    }

    @Override
    public PatientRelationshipDto getPatientRelationshipById(String relationshipId) {
        PatientRelationship patientRelationship = patientRelationshipRepository.findById(relationshipId)
                .orElseThrow(() -> new ResourceNotFoundException("PatientRelationship not found with id: " + relationshipId));
        return PatientRelationshipMapper.mapToPatientRelationshipDto(patientRelationship);
    }

    @Override
    public List<PatientRelationshipDto> getAllPatientRelationships() {
        List<PatientRelationship> patientRelationships = patientRelationshipRepository.findAll();
        return patientRelationships.stream().map(PatientRelationshipMapper::mapToPatientRelationshipDto).collect(Collectors.toList());
    }

    @Override
    public List<PatientRelationshipDto> getPatientRelationshipsByPatientId(String patientId) {
        List<PatientRelationship> patientRelationships = patientRelationshipRepository.findByPatient_PatientId(patientId);
        return patientRelationships.stream().map(PatientRelationshipMapper::mapToPatientRelationshipDto).collect(Collectors.toList());
    }

    @Override
    public PatientRelationshipDto updatePatientRelationship(String relationshipId, PatientRelationshipDto patientRelationshipDto) {
        PatientRelationship patientRelationship = patientRelationshipRepository.findById(relationshipId)
                .orElseThrow(() -> new ResourceNotFoundException("PatientRelationship not found with id: " + relationshipId));

        Patient patient = patientRepository.findById(patientRelationshipDto.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + patientRelationshipDto.getPatientId()));

        patientRelationship.setPatient(patient);
        patientRelationship.setName(patientRelationshipDto.getName());
        patientRelationship.setAge(patientRelationshipDto.getAge());
        patientRelationship.setEmail(patientRelationshipDto.getEmail());
        patientRelationship.setPhone(patientRelationshipDto.getPhone());
        patientRelationship.setRelationshipWithPatient(patientRelationshipDto.getRelationshipWithPatient());
        patientRelationship.setProfession(patientRelationshipDto.getProfession());

        PatientRelationship updatedPatientRelationship = patientRelationshipRepository.save(patientRelationship);
        return PatientRelationshipMapper.mapToPatientRelationshipDto(updatedPatientRelationship);
    }

    @Override
    public void deletePatientRelationship(String relationshipId) {
        PatientRelationship patientRelationship = patientRelationshipRepository.findById(relationshipId)
                .orElseThrow(() -> new ResourceNotFoundException("PatientRelationship not found with id: " + relationshipId));
        patientRelationshipRepository.delete(patientRelationship);
    }
}
