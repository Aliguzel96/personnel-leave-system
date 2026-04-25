package com.gzlAli.personel.automation.backend.controller;

import com.gzlAli.personel.automation.backend.dto.LeaveRequestDTO;
import com.gzlAli.personel.automation.backend.entity.LeaveRequest;
import com.gzlAli.personel.automation.backend.service.LeaveService;
import com.gzlAli.personel.automation.backend.util.LeaveStatus;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
@RequestMapping("api/leaves")
public class LeaveController {

    private final LeaveService leaveService;

    @PostMapping
    public ResponseEntity<LeaveRequest> create(@Valid @RequestBody LeaveRequestDTO dto) {
        return ResponseEntity.ok(leaveService.createLeave(dto));
    }

    @GetMapping
    public List<LeaveRequest> getAll() {
        return leaveService.getAll();
    }

    @PutMapping("/{id}")
    public LeaveRequest updateStatus(@PathVariable Long id,
                                     @RequestParam LeaveStatus status) {
        return leaveService.updateStatus(id, status);
    }


}
