package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.RoomDto;
import java.util.List;

public interface RoomService {
    RoomDto createRoom(RoomDto roomDto);
    RoomDto getRoomById(String roomId);
    List<RoomDto> getAllRooms();
    List<RoomDto> getRoomsByDepartmentId(String departmentId);
    RoomDto updateRoom(String roomId, RoomDto roomDto);
    void deleteRoom(String roomId);
}
