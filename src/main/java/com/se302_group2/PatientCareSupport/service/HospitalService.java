package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.HospitalDto;
import java.util.List;

public interface HospitalService {
    HospitalDto createHospital(HospitalDto hospitalDto);
    HospitalDto getHospitalById(String hospitalId);
    List<HospitalDto> getAllHospitals();
    HospitalDto updateHospital(String hospitalId, HospitalDto hospitalDto);
    void deleteHospital(String hospitalId);
}
