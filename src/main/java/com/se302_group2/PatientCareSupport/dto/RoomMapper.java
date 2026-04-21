package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.Room;

public class RoomMapper {

    public static RoomDto mapToRoomDto(Room room) {
        return new RoomDto(
                room.getRoomId(),
                room.getDepartment() != null ? room.getDepartment().getDepartmentId() : null,
                room.getName(),
                room.getType(),
                room.getNumOfBeds(),
                room.getServicePrice()
        );
    }

    public static Room mapToRoom(RoomDto roomDto, Department department) {
        return new Room(
                roomDto.getRoomId(),
                department,
                roomDto.getName(),
                roomDto.getType(),
                roomDto.getNumOfBeds(),
                roomDto.getServicePrice()
        );
    }
}
