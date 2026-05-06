package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.NurseDto;
import java.util.List;

public interface NurseService {
    NurseDto createNurse(NurseDto nurseDto);
    NurseDto getNurseById(String nurseId);
    List<NurseDto> getAllNurses();
    NurseDto updateNurse(String nurseId, NurseDto nurseDto);
    void deleteNurse(String nurseId);
}
