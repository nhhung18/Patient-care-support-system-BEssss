package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.NurseDto;
import com.se302_group2.PatientCareSupport.dto.NurseMapper;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.NurseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class NurseServiceImpl implements NurseService {

    private NurseRepository nurseRepository;

    @Override
    public NurseDto createNurse(NurseDto nurseDto) {
        if (nurseDto.getNurseId() == null || nurseDto.getNurseId().isEmpty()) {
            nurseDto.setNurseId(UUID.randomUUID().toString());
        }
        Nurse nurse = NurseMapper.mapToNurse(nurseDto);
        Nurse savedNurse = nurseRepository.save(nurse);
        return NurseMapper.mapToNurseDto(savedNurse);
    }

    @Override
    public NurseDto getNurseById(String nurseId) {
        Nurse nurse = nurseRepository.findById(nurseId)
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + nurseId));
        return NurseMapper.mapToNurseDto(nurse);
    }

    @Override
    public List<NurseDto> getAllNurses() {
        List<Nurse> nurses = nurseRepository.findAll();
        return nurses.stream().map(NurseMapper::mapToNurseDto).collect(Collectors.toList());
    }

    @Override
    public NurseDto updateNurse(String nurseId, NurseDto nurseDto) {
        Nurse nurse = nurseRepository.findById(nurseId)
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + nurseId));

        nurse.setName(nurseDto.getName());
        nurse.setBirthday(nurseDto.getBirthday());
        nurse.setAddress(nurseDto.getAddress());
        nurse.setGender(nurseDto.getGender());
        nurse.setPosition(nurseDto.getPosition());
        nurse.setExperience(nurseDto.getExperience());
        nurse.setSalary(nurseDto.getSalary());

        Nurse updatedNurse = nurseRepository.save(nurse);
        return NurseMapper.mapToNurseDto(updatedNurse);
    }

    @Override
    public void deleteNurse(String nurseId) {
        Nurse nurse = nurseRepository.findById(nurseId)
                .orElseThrow(() -> new ResourceNotFoundException("Nurse not found with id: " + nurseId));
        nurseRepository.delete(nurse);
    }
}
