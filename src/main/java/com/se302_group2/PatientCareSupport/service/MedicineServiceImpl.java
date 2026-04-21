package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicineDto;
import com.se302_group2.PatientCareSupport.dto.MedicineMapper;
import com.se302_group2.PatientCareSupport.entity.Medicine;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.MedicineRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicineServiceImpl implements MedicineService {

    private MedicineRepository medicineRepository;

    @Override
    public MedicineDto createMedicine(MedicineDto medicineDto) {
        if (medicineDto.getMedicineId() == null || medicineDto.getMedicineId().isEmpty()) {
            medicineDto.setMedicineId(UUID.randomUUID().toString());
        }
        Medicine medicine = MedicineMapper.mapToMedicine(medicineDto);
        Medicine savedMedicine = medicineRepository.save(medicine);
        return MedicineMapper.mapToMedicineDto(savedMedicine);
    }

    @Override
    public MedicineDto getMedicineById(String medicineId) {
        Medicine medicine = medicineRepository.findById(medicineId)
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found with id: " + medicineId));
        return MedicineMapper.mapToMedicineDto(medicine);
    }

    @Override
    public List<MedicineDto> getAllMedicines() {
        List<Medicine> medicines = medicineRepository.findAll();
        return medicines.stream().map(MedicineMapper::mapToMedicineDto).collect(Collectors.toList());
    }

    @Override
    public MedicineDto updateMedicine(String medicineId, MedicineDto medicineDto) {
        Medicine medicine = medicineRepository.findById(medicineId)
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found with id: " + medicineId));

        medicine.setMedicineName(medicineDto.getMedicineName());
        medicine.setCategory(medicineDto.getCategory());
        medicine.setExpirenceDate(medicineDto.getExpirenceDate());
        medicine.setDirectionForUse(medicineDto.getDirectionForUse());
        medicine.setPrice(medicineDto.getPrice());
        medicine.setMedicineStatus(medicineDto.getMedicineStatus());

        Medicine updatedMedicine = medicineRepository.save(medicine);
        return MedicineMapper.mapToMedicineDto(updatedMedicine);
    }

    @Override
    public void deleteMedicine(String medicineId) {
        Medicine medicine = medicineRepository.findById(medicineId)
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found with id: " + medicineId));
        medicineRepository.delete(medicine);
    }
}
