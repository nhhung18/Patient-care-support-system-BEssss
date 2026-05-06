package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Bed;
import com.se302_group2.PatientCareSupport.entity.Room;

public class BedMapper {

    public static BedDto mapToBedDto(Bed bed) {
        return new BedDto(
                bed.getBedId(),
                bed.getRoom() != null ? bed.getRoom().getRoomId() : null,
                bed.getStatus(),
                bed.getArrivalDate(),
                bed.getDepartDate()
        );
    }

    public static Bed mapToBed(BedDto bedDto, Room room) {
        return new Bed(
                bedDto.getBedId(),
                room,
                bedDto.getStatus(),
                bedDto.getArrivalDate(),
                bedDto.getDepartDate()
        );
    }
}
