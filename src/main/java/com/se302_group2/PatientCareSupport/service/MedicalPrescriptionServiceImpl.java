package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicalPrescriptionDto;
import com.se302_group2.PatientCareSupport.dto.MedicalPrescriptionMapper;
import com.se302_group2.PatientCareSupport.entity.MedicalOrder;
import com.se302_group2.PatientCareSupport.entity.MedicalPrescription;
import com.se302_group2.PatientCareSupport.entity.Medicine;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.MedicalOrderRepository;
import com.se302_group2.PatientCareSupport.repository.MedicalPrescriptionRepository;
import com.se302_group2.PatientCareSupport.repository.MedicineRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicalPrescriptionServiceImpl implements MedicalPrescriptionService {

    private MedicalPrescriptionRepository medicalPrescriptionRepository;
    private MedicalOrderRepository medicalOrderRepository;
    private MedicineRepository medicineRepository;

    @Override
    public MedicalPrescriptionDto createMedicalPrescription(MedicalPrescriptionDto medicalPrescriptionDto) {
        if (medicalPrescriptionDto.getPrescriptionId() == null || medicalPrescriptionDto.getPrescriptionId().isEmpty()) {
            medicalPrescriptionDto.setPrescriptionId(UUID.randomUUID().toString());
        }

        MedicalOrder medicalOrder = medicalOrderRepository.findById(medicalPrescriptionDto.getOrderId())
                .orElseThrow(() -> new ResourceNotFoundException("MedicalOrder not found with id: " + medicalPrescriptionDto.getOrderId()));

        Medicine medicine = medicineRepository.findById(medicalPrescriptionDto.getMedicineId())
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found with id: " + medicalPrescriptionDto.getMedicineId()));

        MedicalPrescription medicalPrescription = MedicalPrescriptionMapper.mapToMedicalPrescription(medicalPrescriptionDto, medicalOrder, medicine);
        MedicalPrescription savedMedicalPrescription = medicalPrescriptionRepository.save(medicalPrescription);
        return MedicalPrescriptionMapper.mapToMedicalPrescriptionDto(savedMedicalPrescription);
    }

    @Override
    public MedicalPrescriptionDto getMedicalPrescriptionById(String prescriptionId) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(prescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalPrescription not found with id: " + prescriptionId));
        return MedicalPrescriptionMapper.mapToMedicalPrescriptionDto(medicalPrescription);
    }

    @Override
    public List<MedicalPrescriptionDto> getAllMedicalPrescriptions() {
        List<MedicalPrescription> medicalPrescriptions = medicalPrescriptionRepository.findAll();
        return medicalPrescriptions.stream().map(MedicalPrescriptionMapper::mapToMedicalPrescriptionDto).collect(Collectors.toList());
    }

    @Override
    public List<MedicalPrescriptionDto> getMedicalPrescriptionsByOrderId(String orderId) {
        List<MedicalPrescription> medicalPrescriptions = medicalPrescriptionRepository.findByMedicalOrder_OrderId(orderId);
        return medicalPrescriptions.stream().map(MedicalPrescriptionMapper::mapToMedicalPrescriptionDto).collect(Collectors.toList());
    }

    @Override
    public MedicalPrescriptionDto updateMedicalPrescription(String prescriptionId, MedicalPrescriptionDto medicalPrescriptionDto) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(prescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalPrescription not found with id: " + prescriptionId));

        MedicalOrder medicalOrder = medicalOrderRepository.findById(medicalPrescriptionDto.getOrderId())
                .orElseThrow(() -> new ResourceNotFoundException("MedicalOrder not found with id: " + medicalPrescriptionDto.getOrderId()));

        Medicine medicine = medicineRepository.findById(medicalPrescriptionDto.getMedicineId())
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found with id: " + medicalPrescriptionDto.getMedicineId()));

        medicalPrescription.setMedicalOrder(medicalOrder);
        medicalPrescription.setMedicine(medicine);
        medicalPrescription.setDose(medicalPrescriptionDto.getDose());
        medicalPrescription.setRoute(medicalPrescriptionDto.getRoute());
        medicalPrescription.setFrequency(medicalPrescriptionDto.getFrequency());
        medicalPrescription.setDuration(medicalPrescriptionDto.getDuration());
        medicalPrescription.setNotes(medicalPrescriptionDto.getNotes());

        MedicalPrescription updatedMedicalPrescription = medicalPrescriptionRepository.save(medicalPrescription);
        return MedicalPrescriptionMapper.mapToMedicalPrescriptionDto(updatedMedicalPrescription);
    }

    @Override
    public void deleteMedicalPrescription(String prescriptionId) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(prescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicalPrescription not found with id: " + prescriptionId));
        medicalPrescriptionRepository.delete(medicalPrescription);
    }
}
