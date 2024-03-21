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
    public ResponseEntity<?> createMember(@RequestBody DummyMemberRequestDto req, @RequestHeader("bankId") UUID bankId, @RequestHeader("adminId") UUID adminId) {
        DummyResponseDto dummyResponseDto = dummyService.createMember(req, bankId, adminId);
        log.info("{}은행에 더미멤버 생성", bankId);
        log.info("더미멤버 생성 갯수 : {}", req.getCount());
        for (int i = 0; i < req.getCount(); i++) {
            log.info("{}번째 멤버:{}, 은행코드:{}, 더미생성내역아이디:{}", i+1, dummyService.makeName(3), bankId, dummyResponseDto.getDummyId());
        }

        return ResponseEntity.ok(ApiResponse.success("멤버 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/account")
    public ResponseEntity<?> createAccount(@RequestBody DummyAccountRequestDto req, @RequestHeader("bankId") UUID bankId, @RequestHeader("adminId") UUID adminId, @RequestHeader("productId") UUID productId) {
        DummyResponseDto dummyResponseDto = dummyService.createAccount(req, bankId, adminId, productId);
        return ResponseEntity.ok(ApiResponse.success("계좌 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/transaction")
    public ResponseEntity<?> createTransaction(@RequestBody DummyMemberRequestDto req, @RequestHeader("bankId") UUID bankId, @RequestHeader("adminId") UUID adminId) {
        log.info("req:{}", req);
        DummyResponseDto dummyResponseDto = dummyService.createTransaction(req, bankId, adminId);
        log.info("{}은행에 더미거래내역 생성", bankId);
        log.info("더미거래내역 생성 갯수 : {}", req.getCount());
        for (int i = 0; i < req.getCount(); i++) {
            log.info("{}번째 거래내역 생성", i+1);
        }
        return ResponseEntity.ok(ApiResponse.success("거래내역 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @DeleteMapping("/{dummyId}")
    public ResponseEntity<?> deleteDummy(@PathVariable(value = "dummyId") UUID dummyId) {
        DummyResponseDto dummyResponseDto = dummyService.search(dummyId);
        dummyService.deleteDummy(dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 삭제 성공했습니다.", dummyResponseDto));
    }

}