package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Nurse;

public class NurseMapper {

    public static NurseDto mapToNurseDto(Nurse nurse) {
        return new NurseDto(
                nurse.getNurseId(),
                nurse.getName(),
                nurse.getBirthday(),
                nurse.getAddress(),
                nurse.getGender(),
                nurse.getPosition(),
                nurse.getExperience(),
                nurse.getSalary()
        );
    }

    public static Nurse mapToNurse(NurseDto nurseDto) {
        return new Nurse(
                nurseDto.getNurseId(),
                nurseDto.getName(),
                nurseDto.getBirthday(),
                nurseDto.getAddress(),
                nurseDto.getGender(),
                nurseDto.getPosition(),
                nurseDto.getExperience(),
                nurseDto.getSalary()
        );
    }
}
