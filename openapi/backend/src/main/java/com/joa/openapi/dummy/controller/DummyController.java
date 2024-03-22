package com.joa.openapi.dummy.controller;

import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.dummy.dto.DummyAccountRequestDto;
import com.joa.openapi.dummy.dto.DummyMemberRequestDto;
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
    public ResponseEntity<?> createMember(@RequestBody DummyMemberRequestDto req, @RequestHeader("adminId") UUID adminId) {
        DummyResponseDto dummyResponseDto = dummyService.createMember(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("멤버 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/account")
    public ResponseEntity<?> createAccount(@RequestBody DummyAccountRequestDto req, @RequestHeader("adminId") UUID adminId) {
        DummyResponseDto dummyResponseDto = dummyService.createAccount(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("계좌 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/transaction")
    public ResponseEntity<?> createTransaction(@RequestBody DummyMemberRequestDto req, @RequestHeader("adminId") UUID adminId) {
        DummyResponseDto dummyResponseDto = dummyService.createTransaction(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("거래내역 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @DeleteMapping("/{dummyId}")
    public ResponseEntity<?> deleteDummy(@PathVariable(value = "dummyId") UUID dummyId) {
        DummyResponseDto dummyResponseDto = dummyService.search(dummyId);
        dummyService.deleteDummy(dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 삭제 성공했습니다.", dummyResponseDto));
    }

}