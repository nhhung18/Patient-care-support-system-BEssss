package com.se302_group2.PatientCareSupport.service;

import com.se302_group2.PatientCareSupport.dto.MedicalOrderDto;
import java.util.List;

public interface MedicalOrderService {
    MedicalOrderDto createMedicalOrder(MedicalOrderDto medicalOrderDto);
    MedicalOrderDto getMedicalOrderById(String orderId);
    List<MedicalOrderDto> getAllMedicalOrders();
    List<MedicalOrderDto> getMedicalOrdersByTreatmentId(String treatmentId);
    List<MedicalOrderDto> getMedicalOrdersByDoctorId(String doctorId);
    MedicalOrderDto updateMedicalOrder(String orderId, MedicalOrderDto medicalOrderDto);
    void deleteMedicalOrder(String orderId);
}
