package com.joa.openapi.dummy.controller;

import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.dummy.dto.DummyRequestDto;
import com.joa.openapi.dummy.dto.DummyResponseDto;
import com.joa.openapi.dummy.service.DummyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/v1/dummy")
@RequiredArgsConstructor
@Slf4j
public class DummyController {

    private final DummyService dummyService;
    private final BankService bankService;

    @PostMapping("/member")
    public ResponseEntity<?> createMember(@RequestBody DummyRequestDto req, @RequestHeader("bankId") UUID bankId, @RequestHeader("adminId") UUID adminId) {
        DummyResponseDto dummyResponseDto = dummyService.createMember(req, bankId, adminId);
        log.info("{}은행에 더미멤버 생성", bankId);
        log.info("더미멤버 생성 갯수 : {}", req.getCount());
        for (int i = 0; i < req.getCount(); i++) {
            log.info("{}번째 멤버:{}, 은행코드:{}, 더미생성내역아이디:{}", i+1, dummyService.makeNeyhuing(3), bankId, dummyResponseDto.getDummyId());
        }

        return ResponseEntity.ok(ApiResponse.success("멤버 더미데이터 생성 성공", dummyResponseDto));
    }

    @PostMapping("/account")
    public ResponseEntity<?> createAccount(@RequestBody DummyRequestDto req, @RequestHeader("bankId") UUID bankId, @RequestHeader("adminId") UUID adminId) {
        DummyResponseDto dummyResponseDto = dummyService.createAccount(req, bankId, adminId);
        log.info("{}은행에 더미계좌 생성", bankId);
        log.info("더미계좌 생성 갯수 : {}", req.getCount());
        for (int i = 0; i < req.getCount(); i++) {
            log.info("{}번째 계좌 생성, 계좌별명:{}", i+1, dummyService.makeNeyhuing(4));
        }
        return ResponseEntity.ok(ApiResponse.success("계좌 더미데이터 생성 성공", dummyResponseDto));
    }
}
