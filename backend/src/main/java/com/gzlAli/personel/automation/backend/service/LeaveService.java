package com.gzlAli.personel.automation.backend.service;

import com.gzlAli.personel.automation.backend.dto.LeaveRequestDTO;
import com.gzlAli.personel.automation.backend.entity.LeaveRequest;
import com.gzlAli.personel.automation.backend.repository.LeaveRequestRepository;
import com.gzlAli.personel.automation.backend.util.LeaveStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeaveService {

    private final LeaveRequestRepository repository;

    public LeaveRequest createLeave(LeaveRequestDTO dto) {

        if(dto.getStartDate().isAfter(dto.getEndDate())) {
            throw new IllegalArgumentException("Başlangıç tarihi bitişten sonra olamaz");
        }

        LeaveRequest leave = new LeaveRequest();
        leave.setFullName(dto.getFullName());
        leave.setLeaveType(dto.getLeaveType());
        leave.setStartDate(dto.getStartDate());
        leave.setEndDate(dto.getEndDate());
        leave.setHalfDay(dto.isHalfDay());
        leave.setDescription(dto.getDescription());
        leave.setStatus(LeaveStatus.PENDING);

        return repository.save(leave);
    }

    public List<LeaveRequest> getAll() {
        return repository.findAll();
    }

    public LeaveRequest updateStatus(Long id, LeaveStatus status) {

        LeaveRequest leave = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Kayıt bulunamadı"));

        leave.setStatus(status);
        return repository.save(leave);
    }
}
