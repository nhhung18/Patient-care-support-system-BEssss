package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.VitalSignDto;
import com.se302_group2.PatientCareSupport.dto.VitalSignMapper;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;
import com.se302_group2.PatientCareSupport.entity.VitalSign;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.NurseRepository;
import com.se302_group2.PatientCareSupport.repository.TreatmentProcessRepository;
import com.se302_group2.PatientCareSupport.repository.VitalSignRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VitalSignServiceImpl implements VitalSignService {

    private VitalSignRepository vitalSignRepository;
    private TreatmentProcessRepository treatmentProcessRepository;
    private NurseRepository nurseRepository;

    @Override
    public VitalSignDto createVitalSign(VitalSignDto vitalSignDto) {
        if (vitalSignDto.getSignId() == null || vitalSignDto.getSignId().isEmpty()) {
            vitalSignDto.setSignId(UUID.randomUUID().toString());
        }

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(vitalSignDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + vitalSignDto.getTreatmentId()));

        Nurse nurse = nurseRepository.findById(vitalSignDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + vitalSignDto.getNurseId()));

        VitalSign vitalSign = VitalSignMapper.mapToVitalSign(vitalSignDto, treatmentProcess, nurse);
        VitalSign savedVitalSign = vitalSignRepository.save(vitalSign);
        return VitalSignMapper.mapToVitalSignDto(savedVitalSign);
    }

    @Override
    public VitalSignDto getVitalSignById(String signId) {
        VitalSign vitalSign = vitalSignRepository.findById(signId)
                .orElseThrow(() -> new ResourceNotFoundException("VitalSign not found with id: " + signId));
        return VitalSignMapper.mapToVitalSignDto(vitalSign);
    }

    @Override
    public List<VitalSignDto> getAllVitalSigns() {
        List<VitalSign> vitalSigns = vitalSignRepository.findAll();
        return vitalSigns.stream().map(VitalSignMapper::mapToVitalSignDto).collect(Collectors.toList());
    }

    @Override
    public List<VitalSignDto> getVitalSignsByTreatmentId(String treatmentId) {
        List<VitalSign> vitalSigns = vitalSignRepository.findByTreatmentProcess_TreatmentId(treatmentId);
        return vitalSigns.stream().map(VitalSignMapper::mapToVitalSignDto).collect(Collectors.toList());
    }

    @Override
    public List<VitalSignDto> getVitalSignsByNurseId(String nurseId) {
        List<VitalSign> vitalSigns = vitalSignRepository.findByNurse_NurseId(nurseId);
        return vitalSigns.stream().map(VitalSignMapper::mapToVitalSignDto).collect(Collectors.toList());
    }

    @Override
    public VitalSignDto updateVitalSign(String signId, VitalSignDto vitalSignDto) {
        VitalSign vitalSign = vitalSignRepository.findById(signId)
                .orElseThrow(() -> new ResourceNotFoundException("VitalSign not found with id: " + signId));

        TreatmentProcess treatmentProcess = treatmentProcessRepository.findById(vitalSignDto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("TreatmentProcess not found with id: " + vitalSignDto.getTreatmentId()));

        Nurse nurse = nurseRepository.findById(vitalSignDto.getNurseId())
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + vitalSignDto.getNurseId()));

        vitalSign.setTreatmentProcess(treatmentProcess);
        vitalSign.setNurse(nurse);
        vitalSign.setRecordTime(vitalSignDto.getRecordTime());
        vitalSign.setTemperature(vitalSignDto.getTemperature());
        vitalSign.setBloodPressure(vitalSignDto.getBloodPressure());
        vitalSign.setPulse(vitalSignDto.getPulse());
        vitalSign.setBreathRate(vitalSignDto.getBreathRate());
        vitalSign.setSpO2(vitalSignDto.getSpO2());
        vitalSign.setWeight(vitalSignDto.getWeight());
        vitalSign.setNotes(vitalSignDto.getNotes());

        VitalSign updatedVitalSign = vitalSignRepository.save(vitalSign);
        return VitalSignMapper.mapToVitalSignDto(updatedVitalSign);
    }

    @Override
    public void deleteVitalSign(String signId) {
        VitalSign vitalSign = vitalSignRepository.findById(signId)
                .orElseThrow(() -> new ResourceNotFoundException("VitalSign not found with id: " + signId));
        vitalSignRepository.delete(vitalSign);
    }
}
