package com.se302_group2.PatientCareSupport.controller;

import com.se302_group2.PatientCareSupport.dto.RoomDto;
import com.se302_group2.PatientCareSupport.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@AllArgsConstructor
public class RoomController {

    private RoomService roomService;

    @PostMapping
    public ResponseEntity<RoomDto> createRoom(@RequestBody RoomDto roomDto) {
        RoomDto savedRoom = roomService.createRoom(roomDto);
        return new ResponseEntity<>(savedRoom, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<RoomDto> getRoomById(@PathVariable("id") String roomId) {
        RoomDto roomDto = roomService.getRoomById(roomId);
        return ResponseEntity.ok(roomDto);
    }

    @GetMapping
    public ResponseEntity<List<RoomDto>> getAllRooms() {
        List<RoomDto> rooms = roomService.getAllRooms();
        return ResponseEntity.ok(rooms);
    }

    @GetMapping("/department/{departmentId}")
    public ResponseEntity<List<RoomDto>> getRoomsByDepartmentId(@PathVariable("departmentId") String departmentId) {
        List<RoomDto> rooms = roomService.getRoomsByDepartmentId(departmentId);
        return ResponseEntity.ok(rooms);
    }

    @PutMapping("{id}")
    public ResponseEntity<RoomDto> updateRoom(@PathVariable("id") String roomId, @RequestBody RoomDto roomDto) {
        RoomDto updatedRoom = roomService.updateRoom(roomId, roomDto);
        return ResponseEntity.ok(updatedRoom);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteRoom(@PathVariable("id") String roomId) {
        roomService.deleteRoom(roomId);
        return ResponseEntity.ok("Room deleted successfully!.");
    }
}
