package com.joa.openapi.dummy.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.dummy.dto.*;
import com.joa.openapi.dummy.service.DummyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/dummy")
@RequiredArgsConstructor
@Slf4j
public class DummyController {

    private final DummyService dummyService;

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
    public ResponseEntity<?> createTransaction(@RequestBody DummyTransactionRequestDto req, @RequestHeader("adminId") UUID adminId) {
        DummyResponseDto dummyResponseDto = dummyService.createTransaction(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("거래내역 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @DeleteMapping("/{dummyId}")
    public ResponseEntity<?> deleteDummy(@PathVariable(value = "dummyId") UUID dummyId) {
        DummyResponseDto dummyResponseDto = dummyService.deleteDummy(dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 삭제 성공했습니다.", dummyResponseDto));
    }

    // TODO: adminId는 토큰을 통해 가져오게 하기
    @DeleteMapping()
    public ResponseEntity<?> delete(@RequestHeader(value = "adminId") UUID adminId) {
        List<DummyResponseDto> dummyResponseDtoList = dummyService.deleteAllDummy(adminId);
        return ResponseEntity.ok(ApiResponse.success("전체 더미데이터 삭제 성공했습니다.", dummyResponseDtoList));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(@RequestHeader(value = "adminId") UUID adminId) {
        List<DummyResponseDto> dummyResponseDtoList = dummyService.searchAll(adminId);
        return ResponseEntity.ok(ApiResponse.success("전체 더미데이터 검색 성공했습니다.", dummyResponseDtoList));
    }

    @GetMapping("/{dummyId}")
    public ResponseEntity<?> search(@PathVariable(value = "dummyId") UUID dummyId) {
        DummyResponseDto dummyResponseDto = dummyService.search(dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 검색 성공했습니다.", dummyResponseDto));
    }

    @PatchMapping("/{dummyId}")
    public ResponseEntity<?> update(@PathVariable(value = "dummyId") UUID dummyId, @RequestBody DummyUpdateRequestDto req) {
        DummyResponseDto dummyResponseDto = dummyService.update(dummyId, req);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 수정 성공했습니다.", dummyResponseDto));
    }
}