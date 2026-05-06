package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.ShiftHandover;

public class ShiftHandoverMapper {

    public static ShiftHandoverDto mapToShiftHandoverDto(ShiftHandover shiftHandover) {
        return new ShiftHandoverDto(
                shiftHandover.getHandoverId(),
                shiftHandover.getNurseFrom() != null ? shiftHandover.getNurseFrom().getNurseId() : null,
                shiftHandover.getNurseTo() != null ? shiftHandover.getNurseTo().getNurseId() : null,
                shiftHandover.getDepartment() != null ? shiftHandover.getDepartment().getDepartmentId() : null,
                shiftHandover.getHandoverTime(),
                shiftHandover.getHandoverContent(),
                shiftHandover.getNotes()
        );
    }

    public static ShiftHandover mapToShiftHandover(ShiftHandoverDto shiftHandoverDto, Nurse nurseFrom, Nurse nurseTo, Department department) {
        return new ShiftHandover(
                shiftHandoverDto.getHandoverId(),
                nurseFrom,
                nurseTo,
                department,
                shiftHandoverDto.getHandoverTime(),
                shiftHandoverDto.getHandoverContent(),
                shiftHandoverDto.getNotes()
        );
    }
}
