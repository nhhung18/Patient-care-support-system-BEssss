package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.RoomDto;
import com.se302_group2.PatientCareSupport.dto.RoomMapper;
import com.se302_group2.PatientCareSupport.entity.Department;
import com.se302_group2.PatientCareSupport.entity.Room;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.DepartmentRepository;
import com.se302_group2.PatientCareSupport.repository.RoomRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RoomServiceImpl implements RoomService {

    private RoomRepository roomRepository;
    private DepartmentRepository departmentRepository;

    @Override
    public RoomDto createRoom(RoomDto roomDto) {
        if (roomDto.getRoomId() == null || roomDto.getRoomId().isEmpty()) {
            roomDto.setRoomId(UUID.randomUUID().toString().substring(0, 10)); // max 10 chars
        }

        Department department = departmentRepository.findById(roomDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + roomDto.getDepartmentId()));

        Room room = RoomMapper.mapToRoom(roomDto, department);
        Room savedRoom = roomRepository.save(room);
        return RoomMapper.mapToRoomDto(savedRoom);
    }

    @Override
    public RoomDto getRoomById(String roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
        return RoomMapper.mapToRoomDto(room);
    }

    @Override
    public List<RoomDto> getAllRooms() {
        List<Room> rooms = roomRepository.findAll();
        return rooms.stream().map(RoomMapper::mapToRoomDto).collect(Collectors.toList());
    }

    @Override
    public List<RoomDto> getRoomsByDepartmentId(String departmentId) {
        List<Room> rooms = roomRepository.findByDepartment_DepartmentId(departmentId);
        return rooms.stream().map(RoomMapper::mapToRoomDto).collect(Collectors.toList());
    }

    @Override
    public RoomDto updateRoom(String roomId, RoomDto roomDto) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));

        Department department = departmentRepository.findById(roomDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + roomDto.getDepartmentId()));

        room.setDepartment(department);
        room.setName(roomDto.getName());
        room.setType(roomDto.getType());
        room.setNumOfBeds(roomDto.getNumOfBeds());
        room.setServicePrice(roomDto.getServicePrice());

        Room updatedRoom = roomRepository.save(room);
        return RoomMapper.mapToRoomDto(updatedRoom);
    }

    @Override
    public void deleteRoom(String roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + roomId));
        roomRepository.delete(room);
    }
}
