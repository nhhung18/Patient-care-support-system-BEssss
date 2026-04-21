package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.DepartmentTransferDto;
import com.se302_group2.PatientCareSupport.dto.DepartmentTransferMapper;
import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.DepartmentTransfer;
import com.se302_group2.PatientCareSupport.entity.Inpatient;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.DepartmentRepository;
import com.se302_group2.PatientCareSupport.repository.DepartmentTransferRepository;
import com.se302_group2.PatientCareSupport.repository.InpatientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentTransferServiceImpl implements DepartmentTransferService {

    private DepartmentTransferRepository departmentTransferRepository;
    private InpatientRepository inpatientRepository;
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentTransferDto createDepartmentTransfer(DepartmentTransferDto departmentTransferDto) {
        if (departmentTransferDto.getTransferId() == null || departmentTransferDto.getTransferId().isEmpty()) {
            departmentTransferDto.setTransferId(UUID.randomUUID().toString());
        }

        Inpatient inpatient = inpatientRepository.findById(departmentTransferDto.getInpatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Inpatient not found with id: " + departmentTransferDto.getInpatientId()));

        Department fromDept = departmentRepository.findById(departmentTransferDto.getFromDeptId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + departmentTransferDto.getFromDeptId()));

        Department toDept = departmentRepository.findById(departmentTransferDto.getToDeptId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + departmentTransferDto.getToDeptId()));

        DepartmentTransfer departmentTransfer = DepartmentTransferMapper.mapToDepartmentTransfer(departmentTransferDto, inpatient, fromDept, toDept);
        DepartmentTransfer savedTransfer = departmentTransferRepository.save(departmentTransfer);
        return DepartmentTransferMapper.mapToDepartmentTransferDto(savedTransfer);
    }

    @Override
    public DepartmentTransferDto getDepartmentTransferById(String transferId) {
        DepartmentTransfer departmentTransfer = departmentTransferRepository.findById(transferId)
                .orElseThrow(() -> new ResourceNotFoundException("DepartmentTransfer not found with id: " + transferId));
        return DepartmentTransferMapper.mapToDepartmentTransferDto(departmentTransfer);
    }

    @Override
    public List<DepartmentTransferDto> getAllDepartmentTransfers() {
        List<DepartmentTransfer> transfers = departmentTransferRepository.findAll();
        return transfers.stream().map(DepartmentTransferMapper::mapToDepartmentTransferDto).collect(Collectors.toList());
    }

    @Override
    public List<DepartmentTransferDto> getDepartmentTransfersByInpatientId(String inpatientId) {
        List<DepartmentTransfer> transfers = departmentTransferRepository.findByInpatient_InpatientId(inpatientId);
        return transfers.stream().map(DepartmentTransferMapper::mapToDepartmentTransferDto).collect(Collectors.toList());
    }

    @Override
    public List<DepartmentTransferDto> getDepartmentTransfersByFromDeptId(String departmentId) {
        List<DepartmentTransfer> transfers = departmentTransferRepository.findByFromDept_DepartmentId(departmentId);
        return transfers.stream().map(DepartmentTransferMapper::mapToDepartmentTransferDto).collect(Collectors.toList());
    }

    @Override
    public List<DepartmentTransferDto> getDepartmentTransfersByToDeptId(String departmentId) {
        List<DepartmentTransfer> transfers = departmentTransferRepository.findByToDept_DepartmentId(departmentId);
        return transfers.stream().map(DepartmentTransferMapper::mapToDepartmentTransferDto).collect(Collectors.toList());
    }

    @Override
    public DepartmentTransferDto updateDepartmentTransfer(String transferId, DepartmentTransferDto departmentTransferDto) {
        DepartmentTransfer departmentTransfer = departmentTransferRepository.findById(transferId)
                .orElseThrow(() -> new ResourceNotFoundException("DepartmentTransfer not found with id: " + transferId));

        Inpatient inpatient = inpatientRepository.findById(departmentTransferDto.getInpatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Inpatient not found with id: " + departmentTransferDto.getInpatientId()));

        Department fromDept = departmentRepository.findById(departmentTransferDto.getFromDeptId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + departmentTransferDto.getFromDeptId()));

        Department toDept = departmentRepository.findById(departmentTransferDto.getToDeptId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + departmentTransferDto.getToDeptId()));

        departmentTransfer.setInpatient(inpatient);
        departmentTransfer.setFromDept(fromDept);
        departmentTransfer.setToDept(toDept);
        departmentTransfer.setTransferDate(departmentTransferDto.getTransferDate());
        departmentTransfer.setReasons(departmentTransferDto.getReasons());
        departmentTransfer.setNotes(departmentTransferDto.getNotes());

        DepartmentTransfer updatedTransfer = departmentTransferRepository.save(departmentTransfer);
        return DepartmentTransferMapper.mapToDepartmentTransferDto(updatedTransfer);
    }

    @Override
    public void deleteDepartmentTransfer(String transferId) {
        DepartmentTransfer departmentTransfer = departmentTransferRepository.findById(transferId)
                .orElseThrow(() -> new ResourceNotFoundException("DepartmentTransfer not found with id: " + transferId));
        departmentTransferRepository.delete(departmentTransfer);
    }
}
