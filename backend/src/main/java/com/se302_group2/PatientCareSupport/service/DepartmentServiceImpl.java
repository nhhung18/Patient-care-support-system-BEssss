package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.DepartmentDto;
import com.se302_group2.PatientCareSupport.dto.DepartmentMapper;
import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.Hospital;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.DepartmentRepository;
import com.se302_group2.PatientCareSupport.repository.HospitalRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;
    private HospitalRepository hospitalRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        if (departmentDto.getDepartmentId() == null || departmentDto.getDepartmentId().isEmpty()) {
            departmentDto.setDepartmentId(UUID.randomUUID().toString());
        }

        Hospital hospital = hospitalRepository.findById(departmentDto.getHospitalId())
                .orElseThrow(() -> new ResourceNotFoundException("Hospital not found with id: " + departmentDto.getHospitalId()));

        Department department = DepartmentMapper.mapToDepartment(departmentDto, hospital);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(String departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + departmentId));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map(DepartmentMapper::mapToDepartmentDto).collect(Collectors.toList());
    }

    @Override
    public List<DepartmentDto> getDepartmentsByHospitalId(String hospitalId) {
        List<Department> departments = departmentRepository.findByHospital_HospitalId(hospitalId);
        return departments.stream().map(DepartmentMapper::mapToDepartmentDto).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(String departmentId, DepartmentDto departmentDto) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + departmentId));

        Hospital hospital = hospitalRepository.findById(departmentDto.getHospitalId())
                .orElseThrow(() -> new ResourceNotFoundException("Hospital not found with id: " + departmentDto.getHospitalId()));

        department.setHospital(hospital);
        department.setName(departmentDto.getName());
        department.setPhone(departmentDto.getPhone());
        department.setFloor(departmentDto.getFloor());
        department.setDescription(departmentDto.getDescription());
        department.setHeadDoctorId(departmentDto.getHeadDoctorId());
        department.setNumOfRooms(departmentDto.getNumOfRooms());
        department.setNumOfDoctors(departmentDto.getNumOfDoctors());
        department.setNumOfNurses(departmentDto.getNumOfNurses());

        Department updatedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(updatedDepartment);
    }

    @Override
    public void deleteDepartment(String departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + departmentId));
        departmentRepository.delete(department);
    }
}
