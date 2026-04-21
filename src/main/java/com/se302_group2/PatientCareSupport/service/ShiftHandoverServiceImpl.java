package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.ShiftHandoverDto;
import com.se302_group2.PatientCareSupport.dto.ShiftHandoverMapper;
import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.ShiftHandover;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.DepartmentRepository;
import com.se302_group2.PatientCareSupport.repository.NurseRepository;
import com.se302_group2.PatientCareSupport.repository.ShiftHandoverRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ShiftHandoverServiceImpl implements ShiftHandoverService {

    private ShiftHandoverRepository shiftHandoverRepository;
    private NurseRepository nurseRepository;
    private DepartmentRepository departmentRepository;

    @Override
    public ShiftHandoverDto createShiftHandover(ShiftHandoverDto shiftHandoverDto) {
        if (shiftHandoverDto.getHandoverId() == null || shiftHandoverDto.getHandoverId().isEmpty()) {
            shiftHandoverDto.setHandoverId(UUID.randomUUID().toString());
        }

        Nurse nurseFrom = nurseRepository.findById(shiftHandoverDto.getNurseFromId())
                .orElseThrow(() -> new ResourceNotFoundException("NurseFrom not found with id: " + shiftHandoverDto.getNurseFromId()));

        Nurse nurseTo = nurseRepository.findById(shiftHandoverDto.getNurseToId())
                .orElseThrow(() -> new ResourceNotFoundException("NurseTo not found with id: " + shiftHandoverDto.getNurseToId()));

        Department department = departmentRepository.findById(shiftHandoverDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + shiftHandoverDto.getDepartmentId()));

        ShiftHandover shiftHandover = ShiftHandoverMapper.mapToShiftHandover(shiftHandoverDto, nurseFrom, nurseTo, department);
        ShiftHandover savedHandover = shiftHandoverRepository.save(shiftHandover);
        return ShiftHandoverMapper.mapToShiftHandoverDto(savedHandover);
    }

    @Override
    public ShiftHandoverDto getShiftHandoverById(String handoverId) {
        ShiftHandover shiftHandover = shiftHandoverRepository.findById(handoverId)
                .orElseThrow(() -> new ResourceNotFoundException("ShiftHandover not found with id: " + handoverId));
        return ShiftHandoverMapper.mapToShiftHandoverDto(shiftHandover);
    }

    @Override
    public List<ShiftHandoverDto> getAllShiftHandovers() {
        List<ShiftHandover> handovers = shiftHandoverRepository.findAll();
        return handovers.stream().map(ShiftHandoverMapper::mapToShiftHandoverDto).collect(Collectors.toList());
    }

    @Override
    public List<ShiftHandoverDto> getShiftHandoversByNurseFromId(String nurseId) {
        List<ShiftHandover> handovers = shiftHandoverRepository.findByNurseFrom_NurseId(nurseId);
        return handovers.stream().map(ShiftHandoverMapper::mapToShiftHandoverDto).collect(Collectors.toList());
    }

    @Override
    public List<ShiftHandoverDto> getShiftHandoversByNurseToId(String nurseId) {
        List<ShiftHandover> handovers = shiftHandoverRepository.findByNurseTo_NurseId(nurseId);
        return handovers.stream().map(ShiftHandoverMapper::mapToShiftHandoverDto).collect(Collectors.toList());
    }

    @Override
    public List<ShiftHandoverDto> getShiftHandoversByDepartmentId(String departmentId) {
        List<ShiftHandover> handovers = shiftHandoverRepository.findByDepartment_DepartmentId(departmentId);
        return handovers.stream().map(ShiftHandoverMapper::mapToShiftHandoverDto).collect(Collectors.toList());
    }

    @Override
    public ShiftHandoverDto updateShiftHandover(String handoverId, ShiftHandoverDto shiftHandoverDto) {
        ShiftHandover shiftHandover = shiftHandoverRepository.findById(handoverId)
                .orElseThrow(() -> new ResourceNotFoundException("ShiftHandover not found with id: " + handoverId));

        Nurse nurseFrom = nurseRepository.findById(shiftHandoverDto.getNurseFromId())
                .orElseThrow(() -> new ResourceNotFoundException("NurseFrom not found with id: " + shiftHandoverDto.getNurseFromId()));

        Nurse nurseTo = nurseRepository.findById(shiftHandoverDto.getNurseToId())
                .orElseThrow(() -> new ResourceNotFoundException("NurseTo not found with id: " + shiftHandoverDto.getNurseToId()));

        Department department = departmentRepository.findById(shiftHandoverDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + shiftHandoverDto.getDepartmentId()));

        shiftHandover.setNurseFrom(nurseFrom);
        shiftHandover.setNurseTo(nurseTo);
        shiftHandover.setDepartment(department);
        shiftHandover.setHandoverTime(shiftHandoverDto.getHandoverTime());
        shiftHandover.setHandoverContent(shiftHandoverDto.getHandoverContent());
        shiftHandover.setNotes(shiftHandoverDto.getNotes());

        ShiftHandover updatedHandover = shiftHandoverRepository.save(shiftHandover);
        return ShiftHandoverMapper.mapToShiftHandoverDto(updatedHandover);
    }

    @Override
    public void deleteShiftHandover(String handoverId) {
        ShiftHandover shiftHandover = shiftHandoverRepository.findById(handoverId)
                .orElseThrow(() -> new ResourceNotFoundException("ShiftHandover not found with id: " + handoverId));
        shiftHandoverRepository.delete(shiftHandover);
    }
}
