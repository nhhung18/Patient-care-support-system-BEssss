package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Nurse;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;
import com.se302_group2.PatientCareSupport.entity.VitalSign;

public class VitalSignMapper {

    public static VitalSignDto mapToVitalSignDto(VitalSign vitalSign) {
        return new VitalSignDto(
                vitalSign.getSignId(),
                vitalSign.getTreatmentProcess() != null ? vitalSign.getTreatmentProcess().getTreatmentId() : null,
                vitalSign.getNurse() != null ? vitalSign.getNurse().getNurseId() : null,
                vitalSign.getRecordTime(),
                vitalSign.getTemperature(),
                vitalSign.getBloodPressure(),
                vitalSign.getPulse(),
                vitalSign.getBreathRate(),
                vitalSign.getSpO2(),
                vitalSign.getWeight(),
                vitalSign.getNotes()
        );
    }

    public static VitalSign mapToVitalSign(VitalSignDto vitalSignDto, TreatmentProcess treatmentProcess, Nurse nurse) {
        return new VitalSign(
                vitalSignDto.getSignId(),
                treatmentProcess,
                nurse,
                vitalSignDto.getRecordTime(),
                vitalSignDto.getTemperature(),
                vitalSignDto.getBloodPressure(),
                vitalSignDto.getPulse(),
                vitalSignDto.getBreathRate(),
                vitalSignDto.getSpO2(),
                vitalSignDto.getWeight(),
                vitalSignDto.getNotes()
        );
    }
}
