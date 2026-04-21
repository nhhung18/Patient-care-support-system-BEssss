package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicineRecallDto;
import com.se302_group2.PatientCareSupport.dto.MedicineRecallMapper;
import com.se302_group2.PatientCareSupport.entity.MedicalPrescription;
import com.se302_group2.PatientCareSupport.entity.MedicineRecall;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.MedicalPrescriptionRepository;
import com.se302_group2.PatientCareSupport.repository.MedicineRecallRepository;
import com.se302_group2.PatientCareSupport.repository.NurseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicineRecallServiceImpl implements MedicineRecallService {

    private MedicineRecallRepository medicineRecallRepository;
    private MedicalPrescriptionRepository medicalPrescriptionRepository;
    private NurseRepository nurseRepository;

    @Override
    public MedicineRecallDto createMedicineRecall(MedicineRecallDto medicineRecallDto) {
        if (medicineRecallDto.getRecallId() == null || medicineRecallDto.getRecallId().isEmpty()) {
            medicineRecallDto.setRecallId(UUID.randomUUID().toString());
        }

        MedicalPrescription prescription = medicalPrescriptionRepository.findById(medicineRecallDto.getPrescriptionId())
                .orElseThrow(() -> new ResourceNotFoundException("MedicalPrescription not found with id: " + medicineRecallDto.getPrescriptionId()));

        Nurse nurse = nurseRepository.findById(medicineRecallDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + medicineRecallDto.getNurseId()));

        MedicineRecall medicineRecall = MedicineRecallMapper.mapToMedicineRecall(medicineRecallDto, prescription, nurse);
        MedicineRecall savedRecall = medicineRecallRepository.save(medicineRecall);
        return MedicineRecallMapper.mapToMedicineRecallDto(savedRecall);
    }

    @Override
    public MedicineRecallDto getMedicineRecallById(String recallId) {
        MedicineRecall medicineRecall = medicineRecallRepository.findById(recallId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicineRecall not found with id: " + recallId));
        return MedicineRecallMapper.mapToMedicineRecallDto(medicineRecall);
    }

    @Override
    public List<MedicineRecallDto> getAllMedicineRecalls() {
        List<MedicineRecall> recalls = medicineRecallRepository.findAll();
        return recalls.stream().map(MedicineRecallMapper::mapToMedicineRecallDto).collect(Collectors.toList());
    }

    @Override
    public List<MedicineRecallDto> getMedicineRecallsByPrescriptionId(String prescriptionId) {
        List<MedicineRecall> recalls = medicineRecallRepository.findByMedicalPrescription_PrescriptionId(prescriptionId);
        return recalls.stream().map(MedicineRecallMapper::mapToMedicineRecallDto).collect(Collectors.toList());
    }

    @Override
    public List<MedicineRecallDto> getMedicineRecallsByNurseId(String nurseId) {
        List<MedicineRecall> recalls = medicineRecallRepository.findByNurse_NurseId(nurseId);
        return recalls.stream().map(MedicineRecallMapper::mapToMedicineRecallDto).collect(Collectors.toList());
    }

    @Override
    public MedicineRecallDto updateMedicineRecall(String recallId, MedicineRecallDto medicineRecallDto) {
        MedicineRecall medicineRecall = medicineRecallRepository.findById(recallId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicineRecall not found with id: " + recallId));

        MedicalPrescription prescription = medicalPrescriptionRepository.findById(medicineRecallDto.getPrescriptionId())
                .orElseThrow(() -> new ResourceNotFoundException("MedicalPrescription not found with id: " + medicineRecallDto.getPrescriptionId()));

        Nurse nurse = nurseRepository.findById(medicineRecallDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + medicineRecallDto.getNurseId()));

        medicineRecall.setMedicalPrescription(prescription);
        medicineRecall.setNurse(nurse);
        medicineRecall.setRecallDate(medicineRecallDto.getRecallDate());
        medicineRecall.setQuantity(medicineRecallDto.getQuantity());
        medicineRecall.setReasons(medicineRecallDto.getReasons());

        MedicineRecall updatedRecall = medicineRecallRepository.save(medicineRecall);
        return MedicineRecallMapper.mapToMedicineRecallDto(updatedRecall);
    }

    @Override
    public void deleteMedicineRecall(String recallId) {
        MedicineRecall medicineRecall = medicineRecallRepository.findById(recallId)
                .orElseThrow(() -> new ResourceNotFoundException("MedicineRecall not found with id: " + recallId));
        medicineRecallRepository.delete(medicineRecall);
    }
}
