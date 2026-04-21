package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicalTestDto;
import com.se302_group2.PatientCareSupport.dto.MedicalTestMapper;
import com.se302_group2.PatientCareSupport.entity.MedicalOrder;
import com.se302_group2.PatientCareSupport.entity.MedicalTest;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.MedicalOrderRepository;
import com.se302_group2.PatientCareSupport.repository.MedicalTestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicalTestServiceImpl implements MedicalTestService {

    private MedicalTestRepository medicalTestRepository;
    private MedicalOrderRepository medicalOrderRepository;

    @Override
    public MedicalTestDto createMedicalTest(MedicalTestDto medicalTestDto) {
        if (medicalTestDto.getTestId() == null || medicalTestDto.getTestId().isEmpty()) {
            medicalTestDto.setTestId(UUID.randomUUID().toString());
        }

        MedicalOrder medicalOrder = medicalOrderRepository.findById(medicalTestDto.getOrderId())
                .orElseThrow(() -> new ResourceNotFoundException("MedicalOrder not found with id: " + medicalTestDto.getOrderId()));

        MedicalTest medicalTest = MedicalTestMapper.mapToMedicalTest(medicalTestDto, medicalOrder);
        MedicalTest savedMedicalTest = medicalTestRepository.save(medicalTest);
        return MedicalTestMapper.mapToMedicalTestDto(savedMedicalTest);
    }

    @Override
    public MedicalTestDto getMedicalTestById(String testId) {
        MedicalTest medicalTest = medicalTestRepository.findById(testId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalTest not found with id: " + testId));
        return MedicalTestMapper.mapToMedicalTestDto(medicalTest);
    }

    @Override
    public List<MedicalTestDto> getAllMedicalTests() {
        List<MedicalTest> medicalTests = medicalTestRepository.findAll();
        return medicalTests.stream().map(MedicalTestMapper::mapToMedicalTestDto).collect(Collectors.toList());
    }

    @Override
    public List<MedicalTestDto> getMedicalTestsByOrderId(String orderId) {
        List<MedicalTest> medicalTests = medicalTestRepository.findByMedicalOrder_OrderId(orderId);
        return medicalTests.stream().map(MedicalTestMapper::mapToMedicalTestDto).collect(Collectors.toList());
    }

    @Override
    public MedicalTestDto updateMedicalTest(String testId, MedicalTestDto medicalTestDto) {
        MedicalTest medicalTest = medicalTestRepository.findById(testId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalTest not found with id: " + testId));

        MedicalOrder medicalOrder = medicalOrderRepository.findById(medicalTestDto.getOrderId())
                .orElseThrow(() -> new ResourceNotFoundException("MedicalOrder not found with id: " + medicalTestDto.getOrderId()));

        medicalTest.setMedicalOrder(medicalOrder);
        medicalTest.setTestName(medicalTestDto.getTestName());
        medicalTest.setSampleTime(medicalTestDto.getSampleTime());
        medicalTest.setResult(medicalTestDto.getResult());
        medicalTest.setStatus(medicalTestDto.getStatus());
        medicalTest.setNotes(medicalTestDto.getNotes());

        MedicalTest updatedMedicalTest = medicalTestRepository.save(medicalTest);
        return MedicalTestMapper.mapToMedicalTestDto(updatedMedicalTest);
    }

    @Override
    public void deleteMedicalTest(String testId) {
        MedicalTest medicalTest = medicalTestRepository.findById(testId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalTest not found with id: " + testId));
        medicalTestRepository.delete(medicalTest);
    }
}
