package com.gzlAli.personel.automation.backend.entity;

import com.gzlAli.personel.automation.backend.util.LeaveStatus;
import com.gzlAli.personel.automation.backend.util.LeaveType;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class LeaveRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @Enumerated(EnumType.STRING)
    private LeaveType leaveType;

    private LocalDate startDate;
    private LocalDate endDate;

    @Column(name = "half_day")
    private boolean halfDay;

    private String description;

    @Enumerated(EnumType.STRING)
    private LeaveStatus status; // PENDING, APPROVED, REJECTED
}
