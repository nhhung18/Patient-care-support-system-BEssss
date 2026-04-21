package com.se302_group2.PatientCareSupport.dto;

import com.se302_group2.PatientCareSupport.entity.Bed;
import com.se302_group2.PatientCareSupport.entity.Doctor;
import com.se302_group2.PatientCareSupport.entity.Inpatient;
import com.se302_group2.PatientCareSupport.entity.Patient;

public class InpatientMapper {

    public static InpatientDto mapToInpatientDto(Inpatient inpatient) {
        return new InpatientDto(
                inpatient.getInpatientId(),
                inpatient.getPatient() != null ? inpatient.getPatient().getPatientId() : null,
                inpatient.getAdmissionDate(),
                inpatient.getReasons(),
                inpatient.getDoctor() != null ? inpatient.getDoctor().getDoctorId() : null,
                inpatient.getBed() != null ? inpatient.getBed().getBedId() : null
        );
    }

    public static Inpatient mapToInpatient(InpatientDto inpatientDto, Patient patient, Doctor doctor, Bed bed) {
        return new Inpatient(
                inpatientDto.getInpatientId(),
                patient,
                inpatientDto.getAdmissionDate(),
                inpatientDto.getReasons(),
                doctor,
                bed
        );
    }
}
