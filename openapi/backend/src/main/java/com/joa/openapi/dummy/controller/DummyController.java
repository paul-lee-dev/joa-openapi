package com.joa.openapi.dummy.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/dummy")
@RequiredArgsConstructor
public class DummyController {

    private final DummyController dummyController;

    @PostMapping("/member")
    public ResponseEntity<?> createMember(@RequestBody ) {

    }
}
