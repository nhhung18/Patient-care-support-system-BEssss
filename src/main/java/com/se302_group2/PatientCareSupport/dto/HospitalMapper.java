package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Hospital;

public class HospitalMapper {

    public static HospitalDto mapToHospitalDto(Hospital hospital) {
        return new HospitalDto(
                hospital.getHospitalId(),
                hospital.getHospitalName(),
                hospital.getFoundingDate(),
                hospital.getEmail(),
                hospital.getPhone(),
                hospital.getAddress(),
                hospital.getWebsite(),
                hospital.getType(),
                hospital.getDirectorName()
        );
    }

    public static Hospital mapToHospital(HospitalDto hospitalDto) {
        return new Hospital(
                hospitalDto.getHospitalId(),
                hospitalDto.getHospitalName(),
                hospitalDto.getFoundingDate(),
                hospitalDto.getEmail(),
                hospitalDto.getPhone(),
                hospitalDto.getAddress(),
                hospitalDto.getWebsite(),
                hospitalDto.getType(),
                hospitalDto.getDirectorName()
        );
    }
}
