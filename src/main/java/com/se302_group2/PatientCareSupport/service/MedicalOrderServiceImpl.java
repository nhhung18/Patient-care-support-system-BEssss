package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicalOrderDto;
import com.se302_group2.PatientCareSupport.dto.MedicalOrderMapper;
import com.se302_group2.PatientCareSupport.entity.Doctor;
import com.se302_group2.PatientCareSupport.entity.MedicalOrder;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.DoctorRepository;
import com.se302_group2.PatientCareSupport.repository.MedicalOrderRepository;
import com.se302_group2.PatientCareSupport.repository.TreatmentProcessRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicalOrderServiceImpl implements MedicalOrderService {

    private MedicalOrderRepository medicalOrderRepository;
    private TreatmentProcessRepository treatmentProcessRepository;
    private DoctorRepository doctorRepository;

    @Override
    public MedicalOrderDto createMedicalOrder(MedicalOrderDto medicalOrderDto) {
        if (medicalOrderDto.getOrderId() == null || medicalOrderDto.getOrderId().isEmpty()) {
            medicalOrderDto.setOrderId(UUID.randomUUID().toString());
        }

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(medicalOrderDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + medicalOrderDto.getTreatmentId()));

        Doctor doctor = doctorRepository.findById(medicalOrderDto.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + medicalOrderDto.getDoctorId()));

        MedicalOrder medicalOrder = MedicalOrderMapper.mapToMedicalOrder(medicalOrderDto, treatmentProcess, doctor);
        MedicalOrder savedMedicalOrder = medicalOrderRepository.save(medicalOrder);
        return MedicalOrderMapper.mapToMedicalOrderDto(savedMedicalOrder);
    }

    @Override
    public MedicalOrderDto getMedicalOrderById(String orderId) {
        MedicalOrder medicalOrder = medicalOrderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalOrder not found with id: " + orderId));
        return MedicalOrderMapper.mapToMedicalOrderDto(medicalOrder);
    }

    @Override
    public List<MedicalOrderDto> getAllMedicalOrders() {
        List<MedicalOrder> medicalOrders = medicalOrderRepository.findAll();
        return medicalOrders.stream().map(MedicalOrderMapper::mapToMedicalOrderDto).collect(Collectors.toList());
    }

    @Override
    public List<MedicalOrderDto> getMedicalOrdersByTreatmentId(String treatmentId) {
        List<MedicalOrder> medicalOrders = medicalOrderRepository.findByTreatmentProcess_TreatmentId(treatmentId);
        return medicalOrders.stream().map(MedicalOrderMapper::mapToMedicalOrderDto).collect(Collectors.toList());
    }

    @Override
    public List<MedicalOrderDto> getMedicalOrdersByDoctorId(String doctorId) {
        List<MedicalOrder> medicalOrders = medicalOrderRepository.findByDoctor_DoctorId(doctorId);
        return medicalOrders.stream().map(MedicalOrderMapper::mapToMedicalOrderDto).collect(Collectors.toList());
    }

    @Override
    public MedicalOrderDto updateMedicalOrder(String orderId, MedicalOrderDto medicalOrderDto) {
        MedicalOrder medicalOrder = medicalOrderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalOrder not found with id: " + orderId));

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(medicalOrderDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + medicalOrderDto.getTreatmentId()));

        Doctor doctor = doctorRepository.findById(medicalOrderDto.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with id: " + medicalOrderDto.getDoctorId()));

        medicalOrder.setTreatmentProcess(treatmentProcess);
        medicalOrder.setDoctor(doctor);
        medicalOrder.setOrderDate(medicalOrderDto.getOrderDate());
        medicalOrder.setOrderType(medicalOrderDto.getOrderType());
        medicalOrder.setPriority(medicalOrderDto.getPriority());
        medicalOrder.setInstructions(medicalOrderDto.getInstructions());
        medicalOrder.setStatus(medicalOrderDto.getStatus());

        MedicalOrder updatedMedicalOrder = medicalOrderRepository.save(medicalOrder);
        return MedicalOrderMapper.mapToMedicalOrderDto(updatedMedicalOrder);
    }

    @Override
    public void deleteMedicalOrder(String orderId) {
        MedicalOrder medicalOrder = medicalOrderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalOrder not found with id: " + orderId));
        medicalOrderRepository.delete(medicalOrder);
    }
}
