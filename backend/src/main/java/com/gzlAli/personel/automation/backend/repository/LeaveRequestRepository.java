package com.gzlAli.personel.automation.backend.repository;

import com.gzlAli.personel.automation.backend.entity.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest,Long> {
}
