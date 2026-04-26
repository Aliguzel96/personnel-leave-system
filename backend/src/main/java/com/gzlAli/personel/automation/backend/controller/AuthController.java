package com.gzlAli.personel.automation.backend.controller;

import com.gzlAli.personel.automation.backend.dto.AuthResponse;
import com.gzlAli.personel.automation.backend.dto.LoginRequest;
import com.gzlAli.personel.automation.backend.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthController {

    private final JwtUtil jwtUtil;

    @Value("${APP_USERNAME}")
    private String appUsername;

    @Value("${APP_PASSWORD}")
    private String appPassword;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        if (appUsername.equals(req.getUsername()) && appPassword.equals(req.getPassword())) {
            String token = jwtUtil.generate(req.getUsername());
            return ResponseEntity.ok(new AuthResponse(token));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
