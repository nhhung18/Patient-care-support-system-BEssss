package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Inpatient;
import com.se302_group2.PatientCareSupport.entity.TreatmentProcess;

public class TreatmentProcessMapper {

    public static TreatmentProcessDto mapToTreatmentProcessDto(TreatmentProcess treatmentProcess) {
        return new TreatmentProcessDto(
                treatmentProcess.getTreatmentId(),
                treatmentProcess.getInpatient() != null ? treatmentProcess.getInpatient().getInpatientId() : null,
                treatmentProcess.getStartDate(),
                treatmentProcess.getEndDate(),
                treatmentProcess.getMainDiagnosis(),
                treatmentProcess.getTreatmentPlan(),
                treatmentProcess.getNotes()
        );
    }

    public static TreatmentProcess mapToTreatmentProcess(TreatmentProcessDto treatmentProcessDto, Inpatient inpatient) {
        return new TreatmentProcess(
                treatmentProcessDto.getTreatmentId(),
                inpatient,
                treatmentProcessDto.getStartDate(),
                treatmentProcessDto.getEndDate(),
                treatmentProcessDto.getMainDiagnosis(),
                treatmentProcessDto.getTreatmentPlan(),
                treatmentProcessDto.getNotes()
        );
    }
}
