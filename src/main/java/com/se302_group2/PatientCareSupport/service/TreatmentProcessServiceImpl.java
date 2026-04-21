package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.TreatmentProcessDto;
import com.se302_group2.PatientCareSupport.dto.TreatmentProcessMapper;
import com.se302_group2.PatientCareSupport.entity.Inpatient;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.InpatientRepository;
import com.se302_group2.PatientCareSupport.repository.TreatmentProcessRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TreatmentProcessServiceImpl implements TreatmentProcessService {

    private TreatmentProcessRepository treatmentProcessRepository;
    private InpatientRepository inpatientRepository;

    @Override
    public TreatmentProcessDto createTreatmentProcess(TreatmentProcessDto treatmentProcessDto) {
        if (treatmentProcessDto.getTreatmentId() == null || treatmentProcessDto.getTreatmentId().isEmpty()) {
            treatmentProcessDto.setTreatmentId(UUID.randomUUID().toString());
        }

        Inpatient inpatient = inpatientRepository.findById(treatmentProcessDto.getInpatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Inpatient not found with id: " + treatmentProcessDto.getInpatientId()));

        TreatmentProcess treatmentProcess = TreatmentProcessMapper.mapToTreatmentProcess(treatmentProcessDto, inpatient);
        TreatmentProcess savedTreatmentProcess = treatmentProcessRepository.save(treatmentProcess);
        return TreatmentProcessMapper.mapToTreatmentProcessDto(savedTreatmentProcess);
    }

    @Override
    public TreatmentProcessDto getTreatmentProcessById(String treatmentId) {
        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + treatmentId));
        return TreatmentProcessMapper.mapToTreatmentProcessDto(treatmentProcess);
    }

    @Override
    public List<TreatmentProcessDto> getAllTreatmentProcesses() {
        List<TreatmentProcess> treatmentProcesses = treatmentProcessRepository.findAll();
        return treatmentProcesses.stream().map(TreatmentProcessMapper::mapToTreatmentProcessDto).collect(Collectors.toList());
    }

    @Override
    public List<TreatmentProcessDto> getTreatmentProcessesByInpatientId(String inpatientId) {
        List<TreatmentProcess> treatmentProcesses = treatmentProcessRepository.findByInpatient_InpatientId(inpatientId);
        return treatmentProcesses.stream().map(TreatmentProcessMapper::mapToTreatmentProcessDto).collect(Collectors.toList());
    }

    @Override
    public TreatmentProcessDto updateTreatmentProcess(String treatmentId, TreatmentProcessDto treatmentProcessDto) {
        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + treatmentId));

        Inpatient inpatient = inpatientRepository.findById(treatmentProcessDto.getInpatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Inpatient not found with id: " + treatmentProcessDto.getInpatientId()));

        treatmentProcess.setInpatient(inpatient);
        treatmentProcess.setStartDate(treatmentProcessDto.getStartDate());
        treatmentProcess.setEndDate(treatmentProcessDto.getEndDate());
        treatmentProcess.setMainDiagnosis(treatmentProcessDto.getMainDiagnosis());
        treatmentProcess.setTreatmentPlan(treatmentProcessDto.getTreatmentPlan());
        treatmentProcess.setNotes(treatmentProcessDto.getNotes());

        TreatmentProcess updatedTreatmentProcess = treatmentProcessRepository.save(treatmentProcess);
        return TreatmentProcessMapper.mapToTreatmentProcessDto(updatedTreatmentProcess);
    }

    @Override
    public void deleteTreatmentProcess(String treatmentId) {
        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + treatmentId));
        treatmentProcessRepository.delete(treatmentProcess);
    }
}
