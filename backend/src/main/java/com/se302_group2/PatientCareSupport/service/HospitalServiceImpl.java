package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.HospitalDto;
import com.se302_group2.PatientCareSupport.dto.HospitalMapper;
import com.se302_group2.PatientCareSupport.entity.Hospital;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.HospitalRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class HospitalServiceImpl implements HospitalService {

    private HospitalRepository hospitalRepository;

    @Override
    public HospitalDto createHospital(HospitalDto hospitalDto) {
        if (hospitalDto.getHospitalId() == null || hospitalDto.getHospitalId().isEmpty()) {
            hospitalDto.setHospitalId(UUID.randomUUID().toString().substring(0, 10)); // ID is varchar 10
        }
        Hospital hospital = HospitalMapper.mapToHospital(hospitalDto);
        Hospital savedHospital = hospitalRepository.save(hospital);
        return HospitalMapper.mapToHospitalDto(savedHospital);
    }

    @Override
    public HospitalDto getHospitalById(String hospitalId) {
        Hospital hospital = hospitalRepository.findById(hospitalId)
                .orElseThrow(() -> new ResourceNotFoundException("Hospital not found with id: " + hospitalId));
        return HospitalMapper.mapToHospitalDto(hospital);
    }

    @Override
    public List<HospitalDto> getAllHospitals() {
        List<Hospital> hospitals = hospitalRepository.findAll();
        return hospitals.stream().map(HospitalMapper::mapToHospitalDto).collect(Collectors.toList());
    }

    @Override
    public HospitalDto updateHospital(String hospitalId, HospitalDto hospitalDto) {
        Hospital hospital = hospitalRepository.findById(hospitalId)
                .orElseThrow(() -> new ResourceNotFoundException("Hospital not found with id: " + hospitalId));

        hospital.setHospitalName(hospitalDto.getHospitalName());
        hospital.setFoundingDate(hospitalDto.getFoundingDate());
        hospital.setEmail(hospitalDto.getEmail());
        hospital.setPhone(hospitalDto.getPhone());
        hospital.setAddress(hospitalDto.getAddress());
        hospital.setWebsite(hospitalDto.getWebsite());
        hospital.setType(hospitalDto.getType());
        hospital.setDirectorName(hospitalDto.getDirectorName());

        Hospital updatedHospital = hospitalRepository.save(hospital);
        return HospitalMapper.mapToHospitalDto(updatedHospital);
    }

    @Override
    public void deleteHospital(String hospitalId) {
        Hospital hospital = hospitalRepository.findById(hospitalId)
                .orElseThrow(() -> new ResourceNotFoundException("Hospital not found with id: " + hospitalId));
        hospitalRepository.delete(hospital);
    }
}
