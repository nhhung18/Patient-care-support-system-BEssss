package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.BedDto;
import com.se302_group2.PatientCareSupport.dto.BedMapper;
import com.se302_group2.PatientCareSupport.entity.Room;
import com.se302_group2.PatientCareSupport.entity.Bed;
import com.se302_group2.PatientCareSupport.exception.ResourceNotFoundException;
import com.se302_group2.PatientCareSupport.repository.RoomRepository;
import com.se302_group2.PatientCareSupport.repository.BedRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BedServiceImpl implements BedService {

    private BedRepository bedRepository;
    private RoomRepository roomRepository;

    @Override
    public BedDto createBed(BedDto bedDto) {
        if (bedDto.getBedId() == null || bedDto.getBedId().isEmpty()) {
            bedDto.setBedId(UUID.randomUUID().toString().substring(0, 10)); // max 10 chars
        }

        Room room = roomRepository.findById(bedDto.getRoomId())
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + bedDto.getRoomId()));

        Bed bed = BedMapper.mapToBed(bedDto, room);
        Bed savedBed = bedRepository.save(bed);
        return BedMapper.mapToBedDto(savedBed);
    }

    @Override
    public BedDto getBedById(String bedId) {
        Bed bed = bedRepository.findById(bedId)
                .orElseThrow(() -> new ResourceNotFoundException("Bed not found with id: " + bedId));
        return BedMapper.mapToBedDto(bed);
    }

    @Override
    public List<BedDto> getAllBeds() {
        List<Bed> beds = bedRepository.findAll();
        return beds.stream().map(BedMapper::mapToBedDto).collect(Collectors.toList());
    }

    @Override
    public List<BedDto> getBedsByRoomId(String roomId) {
        List<Bed> beds = bedRepository.findByRoom_RoomId(roomId);
        return beds.stream().map(BedMapper::mapToBedDto).collect(Collectors.toList());
    }

    @Override
    public BedDto updateBed(String bedId, BedDto bedDto) {
        Bed bed = bedRepository.findById(bedId)
                .orElseThrow(() -> new ResourceNotFoundException("Bed not found with id: " + bedId));

        Room room = roomRepository.findById(bedDto.getRoomId())
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + bedDto.getRoomId()));

        bed.setRoom(room);
        bed.setStatus(bedDto.getStatus());
        bed.setArrivalDate(bedDto.getArrivalDate());
        bed.setDepartDate(bedDto.getDepartDate());

        Bed updatedBed = bedRepository.save(bed);
        return BedMapper.mapToBedDto(updatedBed);
    }

    @Override
    public void deleteBed(String bedId) {
        Bed bed = bedRepository.findById(bedId)
                .orElseThrow(() -> new ResourceNotFoundException("Bed not found with id: " + bedId));
        bedRepository.delete(bed);
    }
}
