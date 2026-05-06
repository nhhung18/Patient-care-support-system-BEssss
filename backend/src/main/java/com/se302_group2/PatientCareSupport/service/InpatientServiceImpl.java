package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.InpatientDto;
import com.se302_group2.PatientCareSupport.dto.InpatientMapper;
import com.se302_group2.PatientCareSupport.entity.Bed;
import com.se302_group2.PatientCareSupport.entity.Doctor;
import com.se302_group2.PatientCareSupport.entity.Inpatient;
import com.se302_group2.PatientCareSupport.entity.Patient;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.BedRepository;
import com.se302_group2.PatientCareSupport.repository.DoctorRepository;
import com.se302_group2.PatientCareSupport.repository.InpatientRepository;
import com.se302_group2.PatientCareSupport.repository.PatientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class InpatientServiceImpl implements InpatientService {

    private InpatientRepository inpatientRepository;
    private PatientRepository patientRepository;
    private DoctorRepository doctorRepository;
    private BedRepository bedRepository;

    @Override
    public InpatientDto createInpatient(InpatientDto inpatientDto) {
        if (inpatientDto.getInpatientId() == null || inpatientDto.getInpatientId().isEmpty()) {
            inpatientDto.setInpatientId(UUID.randomUUID().toString());
        }

        Patient patient = patientRepository.findById(inpatientDto.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + inpatientDto.getPatientId()));
                
        Doctor doctor = doctorRepository.findById(inpatientDto.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + inpatientDto.getDoctorId()));
                
        Bed bed = bedRepository.findById(inpatientDto.getBedId())
                .orElseThrow(() -> new ResourceNotFoundException("Bed not found with id: " + inpatientDto.getBedId()));

        Inpatient inpatient = InpatientMapper.mapToInpatient(inpatientDto, patient, doctor, bed);
        Inpatient savedInpatient = inpatientRepository.save(inpatient);
        return InpatientMapper.mapToInpatientDto(savedInpatient);
    }

    @Override
    public InpatientDto getInpatientById(String inpatientId) {
        Inpatient inpatient = inpatientRepository.findById(inpatientId)
                .orElseThrow(() -> new ResourceNotFoundException("Inpatient not found with id: " + inpatientId));
        return InpatientMapper.mapToInpatientDto(inpatient);
    }

    @Override
    public List<InpatientDto> getAllInpatients() {
        List<Inpatient> inpatients = inpatientRepository.findAll();
        return inpatients.stream().map(InpatientMapper::mapToInpatientDto).collect(Collectors.toList());
    }

    @Override
    public List<InpatientDto> getInpatientsByPatientId(String patientId) {
        List<Inpatient> inpatients = inpatientRepository.findByPatient_PatientId(patientId);
        return inpatients.stream().map(InpatientMapper::mapToInpatientDto).collect(Collectors.toList());
    }

    @Override
    public List<InpatientDto> getInpatientsByDoctorId(String doctorId) {
        List<Inpatient> inpatients = inpatientRepository.findByDoctor_DoctorId(doctorId);
        return inpatients.stream().map(InpatientMapper::mapToInpatientDto).collect(Collectors.toList());
    }

    @Override
    public InpatientDto updateInpatient(String inpatientId, InpatientDto inpatientDto) {
        Inpatient inpatient = inpatientRepository.findById(inpatientId)
                .orElseThrow(() -> new ResourceNotFoundException("Inpatient not found with id: " + inpatientId));

        Patient patient = patientRepository.findById(inpatientDto.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with id: " + inpatientDto.getPatientId()));
                
        Doctor doctor = doctorRepository.findById(inpatientDto.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + inpatientDto.getDoctorId()));
                
        Bed bed = bedRepository.findById(inpatientDto.getBedId())
                .orElseThrow(() -> new ResourceNotFoundException("Bed not found with id: " + inpatientDto.getBedId()));

        inpatient.setPatient(patient);
        inpatient.setDoctor(doctor);
        inpatient.setBed(bed);
        inpatient.setAdmissionDate(inpatientDto.getAdmissionDate());
        inpatient.setReasons(inpatientDto.getReasons());

        Inpatient updatedInpatient = inpatientRepository.save(inpatient);
        return InpatientMapper.mapToInpatientDto(updatedInpatient);
    }

    @Override
    public void deleteInpatient(String inpatientId) {
        Inpatient inpatient = inpatientRepository.findById(inpatientId)
                .orElseThrow(() -> new ResourceNotFoundException("Inpatient not found with id: " + inpatientId));
        inpatientRepository.delete(inpatient);
    }
}
