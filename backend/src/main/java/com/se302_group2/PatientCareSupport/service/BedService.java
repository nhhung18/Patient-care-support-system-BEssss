package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.BedDto;
import java.util.List;

public interface BedService {
    BedDto createBed(BedDto bedDto);
    BedDto getBedById(String bedId);
    List<BedDto> getAllBeds();
    List<BedDto> getBedsByRoomId(String roomId);
    BedDto updateBed(String bedId, BedDto bedDto);
    void deleteBed(String bedId);
}
