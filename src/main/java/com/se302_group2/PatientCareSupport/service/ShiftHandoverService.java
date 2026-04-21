package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.ShiftHandoverDto;
import java.util.List;

public interface ShiftHandoverService {
    ShiftHandoverDto createShiftHandover(ShiftHandoverDto shiftHandoverDto);
    ShiftHandoverDto getShiftHandoverById(String handoverId);
    List<ShiftHandoverDto> getAllShiftHandovers();
    List<ShiftHandoverDto> getShiftHandoversByNurseFromId(String nurseId);
    List<ShiftHandoverDto> getShiftHandoversByNurseToId(String nurseId);
    List<ShiftHandoverDto> getShiftHandoversByDepartmentId(String departmentId);
    ShiftHandoverDto updateShiftHandover(String handoverId, ShiftHandoverDto shiftHandoverDto);
    void deleteShiftHandover(String handoverId);
}
